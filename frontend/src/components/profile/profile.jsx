import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { calculateAge } from '../../util/general_util';

// notes:
// - integrate maps api in the future to get geodata to check location through zip

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
    blocked: '',
    // placeholder until aws is integrated
    photo: 'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg'
  });

  useEffect(() => {
    if(!fetched && !props.user){
      props.fetchUser(props.history.location.pathname.slice(9));
      setFetched(true);
    }
    if((fetched && user._id === '') && props.user !== null) setUser({
      _id: props.user._id,
      name: props.user.name,
      age: calculateAge(props.user.birthday),
      location: 'Generic City, State',
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
      blocked: '',
      // placeholder until aws is integrated
      photo: 'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg',
      // placeholder until matching logic is implemented
      match: '87% Match'
    });

    return () => {
    };
  });

  const profile = <div className='profile'>

    <div className='profile-header'>
      <div className='profile-header-basics'>
        <div className='profile-header-basics-userinfo'>
          <img src={user.photo} alt='profile'/>
          <div className=''>
            <div className=''>
              <p className=''>{user.name}</p>
              <p className=''>{`online status`}</p>
              <p className=''>{`edit`}</p>
            </div>
            <div className=''>
              <p className=''>{user.age}</p>
              <p className=''>spacer</p>
              <p className=''>{user.location}</p>
              <p className=''>spacer</p>
              <p className=''>{user.match}</p>
              <p className=''>user options</p>
            </div>
          </div>
        </div>
        <div className=''>
          <button className=''>x pass</button>
          <button className=''>x like</button>
        </div>
      </div>
    </div>

  </div>

  const loading = <div className=''>
    Loading...
  </div>

  return user._id === '' ? loading : profile;
};

export default withRouter(Profile);