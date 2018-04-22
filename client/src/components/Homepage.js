import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



class Homepage extends Component {

    render() {

        return (
<div>
Hello from the Homepage!
                
                
  <Link to="/events">Events</Link> 

    </div>
        )
    }

}

export default Homepage;