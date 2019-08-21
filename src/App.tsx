import { AppBar, Container, IconButton, Toolbar, Typography, MuiThemeProvider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import ReactDOM from "react-dom";
import useStyles from "./Style";
import theme from "./Theme";

function App() {
  const classes = useStyles();
    return (
      <MuiThemeProvider theme={theme}>
        <Container maxWidth="lg" className={classes.root}>
            <AppBar>
                <Toolbar>
                    <Typography>Calvin McMurray</Typography>
                    <IconButton edge="end" color="inherit">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Container>
      </MuiThemeProvider>
    );
}

ReactDOM.render(<App />, document.getElementById("react"));
