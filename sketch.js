let russekort,
  imgArray = [];
const imgSrcData = ["img/jonas.png", "img/logo.png"];

function preload() {}

function setup() {
  // put preload code here
  frameRate(1);
  const data = {
    name: "Jonas' russekort",
    size: { x: 1200, y: 700, h: 550, s: 2, p: 0.8 },
    color: [236, 27, 46],
    font: "Arial",
    image: {
      srcIndex: 0,
      pos: [80, 180],
      size: [390, 510],
      translate: [45, 45],
      angle: 10.0,
      maskColor: [0, 255, 0],
      s: 15,
      xRange: [100, 500],
      yRange: [150, 300]
    },
    logo: {
      srcIndex: 1,
      pos: [100, 600],
      size: [100, 500]
    },
    text: [
      {
        text: "SANDNES VIDEREGÅENDE SKOLE 2019",
        align: "CENTER",
        pos1: [0, 0],
        pos2: [1200, 100]
      },
      {
        text: "Jonas Emanuel Gilje",
        align: "RIGHT",
        pos1: [0, 0],
        pos2: [1200, 100]
      },
      {
        text:
          "Tlf: 116 111\nAdresse: jonas@jonasgilje.no\nMedlem av: Foreningen for stølsliv og friluftsliv i indre Gjesdal\n\n'k Heb slaaptekort want ik slaap te kort\nEsto es una fiesta de locos, pero yo soy el único que no estoy loco",
        align: "CENTER",
        pos1: [0, 0],
        pos2: [1200, 100]
      }
    ]
  };

  russekort = new Russekort(data);

  russekort.show();
}

function draw() {
  // put drawing code here
}
