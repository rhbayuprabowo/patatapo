var num = 0;
var direktory = ['A', 'B', 'C', 'D', 'E', 'F'];
var keyData = {};
var circles = [];
var time = 0;
var hideText = false;
loadAssest(direktory[num]);

var text = new PointText({
  content: 'Press any key, from A to Z, or spacebar to change sound',
  fillColor: 'white',
  fontFamily: 'Courier New',
  fontWeight: 'bold',
  fontSize: 14,
});

function onKeyDown(event) {
  if (keyData[event.key]) {
    spawnCircleAndPlaySound(event.key);
  } else if (event.key === 'space') {
    num++;
    if (num >= direktory.length) {
      num = 0;
    }

    loadAssest(direktory[num]);
  }

  hideText = true;
  time = 0;
  return false;
}

function onMouseDown() {
  if (view.size.width <= 480) {
    var randomKey = String.fromCharCode(getRandomArbitrary(65, 90)).toLowerCase();
    spawnCircleAndPlaySound(randomKey);
    hideText = true;
    time = 0;
    return false;
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function spawnCircleAndPlaySound(key) {
  keyData[key].sound.play();
  var maxSize = view.size;
  var newPoint = maxSize * new Point.random();
  var newPath = new Path.Circle(newPoint, 150);
  newPath.fillColor = keyData[key].color;
  circles.push(newPath);
}

function onFrame(event) {
  if (view.size.width <= 480) {
    text.fontSize = 10;
  } else {
    text.fontSize = 14;
  }

  text.position = new Point(view.size.width / 2, view.size.height / 8);
  for (var i = 0; i < circles.length; i++) {
    circles[i].scale(0.95);
    circles[i].fillColor.hue += 1;
  }

  for (var j = 0; j < circles.length; j++) {
    if (circles[j].area < 1) {
      circles[j].remove();
      circles.splice(i, 1);
    }
  }

  if (hideText) {
    text.opacity -= 0.02;
    if (text.opacity < 0) {
      text.opacity = 0;
    }
  }

  if (time <= 3) {
    time += event.delta;
  } else if (time > 3) {
    hideText = false;
    text.opacity += 0.02;
    if (text.opacity > 1) {
      text.opacity = 1;
    }
  }
}

function randomColor() {
  var r = randomNumber();
  var g = randomNumber();
  var b = randomNumber();
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function loadAssest(dir) {
  console.log('sounds/' + dir + '/bubbles.mp3');
  keyData = {
    a: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/bubbles.mp3'],
      }),
    },
    b: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/clay.mp3'],
      }),
    },
    c: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/confetti.mp3'],
      }),
    },
    d: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/corona.mp3'],
      }),
    },
    e: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/dotted-spiral.mp3'],
      }),
    },
    f: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/flash-1.mp3'],
      }),
    },
    g: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/flash-2.mp3'],
      }),
    },
    h: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/flash-3.mp3'],
      }),
    },
    i: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/glimmer.mp3'],
      }),
    },
    j: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/moon.mp3'],
      }),
    },
    k: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/pinwheel.mp3'],
      }),
    },
    l: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/piston-1.mp3'],
      }),
    },
    m: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/piston-2.mp3'],
      }),
    },
    n: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/piston-3.mp3'],
      }),
    },
    o: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/prism-1.mp3'],
      }),
    },
    p: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/prism-2.mp3'],
      }),
    },
    q: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/prism-3.mp3'],
      }),
    },
    r: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/splits.mp3'],
      }),
    },
    s: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/squiggle.mp3'],
      }),
    },
    t: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/strike.mp3'],
      }),
    },
    u: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/suspension.mp3'],
      }),
    },
    v: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/timer.mp3'],
      }),
    },
    w: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/ufo.mp3'],
      }),
    },
    x: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/veil.mp3'],
      }),
    },
    y: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/wipe.mp3'],
      }),
    },
    z: {
      color: randomColor(),
      sound: new Howl({
        src: ['sounds/' + dir + '/zig-zag.mp3'],
      }),
    },
  };
}
