import React from 'react';

const Profile = props => {
  const placeholder = {
    username: 'Mishe',
    profile: 'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg',
    age: 33,
    location: 'Rainbow Road, MK',
    abtme: 'Some freaking text here to fill up space and im too lazy to get a lorem ipsum but uhhh this is probably worse than just searching for that huh oh well here i am'
  };

  const section = {
      aboutme: ['My self-summary', 'Favorite thing about the place I live', 'Me, a Haiku', 'Most people that know me would say I\'m', 'Favorite memory from my childhood', 'Thing\'s I am not']
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

      <div className='profile-content-wrap'>
        <div className='profile-content'>
          <div className='profile-content-questions'>
            <div className='profile-content-section'>
              <div className='profile-content-aboutme'>
                <p className='profile-content-aboutme-title'>ABOUT ME</p>
                <p className='profile-content-aboutme-question'>My self-summary</p>
              </div>
              <div className='fas fa-angle-right'/>
            </div>
            <div className=''>
              <p className=''>{placeholder.abtme} <p className=''>WRITE</p></p>
            </div>
          </div>
          <div className='profile-content-details'>
            whatcha like?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;