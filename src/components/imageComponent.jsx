/*   TRAMITE FUNZIONE

const ImageComponent = (props) => (
  <>
    <img src={props.src} alt={props.alt} className={props.className}></img>
  </>
);

export default ImageComponent;*/

//TRAMITE CLASSE

import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    const { src, alt, className } = this.props;
    return <img src={src} alt={alt} className={className} />;
  }
}
export default ImageComponent;
