Lab.Game = function (game) {

	this.game = game;

};

Lab.Game.prototype = {

	preload: function () {
        console.log('Game started.');
	},

	create: function () {
        var watermark = this.game.add.sprite(0, 0, 'watermark');
        watermark.x = this.game.world.width - watermark.width;
        watermark.y = this.game.world.height - watermark.height;
		this.game.input.onDown.add(this.quitToMenu, this);
	},

	quitToMenu: function () {
		console.log('Quitting.');
		this.game.state.start('mainmenu');
	}

}
