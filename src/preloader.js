var Lab = {};

Lab.Preloader = function (game) {

	this.game = game;

};
var progress, bar;
Lab.Preloader.prototype = {

	preload: function () {
        console.log('Preload started.');

        var text = "Loading: 0%";
        var style = { font: "12px Arial", fill: "#ffffff", align: "center" };
        progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY, text, style);
        progress.anchor.setTo(0.5, 0.5);
        bar = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 50, '', style);
        bar.anchor.setTo(0.5, 0.5);

        this.game.stage.backgroundColor = 0x000000;

        this.game.load.audio('title', ['./bin/audio/title.mp3', './bin/audio/title.ogg']);

        this.game.load.image('logo', './bin/logo.png');
        this.game.load.image('watermark', './bin/watermark.png');
        this.game.load.bitmapFont('04b03', './bin/fonts/04b_0.png', './bin/fonts/04b.xml');
	},

	create: function () {
		console.log('Preload finished.');
		this.game.state.start('mainmenu');
	},

    loadUpdate: function () {
        progress.text = 'Loading:  ' + this.game.load.progress + '%';
        progress.updateText();
        for (var i = 0; i < this.game.load.progress / 10; i++){
            bar.text += '|';
            bar.updateText();
        }
    }

}