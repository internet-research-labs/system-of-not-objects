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


export function recurLSystem(state, production, iteration) {
  if (iteration == 0) {
    return state;
  }

  let result = "";

  state.split('').forEach(ch => {
    let val = production[ch];
    result += val != undefined ? val : ch;
  });

  return recurLSystem(result, production, iteration-1);
}

function lsystem(str) {
}

function renderPattern(el) {

  console.log(el.width, el.height);


}
