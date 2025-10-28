# Seagull
A game about creating train lines. Place stations, draw out the route, and watch your budget. Meowl.

TODO LIST:
- Set up game engine (Phaser?)
    - Install necessary packages
    - Add game map, implement features to build train routes
    - Handle user input
    - Implement adding stations
    - Add map features (map metadata, unbuildable water, boundaries, cost per tile)
    - Make everything look pretty
    - Add events when routes are built on certain tiles
    - Add budget for train building
    - Add special train routes (tunnels/bridges)
    - Some way to store routes/stations
    - Add milestone decisions (sort of random events).
    - Add (in-game) community support.
        - Current communities: 
            - Vultures - The businesses and industrial giants. Want as many trains as possible to go to industrial/commerical districts
            - Geese - Recreational travelers that demand airport and recreational locations
             - Crows - Commuters that need to go to work and home.
    - Train failure. Add a way for players to lose.
    - Election. In-game communities can vote to either approve or reject a train route.
    - **Chapters. The player needs to complete the route to win. Players will iterate on the train route to extend it a certain number of stations. There will be milestones that challenge the player. The player must keep their train within budget, convince voters to approve their budget/route, make decisions that affect lives, and ultimately keep the train running.**
- Create React/Vite webpage
- Add extra webpage stuff. Not critical - The game is the focus, and there's not really much I can do on the website except make it look nice

Reaching goals:
- Add saving/loading games
- Accessibility features (if needed, trains UI are usually accessible for a reason)
- Add a webpage for background/sources
- Implement feedback

Current Bugs:
- Opening cutscene does not work when spamming through the messages. I think I can fix this by having the handleClick interact with the displayText, but this is pretty low priority for me. Don't go clicking.
- Loading scene GIF does not work because Phaser does not support GIFs. I don't think websites in general support GIFs, actually. Need to convert to spritesheet, but low priority.


- Cutscene needs two clicks in order to end properly. FIXED.
    


## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm run dev` | Launch a development web server |
| `npm run build` | Create a production build in the `dist` folder |
| `npm run dev-nolog` | Launch a development web server without sending anonymous data (see "About log.js" below) |
| `npm run build-nolog` | Create a production build in the `dist` folder without sending anonymous data (see "About log.js" below) |
