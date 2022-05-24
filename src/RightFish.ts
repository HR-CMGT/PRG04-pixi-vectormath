import * as PIXI from 'pixi.js'
import '@pixi/math-extras';

/**
 * Fish moves thanks to vector math
 */
export class RightFish  extends PIXI.Sprite{
    // sets the speed of the fish
    speed = 5;

    /**
     * Constructor
     * @param texture 
     * 
     * Creates sprite & sets styling
     */
    constructor(texture : PIXI.Texture){
        super(texture);

        // this.tint = 0x00FF00;
        const filter = new PIXI.filters.ColorMatrixFilter()
        this.filters = [filter]
        filter.hue(250, false) // Green/yellow
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
        // normalize vector between fish and pointer
        // sets magnitude (length) to 1
        
        // scalar multiplies normalized vector bij swimspeed
        
        
        // creates a new endpoint
        
        
        // calculates new manitude (length) of vector
        

        // calculates a value between -π and π for a correct angle
        

        // extra function to flip the sprite of the fish
        // this.flipFish(direction.x, distance);
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