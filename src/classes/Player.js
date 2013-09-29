var Player = function(game, x, y, sprite, health){
    this.game = game;
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.health = health || 3;

    return this;
};

Player.prototype.create = function(x, y, s){
    this.x = x || 100;
    this.y = y || 100;
    this.sprite = s || 'player';
    return this.game.add.sprite(this.x, this.y, this.sprite);
}
