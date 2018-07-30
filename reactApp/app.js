import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = [
  "Do laundry", "Clean kitchen", "Go shopping", "Call Mom", "Walk the dog", "Feed the fish", "Take out the trash", "Practice Violin", "Clean the car"
];

class ToDo extends React.Component{
  render(){
    return (<div><button>X</button>{this.props.task}</div>)
  }
}

class TodoList extends React.Component{
  render(){
    return(
      <ul>{dummyData.map((todo)=><li><ToDo task={todo}/></li>)}</ul>
    );
  }
}

ReactDOM.render(<div><TodoList/></div>,
   document.getElementById('root'));
