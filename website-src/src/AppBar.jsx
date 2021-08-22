import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
  	backgroundColor: "yellow"
  }
}));

const AppBar2 = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar >

          <img className="logo" width="200" src="green-seal.png"/>

	      <Link color="inherit" href="/farm-products">
	        Farm Products
            <span>&nbsp;|&nbsp;</span>
	      </Link>

	      <Link color="inherit" href="/ecosystems">
	        Ecosystems
            <span>&nbsp;|&nbsp;</span>
	      </Link>

	      <Link color="inherit" href="/learn">
	        Learn @ Farm
            <span>&nbsp;|&nbsp;</span>
	      </Link>

	      <Link color="inherit" href="/work">
	        Work @ Farm
            <span>&nbsp;|&nbsp;</span>
	      </Link>

	      <Link color="inherit" href="/about">
	        About
	      </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBar2;



