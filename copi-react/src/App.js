import React, { Component } from 'react';
import './App.css';
import { SwatchesPicker, SketchPicker, HuePicker, MaterialPicker } from 'react-color';
import MyPointer from './MyPointer'

class App extends Component{
  state = {
    hex: '#000000',
    rgb: {
      r: 0,
      g: 0,
      b: 0,
      a: 1,
    },
    hsl: {
      h: 359,
      s: 0,
      l: 0,
      a: 1,
    }
  };

  handleChangeComplete = (color) => {
    this.setState({
      hex: color.hex,
      rgb: color.rgb,
      hsl: color.hsl
    });
  };

  render(){
    return (
      <div className="App">
        <div id="Left">
          <SketchPicker
            disableAlpha= { true }
            width="calc(100% - 20px)"
            color={ this.state.hsl }
            onChangeComplete={ this.handleChangeComplete }
            />
        </div>
        <div id="Right">
          <div className="RightItems">
            <MaterialPicker
              width="calc(100% - 20px)"
              color={ this.state.hsl }
              onChangeComplete={ this.handleChangeComplete }
            />
          </div>
          <div className="RightItems">
            Hue
            <HuePicker
              height = "20px"
              width="calc(100% - 20px)"
              pointer={ MyPointer }
              color={ this.state.hsl }
              onChangeComplete={ this.handleChangeComplete }
            />
          </div>
          <div className="RightItems">
            Swatches
            <SwatchesPicker
              height="150px"
              width="calc(100% - 20px)"
              onChangeComplete={ this.handleChangeComplete }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
