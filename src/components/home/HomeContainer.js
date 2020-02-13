import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { getUserData } from '../../actions/commonActions';

class HomeContainer extends Component {
  render() {
    return (
      <HomeComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.commonReducer.userData,
});

const mapDispatchToProps = (dispatch) => ({
  getUserData: (userQuery, pageCount) => {
    return dispatch(getUserData(userQuery, pageCount));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
