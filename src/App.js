import React, { Component } from 'react';
import propTypes from 'prop-types';

class App extends Component {
  render(){
    const profiles = [
      { name:"Taro", age:10 },
      { name:"Hanako", age:8 },
      { name:"NoName", age:3 },
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

// 型チェック
User.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired
}

export default App;
