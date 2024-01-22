//import { Vertices } from "matter-js";
import * as PIXI from "pixi.js";
import Victor from "victor";
import Player from "./player";
import Zombie from "./zombie";
//import Matter from "matter-js";

let canvasSize = 256;
const canvas = document.getElementById("mycanvas");
const app = new PIXI.Application({
view: canvas,
width: canvasSize,
height: canvasSize,
backgroundColor: 0x5c812f,
});

let player = new Player({app});
let zombie = new Zombie({app, player});

app.ticker.add((delta) =>{

player.update();
zombie.update();

});
