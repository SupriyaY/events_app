import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'


class Events extends Component {

    render() {
        console.log(this.props)
        const eventGathering = this.props.gathering.map((gathering, index) => {
            return (<Link key={gathering.id} to={`/events/${gathering.id}`}>
                <div>
                    <h2>{gathering.name}</h2>
                </div>
            </Link>)
        })
        console.log(this.props.gathering)
        return (


            <div>
                {eventGathering}
            </div>
        )

    }


}




export default Events