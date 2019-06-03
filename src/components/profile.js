import React, { useEffect, useState } from "react";
import  "./../styles/wieldy.less";

const Profile = props => {
    return (
        <div onClick={props.onClick}>          
            <h2>{props.name}</h2>
        </div>
    )
}

export default Profile;