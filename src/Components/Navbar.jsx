import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../Redux/auth/action";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const Navbar = () => {
    const classes = useStyles();
    const token = useSelector((state) => state.auth.token);
    const isAuthLoading = useSelector((state) => state.auth.isAuthLoading);
    const isAuthError = useSelector((state) => state.auth.isAuthError);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(authLogout());
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {isAuthLoading
                            ? "...Loading"
                            : isAuthError
                            ? "Something went wrong..."
                            : token}
                    </Typography>

                    <Link to="/">
                        <Button variant="contained">HOME</Button>
                    </Link>
                    <br />
                    <Link to="/login">
                        <Button disabled={isAuth} variant="contained">
                            LOGIN
                        </Button>
                    </Link>
                    <Button
                        disabled={!isAuth}
                        variant="contained"
                        onClick={handleLogout}
                    >
                        LOGOUT
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};
