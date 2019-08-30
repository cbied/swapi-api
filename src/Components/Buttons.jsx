import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from 'react-redux'
import { handlePlanets, handlePeople, handleShips } from '../redux/infoReducer'
import Button from '@material-ui/core/Button';

export class Buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: [],
            people: [],
            ships: []
        }


    }

    getPlanets = () => {
        Axios.get('https://swapi.co/api/planets/')
            .then(res => {
                this.props.handlePlanets(res.data.results)
            })
        
    }

    getPeople = () => {
        Axios.get('https://swapi.co/api/people/')
            .then(res => {
                this.props.handlePeople(res.data.results)
            })
    }

    getShips = () => {
        Axios.get('https://swapi.co/api/starships/')
            .then(res => {
                this.props.handleShips(res.data.results)
            })
    }

    render() {
        return (
            <div className='getButtons'>
                <Button variant="contained" color="primary"
                onClick={() => this.getPlanets()}
                >Planets</Button>
                <Button variant="contained" color="primary"
                onClick={() => this.getPeople()}
                >People</Button>
                <Button variant="contained" color="primary"
                onClick={() => this.getShips()}
                >Starships</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { planets, people, ships } = state.infoReducer
    return { planets, people, ships }
}

export default connect(mapStateToProps, { handlePlanets, handlePeople, handleShips })(Buttons)
