import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./components/profile";
import ProfileDetail from "./components/profileDetail";
import { connect } from 'react-redux';
import {saveProfile} from './store/actions/profiles-actions';
import  "./styles/wieldy.less";

const App = (props) => {
  const [showProfile, setShowProfile] = useState(true);
  const [currentProfile, setCurrentProfile] = useState("");

  const getUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(result => {
      props.createProfile(result.data);
      setShowProfile(true);
    })
  } 

  const mapUsersToProfiles = users => {
    return users.map((profile, i) => <Profile onClick={() => setProfile(profile.name)} name={profile.name} key={i}></Profile>);
  }

  const mapUsersToProfileDetail = users => {
    return users.filter((profile) => currentProfile === profile.name)
    .map((profile, i) => <ProfileDetail name={profile.name} email={profile.email} key={i}></ProfileDetail>);
  }

  const setProfile = profileName => {
    setCurrentProfile(profileName);
    setShowProfile(false);
    console.log(profileName);
  }

  return (
    <div>
        <button onClick={getUsers}>Buscar</button>
        {
          showProfile?
          <div>
          {
            mapUsersToProfiles(props.profiles)
          }
          </div>
          :<div>
          {
            mapUsersToProfileDetail(props.profiles)
          }
          </div>
        }
    </div>
  );
}

const mapStateToProps = store => {
  return {
    profiles: store.profilesStore.profiles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProfile: (profile) => dispatch(saveProfile(profile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

