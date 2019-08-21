// import React for implememnting component
import React from 'react';
// import ReactDOM for ...
import ReactDOM from 'react-dom';
// import external components below
// import DemoComponent from './demo-compo';
// import ParentComponent from './multiple-compo';
// import JsComponent from './js-expresion';
// import StatePropsParent from './state-props';
import EventPropParent from './event-props';

class IndexComponent extends React.Component {
  render() { 
    return ( 
      <div>
        {/* <h1>Index</h1>
        <DemoComponent />
        <ParentComponent />
        <JsComponent /> */}
        {/* <StatePropsParent /> */}
        <EventPropParent />
      </div>
    )
  }
}

// DOM render method have two arguments, 1st what, 2nd where ... to be render.
// component name must be placed as TAG <___/>
ReactDOM.render(<IndexComponent />, document.getElementById('root'))



