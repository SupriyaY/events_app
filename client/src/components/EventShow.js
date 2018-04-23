import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


class EventShow extends Component {
    state = {
        event: {},
        people: [],
    }
    async componentWillMount() {

        const res = await axios.get(`/api/events/${this.props.match.params.id}`)
        const resPeople = await axios.get(`/api/people`)
}

render(){

return(
<div>
        <h1>{this.state.event.name}</h1>
        {
            this.state.people.map((person) => {
                return (
                    <div>
                        <p>{person.first_name}</p>
                        <p>{person.last_name}</p>
                    </div>
                )
            })
        }
</div>
)




}





}


export default EventShow