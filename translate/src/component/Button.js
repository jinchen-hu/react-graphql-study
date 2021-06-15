import React from "react";
import ColorContext from "../context/ColorContext";
import LanguageContext from "../context/LanguageContext";

class Button extends React.Component {
  //static contextType = LanguageContext;

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => (value === "english" ? "submit" : "voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    //console.log(this.context);
    //const text = this.context === "english" ? "Submit" : "Voorleggen";

    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
