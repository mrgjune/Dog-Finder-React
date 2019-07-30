import React, { Component } from "react";
// import Nav from "./Nav";
//mport Routes from "./Routes";
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import whiskey from "./whiskey.jpg";
import duke from "./duke.jpg";
import perry from "./perry.jpg";
import tubby from "./tubby.jpg";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/dogs"
              render={() => <DogList dogData={this.props.dogs} />}
            />
            <Route path="/dogs/:name"
              render={routeProps => <DogDetails {...routeProps} dogData={this.props.dogs} />}
            />
            <Redirect to="/dogs" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
