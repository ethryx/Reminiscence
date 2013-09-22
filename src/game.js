Lab.Game = function (game) {

	this.game = game;

};

var player;
var FPS = 6;

Lab.Game.prototype = {

	preload: function () {
        console.log('Game started.');
        player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
	},

	create: function () {
        var watermark = this.game.add.sprite(0, 0, 'watermark');
        watermark.x = this.game.world.width - watermark.width;
        watermark.y = this.game.world.height - watermark.height;

        player.body.bounce.y = 0.1;
        player.body.collideWorldBounds = true;

        player.anchor.setTo(0.5,0.5);
        player.scale.setTo(3,3);
        player.animations.add('walk');

		this.game.input.onDown.add(this.quitToMenu, this);
	},

    update: function () {


        player.acceleration.y = 1000;

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            player.animations.play('walk', FPS, true);
            player.scale.setTo(-3,3);
            player.body.velocity.x = -200;
        } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            player.animations.play('walk', FPS, true);
            player.scale.setTo(3,3);
            player.body.velocity.x = 200;
        } else {
            if (player.velocity.x < 0){
                player.body.velocity.x += 20;
            } else if (player.velocity.x > 0){
                player.body.velocity.x -= 20;
            }
            player.animations.stop();
        }
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP))
        {
            if (!player.body.touching.down)
            {
                player.body.velocity.y = -200;
            }
        }
    },

	quitToMenu: function () {
		console.log('Quitting.');
		this.game.state.start('mainmenu');
	}
}
