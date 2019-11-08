import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

const App = () => {
    navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err)=>console.log(err)
    );
    return (
        <div>
            <p>Hello there, I am the main app</p>
            <SeasonDisplay />
        </div>
        
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

