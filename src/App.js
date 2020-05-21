import React, { Component } from 'react';

class App extends Component {
  render(){
    const profiles = [
      { name:"Taro", age:10 },
      { name:"Hanako", age:8 },
      { name:"Noname" },
    ];
    return (
      <React.Fragment>
        {profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index} />
        })}
      </React.Fragment>
    ); 
  }
}

const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

export default App;
