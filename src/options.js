Lab.Options = function (game) {

    this.game = game;

};

Lab.Options.prototype = {

    preload: function () {
        console.log('Options loaded.')
    },

    create: function () {
        this.game.input.onDown.add(this.backToMenu, this);
    },

    update: function () {

    },

    backToMenu: function () {
        console.log('Returning to Main Menu.');
        this.game.state.start('mainmenu');
    }

}