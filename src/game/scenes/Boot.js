import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {

        // this.load.image('background', 'assets/background.jpeg');
        this.load.image('loading', 'assets/loading.gif');
        // Phaser doesn't support GIFs. what a waste of time.
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
