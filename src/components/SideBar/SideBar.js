import React, { useState, useEffect } from "react";

import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import useStyles from "./styles";

import axios from "axios";
import { API_KEY } from "../../constants";
import { useDispatch } from "react-redux";
import { updateNews } from "../../actions";

const SideBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //to render labels with appropriate icons
  const arr = [
    { label: "India", icon: "flag" },
    { label: "Business", icon: "business" },
    { label: "Science", icon: "science" },
    { label: "Technology", icon: "memory" },
    { label: "Health", icon: "health_and_safety" },
    { label: "Sports", icon: "sports_cricket" },
    { label: "Entertainment", icon: "live_tv" },
  ];

  const [newsData, setNewsData] = useState([]);

  const fetchData = (news_type) => {
    if (news_type === "India") news_type = "general";
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${news_type}`,
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
  }, [newsData]);

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        style={{ backgroundColor: "black" }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {arr.map((text, index) => (
              <ListItem
                button
                key={arr[index].label}
                onClick={function () {
                  fetchData(arr[index].label);
                  document.body.backgroundColor = "blue";
                }}
              >
                <span
                  className="material-icons"
                  style={{ fontSize: "18px", color: "red" }}
                >
                  {arr[index].icon}
                </span>
                <ListItemText
                  style={{
                    paddingLeft: "14px",
                    fontFamily: "Dosis",
                    fontSize: "1.1rem",
                    color: "white",
                  }}
                  primary={arr[index].label}
                  disableTypography="true"
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;
