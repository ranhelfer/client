import ReactDOM from "react-dom";
import React from "react";

// usage for element composed with variables and helper method 

function Welcome(props) {
    return (
        <h1> welcome {props.user} to this site </h1>
    );
}

const name1 = "Jhon Doe";
const name2 = "Ran Helfer";
const name3 = "Yarden Doe";

const el = (
    <div>
        <Welcome user={name1}/>
        <Welcome user={name2}/>
        <Welcome user={name3}/>
        </div>
);

ReactDOM.render(el, document.getElementById("root")); 

// In this case the message will be displayed but the clock will override it. So to solve this we will use components

// function clock() {
//    const element = (
//     <div>
//         <h1>
//             Clock
//         </h1>
//         <p>It is {new Date().toLocaleString()}</p>

//     </div>
//     ); 
//     ReactDOM.render(element, document.getElementById("root")); 
// }

// setInterval(clock, 1000);

// function message() {
//     const element = (
//      <div>
//          <h1>
//              Hello there !!!
//          </h1>
//          <p>Nice</p>
 
//      </div>
//      ); 
//      ReactDOM.render(element, document.getElementById("root")); 
//  }

//  message()


// const name = "Jhon Doe"

// const element = (
//     <div className="red">
//         <h1
//             style={{
//                 background: "orange"
//             }}
//         >
//             Hello {name}
//         </h1>
//         <p>Hello 2s</p>

//     </div>
// );

// ReactDOM.render(element, document.getElementById("root"));




// console.log("Hello world !!!");     

// const element = document.createElement("h1");
// element.innerText = "Some title text";

// document.body.prepend(element);