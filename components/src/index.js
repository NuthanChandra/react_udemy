import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import SegmentCard from './SegmentCard';

const App = () => {
    return (
        <div className="ui container">
            <SegmentCard>
                <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                    No documents are listed for this customer.
                </div>
                <div className="ui primary button">Add Document</div>
            </SegmentCard>
            <SegmentCard>
                <h4 className="ui header">For your information</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Expedita, minima laborum? Officiis voluptates molestias inventore similique architecto et? 
                    Assumenda asperiores quas similique vero quia reprehenderit obcaecati quo iste fugit explicabo!
                </p>
            </SegmentCard>
        </div>
        
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);