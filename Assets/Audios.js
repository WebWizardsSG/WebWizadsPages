let cueHitBall, ballInPocket, ballCollision, ErrorAudio, gameMusic;

function preload() {
  cueHitBall = loadSound("Assets/cueHitBall.mp3");
  ballInPocket = loadSound("Assets/ballInPocket.mp3");
  ballCollision = loadSound("Assets/ballCollision.mp3");
  ErrorAudio = loadSound("Assets/Error.mp3");
  gameMusic = loadSound("Assets/bgmusic.wav");
}
