//Create Variables for references and store canvas
let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext('2d');
let ballRadius = 10;
let x = canvas.width/2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

//Create Paddle
let paddleHeight = 12;
let paddleWidth = 72;

//Specifying starting position of Paddle
let paddleX = (canvas.width-paddleWidth)/2;

//Holding Variables for left and right arrows on keyboard
let rightPressed = false;
let leftPressed = false;

//Holding Values for bricks
let brickRowCount = 4;
let brickColumnCount = 7;
let brickWidth = 72;
let brickHeight = 24;
let brickPadding = 12;
let brickOffsetTop = 32;
let brickOffsetLeft = 32;

//Creating Variable to store score
let score = 0;

//Creating arrays for the brick
let bricks = [];
for(c=0;c<brickColumnCount;c++) {
    bricks[c] = [];
    for(r=0;r<brickRowCount;r++) {
        //Setting x and y position of bricks
        bricks[c][r] = { x: 0, y:0, status: 1 };
    }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

//Anchor paddle movement by mouse
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}

function keyDownHandler(e) {
    if (e.keyCode === 39) {
        rightPressed = true;
    }
    else if (e.keycode === 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode === 39) {
        rightPressed = false;
    } 
    else if (e.keyCode === 37) {
        leftPressed = false;
    }
}

//Function to Create Ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2);//Centered at (x,y) position with radius = ballRadius starting at 0 = startAngle, ending at Math.PI*2 = endAngle (in Radians).
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();
}

//Funciton to create Paddle
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

//Create a function to draw the bricks
function drawBricks(){
    for(c=0; c < brickColumnCount; c++){
        for(r=0; r < brickRowCount; r++){
            if(bricks[c][r].status === 1){
                let brickX = (c* (brickWidth + brickPadding)) + brickOffsetLeft;
                let brickY = (r* (brickHeight+brickPadding)) + brickOffsetTop;
                bricks[c][r].x=brickX;
                bricks[c][r].y=brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = '#6600cc';
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

//Function to keep track of Score
function drawScore() {
    ctx.font = '18px Arial';
    ctx.fillStyle = 'brown';
    ctx.fillText('score: '+ score, 8, 20); //position score at 8,20 on the x,y axis of the canvas
}

//Collision Detection for brick
function collisionDetection() {
    for(c=0; c<brickColumnCount;c++) {
        for(r=0; r<brickRowCount;r++) {
            let b = bricks[c][r];
            if(b.status === 1) {
                if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if (score === brickRowCount+brickColumnCount) {
                        alert('Congratulations!! You\'ve Won!');
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function draw() {
    //Clear each instance of canvas so that a new circle can be drawn
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //Function calls
    drawScore();
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();
    //Calculation Collision detection 
    
    //left and right walls
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    //top walls
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height-ballRadius) {
        //detect paddle hits
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert('GAME OVER!!');
            document.location.reload();
        }
    }

    //bottom walls
    if(y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    //make paddle move 
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    //Making Ball Move
    x += dx; //Updates X Movement Every Frame
    y += dy; // Updates Y movement every Frame
}

//Create an infinite loop that creates the ball
//paints the ball on the canvas every 10 milliseconds.
setInterval(draw, 10) 