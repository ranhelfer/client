import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom/client"

function Clock(props) {
    return <p>It's currently {props.time}</p>
}

function App() {
    
    const snippets = [
        {
            title: "gtt 1",
        },
        {
            title: "sadfsad 2",
        },
        {
            title: "uuuu 3",

        },
    ];

    function renderSnippets() {
        const elements =  [
            <p key="0">Hello world</p>, // need to give a unique key
            <p key="1">Hi There</p>,
            <p key="2">Bye...</p>,
            
        ];

        return snippets.map((snip, i) => {
            return <Snippet title={snip.title} key={i}/>
        })
    }

    
    return (
    <>
        {renderSnippets()}
    </>
    );
}

function Snippet(props) {
    return <h1>{props.title}</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


function AppClock() {
    const [time, setTime] = useState(new Date().toLocaleString())

    useEffect( () => {
        setInterval( () => {
            setTime(new Date().toLocaleString())
        }, 1000)
    }, []) // [] - run only once 

    return <>
        <Clock time={time} />
        </>
}

    // const [clicks, setClicks] = useState(0)
    // const [showMessage, setShowMessage] = useState(false)

    // function onClick() {
    //     setClicks(clicks + 1)
    //     console.log("click")
    //     setShowMessage(!showMessage)
    // }

    //  let message

    // // if (showMessage) {
    // //     message = < Message />
    // // }

    // function Message(props) {
    //     return <p>Some message {props.message}</p>
    // }

    // return <>
    // <p>Clicks: {clicks}</p>
    //     <button onClick={onClick}>Click me</button>
    //     {showMessage ? <Message message="State is on"/> : <Message message="state is off"/>}
    // </>;
//}


// using app fragment 

// function App() {

//     const [message, updateVar1]  = useState("Hello world");

//     console.log(message);

//     useEffect( () => {
//         setTimeout(() => {
//             updateVar1(Math.random().toString());
//         }, 1500);
    
//     }, []); // leave empty [] or set to  updateVar1
    
//     // setTimeout(() => {
//     //     setMessage("Hello Jupiter")
//     // }, 4000);

//     const name11 = "Jhon doe";
//     const name22 = "Ran helfer";
//     const name33 = "Yarden dd";

//     return (
//         <>
//         < Welcome user={name11} message={message} />
//         < Welcome user={name22} message={message} />
//         < Welcome user={name33} message={message} />
//         </>
//     );
// }


// function Welcome(props) {
//     return (
//         <>
//         <h1> welcome {props.user} to this site </h1>
//         <p> {props.message} </p>
//         </>
//     );
// }

// usage for element composed with variables and helper method 

// const name1 = "Jhon Doe";
// const name2 = "Ran Helfer";
// const name3 = "Yarden Doe";

// const el = (
//     <>
//         <Welcome user={name1}/>
//         <Welcome user={name2}/>
//         <Welcome user={name3}/>
//         </>
// );

// const e2 = (
//     <div>
//         <Welcome user={name1}/>
//         <Welcome user={name2}/>
//         <Welcome user={name3}/>
//         </div>
// );

//ReactDOM.render(<App />, document.getElementById("root")); 

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