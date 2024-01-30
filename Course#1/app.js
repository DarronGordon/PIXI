
const Application = PIXI.Application;

const app = new Application({     
width: 500,
height:500,
transparent:false,
antialias:true
});

app.renderer.background.color = '#AB1EAE'

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = "absolute";


document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
rectangle.beginFill(0x22AACC)
.lineStyle(2,"#0000",1);
rectangle.drawRect(200,200,100,220);
rectangle.endFill();
app.stage.addChild(rectangle);

const polygon = new Graphics();
polygon.beginFill("#5882b0")
.lineStyle(2,"#0000",1);
polygon.drawPolygon
(
    300,80,
    20,20,
    900,30,
    400,450
    );
polygon.endFill();


const circle = new Graphics();
circle.beginFill(0x22AACC)
.drawCircle(440,500,80)
.lineStyle(3,"#8a080d",1)
.endFill();

app.stage.addChild(circle);
app.stage.addChild(polygon);

const line = new Graphics();
line.lineStyle(5,0xFFA00,1)
.moveTo(1500,100)
.lineTo(1500, 800)
.endFill();
app.stage.addChild(line);


const torus = new Graphics();
torus.beginFill(0xFFFDDD)
.drawTorus(800,300,80,100,4 , Math.PI / 2)
.endFill();

app.stage.addChild(torus);

const star = new Graphics();
star.beginFill(0xADADAD)
.drawStar(900,700, 5, 80)
.endFill();

app.stage.addChild(star);

const style = new PIXI.TextStyle({
    fontFamily: 'Montserrat',
    fonstSize: 48,
    fill:'deepskyblue',
    stroke: '#ffffff',
    strokeThinckness:4,
    dropShadow: true,
    dropShadowDistance:10,
    dropShadowAngle: Math.PI /2,
    dropShadowBlur: 4,
    dropShadowColor: '#000000'

});

const myText = new PIXI.Text('Hello World', style);

app.stage.addChild(myText);

myText.text = 'Text Changed!';

myText.style.wordWrap = true;
myText.style.wordWrapWidth = 100;
myText.style.align = 'center';

app.ticker.add(delta => loop(delta));

function loop(delta)
{
    const rect = new Graphics();
rect.beginFill(0xFFFFFF)
.drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10,10)
.endFill();
app.stage.addChild(rect);
}

const char1Sprite = PIXI.Sprite.from("char1.PNG");

app.stage.addChild(char1Sprite);

char1Sprite.width = 200;
char1Sprite.height = 200;
char1Sprite.postion.set(800, 400);

// app.ticker.add(delta => loop(delta));
// function loop(delta)
// {
//     char1Sprite.rotation += 0.01;
// }
