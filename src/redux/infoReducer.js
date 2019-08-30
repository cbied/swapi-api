const initalState = {
    planets: [],
    people: [],
    ships: []
}

const HANDLE_PLANETS = 'HANDLE_PLANETS'
const HANDLE_PEOPLE = 'HANDLE_PEOPLE'
const HANDLE_SHIPS = 'HANDLE_SHIPS'

export const handlePlanets = (data) => {
    return {
        type: HANDLE_PLANETS,
        payload: data
    }
}

export const handlePeople = (data) => {
    return {
        type: HANDLE_PEOPLE,
        payload: data
    }
}

export const handleShips = (data) => {
    return {
        type: HANDLE_SHIPS,
        payload: data
    }
}

export default function reducer(state=initalState,action) {
    const { type, payload } = action

    switch(type) {
        case HANDLE_PLANETS:
            return { ...state, planets: payload }
        case HANDLE_PEOPLE:
            return { ...state, people: payload }
        case HANDLE_SHIPS:
            return { ...state, ships: payload }

        default: return state
    }
}