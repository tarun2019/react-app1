import React from 'react';

class StatePropsParent extends React.Component {
  // state = {}
  constructor() {
    super();

    this.state = {
      data: 'data passed using state',
      sampleArray: ['ar1','ar2','ar3']
    }
  }

  render() { 
    return (
      <div>
        {this.state.data}
        {/* pass state data to child */}
        <StatePropsChild1 detail={this.state.data}/>
        <ul>
          {
            this.state.sampleArray.map(function (params) {
              return (
                // while using array map you must pass a unique key
                <StatePropsChild2 key={params} arrayDetail={params} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

class StatePropsChild1 extends React.Component {
  state = {  }
  render() { 
    return ( 
      <h4>{this.props.detail}</h4>
    )
  }
}

class StatePropsChild2 extends React.Component {
  state = {}
  render() {
    return (
      <li>{this.props.arrayDetail}</li>
    )
  }
}
 
export default StatePropsParent;