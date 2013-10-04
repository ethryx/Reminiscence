Lab.Player = function (game) {
    this.game = game;
    this.score = 0;
    this.sprite = null;
}

jumpTimer = 0;

Lab.Player.prototype = {

    add: function (x, y) {
        this.sprite = this.game.add.sprite(x, y, 'player');
        this.sprite.body.bounce.y = 0.1;
        this.sprite.body.collideWorldBounds = true;

        this.sprite.anchor.setTo(0.5,0.5);
        this.sprite.scale.setTo(SCALE,SCALE);
        this.sprite.animations.add('walk');

        font = '32px 04b03';
        scoreText = this.game.add.bitmapText(10, 5, 'Start Game', {font: font, align: 'left'});
        scoreText.setText('$0');
        scoreText.scale.setTo(0.5,0.5);
    },
    
    update: function (l) {

        // TODO: Set Score to always show on screen.

        l.collide(this.sprite);

        scoreText.setText('$' + this.score);

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
                this.sprite.scale.setTo(-SCALE,SCALE);
                this.sprite.body.velocity.x = -250;
                break;
            case 'RIGHT':
                this.sprite.scale.setTo(SCALE,SCALE);
                this.sprite.body.velocity.x = 250;
                break;
            case 'UP':
                if (this.sprite.body.touching.down && this.game.time.now > jumpTimer){
                    this.sprite.animations.stop(0);
                    this.sprite.body.velocity.y = -550;
                    jumpTimer = this.game.time.now + 250;

                }
                break;
        }
    }
}