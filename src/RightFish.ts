import * as PIXI from 'pixi.js'
import '@pixi/math-extras';
import { ObservablePoint } from 'pixi.js';

/**
 * Fish moves thanks to vector math
 */
export class RightFish  extends PIXI.Sprite{
    constructor(texture : PIXI.Texture){
        super(texture);

        this.tint = 0x00FF00;
        this.anchor.set(0, 0.5);
        this.x = 300;
        this.y = 100;
    }

    update(delta: number, mouseposition : PIXI.Point){
        const direction = mouseposition.subtract(this.position).normalize();
        const progress = direction.multiplyScalar(3);
        
        this.position = this.position.add(progress) as ObservablePoint;
        
        const distance = mouseposition.subtract(this.position).magnitude();
        if(distance > 4) this.angle = (Math.atan2(direction.y, direction.x) * 180 / Math.PI) + 180;

        this.flipFish(direction.x, distance);
    }

    flipFish(directionX: number, distance: number){
        let flipFish = (directionX > 0 && distance > 4);
        if(flipFish){
            this.scale.set(1, -1);
        }else{
            this.scale.set(1, 1);
        }
    }
}