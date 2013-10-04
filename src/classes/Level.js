Lab.Level = function (game) {
    this.game = game;
    //this.level = level;
    this.output = null;
}

Lab.Level.prototype = {

    load: function (map) {
        this.output = this.game.add.tilemap(0, 0, map);
        this.output.setCollisionRange(1, 4, true, true, true, true);
        return this.output;
    }
}