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

        this.mapWidth = 3000;
        this.mapHeight = 6000;
        
    }

    create ()
    {
        // Camera stuff.. zoom and location
        this.cameras.main.setBackgroundColor('black');
        // this.cameras.main.setBounds(0,0, this.mapWidth, this.mapHeight); // check if works
        // this.cameras.main.zoom = 0.3;
        this.cameras.main.scrollX = 1500;
        this.cameras.main.scrollY = 3000;
        this.cameraControl();

        // Set camera bounds to the map size fo now
        this.cameras.main.setBounds(0, 0, this.mapWidth, this.mapHeight);


        let map = this.add.image(2000, 3000, 'map').setDisplaySize(1500, 3000);
 
    
        // Create the sidebar for the game

        let sidebar = this.add.graphics();

        sidebar.fillStyle(0xffffff, 0.9);

        sidebar.fillRect(0, 0, this.mapWidth/8, this.mapHeight);

        sidebar.setScrollFactor(0);
        sidebar.setDepth(1000);


        

        // this.add.image(512, 384, 'background').setAlpha(0.5);

        // this.add.text(512, 300, "hi baka"); 


    }

    updateSidebar() {

        }

    addStation(x, y) {
        
    }

    eventNotifier() {

    }

    eventManager() {
        
    }

    cameraControl() {
        // camera controls for moving the map.
        this.input.on('pointerdown', (pointer) => {
            this.isDragging = true;
            this.lastPointerPosition = { x: pointer.x, y: pointer.y };
        });

        this.input.on('pointermove', (pointer) => {
        if (this.isDragging) {

            // I move the camera
            this.cameras.main.scrollX -= (pointer.x - this.lastPointerPosition.x);
            this.cameras.main.scrollY -= (pointer.y - this.lastPointerPosition.y);

            // BOUNDARIES.
            this.cameras.main.scrollX = Phaser.Math.Clamp(this.cameras.main.scrollX, 0, this.mapWidth - this.cameras.main.width);
            this.cameras.main.scrollY = Phaser.Math.Clamp(this.cameras.main.scrollY, 0, this.mapHeight - this.cameras.main.height);
            
            this.lastPointerPosition = { x: pointer.x, y: pointer.y };
        }
    });

            this.input.on('pointerup', () => {
            this.isDragging = false;
        });
    }

}