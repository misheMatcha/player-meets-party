import React from 'react';

const Profile = props => {
  const placeholder = {
    username: 'Mishe',
    profile: 'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg',
    age: 33,
    location: 'Rainbow Road, MK'
  };

  return(
    <div className='profile'>
      <div className='profile-basics'>
        <div className='profile-basics-info'>
          <img className='profile-basics-img' src={placeholder.profile}/>
          <div className='profile-basics-details'>
            <div className='profile-basics-user'>{placeholder.username} <div className='fas fa-pencil-alt'/></div>
            <div className='profile-basics-asl'>
              <p className='profile-basics-asl-age'>{placeholder.age}</p>
              <p className='profile-basics-asl-spacer'>•</p>
              <p className='profile-basics-asl-location'>{placeholder.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;