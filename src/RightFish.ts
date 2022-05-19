import * as PIXI from 'pixi.js'
import '@pixi/math-extras';
import { ObservablePoint } from 'pixi.js';

/**
 * Fish moves thanks to vector math
 */
export class RightFish  extends PIXI.Sprite{
    /**
     * Constructor
     * @param texture 
     * 
     * Creates sprite & sets styling
     */
    constructor(texture : PIXI.Texture){
        super(texture);

        this.tint = 0x00FF00;
        this.anchor.set(0, 0.5);
        this.x = 300;
        this.y = 100;
    }

    /**
     * Update
     * @param delta 
     * @param mouseposition 
     * 
     * Looks at difference between current position and mouse position
     * Calculates best route with vector math
     */
    update(delta: number, mouseposition : PIXI.Point){
        const direction = mouseposition.subtract(this.position).normalize();
        const progress = direction.multiplyScalar(3);
        
        this.position = this.position.add(progress) as ObservablePoint;
        
        const distance = mouseposition.subtract(this.position).magnitude();
        if(distance > 4) this.angle = (Math.atan2(direction.y, direction.x) * 180 / Math.PI) + 180;

        this.flipFish(direction.x, distance);
    }

    /**
     * Flip Fish
     * @param directionX 
     * @param distance 
     * 
     * Flips fish if needed
     */
    flipFish(directionX: number, distance: number){
        let flipFish = (directionX > 0 && distance > 4);
        if(flipFish){
            this.scale.set(1, -1);
        }else{
            this.scale.set(1, 1);
        }
    }
}