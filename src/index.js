import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./components/App";
import Jokes from "./components/Jokes";
import Header from "./components/Header";
import "./index.css";


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
/*  <React.StrictMode>*/
<BrowserRouter history={createBrowserHistory()}>
     <Routes>
         <Route path="/" element={<Header><App/></Header>} />
         <Route path="/jokes" element={<Header><Jokes/></Header>} />
     </Routes>
</BrowserRouter>
/*  </React.StrictMode>*/
);


/* ToDo -- CallBack and Promise explained
setTimeout(()=> console.log("Bears"), 2000);

console.log("Beats");
console.log("Battlestar Galactica");


ToDo - Promise section
new Promise(resolve => {
    setTimeout(()=> {
        console.log("Bears");
        resolve();
    }, 2000);
}).then(()=> {
    console.log("Beats");
    console.log("Battlestar Galactica");
});



//.then wait for result to be resolved (i.e wait for resolve())
new Promise((resolve, reject) => {
    return reject(new Error("No bears"));

    setTimeout(()=> {
        console.log("Bears");
        resolve("Beats Battlestar Galactica");
    }, 2000);
}).then(quote => {
    console.log(quote);
}).catch( error => console.log(error));
 */
