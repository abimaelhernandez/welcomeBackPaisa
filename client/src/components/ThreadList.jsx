import React from 'react';
import Thread from './Thread.jsx';

const ThreadList = (props, handleClickComment) => (
  <div>
   {props.thread.map((thread) => <Thread thread={thread}/>)}
  </div>
);
export default ThreadList;
