PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.NEAREST;

let vw = 256;
let vh = 144;

const app = new PIXI.Application({
    background: '#012312',
    width: vw,
    height: vh,
    resolution: 4,
});

document.body.appendChild(app.view);

let background = PIXI.Sprite.from('images/background.png');
background.width = app.screen.width;
background.height = app.screen.height;
app.stage.addChild(background);


let home = PIXI.Sprite.from('images/button/home.png');
let hamburger = PIXI.Sprite.from('images/button/hamburger.png');
let diamond = PIXI.Sprite.from('images/button/diamond.png');

btnList = [home, hamburger, diamond];
let scew = 0;

btnList.forEach(btn => {
    btn.anchor.set(0.5);
    btn.height = 8;
    btn.width = 7;
    btn.x = btn.width / 2 + btn.width * scew + 2 + scew;
    btn.y = vh - btn.height / 2 - 2;
    app.stage.addChild(btn);
    scew++;


    btn.interactive = true;
    btn.buttonMode = true;

    btn.onmouseover = (event) => {
        btn.height = 9;
        btn.width = 8;
    }

    btn.onmouseout = (event) => {
        btn.height = 8;
        btn.width = 7;
    }
});

/*
Setting interactive is deprecated,
 use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead.
Deprecated since v7.2.0
*/
