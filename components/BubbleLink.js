import React from 'react';
import './BubbleLink.css';



class BubbleLink extends React.Component {
  buildStyle(prop, isText) {
    let classString = "";
    if (isText) {
        classString += "preset-text ";
    }
    if (prop === 'preset5' || prop === 'preset-focus') {
       classString += "preset-center-cont "+prop+"-cont ";
    }
    else{
      classString +="circleDiv "+prop+"-cont ";
    }
    return classString;
  }
  buildStringBreaks(prop) {
    if (prop.length > 15) {
      return (
        <h4>
          {prop}
        </h4>
      );
    }
    return (
      <h2>
        {prop}
      </h2>
    );
  }
  render() {
        return (
          <div className={this.buildStyle(this.props.preset, this.props.isText)}>
            <div>
                {this.buildStringBreaks(this.props.label)}
            </div>
          </div>
    );
  }
}

export default BubbleLink;



 