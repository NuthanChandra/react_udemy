// Import the React and ReactDOM libraries
import React from 'react'; // AFter import is the variable, it can be anything. After from is the import file
import ReactDOM from 'react-dom'

function getTime()
{
    return new Date().toDateString()
}

// Create a React component
const App = () => {
    return (
    <div>
        <div>Current Time</div>
        <h3>{getTime()}</h3>
    </div>
    );
}

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);