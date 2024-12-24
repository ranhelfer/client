export default process.env.NODE_ENV === "development" 
? "http://localhost:5001"
: process.env.NODE_ENV === "production" && "https://snippet-23a35426327f.herokuapp.com"; 