Lab.Game = function (game) {

	this.game = game;

};

var FPS = 8;
var SCALE = 2;

Lab.Game.prototype = {

	create: function () {
        level = new Lab.Level(this.game).load('test2');
        player = new Lab.Player(this.game);
        player.add(100, this.game.world.height - 108);

        this.game.camera.follow(player.sprite, Phaser.Camera.FOLLOW_TOPDOWN);

        // TODO: Set watermark to always show on screen.
        var watermark = this.game.add.sprite(0, 0, 'watermark');
        watermark.x = this.game.world.width - watermark.width;
        watermark.y = this.game.world.height - watermark.height;

		this.game.input.onDown.add(this.quitToMenu, this);
	},

    update: function () {
        player.update(level);
    },

    render: function () {

    },

	quitToMenu: function () {
		this.game.state.start('mainmenu');
        player.score += 10;
	}
}
