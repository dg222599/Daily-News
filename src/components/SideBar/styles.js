import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
    backgroundColor: "black",
  },
  drawerPaper: {
    width: 240,
    backgroundColor: "black",
  },
  drawerContainer: {
    overflow: "auto",
  },
  listItem: {
    paddingLeft: "14px",
    fontFamily: "Dosis",
    color: "white",
  },
}));
