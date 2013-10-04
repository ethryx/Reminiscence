var Lab = {};

Lab.Preloader = function (game) {

	this.game = game;

};
var progress, bar;
Lab.Preloader.prototype = {

	preload: function () {

        //<editor-fold desc="Main Menu Preload">
        var text = "Loading: 0%";
        var style = { font: "12px Arial", fill: "#ffffff", align: "center" };
        progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY, text, style);
        progress.anchor.setTo(0.5, 0.5);
        bar = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 50, '', style);
        bar.anchor.setTo(0.5, 0.5);
        this.game.load.image('blank', './bin/sprites/blank.png');
        this.game.load.audio('title', ['./bin/audio/title.mp3', './bin/audio/title.ogg']);
        this.game.load.image('logo', './bin/sprites/logo.png');
        this.game.load.bitmapFont('04b03', './bin/fonts/04b_0.png', './bin/fonts/04b.xml');
        //</editor-fold>

        //<editor-fold desc="Game Preload">
        this.game.load.tilemap('test2', './bin/levels/test2.png', './bin/levels/test2.json', null, Phaser.Tilemap.JSON);
        this.game.load.image('watermark', './bin/sprites/watermark.png');
        this.game.load.spritesheet('player', './bin/sprites/newplayer.png', 32, 32, 3);
        //</editor-fold>

	},

	create: function () {
        this.game.stage.backgroundColor = 0x666666;
		this.game.state.start('mainmenu');
	},

    loadUpdate: function () {
        progress.text = 'Loading:  ' + this.game.load.progress + '%';
        progress.updateText();
        bar.text = "";
        for (var i = 0; i < this.game.load.progress / 10; i++){
            bar.text += '|';
            bar.updateText();
        }
    }

}
