Lab.MainMenu = function (game) {
	this.game = game;
};

Lab.MainMenu.prototype = {

    preload: function () {
        music = this.game.add.audio('title');
    },

	create: function () {
        console.log('Main Menu loaded.');
        var font = '32px 04b03';

        background = this.game.add.sprite(0,0,'logo');

        //<editor-fold desc="Start Game Button & Text">
        var playButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 75, 'blank', this.startGame, this, 0, 0, 0);
        playButton.anchor.setTo(0.5, 0.5);
        playButton.inputEnabled = true;
        playButton.events.onInputOver.add(over, this);
        playButton.events.onInputOut.add(out, this);

        var startText = this.game.add.bitmapText(1, 1, 'Start Game', {font: font, align: 'left'});
        startText.anchor.setTo(0.5,0.5);
        startText.x = playButton.x;
        startText.y = playButton.y;
        playButton.width = startText.width;
        playButton.height = startText.height;
        //</editor-fold>

        //<editor-fold desc="Options Button & Text">
        var optionsButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 150, 'blank', this.openOptions, this, 0, 0, 0);
        optionsButton.anchor.setTo(0.5, 0.5);
        optionsButton.inputEnabled = true;
        optionsButton.events.onInputOver.add(over, this);
        optionsButton.events.onInputOut.add(out, this);

        var optionsText = this.game.add.bitmapText(1, 1, 'Options', {font: font, align: 'left'});
        optionsText.anchor.setTo(0.5,0.5);
        optionsText.x = optionsButton.x;
        optionsText.y = optionsButton.y;
        optionsButton.width = optionsText.width;
        optionsButton.height = optionsText.height;
        //</editor-fold>

        //<editor-fold desc="Note Text">
        var noteText = this.game.add.bitmapText(0, 0, 'Note: This is a work in progress, and some things may not work.', {font: '16px 04b03', align: 'center'});
        noteText.x = this.game.world.centerX - noteText.width / 2;
        noteText.y = this.game.world.height - noteText.height;
        //</editor-fold>

        if (!music.isPlaying)
            music.play('',0,1,true);
    },

    update: function () {

    },

    render: function () {

    },

    startGame: function () {
        music.stop();
        this.game.state.start('game');
    },

    openOptions: function () {
        music.stop();
        this.game.state.start('options');
    }
}

function over(t){
    t.scale.setTo(1.1, 1.1);
    t._iNext.scale.setTo(1.1, 1.1);
    t.width = t._iNext.width;
    t.height = t._iNext.height;
}
function out(t){
    t.scale.setTo(1, 1);
    t._iNext.scale.setTo(1, 1);
    t.width = t._iNext.width;
    t.height = t._iNext.height;
}
