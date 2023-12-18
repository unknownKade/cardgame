let xPosition = 1;
const beet = addCard('beet');
const potato = addCard('potato');
const tomato = addCard('tomato');
const carrot = addCard('carrot');

function addCard(crop) {
    let cardSheetPath = './' + crop + 'sheet.json';
    PIXI.Assets.load(cardSheetPath).then(() => {
        const animation = PIXI.Assets.cache.get(cardSheetPath).data.animations;
        // create an animated sprite
        const character = PIXI.AnimatedSprite.fromFrames(animation['animation']);
        // configure + start animation:
        character.animationSpeed = 0.1;// 6 fps
        character.position.set(xPosition * 50, 90); // almost bottom-left corner of the canvas
        character.play();

        //change animation speed
        let speedInput = document.getElementById(crop + '-speed');
        speedInput.addEventListener('input', () => {
            character.animationSpeed = speedInput.value / 100;
            document.getElementById(crop + '-speed-value').innerText = speedInput.value / 100;
        });

        //change interval time
        let intervalInput = document.getElementById(crop + '-interval');
        intervalInput.addEventListener('input', () => {
            character.onLoop = () => {
                character.stop();
                let elapsed = 0.0;
                app.ticker.speed = 1;
                app.ticker.add((delta) => {
                    elapsed += delta;
                    if (elapsed > intervalInput.value) {
                        elapsed = 0.0;
                        character.play();
                    }
                })
            }
            document.getElementById(crop + '-interval-value').innerText = intervalInput.value;
        });



        // add to the stage and render
        app.stage.addChild(character);
        xPosition++;
    })
}