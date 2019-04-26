function Russekort(data) {
  this.show = () => {
    createCanvas(data.size.x, data.size.y);
    background(...data.color);
    // middle
    push();
    strokeWeight(data.size.s);
    for (i = data.size.h; i > 0; i--) {
      stroke(...this.colorFunction(i, data.size.h, data.size.p, ...data.color));
      ellipse(data.size.x / 2, data.size.y / 2, i);
    }

    pop();
    // image
    push();
    fill(0);
    translate(...data.image.pos);
    rotate((-data.image.angle / 180.0) * PI);
    strokeWeight(data.image.s);
    rect(0, 0, ...data.image.size);
    translate(...data.image.translate.map(x => -x));
    fill(...data.image.maskColor);
    rect(0, 0, ...data.image.size);
    pop();
    this.populateImage(data.image);
    // text
    data.text.forEach(element => {
      this.renderText(element);
    });
  };

  this.populateImage = image => {
    for (let i = image.xRange[0]; i < image.xRange[1]; i++) {
      for (let j = image.yRange[0]; j < image.yRange[1]; j++) {
        set();
      }
    }
  };

  this.colorFunction = (...args) => {
    const factor = Math.pow(args[0] / args[1], args[2]);
    return [
      255 + (args[3] - 255) * factor,
      255 + (args[4] - 255) * factor,
      255 + (args[5] - 255) * factor
    ];
  };

  this.renderText = () => {};
}
