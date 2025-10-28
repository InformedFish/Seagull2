import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(640, 320, 'background');

        let logo = this.add.image(1100, 100, 'logo');
        logo.setScale(0.75);

        let playText = this.add.text(1030, 300, 'Play!!!', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });

        playText.setInteractive();
        // playText.on('pointerdown', ()=> {console.log("ow")});
        playText.on('pointerdown', ()=> {this.scene.start('Cutscene');}) //I'm never able to understand arrow functions grrr

        // i will not be implementing cool button stuff
    }
}
