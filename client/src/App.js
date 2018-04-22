import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Homepage from './components/Homepage'
import styled from 'styled-components'
import axios from 'axios'



class App extends Component {
  render() {
    return (
  <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Homepage} />
              {/* <Route exact path="/events" component={eventsComponent} /> */}
            </Switch>
          </div>
        </Router>
    </div>
    );
  }
}

export default App;
