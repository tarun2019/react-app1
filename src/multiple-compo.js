import React from 'react';

class CompoOne extends React.Component {
  render() {
    return (
      <h2>First child component</h2>
    )
  }
}

class CompoTwo extends React.Component {
  render() {
    return (
      <h2>Second child component</h2>
    )
  }
}

class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <CompoOne />
        <CompoTwo />
      </div>
    )
  }
}

export default ParentComponent;