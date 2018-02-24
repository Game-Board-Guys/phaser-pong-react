import bootState from './States/boot';
import loadState from './States/load';
import menuState from './States/menu';
import playState from './States/play';
import endState from './States/end';

window.PIXI = require('phaser-ce/build/custom/pixi');
window.p2 = require('phaser-ce/build/custom/p2');
window.Phaser = require('phaser-ce/build/custom/phaser-split');

export default function Pong() {
    var game = new window.Phaser.Game(600, 400, window.Phaser.AUTO, 'myCanvas')

    game.state.add('boot', bootState);
    game.state.add('load', loadState);
    game.state.add('menu', menuState);
    game.state.add('play', playState);
    game.state.add('end', endState);

    game.state.start('boot');

}