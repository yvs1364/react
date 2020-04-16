import React, { Component, Fragment } from 'react';
import './App.css';
import Member from "./components/Member"
import Button from "./components/Button"

const family = {
  member1: {
    name: "Yvs",
    age: 24
  },
  member2: {
    name: "Rosie",
    age: 23
  },
  member3: {
    name: "Buu",
    age: 5
  },
  member4: {
    name: "Luffy",
    age: 4
  }
}

class App extends Component {
  state = { family }

handleClick = num => {
  const family = { ...this.state.family }
  family.member1.age += num
this.setState({family})
}
handleChange = event => {
  const family = { ...this.state.family }
  const name = event.target.value
  family.member1.name = name
  this.setState({ family })
}

  render() {
    const { family} = this.state
    const { title } = this.props
    const  number  = 4
    return (
      <Fragment>
        <div className="App">
          <h1>{title}</h1>
          <input value={family.member1.name} onChange= {this.handleChange}
          type="text" />
          <Member  age={family.member1.age}
                            name={family.member1.name} />
          <Member age={family.member2.age}
                            name={family.member2.name} />
          <Member age={family.member3.age}
                          name={family.member3.name} />
        <Member age={family.member4.age}
                          name={family.member4.name}> Hello </Member>
                          <Button number={number}
                                        old={() => this.handleClick(number)} />
        </div>
      </Fragment>
    )
  }
}

export default App;
