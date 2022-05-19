import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import waterImage from "./images/water.jpg"
import { RightFish } from './RightFish';
import { WrongFish } from './WrongFish';

export class Game{
    // settings
    pixiWidth = 800;
    pixiHeight = 450;

    // globals
    pixi : PIXI.Application;
    loader : PIXI.Loader;
    wrongFish : WrongFish;
    rightFish : RightFish;
    sprites : PIXI.Sprite[];

    /**
     * Constructor
     * 
     * Creates Pixi
     */
    constructor(){
        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight });
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        this.loader = new PIXI.Loader();
        this.loader.add('fishTexture', fishImage)
            .add('waterTexture', waterImage);
        this.loader.load(()=>this.loadCompleted());
    }

    /**
     * Load Completed
     * 
     * After textures are loaded
     * Create sprites
     */
    loadCompleted() {
        let water = new PIXI.Sprite(this.loader.resources["waterTexture"].texture!);
        water.height = this.pixiHeight;
        water.width = this.pixiWidth;
        this.pixi.stage.addChild(water);

        this.sprites = [];

        let wrongFish = new WrongFish(this.loader.resources["fishTexture"].texture!);
        this.pixi.stage.addChild(wrongFish);
        this.sprites.push(wrongFish);

        let rightFish = new RightFish(this.loader.resources["fishTexture"].texture!);
        this.pixi.stage.addChild(rightFish);
        this.sprites.push(rightFish);

        this.pixi.ticker.add((delta)=>this.update(delta));
    }

    /**
     * Update
     * @param delta 
     * 
     * Updates sprites
     * (Sprites need an update function)
     */
    update(delta: number){
        for(let sprite of this.sprites){
            const mouseposition : PIXI.Point = this.pixi.renderer.plugins.interaction.mouse.global;

            sprite.update(delta, mouseposition);
        }
    }
}