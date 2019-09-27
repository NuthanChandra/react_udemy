import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                author="Mark"
                timeAgo="Today at 2 AM"
                avatar={faker.image.avatar()} 
                commentText="Hi" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Hercules"
                    timeAgo="Today at 5 AM"
                    avatar={faker.image.avatar()}
                    commentText="Bye"
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Venice"
                    timeAgo="Today at 7 PM"
                    avatar={faker.image.avatar()}
                    commentText="See you later, Alligator"
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);