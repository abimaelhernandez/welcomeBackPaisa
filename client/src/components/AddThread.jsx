import React from 'react';

class AddThread extends React.Component{
 constructor(props){
   super(props);
   this.state = {
    comment:''
  }
  this.add = this.add.bind(this);
  this.updateComment = this.updateComment.bind(this);
  this.updateUserName = this.updateUserName.bind(this);

 }
 updateComment(e){
   this.setState({
     comment:e.target.value
   })
 }

 updateUserName(e){
   this.setState({
     userName:e.target.value
   })
 }
 add(){
   this.props.addThread(this.state.comment)
   this.setState({
     comment:''
   })
 }

 render(){
   return (<div>

       <textarea onChange={this.updateComment} value={this.state.comment}>


       </textarea>
       <div>

     <button onClick={this.add}>Add Thread </button>
       </div>
       </div>

   )
 }

}
export default AddThread;
