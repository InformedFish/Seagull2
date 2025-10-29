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

        // communities
        // Vultures are the businesses which seek to bring as much profit as possible. They want trains to ferry as many people to businesses as possible.
        // Commuters are concerned with getting to work (industrial areas) and home as soon as possible. They prioritize access to work and home, and a speedy commute.
        // Crows are the people that depend on trains to get to school, shops, and doctors. They want a large variety of stops.

        // i will add a description later lol
        this.communities = [
            {name: "Businesses", agenda: "Promoting business, growing economies", support: 30, voters: 30, relationship: "Supportive", concern: "have no concerns"},
            {name: "All-purpose riders", agenda: "Tending to our nests", support: 10, voters: 30, relationship: "Skeptical", concern: "lack access to residential areas."},
            {name: "Commuters", agenda: "To work, and to rest", support: 35, voters: 60, relationship: "Neutral", concern: "are worried about safety."}
        ];
        
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

        this.mapContainer = this.add.container(0,0);
        this.map = this.add.image(2000, 3000, 'map').setDisplaySize(1500, 3000);
        this.mapContainer.add(this.map);
 
    
        // Create the sidebar for the game

        let sidebar = this.add.graphics();

        sidebar.fillStyle(0xffffff, 0.9);

        sidebar.fillRect(0, 0, this.mapWidth/8, this.mapHeight);

        sidebar.setScrollFactor(0);
        sidebar.setDepth(1000);

        this.budgetText = this.add.text(50, 100, "Remaining Budget: $" + this.budget, {
            fontFamily: "Arial", color: "#000000", fontSize: 20
        });
        this.budgetText.setDepth(1001);
        this.budgetText.setScrollFactor(0);

        this.overallSupport = this.add.text(50, 120, "Overall Support: " + this.supporters + " out of " + this.voters, {
            fontFamily: "Arial", color: "#000000", fontSize: 20
        });
        this.overallSupport.setDepth(1001);
        this.overallSupport.setScrollFactor(0);

        for (let i = 0; i < this.communities.length; i++) {
            let currentCommunity = this.communities[i];
            let comText = this.add.text(20, 200 + (i * 70), currentCommunity.name + " are " + currentCommunity.relationship + "\nThey " + currentCommunity.concern, {
            fontFamily: "Arial", color: "#000000", fontSize: 20
        });

            comText.setDepth(1001);
            comText.setScrollFactor(0);
        };



        // Add inital station
        let firstStation = this.addStation(2300, 3200, "commerical", 1);
        firstStation.setDepth(1000);
        

        // this.add.image(512, 384, 'background').setAlpha(0.5);

        // this.add.text(512, 300, "hi baka"); 

        // demo button
        let demoText = this.add.text(2200, 3100, 'Decision!!!', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });

        demoText.setInteractive();
        // playText.on('pointerdown', ()=> {console.log("ow")});
        demoText.on('pointerdown', ()=> {this.scene.start('Cutscene');}) //I'm never able to understand arrow functions grrr
        // demoText.setScrollFactor(0);
        demoText.setDepth(1001);


    }

    updateSidebar() {
            this.budgetText.setText("Remaining Budget: $" + this.budget);
            this.overallSupport.setText("Overall Support: " + this.supporters + " out of " + this.voters);
        }

    addStation(x, y, type, cost) {
        // wont show up as red...
        let station = this.add.circle(x, y, 20, '#ff0000ff');
        this.mapContainer.add(station);
        this.stations.push(station);
        
        // Add station data
        station.setData('type', type);
        station.setData('buildCost', cost);
        
        station.setInteractive();
        
        return station;

    }

    eventNotifier(type = "popup", text, image = "dark logo") {
        // Create a pop up for the decisions/notifications
        if (type == "popup") {

        }
    }   

    eventManager() {
        // decide when an event occurs lol

        // make a butotn
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