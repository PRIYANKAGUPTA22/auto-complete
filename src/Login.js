// import React from 'react';
// import {render} from 'react-dom'
// import { browserHistory } from 'react-router';

// class Login extends React.Component {

//   constructor(props) {
//     super(props);
//   }
//   handleRedirect(){
//     browserHistory.push('/search');
//   };
//   login(){
//     var userame= this.refs["userName"].value;
//     var password = this.refs["password"].value;
//     if(userame == "" && password ==""){
//         this.handleRedirect()
//     }
//   }
//   render() {
//     var _this = this; 
//       return (
//         <div>
//             <input ref="userName" type="text" name="userName" id="userName" />
//             <input ref ="password" type="text" name="pass"  id="password" />
//             <button onClick={this.login.bind(this)}> Login </button>
//         </div>
//       );
//     }
// }
// export default Login