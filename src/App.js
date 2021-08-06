import React from "react";
import SideBar from "./components/SideBar/SideBar";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import Header from "./components/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./styles";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store} className={classes.root}>
      <div>
        <CssBaseline />
        <Header />
        <SideBar />
        <NewsFeed />
      </div>
    </Provider>
  );
};

export default App;
