import React, { Component } from "react";
import "./RateSwitch.css";

class RateSwitch extends Component {
  state = {
    showRate: false,
  };

  toggleRate = () => {
    this.setState((prevState) => ({ showRate: !prevState.showRate }));
  };

  render() {
    return (
      <div className="rateSwitch" onClick={this.toggleRate}>
        {this.state.showRate ? (
          <span>Show Rate</span>
        ) : (
          <span>
            {this.props.rating} <span>Hide Rate</span>
          </span>
        )}
      </div>
    );
  }
}

export default RateSwitch;
