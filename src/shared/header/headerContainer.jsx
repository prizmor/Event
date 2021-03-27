import React from 'react';
import {connect} from "react-redux";
import Header from './header';

let HeaderContainer = (props) => {


  return (
    <Header props={props} />
  );
};

let mapStateToProps = (state) =>{
  return {

  }
};

export default connect(mapStateToProps, {})(HeaderContainer);