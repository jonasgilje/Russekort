let russekort,
  imgArray = [];
const imgSrcData = ["img/logo.png", "img/logo.png"];

function preload() {
  imgSrcData.forEach(src => {
    imgArray.push(loadImage(src));
  });
}

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
      pos: [100, 100],
      size: [100, 500]
    },
    text: [
      {
        text: "S A N D N E S   V I D E R E G Å E N D E   S K O L E   2 0 1 9",
        style: BOLD,
        align: CENTER,
        pos1: [600, 10],
        yMax: 45
      },
      {
        text: "JONAS EMANUEL GILJE",
        style: BOLD,
        align: RIGHT,
        pos1: [1150, 350],
        yMax: 400
      },
      {
        text:
          "Tlf: 116 111\nAdresse: github.jonasgilje.no\nMedlem av: Foreningen for stølsliv og\nfriluftsliv i indre Gjesdal\n\n\n'k Heb slaaptekort want ik slaap te kort\nEsto es una fiesta de locos\nPero yo soy el único que no estoy loco",
        align: RIGHT,
        pos1: [1150, 450],
        yMax: 630
      }
    ]
  };

  russekort = new Russekort(data);

  russekort.show();
}

function draw() {
  // put drawing code here
}
