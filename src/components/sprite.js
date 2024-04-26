import Component from "./component.js";

class Sprite extends Component {
  constructor(imageSrc) {
    super();
    this.image = new Image();
    this.image.src = imageSrc;
  }
}

export default Sprite;
