Lab.Game = function (game) {

	this.game = game;

};

var player;
var FPS = 8;

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

        player.acceleration.y = 4000;

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || this.game.input.keyboard.isDown(Phaser.Keyboard.A)){
            this.movePlayer('LEFT');
        } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || this.game.input.keyboard.isDown(Phaser.Keyboard.D)){
            this.movePlayer('RIGHT');
        } else {
            if (player.velocity.x < 0){
                player.body.velocity.x += 50;
            } else if (player.velocity.x > 0){
                player.body.velocity.x -= 50;
            }
            player.animations.stop();
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.W) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
            this.movePlayer('UP');
        }
    },

	quitToMenu: function () {
		console.log('Quitting.');
		this.game.state.start('mainmenu');
	},

    movePlayer: function (d) {
        player.animations.play('walk', FPS, true);
        switch(d){
            case 'LEFT':
                player.scale.setTo(-3,3);
                player.body.velocity.x = -250;
                break;
            case 'RIGHT':
                player.scale.setTo(3,3);
                player.body.velocity.x = 250;
                break;
            case 'UP':
                player.body.velocity.y = -400;
                break;
        }
    }
}
