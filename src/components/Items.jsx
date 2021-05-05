import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Items = ({article}) => {
  const classes = useStyles();
      return (
        <>
          <ListItem key={article.name} role={undefined} dense button>
            <ListItemText primary={article.name}/>
            <ListItemText primary={article.qty}/>
            <ListItemText primary={article.weight}/>
          </ListItem>
        </>
      );
}

export default Items;