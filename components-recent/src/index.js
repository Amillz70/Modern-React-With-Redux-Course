import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// const image = () => {
//   return faker.image.avatar()
// }

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail
        author="Sam" timeAgo="6:00PM"
        text="Nice blog post"
        image={faker.image.avatar()}/>
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail
        author="Dan"
        timeAgo="7:00PM"
        text="Bad blog post"
        image={faker.image.avatar()}/>
    </ApprovalCard>
    
    <ApprovalCard>
      <CommentDetail
        author="Slippy"
        timeAgo="11:49PM"
        text="I agree with both of you!"
        image={faker.image.avatar()}/>
    </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'))
