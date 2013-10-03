Lab.Player = function (game) {
    this.game = game;
    this.health = 100;
    this.sprite = null;
}

Lab.Player.prototype = {

    add: function (x, y) {
        this.sprite = this.game.add.sprite(x, y, 'player');
    },
    
    update: function () {

        this.sprite.acceleration.y = 4000;

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || this.game.input.keyboard.isDown(Phaser.Keyboard.A)){
            this.movePlayer('LEFT');
        } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || this.game.input.keyboard.isDown(Phaser.Keyboard.D)){
            this.movePlayer('RIGHT');
        } else {
            if (this.sprite.velocity.x < 0){
                this.sprite.body.velocity.x += 50;
            } else if (this.sprite.velocity.x > 0){
                this.sprite.body.velocity.x -= 50;
            }
            this.sprite.animations.stop();
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.W) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
            this.movePlayer('UP');
        }
    },

    movePlayer: function (d) {
    this.sprite.animations.play('walk', FPS, true);
    switch(d){
        case 'LEFT':
            this.sprite.scale.setTo(-PLAYER_SCALE,PLAYER_SCALE);
            this.sprite.body.velocity.x = -250;
            break;
        case 'RIGHT':
            this.sprite.scale.setTo(PLAYER_SCALE,PLAYER_SCALE);
            this.sprite.body.velocity.x = 250;
            break;
        case 'UP':
            //TODO: Real ground check
            this.sprite.animations.stop(0);
            this.sprite.body.velocity.y = -400;
            break;
    }
}
}