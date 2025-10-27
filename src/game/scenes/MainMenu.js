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

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
