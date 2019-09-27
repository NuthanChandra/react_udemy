import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';

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
            <Message 
                title="Attention"
                content="We just updated our privacy policy here to better our customers."
            />
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);