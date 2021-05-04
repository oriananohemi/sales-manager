import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from '@material-ui/core/Link';

import List from './List';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 50,
        margin: "50px 0",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 30,
        textAlign: "center",
    },
    floatButton: {
        position: 'absolute',
        bottom: theme.spacing(12),
        right: theme.spacing(3),
      }
}));  

const Home = () => {
    const classes = useStyles();
    return (
        <Container>
            <h1 className={classes.title}>Bienvenido</h1>
            <p className={classes.subtitle}>¿Que deseas realizar hoy?</p>
            <Link      
                component={RouterLink} 
                variant="body2" 
                to="/create"
                >Crear nueva orden</Link>
            <List />
            <Link      
                component={RouterLink} 
                variant="body2" 
                to="/create"
                >
                <Fab color="secondary" aria-label="add" className={classes.floatButton} >
                    <AddIcon />
                </Fab>
            </Link>
        </Container>
    )
}

export default Home