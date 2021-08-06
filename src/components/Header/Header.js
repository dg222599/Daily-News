import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { API_KEY } from "../../constants";
import axios from "axios";
import { updateNews } from "../../actions";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [newsData, setNewsData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = (e) => {
    e.preventDefault();
    console.log(searchText);
    axios
      .get(
        `https://newsapi.org/v2/everything?qInTitle=${searchText}&pageSize=100`,
        {
          headers: { "X-Api-Key": API_KEY },
        }
      )
      .then((res) => {
        setNewsData(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(updateNews(newsData));
    console.log(newsData);
  }, [dispatch, newsData]);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "#003d99" }}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            DAILY NEWS
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form
              onSubmit={(e) => {
                fetchData(e);
              }}
            >
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
