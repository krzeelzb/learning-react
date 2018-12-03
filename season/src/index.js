import React, { Component } from "react";

import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       lat: 40,
  //       errorMessage: ""
  //     };
  //   }

  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }), //succes
      err => this.setState({ errorMessage: err.message })
      //error
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
