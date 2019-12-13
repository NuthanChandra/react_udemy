import React from 'react';

const SegmentCard = (props) => {
    return (
        <div className="ui placeholder segment">
            {props.children}
        </div>
    );
}

export default SegmentCard;