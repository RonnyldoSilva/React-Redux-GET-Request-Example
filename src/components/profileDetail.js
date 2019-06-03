import React, { useEffect, useState } from "react";
import  "./../styles/wieldy.less";

const ProfileDetail = props => {
    return (
        <div>
            <p>Details</p>     
            <h2>{props.name}</h2>
            <h2>{props.email}</h2>
        </div>
    )
}

export default ProfileDetail;