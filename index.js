'use strict';

var Game = require('./game/game');

window.onload = function() {
	var container = document.getElementById('test');

	Game.init(container);
};

// var _ = require('underscore');

// window.onload = function() {
// 	var element = document.getElementById('test');
// 	var canvas = document.createElement('canvas');
// 	var context = canvas.getContext('2d');

// 	element.appendChild(canvas);
// 	canvas.width = 800;
// 	canvas.height = 800;

// 	var touchHandler = new Hammer.Manager(element, {
// 		recognizers: [
// 			[ Hammer.Pan, {
// 			}]
// 		]
// 	});

// 	var path = [];
// 	var angles = [];

// 	touchHandler.on('tap pan', function(e) {
// 		path.push(e.center);
// 		angles.push(e.angle);

// 		if(e.isFinal) {
// 			context.clearRect(0, 0, 800, 800);
// 			context.beginPath();
// 			context.moveTo(path[0].x, path[1].y);

// 			for(var i = 1; i < path.length; i++) {
// 				context.lineTo(path[i].x, path[i].y);
// 			}

// 			var angle = _.reduce(angles, function(memo, angle) { return memo += angle; }, 0) / angles.length;

// 			context.stroke();
// 			path = [];
// 			angles = [];
// 		}
// 	});
// };