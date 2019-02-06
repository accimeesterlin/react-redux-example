import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { addAppointment, getGithubUsernane } from './actions/index';


class App extends Component {
  componentDidMount = () => {
    console.log('Data: ', this.props);
    // this.props.addAppointment('Peter Parker');
    this.props.getGithubUsernane('accimeesterlin');

  }


  render() {
    return (
      <div className="App">
        <h1>Welcome to my App</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {

  return {
    addAppointment: (name) => dispatch(addAppointment(name)),
    getGithubUsernane: (username) => dispatch(getGithubUsernane(username))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

