import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddThread from './components/AddThread.jsx';
import ThreadList from './components/ThreadList.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      thread: [],

  }
  this.addThread = this.addThread.bind(this);
  this.getThread = this.getThread.bind(this);
}

  addThread(comment){
    $.ajax({

      method:'POST',
      url:'/paisa',
      contentType: 'application/json',
      data:JSON.stringify({
        comment:comment
      })
    }).done(()=>{
      this.getThread()
    })
  }
  getThread(){
    $.ajax({
      url:'/paisa',
      method:"GET",
      success: (results) =>{
        this.setState({thread:results})
      },
      error:(xhr,err) => {
        console.log("err", err);
      }

    })
  }

  componentDidMount(){
    this.getThread()
  }


 render() {
    return (
 <div>
  <AddThread addThread={this.addThread} />
  <ThreadList thread={this.state.thread} />
 </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
