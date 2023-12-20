import React from "react";
import SOCIAL_PROFILE from "../data/socialProfiles";


const SocialProfile = (props) => {
        const {link, image} = props.socialProfileItem;
        return (
            <span>
                <a href={link}>
                    <img src={image} alt="social-profile" style={{width: 35, height: 35, margin: 10}}/></a>
            </span>
        );
}


const SocialProfiles = () => (
            <div>
                <h2>Connect with me!!!</h2>
                <div>
                    {
                        SOCIAL_PROFILE.map(currentSocialProfile => {
                            return (<SocialProfile key={currentSocialProfile.id}
                                                   socialProfileItem={currentSocialProfile}/>)
                        })
                    }
                </div>
            </div>
        );



export default SocialProfiles;