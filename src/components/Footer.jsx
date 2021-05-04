import React from 'react';

import brand from '../assets/images/logo.png';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "auto",
        padding: 10,
        width: "100%",
    },
    logo: {
        width: 70
    },
    details: {
        fontSize: 12,
    },
    display: {
        display: "block",
        margin: 5,
        textAlign: "end"
    }
  }));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <img className={classes.logo} src={brand} alt="logo"/>
            <div className={classes.details}>
                <a href="https://github.com/oriananohemi" target="_blank">oriananohemi</a>
                <span className={classes.display}>Mayo 2020</span>
            </div>
        </footer>
    )
}

export default Footer