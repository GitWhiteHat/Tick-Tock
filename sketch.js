var startLoco, endLoco
var r = 170;
var lineLoco = 80;
var textLoco = -60;
function setup() {
  createCanvas(400,400);
}

function draw() {
    background(244, 162, 97);
    translate(200, 200);
    strokeWeight(5);
    hr = hour();
    min = minute();
    sec = second();
    mil = millis();
    hrAngle = map(hr, 0 , 24 , 0 , 360);
    minAngle = map(min, 0, 60, 0, 360);
    secAngle = map(sec, 0, 60, 0, 360);
    milAngle = map(mil, 0, 1000, 0, 360);
    noStroke();
    fill(0);
    circle(0, 0, r + 10);
    fill(38, 70, 83);
    circle(0, 0, r + 7);
    fill(42, 157, 143);
    circle(0, 0, r);

    //seconds
    push();
    rotate(secAngle);
    angleMode(DEGREES);
    stroke(255);
    line(0, 0, lineLoco - 10, 0);
    pop();

    //minutes
    push();
    rotate(minAngle);
    angleMode(DEGREES);
    stroke(233, 196, 106);
    line(0, 0, lineLoco - 20, 0);
    pop();

    //hours
    push();
    rotate(hrAngle);
    angleMode(DEGREES);
    stroke(231, 111, 81);
    line(0, 0, lineLoco - 40, 0);
    pop();

    //milliseconds
    push();
    rotate(milAngle);
    angleMode(DEGREES);
    stroke(230, 57, 70);
    line(0, 0, lineLoco, 0);
    pop()


    fill(0);
    circle(0, 0, 20, 20);
    push();
    text("Day is: \n" + day(), -150, textLoco +20);
    text("Year is: \n" + year(), -150, textLoco + 100);

    if (month() === 1) {
        text("Year is: \n January", -150, textLoco + 60);
    }
    else if (month() === 2) {
        text("Year is: \n February", -150, textLoco + 60);
    }
    else if (month() === 3) {
        text("Year is: \n March", -150, textLoco + 60);
    }
    else if (month() === 4) {
        text("Year is: \n April", -150, textLoco + 60);
    }
    else if (month() === 5) {
        text("Year is: \n May", -150, textLoco + 60);
    }
    else if (month() === 6) {
        text("Year is: \n June", -150, textLoco + 60);
    }
    else if (month() === 7) {
        text("Year is: \n July", -150, textLoco + 60);
    }
    else if (month() === 8) {
        text("Year is: \n August", -150, textLoco + 60);
    }
    else if (month() === 9) {
        text("Year is: \n September", -150, textLoco + 60);
    }
    else if (month() === 10) {
        text("Year is: \n October", -150, textLoco + 60);
    }
    else if (month() === 11) {
        text("Year is: \n November", -150, textLoco + 60);
    }
    else if (month() === 12) {
        text("Year is: \n December", -150, textLoco + 60);
    }

    pop();
    drawSprites();
}