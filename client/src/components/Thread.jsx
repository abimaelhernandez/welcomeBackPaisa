import React from 'react';

class Thread extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="replies">
        <p>{this.props.thread.comment}</p>
        <button className="replyButn">Reply</button>
      </div>
    );
  }
}


export default Thread;
