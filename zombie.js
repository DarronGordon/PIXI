
import * as PIXI from "pixi.js";
import Victor from "victor";

export default class Zombie{
    constructor({app, player})
    {
        this.app = app;
        this.player = player;

        let enemyRadius =16;
        this.speed = 1;
        
        this.zombie = new PIXI.Graphics();
        let r = this.RandomSpawnPoint();
        this.zombie.position.set(r.x,r.y);
        this.zombie.beginFill(0xFF0000, 1);
        this.zombie.drawCircle(0,0,enemyRadius);
        this.zombie.endFill();
        
        app.stage.addChild(this.zombie);



    }

    update()
    {
        let e = new Victor(this.zombie.position.x, this.zombie.position.y);
        let s = new Victor(this.player.position.x, this.player.position.y);

        if(e.distance(s) < this.player.width / 2)
        {
        let r = this.RandomSpawnPoint();
        this.zombie.position.set(r.x,r.y);
        return;
        }

        let d = s.subtract(e);
        let v = d.normalize().multiplyScalar(this.speed);
        this.zombie.position.set(this.zombie.position.x + v.x, this.zombie.position.y + v.y);
    }

    RandomSpawnPoint()
    {
        let edge = Math.floor(Math.random() * 4);
        let SpawnPoint = new Victor(0,0);
        let canvasSize = this.app.screen.width;

        switch(edge){
        case 0:
        SpawnPoint.x = canvasSize * Math.random();
        break;
        case 1:
            SpawnPoint.x = canvasSize;
            SpawnPoint.y = canvasSize * Math.random();
        break;
        case 2:
            SpawnPoint.x = canvasSize * Math.random();
            SpawnPoint.y = canvasSize;
        break;
        default:
            SpawnPoint.x =0;
            SpawnPoint.y = canvasSize * Math.random();
        break;
        }

        return SpawnPoint;
    }
}