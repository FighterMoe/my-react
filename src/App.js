import React, {Component} from "react"

import "./App.css"
import Person from "./Preson/Person"

class App extends Component {
  state = {
    persons: [
      {id: "aaa", name: "React", age:"1"},
      {id: "bbb", name: "Front End", age:"3"},
      {id: "ccc", name: "Back End", age:"4"},
    ],
    showPerson: false,
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({showPerson: !doesShow})
  }

  deletePersonHandler = (id) => {
    const persons = [...this.state.persons]
    persons.splice(id, 1)

    this.setState({persons: persons})
  }

  nameChangeHandler = (event, index) => {
    const personId = this.state.persons.findIndex( p => p.id === index)

    const person = {...this.state.persons[personId]}
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personId] = person

    this.setState({persons: persons})
  }

  render () {
    const style= {
      padding: "8px",
      border: "1px solid #333",
      color: "#fff",
      backgroundColor: "#000",
      fontWeight: 700
    }

    let persons = null
    if(this.state.showPerson) {
      persons = this.state.persons.map( (person, index) => {
        return <Person key={person.id} name={person.name} age={person.age}
        delete={() => this.deletePersonHandler(index)}
        nameChange = {(event) => this.nameChangeHandler(event, person.id)} />
      })
    }

    return (
      <div className="App">
        <h2>React App</h2>
        <p>Playground for React Developer</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App