import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// code to determine location and month


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { lat: null, errorMessage: ''};
}

// state = { lat: null, errorMessage: ''} works same as deleting the constructor function

//THIS is the only time we do direct assignment to this.state
componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }


  componentDidUpdate() {
    // console.log('My component was updated')
  }


  renderContent() {
    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => console.log(position),
    //   (err) => console.log(err),
    // )
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    else {
      return <Spinner message="Please Accept Location Request"/>
    }
  }


// must define render in react
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
}

}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
