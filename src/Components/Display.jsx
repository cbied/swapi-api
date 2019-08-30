import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        let { planets, people, ships } = this.props
        console.log(planets)
        let displayPlanets = planets.map(planet => {
            return (
                <div key={planet.url}>
                    <h1>{planet.name}</h1>
                </div>
            )
        })
        
        return (
            <div>
                {displayPlanets}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { planets, people, ships } = state.infoReducer
    return { planets, people, ships }
}

export default connect(mapStateToProps)(Display)
