import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Homepage from './components/Homepage'
import Events from './components/Events'
import styled from 'styled-components'
import axios from 'axios'



class App extends Component {

state = {
events: []
}

//axios calls

  async componentWillMount() {
    this.getEvents()
  }


  getEvents = async () => {
    const res = await axios.get('/api/events')
    const resEvents = res.data
    try {
      console.log(resEvents)
      this.setState({ events: resEvents })
    }
    catch (error) {
      console.log(error)
    }
  }




  render() {
 

const eventsComponent = (props) => (<Events gathering={this.state.events} />)

    return (
  <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/events" component={eventsComponent} />  
            </Switch>
          </div>
        </Router>
    </div>
    );
  }
}

export default App;
