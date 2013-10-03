Lab.Game = function (game) {

	this.game = game;

};

var FPS = 8;
var PLAYER_SCALE = 2;

Lab.Game.prototype = {

	preload: function () {
        console.log('Game started.');
	},

	create: function () {
        player = new Lab.Player(this.game);
        player.add(100, 100);
        
        var watermark = this.game.add.sprite(0, 0, 'watermark');
        watermark.x = this.game.world.width - watermark.width;
        watermark.y = this.game.world.height - watermark.height;

        player.sprite.body.bounce.y = 0.1;
        player.sprite.body.collideWorldBounds = true;

        player.sprite.anchor.setTo(0.5,0.5);
        player.sprite.scale.setTo(PLAYER_SCALE,PLAYER_SCALE);
        player.sprite.animations.add('walk');

		this.game.input.onDown.add(this.quitToMenu, this);
	},

    update: function () {
        player.update();
    },

	quitToMenu: function () {
		console.log('Quitting.');
		this.game.state.start('mainmenu');
	}
}
