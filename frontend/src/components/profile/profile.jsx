import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { calculateAge } from '../../util/general_util';

const Profile = props => {
  const [fetched, setFetched] = useState(false);
  const [user, setUser] = useState({
    _id: '',
    name: '',
    age: '',
    location: '',
    // basics
    orientation: '',
    gender: '',
    relationship_type: '',
    relationship_status: '',
    // pronouns
    pronouns: '',
    // looks
    height: '',
    body_type: '',
    // background
    ethnicity: '',
    languages: '',
    politics: '',
    education: '',
    occupation: '',
    religion: '',
    sign: '',
    // lifestyle
    tobacco: '',
    drinks: '',
    marijuana: '',
    diet: '',
    // family
    kids: '',
    pets: '',
    // gaming portion - need to think about potential details that would be valuable
    gamelist: '',
    game_genres: '',
    platform: '',
    // who are you open to?
    pref_gender: '',
    pref_distance: '',
    pref_age: '',
    pref_connections: '',
    profile_questions: '',
    // future - settings type checks
    liked: '',
    passed: '',
    blocked: ''
  });

  useEffect(() => {
    if(!fetched && !props.user){
      props.fetchUser(props.history.location.pathname.slice(9));
      setFetched(true);
    }
    if((fetched && user._id === '') && props.user !== null) setUser({
      _id: 0,
      name: props.user.name,
      age: calculateAge(props.user.birthday),
      location: 'Generic City, State'
    });

    return () => {
    };
  });
  const profile = <div className='profile'>
    {user.name}
    {user.age}
    {user.location}
  </div>

  return profile;
};

export default withRouter(Profile);