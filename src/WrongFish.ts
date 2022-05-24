import * as PIXI from 'pixi.js'

/**
 * Fish moves NOT using vector math
 */
export class WrongFish extends PIXI.Sprite{
    /**
     * Constructor
     * @param texture 
     * 
     * Creates sprite & sets styling
     */
    constructor(texture : PIXI.Texture){
        super(texture);

        const filter = new PIXI.filters.ColorMatrixFilter()
        this.filters = [filter]
        filter.hue(100, false) // Pink/purple
        this.anchor.set(0, 0.5);
        this.x = 100;
        this.y = 100;
    }

    /**
     * Update
     * @param delta 
     * @param mouseposition 
     * 
     * Sets sprite position to current mouseposition
     */
    update(delta: number, mouseposition : PIXI.Point){
        this.x = mouseposition.x;
        this.y = mouseposition.y;
    }
}