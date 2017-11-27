import {lsystem} from './l-system.js';

export class Whatever {

  /**
   *
   */
  constructor({el}) {
    console.log(el);
    this.el = el;
    this.context = canvas.getContext('2d');
    this.height = el.height;
    this.width = el.width;
  }

  /**
   * Setup D:
   */
  setup() {
  }

  /**
   * Draw :D
   */
  draw()  {
  }
}

export lsystem;
