import React from 'react';
// Component name must be in pascal case
class JsComponent extends React.Component {
  constructor() {
    super();
    // super is called, so that constructor could be able to call React.Component
    this.name = "React Developer";
  }
  aFunction() {
    return "Function called"
  }
  render() {
    return (
      <div>
        {this.name}<br />
        {2 + 2}<br />
        {this.aFunction()}
        {/* you can use js { expression } only, but can't use if/else or other statements here */}
      </div>
    )
  }
}

export default JsComponent;
