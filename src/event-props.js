import React from 'react';

class EventPropParent extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          name: "Buy Milk",
          completed: false
        },
        {
          name: "Refill Fuel",
          completed: false
        },
        {
          name: "Task 3",
          completed: false
        }
      ]
    }
  }
  render() { 
    return ( 
      this.state.tasks.map(function(task) {
        return (
          <EventPropChild key={task.name} statedata={task} />
        )
      })
    )
  }
}

class EventPropChild extends React.Component {
  state = {  }
  render() { 
    return ( 
      <li className={this.props.statedata.completed ? 'completed' : ''}>
        {this.props.statedata.name}
      </li>
    )
  }
}
 
export default EventPropParent;