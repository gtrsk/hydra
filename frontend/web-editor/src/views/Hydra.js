const html = require('choo/html')
const Component = require('choo/component')
const HydraSynth = require('hydra-synth')

module.exports = class Hydra extends Component {
  constructor (id, state, emit) {
    super(id)
    this.local = state.components[id] = {}
  }

  load (element) {
    const hydra = new HydraSynth({ detectAudio: true, canvas: element.querySelector("canvas")})
    console.log(hydra)
     osc().out()
  }

  update (center) {
    return false
  }

  createElement ({ width = window.innerWidth, height = window.innerHeight} = {}) {

    return html`<div>
        <canvas class="bg-black" style="imageRendering:pixelated; width=100%;height=100%" width="${width}" height="${height}"></canvas></div>`
  }
}