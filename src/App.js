import "./App.css";
import React from "react";
import Header from "./Header";
import Tag from "./Tag";
import Card from "./Card";
import Footer from "./Footer";
import axios from "axios";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import IconButton from "@material-ui/core/IconButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      length: "",
      avgWeight: "",
      avgHeight: "",
      tags: {},
      country: "All",
    };
    this.handleCountry = this.handleCountry.bind(this);
  }
  componentDidMount() {
    const url = "https://api.thecatapi.com/v1/breeds";
    axios
      .get(url)
      .then((response) => {
        this.setState({
          data: response.data,
        });
        this.setState({ length: this.state.data.length });
        let weight = 0;
        let age = 0;
        let count = {};
        for (let i = 0; i < this.state.length; i++) {
          let wt = this.state.data[i]["weight"]["metric"].split("-");
          wt = Number(wt[0]) + Number(wt[1]);
          weight += wt / 2;
          const country = this.state.data[i]["origin"];
          if (count[country] === undefined) {
            count[country] = 1;
          } else {
            count[country]++;
          }

          let ag = this.state.data[i]["life_span"].split("-");
          ag = Number(ag[0]) + Number(ag[1]);
          age += ag / 2;
        }

        this.setState({ tags: count });
        this.setState({ avgWeight: (weight / this.state.length).toFixed(2) });
        this.setState({ avgAge: (age / this.state.length).toFixed(2) });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleCountry(props) {
    this.setState({ country: props });
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const { data, tags } = this.state;
    const tag = Object.entries(tags);
    tag.push(["All", this.state.length]);
    return (
      <div className="App">
        <Header
          length={this.state.length}
          avgWeight={this.state.avgWeight}
          avgAge={this.state.avgAge}
        />
        <div className="tags">
          {tag.map((t) => (
            <Tag t={t} key={t[0]} onclick={this.handleCountry} />
          ))}
        </div>

        {data.map((d) => {
          if (d.origin === this.state.country || this.state.country === "All") {
            return <Card d={d} key={d.id} />;
          } else {
            return null;
          }
        })}
        <IconButton onClick={this.scrollToTop}>
          <ArrowUpwardIcon className="arrow" fontSize="large" />
        </IconButton>
        <Footer />
      </div>
    );
  }
}

export default App;
