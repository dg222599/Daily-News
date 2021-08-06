import React, { useState, useEffect } from "react";
import { API_KEY } from "../../constants";
import { useSelector } from "react-redux";

import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";
import axios from "axios";

const NewsFeed = () => {
  const classes = useStyles();

  const newsData = useSelector((state) => state.newsData.newsData);

  const [topHeadlines, setTopHeadLines] = useState([]);

  useEffect(() => {
    if (newsData.length === 0) {
      axios
        .get(`https://newsapi.org/v2/top-headlines?country=in`, {
          headers: { "X-Api-Key": API_KEY },
        })
        .then((res) => {
          setTopHeadLines(res.data.articles);
          console.log(topHeadlines);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [newsData]);

  //For the news items whose image is null
  const altURL = "https://i.ibb.co/5KjzWXw/news_image.jpg";

  return (
    <Grid container direction="row" spacing={2} className={classes.newsGrid}>
      {(newsData.length === 0 ? topHeadlines : newsData).map(
        (newsItem, index) => (
          <Grid item>
            <Card
              className={classes.card}
              onClick={newsItem.url}
              href={newsItem.url}
              target="_blank"
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={
                    newsItem.urlToImage != null ? newsItem.urlToImage : altURL
                  }
                  title="Image"
                  alt="image"
                />
                <a
                  href={newsItem.url}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{
                        fontFamily: "Georama",
                        fontWeight: "0.8rem",
                        fontSize: "1.35rem",
                        color: "#2d7572c7",
                      }}
                    >
                      {newsItem.source.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      component="p"
                      style={{ color: "black", fontFamily: "Inconsolata" }}
                    >
                      {newsItem.title}
                    </Typography>
                  </CardContent>
                </a>
              </CardActionArea>
            </Card>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default NewsFeed;
