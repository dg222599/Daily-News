import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  card: {
    width: 290,
    height: 320,
  },
  media: {
    height: 160,
  },
  button: {
    backgroundColor: "white",
    color: "black",
  },
  firstrow: {
    maxWidth: 281,
    maxHeight: 350,
    marginTop: "80px",
  },
  firstitem: {
    maxWidth: 281,
    maxHeight: 350,
    marginTop: "80px",
    marginLeft: "250px",
  },
  firstcol: {
    maxWidth: 281,
    maxHeight: 350,
    marginLeft: "250px",
  },
  newsGrid: {
    backgroundColor: "#ffffff",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2380F'/%3E%3Cstop offset='1' stop-color='%23f40'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E")`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    width: "1230px",
    marginLeft: "242px",
    marginTop: "63px",
  },
  newsLink: {
    textDecoration: "none",
  },
}));
