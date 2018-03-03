import React from 'react';

<<<<<<< f5e60c8f96e63d621bfc9f25d0b2a05186f7fd2c
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

 render() {
    return (
      <div>
      <div class="nav">
      <a  type= "button"class="w3-bar-item w3-button btn-lg">Home</a>
      <a  type= "button" class="w3-bar-item w3-button btn-lg">about us</a>
       </div>
        <div className="header">
          <h1>WELCOME BACK</h1>
          <div className="startT">
          <h2>START A THREAD</h2>
          </div>
        </div>
      <textarea className="textAr" onChange={this.updateComment} value={this.state.comment}>
        Type Something!
</textarea>
       <div>
        <button type="button" class="btn-danger btn-md" onClick={this.add}>Add Thread</button>
       </div>
      </div>
    );
  }
=======
class AddThread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }
    this.add = this.add.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.updateUserName = this.updateUserName.bind(this);

  }
  updateComment(e) {
    this.setState({comment: e.target.value})
  }

  updateUserName(e) {
    this.setState({userName: e.target.value})
  }
  add() {
    this.props.addThread(this.state.comment)
    this.setState({comment: ''})
  }

  render() {
    return (<div>

      <textarea onChange={this.updateComment} value={this.state.comment}></textarea>
      <div>
        <button onClick={this.add}>Add Thread
        </button>
      </div>
    </div>)
  }

>>>>>>> merge conflicts
}
export default AddThread;
