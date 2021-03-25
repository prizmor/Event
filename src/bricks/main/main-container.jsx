import React from 'react';
import {connect} from "react-redux";
import Main from './main';

let MainContainer = (props) => {


  return (
    <Main props={props} />
  );
};

let mapStateToProps = (state) =>{
  return {

  }
};

export default connect(mapStateToProps, {})(MainContainer);