song = "";
music = "";

function preload()
{
    song = loadSound("Eminem - Venom.mp3");
    music = loadSound("DVRST - Close Eyes.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

