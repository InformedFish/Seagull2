import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x00ff00);

        // this.add.image(512, 384, 'background').setAlpha(0.5);

        this.add.text(512, 300, "hi baka")
    }
}
