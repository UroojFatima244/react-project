// function  Car(props)
// {
//     Object={
//         name:"fortuner",
//         model: "2024",
//         price: "20.5 million",
//     }
// return(
//     <>
//        <h1>{props.name}</h1>
//        <h1>{props.model}</h1>
//         <h1>{props.price}</h1>    
//     </>
// )
// }
// export default Car;
// // .....ternary operators.....
// if (authenticated) {
//   renderApp();
// } else {
//   renderLogin();
// }
import React,{useState} from "react";
import './practice.css'
function Counter() {
    const[count,setCount] =useState(0);
    const buttonstyle={
        color:"purple",
        backgroundcolor:" yellow",
        fontsize:"50px",
        margin:"10px",
        padding:"10px",
    }
    return(
        <>
        <h1 style={{color:"red"}}>Hello React</h1>
            <h2 style={buttonstyle}>Hello</h2>
    

        <div>  

<h1>Count: {count}</h1>
<button onClick={()=> setCount(count +1 )}>increment</button>
<button onClick={()=> setCount(count -1)}>increment</button>
<button onClick={()=> setCount(0)}>Reset</button>
        </div>

        </>
    );
}
export default Counter