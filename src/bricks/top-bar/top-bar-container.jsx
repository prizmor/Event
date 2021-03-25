import React from 'react';
import {connect} from "react-redux";
import TopBar from './top-bar';

let TopBarContainer = (props) => {


  return (
    <TopBar props={props} />
  );
};

let mapStateToProps = (state) =>{
  return {

  }
};

export default connect(mapStateToProps, {})(TopBarContainer);