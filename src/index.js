import React from "react";
import ReactDom from "react-dom";
import "semantic-ui-css/semantic.min.css";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // alternate way to initialize state
  state = { lat: null, errorMessage: "" };

  // constructor(props) {
  //   super(props);
  //
  //   this.state = { lat: null, errorMessage: "" };
  // }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component was updated");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    } else return <Spinner message="Please accept location request" />;
  }

  // must be overridden
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDom.render(<App />, document.getElementById("root"));
