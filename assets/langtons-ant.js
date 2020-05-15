var util = util || {}

util.fps = {
	frametimes: [],
	add: function(){
		if (this.frametimes.length > 30) this.frametimes.splice(0, 1);
		var currTime = new Date().getTime();
		this.frametimes.push(currTime);
		return Math.round(1000 / ((currTime - this.frametimes[0]) / (this.frametimes.length - 1)));
	}
}

// return a random number in the range x, y with decimat points to floatVal
util.random = function(minVal,maxVal,floatVal){
	var randVal = minVal+(Math.random()*(maxVal-minVal));
	return typeof floatVal=='undefined' ? Math.round(randVal) : randVal.toFixed(floatVal);
}

var ant = function(x, y, r, t){
	return { currX: x, currY: y, currR: r, type: t }
}

function updateAnimFPS(fps, milliseconds){
	setTimeout(function() {
		if (startingAnimationFPSRunning)
			anim.fps = fps;
		if (anim.running)
			anim.start();
	}, milliseconds);
}

function startAnts(){
	//startingAnts = true;
	anim.fps = 1;

	setTimeout(function() {
		anim.start();
	}, 1500); // if changed, pause button timeout must be updated in main.js as well

	updateAnimFPS(10, 5000);
	updateAnimFPS(15, 7000);
	updateAnimFPS(20, 12000);
	updateAnimFPS(30, 15000);

	setTimeout(function() {
		startingAnimationFPSRunning = false;
	}, 15000); // if changed, pause button timeout must be updated in main.js as well

}

