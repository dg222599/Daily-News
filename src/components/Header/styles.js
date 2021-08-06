import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  root: {
    flexGrow: 1,
    backgroundColor: "red",
  },

  title: {
    flexGrow: 1,
    display: "none",
    fontFamily: "Dosis",
    fontSize: "1.6rem",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    backgroundColor: "white",
    marginLeft: 0,
    marginRight: "19px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,

    width: "350px",
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
