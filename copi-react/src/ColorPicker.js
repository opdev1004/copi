import React, { Component } from 'react';
import { CustomPicker, HuePicker, AlphaPicker } from 'react-color';
var { Alpha, EditableInput, Hue, Saturation, Checkboard } = require('react-color/lib/components/common');

class ColorPicker extends Component{
  constructor(props) {
    super(props);
    this.state = {value :'#ffffff'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  }

  render(){
    return (
      <div className="ColorPicker" id="ColorPicker">
      <div>
          <Hue {...this.props} onChange={ this.handleChange } direction={ 'horizontal' }/>
      </div>
          <Alpha {...this.props} onChange={ this.handleChange } />

      </div>
    );
  }
}

export default CustomPicker(ColorPicker);
