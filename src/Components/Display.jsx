import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const Display = (props) => {

    // const [planets,people,ships] = useState();

    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing(3),
            overflowX: 'auto',
        },
        table: {
            minWidth: 650,
        },
    }));
    

        // let { planets, people, ships } = props;
        const classes = useStyles();
        console.log(props)
        let displayPlanets = props.planets.map(planet => {
            return (
                <Paper className={classes.root} >
                <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Planets</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    
                        <TableRow key={planet.url}>
                        <TableCell component="th" scope="row">
                            {planet.name}
                        </TableCell>
                        <TableCell align="right">text</TableCell>
                        <TableCell align="right">text</TableCell>
                        <TableCell align="right">text</TableCell>
                        <TableCell align="right">text</TableCell>
                        </TableRow>
                
                    </TableBody>
                </Table>
                </Paper>
            )
        })

        let displayPeople = props.people.map(person => {
            return (
                <Paper className={classes.root} >
                <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Person</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    
                        <TableRow key={person.url}>
                        <TableCell component="th" scope="row">
                            {person.name}
                        </TableCell>
                        <TableCell align="right">text</TableCell>
                        <TableCell align="right">text</TableCell>
                        <TableCell align="right">text</TableCell>
                        <TableCell align="right">text</TableCell>
                        </TableRow>
                
                    </TableBody>
                </Table>
                </Paper>
            )
        })
        
        let displayShips = props.ships.map(ship => {
            return (
                <Paper className={classes.root} >
                <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Ship</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    
                        <TableRow key={ship.url}>
                        <TableCell component="th" scope="row">
                            {ship.name}
                        </TableCell>
                        <TableCell align="right">text</TableCell>
                        <TableCell align="right">text</TableCell>
                        <TableCell align="right">text</TableCell>
                        <TableCell align="right">text</TableCell>
                        </TableRow>
                
                    </TableBody>
                </Table>
                </Paper>
            )
        })

        return (
            <div>
                {props.planets.length > 0 ? 
                <div>
                    {displayPlanets}
                </div>
                :
                <div></div>
                }
                {props.people.length > 0 ? 
                <div>
                    {displayPeople}
                </div>
                :
                <div></div>
                }
                {props.ships.length > 0 ? 
                <div>
                    {displayShips}
                </div>
                :
                <div></div>
                }
                
            </div>
        )
    
}

function mapStateToProps(state) {
    const { planets, people, ships } = state.infoReducer
    return { planets, people, ships }
}

export default connect(mapStateToProps)(Display)
