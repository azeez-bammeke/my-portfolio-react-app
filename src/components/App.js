import React, { Component } from "react";
import Project from "../components/Project"
import SocialProfiles from "../components/SocialProfiles";
import profile from "../assets/profile.png";
import Title from "../components/Title";


class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio})
    }

     render() {
        return  (
            <div>
                <img src= { profile } alt="my-profile" className = "profile"/>
              <h1>Hello!</h1>
               <p>My name is Azeez</p>
                {this.state.displayBio ? <Title/> : null }
                <p>
                    Always looking forward to working on meaningful project
                </p>
                { this.state.displayBio ? (
                    <div >
                        <p>I live in Chicago and I code every day</p>
                        <p>My favorite language is Java</p>
                        <button onClick= {this.toggleDisplayBio }>Show less &lt;&lt; </button>
                    </div>
                ) : (<div>
                       <button onClick = { this.toggleDisplayBio }>Read more..</button>
                    </div>)
                }
                <hr/>
                <Project />
                <hr/>
                <SocialProfiles/>
            </div>
        );
     }
}

export default App;