import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };
    
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }
    componentDidUpdate(){
        console.log("My component was re-rendered");
    }
    render(){
        if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat} />;
        }
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        return <Spinner/>
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

