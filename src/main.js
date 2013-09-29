require(["../lib/phaser"], function(util) {
    require(["./preloader"], function(util) {
        require(["./mainmenu"], function(util) {
            require(["./options"], function(util) {
            require(["./game"], function(util) {
                require(["./classes/Player"], function(util){});
                var game = new Phaser.Game(800, 600, Phaser.AUTO);
                game.state.add('preloader', Lab.Preloader, true);
                game.state.add('mainmenu', Lab.MainMenu);
                game.state.add('options', Lab.Options);
                game.state.add('game', Lab.Game);
            });
            });
        });
    });
});