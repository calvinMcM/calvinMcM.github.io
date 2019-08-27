

import Phaser from "phaser";

export module Site{

    export const output = (() => {
        console.log({
            Phaser,
            item: (window as any).Phaser,
        });
    })()

    export class Main extends Phaser.Game{
        constructor(){
            super({
                parent: document.getElementById("react"),
                width: window.innerWidth,
                height: window.innerHeight,
                scene: new Landing({}),
            });
        }
    }

    export class Landing extends Phaser.Scene{
        private graphics: Phaser.GameObjects.Graphics;
        public preload(){
            this.load.image("logo", "./img/favicon.png")
        }

        public create(){
            this.graphics = this.add.graphics({fillStyle: {color: 0x000000}});
            this.graphics.fillRect(0,0,window.innerWidth, window.innerHeight);
            const img = this.add.image(window.innerWidth / 2, window.innerHeight / 2, "logo");
        }
    }
}

new Site.Main();