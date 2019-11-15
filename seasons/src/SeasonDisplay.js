import React from 'react';
const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it is chilly",
        iconName: 'snowflake'
    }
}
const getSeason = (lat, month) => {
    if(month > 2 && month <9){
       return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return (lat < 0)? 'summer' : 'winter';
    }
}

const SeasonDisplay = (props)=> {
    const season = getSeason(props.lat, new Date().getMonth());
    return (
    <div>
        <i className={`${seasonConfig[season].iconName} icon`} />
        <h1>{seasonConfig[season].text}</h1>
        <i className={`${seasonConfig[season].iconName} icon`} />
    </div>
    );
};

export default SeasonDisplay;