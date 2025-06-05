import { Link } from "react-router-dom";

const Dummy = () => {
  return (
    <div className="card">
      I am from Dummy.jsx 
      <Link to={"/"}>To Home</Link>
    </div>
  );
};

// class Dummy extends React.Component{
//     constructor(){
//         super()
//         console.log("Dummy Constructor triggered")
//     }

//     componentWillUnmount(){
//         console.log("Dummy is unmounted")
//     }

//     componentDidMount(){
//         console.log("Dummy Mounted")
//     }

//     render(){
//                 console.log("Dummy render triggered")

//         const {age, name, count} = this.props
//         return(
//              <div>
//              I am from Dummy.jsx {name} {age} {count}
//        </div>
//         )
//     }
// }
export default Dummy;
