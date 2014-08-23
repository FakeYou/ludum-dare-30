'use strict';

var Game = {};

Game.init = function(container) {
	Game.stage = new PIXI.Stage(0xddffff);
	Game.renderer = PIXI.autoDetectRenderer(800, 800);

	Game.container = container;
	Game.container.appendChild(Game.renderer.view);

	Game.inputHandler = new Hammer.Manager(Game.renderer.view, {
		recognizers: [
			[ Hammer.Pan, {}]
		]
	});

	Game.registerInputHandlers();

	requestAnimFrame(Game.tick);
};

Game.tick = function() {
	requestAnimFrame(Game.tick);

	console.log('tick');

	Game.renderer.render(Game.stage);
};

Game.registerInputHandlers = function() {
	var path = [];

	Game.inputHandler.on('pan', function(e) {
		path.push(e.center);

		if(e.isFinal) {
			var line = new PIXI.Graphics();
			line.lineStyle(5, 0xFF0000);

			line.moveTo(path[0].x, path[1].y);

			for(var i = 1; i < path.length; i++) {
				line.lineTo(path[i].x, path[i].y);
			}

			Game.stage.addChild(line);

			path = [];
		}
	});
};

module.exports = Game;