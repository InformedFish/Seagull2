import { Scene } from 'phaser';

export class Cutscene extends Scene
{
    constructor () {
        super('Cutscene');
    }

    init() {
        // Initialize variables for the cutscene
        this.currentSlide = 0;
        this.textTimer = null;
        this.slides = [
            {
                image: 'background',
                text: 'The city of Seagull has been built on car infrastructure. There is no practical way of getting around without a car.'
            },
            {
                image: 'slide2',
                text: 'Unprecedent population growth has led to highways being clogged for hours. Every day life is consumed by traffic.'
            },
            {
                image: 'dark logo',
                text: 'The city council joins forces with three regional transit agencies to form Seagull Metro.'
            },
            {
                image: 'slide4',
                text: 'The transit agencies, having only worked on buses, are now tasked with a mass transit solution for the city.'
            },
            {
                image: 'slide5',
                text: 'Advocates for a light rail network are successful in convincing the voters that trains are the future of metro.'
            },
            {
                image: 'slide5',
                text: 'You are tasked with designing the train routes which Seagullites will use to get around.'
            },
            {
                image: 'slide5',
                text: 'Thousands depend on your train to get around. '
            }
        ];
        this.textDisplayed = false;
    }

    create() {
        // Create background for the current slide
        let background = this.slideImage = this.add.image(640, 320, this.slides[0].image);
        
        this.cameras.main.setBackgroundColor('black');
        // background.

        // Generic text box lol
        const textBox = this.add.rectangle(640, 500, 700, 100, 0x000000, 0.7);
        textBox.setOrigin(0.5);

        // Create text
        this.slideText = this.add.text(640, 500, '', {
            font: '24px Arial',
            fill: '#ffffff',
            align: 'center',
            wordWrap: { width: 680 }
        });
        this.slideText.setOrigin(0.5);

        this.input.on('pointerdown', () => this.handleClick());

        // Display first slide's text
        this.displayText();

    }

    displayText() {
        if (this.currentSlide >= this.slides.length) return;
        
        const currentText = this.slides[this.currentSlide].text;
        let currentChar = 0;

        // Clear any existing text
        this.slideText.setText('');
        
        // Type out the text 
        const timer = this.time.addEvent({
            delay: 10, // hi i control the speed
            callback: () => {
                this.slideText.text += currentText[currentChar];
                currentChar++;
                
                if (currentChar === currentText.length) {
                    this.textDisplayed = true;
                    timer.destroy();
                }
            },
            repeat: currentText.length - 1
        });
    }

    handleClick() {
        // This case is for when the  text isn't fully rendered
        // BUGGY... DOES NOT CLEAR PREVIOUS TEXT THINGY
        if (!this.textDisplayed) {
            this.slideText.setText(this.slides[this.currentSlide].text);
            this.textDisplayed = true;
        }
        // When end of cutscene
        else if (this.currentSlide >= this.slides.length) {
            this.scene.start('Game'); 
            return;
        }
        else {
            // Move to next slide
            this.currentSlide++;
            this.slideImage.setTexture(this.slides[this.currentSlide].image);
            this.textDisplayed = false;
            this.displayText();
        }


        
    }
}
