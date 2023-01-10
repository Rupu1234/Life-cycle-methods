// import React, { Component } from "react";
// import Secondclass from "./Secondclass";

// export class Classlifecyclemethod extends Component {
//   constructor() {
//     super();
//       this.state={
//         name:"rupu",
//         show:true,
//       }
//     console.log("constructor");
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//   }
//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }
//   componentWillUnmount(){
//       console.log("componentWillUnmount");
//   }
//   myfun(){
//      this.setState({name:"gopi"},()=>{
//       console.log(this.state.name);
//      });
//   }
//   render() {
//     console.log("render");
//     return <div>
//         {this.state.name}
//         <button onClick={this.myfun.bind(this)}>update </button>
//         <button onClick={()=>this.setState({show:!this.state.show})}>show/hide </button>

//         {this.state.show?<Secondclass />:null}    
//         </div>;
      
//   }
// }

// export default Classlifecyclemethod;
