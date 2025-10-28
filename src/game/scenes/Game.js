import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');

        // player data
        this.budget = 10; // 10 dollars
        this.supporters = 75;
        this.voters = 100;
        
        // map data?
        this.stations = []; // will be a list of tile coords
        this.tracks = []; // also a list of tile coords
        
    }

    create ()
    {
        this.cameras.main.setBackgroundColor('black');

        this.createMap();
        this.add.image('map');

        // this.add.image(512, 384, 'background').setAlpha(0.5);

        // this.add.text(512, 300, "hi baka"); 
    }
}