function makeNewAnim() {
	var anim = {

		interval: false,

		tick: function(){
			// save the current board so all ants act on same basis
			var board = this.board.slice();
			for (var i in this.ants){
				this.update(board, this.ants[i]);
			}

			this.draw();

			this.counter++;
		},

		draw: function() {
			for (var i in this.todraw){
				var color = false;
				var radioBox = document.querySelector('input[name="anim-pixel-color"]:checked');

				if (this.todraw[i][2] == 0){// empty
					color = "black";
				} else 	if (this.todraw[i][2] == 1){	// block
					// parse through radio input, obtain first, second values
					color = ((radioBox) ? radioBox.value.split(',')[0] : 'blue');
				} else if (this.todraw[i][2] == 2){		// red
					color = ((radioBox) ? radioBox.value.split(',')[1] : 'red');
				}

				this.canvas.fillStyle = color;
	      this.canvas.fillRect((this.todraw[i][0]*this.cellsize), (this.todraw[i][1]*this.cellsize), this.cellsize, this.cellsize);
			}

			this.todraw = [];
		},

		putBlock: function(x,y,c){
			this.board[y][x] = c;
			this.todraw.push([x, y, c]);
		},

		putNewAnt: function(x,y,d){
			this.ants.push(ant(x, y, d));
			this.todraw.push([x, y, 2]);
		},


		update: function(board, ant){
			if (!this.running) return;

			/*
			At a black square, turn 90Â° right, flip the color of the square, move forward one unit
			At a green square, turn 90Â° left, flip the color of the square, move forward one unit
			*/

			// what color cell am i on?
			if (board[ant.currY][ant.currX] == 0){
				// new square is off, turn 90 right
				ant.currR = (ant.currR == 3) ? 0 : (ant.currR+1);
				// flip cell color
				this.putBlock(ant.currX, ant.currY, 1);
			} else {
				// new square is off, turn 90 right
				ant.currR = (ant.currR == 0) ? 3 : (ant.currR-1);
				// flip cell color
				this.putBlock(ant.currX, ant.currY, 0);
			}

			// 2 advance in the direction I should move
			if (ant.currR == 0){
				ant.currY--;
			}
			if (ant.currR == 1){
				ant.currX++;
			}
			if (ant.currR == 2){
				ant.currY++;
			}
			if (ant.currR == 3){
				ant.currX--;
			}

			// constrian to the board by wrapping around
			if (ant.currX >= this.cols){
				ant.currX = 0;
			}
			if (ant.currX < 0){
				ant.currX = (this.cols-1);
			}
			if (ant.currY >= this.rows){
				ant.currY = 0;
			}
			if (ant.currY < 0){
				ant.currY = (this.rows-1);
			}


			// draw ant
			this.todraw.push([ant.currX, ant.currY, 2]);
		},



		reset: function(){
			this.fps = 10;
			this.cellsize = 10;

			this.counter = 0;

			// hold to-draw items in buffer
			this.todraw = [];

			// ants
			this.ants = [];

			// work out canvas size
			this.canvas_width = parseInt(window.innerWidth/this.cellsize)*this.cellsize;
			this.canvas_height = parseInt(window.innerHeight/this.cellsize)*this.cellsize;

			// set canvas properties
			var canvasElement = $("#langtons-ant");
			canvasElement.attr('width', this.canvas_width);
			canvasElement.attr('height', this.canvas_height);
			this.canvas = document.getElementById('langtons-ant').getContext("2d");

			// create cell matrix
			this.board = [];
			this.cols = Math.floor(this.canvas_width / this.cellsize);
			this.rows = Math.floor(this.canvas_height / this.cellsize);

			for (var i=0; i<this.rows; i++){
				this.board[i] = [];
				for (var j=0; j<this.cols; j++){
					this.board[i][j] = 0;
				}
			}


		},

		start: function(){
			this.running = true;

			this.stop();
			this.interval = setInterval(function(){
				anim.tick();
			}, 1000/this.fps);
		},

		stop: function(){
			clearInterval(this.interval);
		},


		stopRunning: function(){
			this.running = false;
			console.log("killing it")

		},

		myNamePattern: function(){
			// create D
			var xposition = Math.floor(this.canvas_width / this.cellsize / 5);

			var x=xposition+21;
			var y=Math.floor(this.canvas_height / this.cellsize / 3);
			var offset = 0;

			var spellingAnts = [];

			// Welcome
			// W
			// offset starts at 0
			Wcoordinates(spellingAnts, x, y, offset);
			// e
			offset = offset + 8;
			ecoordinates(spellingAnts, x, y, offset);
			// l
			offset = offset + 5
			lcoordinates(spellingAnts, x, y, offset);
			// c
			offset = offset + 2
			ccoordinates(spellingAnts, x, y, offset);
			// o
			offset = offset + 5
			ocoordinates(spellingAnts, x, y, offset);
			// m
			offset = offset + 5
			mcoordinates(spellingAnts, x, y, offset);
			// second e
			offset = offset + 6;
			ecoordinates(spellingAnts, x, y, offset);

			// to
			// t
			offset = offset + 10
			tcoordinates(spellingAnts, x, y, offset);
			// o
			offset = offset + 4
			ocoordinates(spellingAnts, x, y, offset);

			// reset coordinates for next line
			x=xposition;
			y=y+15;
			offset = 0
			// D
			Dcoordinates(spellingAnts, x, y, offset);
			// a
			offset = offset + 5
			acoordinates(spellingAnts, x, y, offset);
			// n
			offset = offset + 6
			ncoordinates(spellingAnts, x, y, offset);
			// i
			offset = offset + 4
			icoordinates(spellingAnts, x, y, offset);
			// e
			offset = offset + 3
			ecoordinates(spellingAnts, x, y, offset);
			// l
			offset = offset + 5
			lcoordinates(spellingAnts, x, y, offset);

			// P
			offset = offset + 5
			Pcoordinates(spellingAnts, x, y, offset);
			// e
			offset = offset + 4
			ecoordinates(spellingAnts, x, y, offset);
			// t
			offset = offset + 5
			tcoordinates(spellingAnts, x, y, offset);
			// second e
			offset = offset + 4
			ecoordinates(spellingAnts, x, y, offset);
			// r
			offset = offset + 5
			rcoordinates(spellingAnts, x, y, offset);
			// '
			offset = offset + 3
			apostrophecoordinates(spellingAnts, x, y, offset);
			// s
			offset = offset + 4
			scoordinates(spellingAnts, x, y, offset);

			// Website
			// W
			offset = offset + 7
			Wcoordinates(spellingAnts, x, y, offset);
			// e
			offset = offset + 8
			ecoordinates(spellingAnts, x, y, offset);
			// b
			offset = offset + 5
			bcoordinates(spellingAnts, x, y, offset);
			// s
			offset = offset + 4
			scoordinates(spellingAnts, x, y, offset);
			// i
			offset = offset + 4
			icoordinates(spellingAnts, x, y, offset);
			// t
			offset = offset + 3
			tcoordinates(spellingAnts, x, y, offset);
			// e
			offset = offset + 4
			ecoordinates(spellingAnts, x, y, offset);
			// !
			offset = offset + 5
			exclamationcoordinates(spellingAnts, x, y, offset);

			//spellingAnts.forEach(ant => this.putBlock(ant[0], ant[1], ant[2]));
			spellingAnts.forEach(ant => this.putNewAnt(ant[0], ant[1], util.random(0,3)));
		},
	}


	return anim;
}

var anim = null;
var startingAnimationFPSRunning = true;

// jquery
$(document).ready(function(){
	anim = makeNewAnim();

	disablePause();

  var ctx = document.getElementById('langtons-ant').getContext("2d");
  ctx.canvas.width = window.innerWidth - 5;
  ctx.canvas.height = window.innerHeight- 5;

	anim.reset();
	// starter ants
	anim.myNamePattern();
	anim.tick();

	startAnts();

	var pausedAnimation = false;

	$("#controls").click(function(e){
		$("#controls").toggleClass('active');
	});
  $('#pause-animation-button').click(function(e){
		anim.stop();
  	anim.stopRunning();
		$('#pause-animation-button').css('background', 'red');
		$('#unpause-animation-button').css('background', 'green');
  });
  $('#unpause-animation-button').click(function(e){
		anim.start();
  });
  $('#c_restart').click(function(e){
		anim.reset();

		// reset anim object to restart ants
		anim = null;
		anim = makeNewAnim();
		disablePause();

		// restart starter animation
		anim.reset();
		anim.myNamePattern();
		anim.tick();
		startAnts();
  });
});

function disablePause() {
	// pause button doesn't work in the first 1.5 seconds, because the animation has not been started yet. wait on it.
	$('#pause-animation-button').attr('disabled', 'disabled');
	setTimeout(function() {
		$('#pause-animation-button').removeAttr('disabled');
	}, 1500);
}
