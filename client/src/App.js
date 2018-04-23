import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Homepage from './components/Homepage'
import Events from './components/Events'
import EventShow from './components/EventShow'
import styled from 'styled-components'
import axios from 'axios'



class App extends Component {

state = {
events: [],
people: []
}

//axios calls

  async componentWillMount() {
    this.getEvents()
    this.getPeople()
  }


  getEvents = async () => {
    const res = await axios.get('/api/events')
    const resEvents = res.data
    try {
      console.log(resEvents)
      this.setState({ events: resEvents})
    }
    catch (error) {
      console.log(error)
    }
  }

getPeople = async () => {
  const res = await axios.get('/api/people')
  const resPeople = res.data
try{
console.log(resPeople)
this.setState({people: resPeople})
}

catch (error){
console.log
}

}


  render() {
 

const eventsComponent = (props) => (<Events gathering={this.state.events} />)
const eventsShowComponent = (props) => (<EventShow {...props}  />)

    return (
  <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/events" component={eventsComponent} />
              <Route exact path ="/events/:id" component={eventsShowComponent}/>  
            </Switch>
          </div>
        </Router>
    </div>
    );
  }
}

export default App;
