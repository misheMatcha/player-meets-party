import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { calculateAge } from '../../util/general_util';

const Profile = props => {
  const placeholder = {
    profile: 'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg',
    abtme: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue diam id aliquam sagittis. Aenean ac dapibus sapien, sodales pretium sem. Mauris enim dolor, rhoncus consectetur porttitor non, volutpat in leo. Mauris nibh massa, blandit sit amet consequat sit amet, porttitor nec dolor. Ut congue quis lectus at dapibus. Pellentesque a justo non elit ornare fringilla. Donec in sodales sem. Donec convallis eget mauris et tincidunt. Cras dictum justo a pharetra tempor. Suspendisse molestie convallis sollicitudin. Quisque sapien justo, molestie sed eros vitae, pellentesque venenatis lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer fermentum nunc odio, pellentesque lobortis dui ultrices vel. Sed a eros ligula. Donec luctus felis sed tortor accumsan, nec maximus velit cursus.`
  };
  const user = props.user;
  const [fetchedUser, setFetchedUser] = useState(false);

  // const section = {
  //     aboutme: ['My self-summary', 'Favorite thing about the place I live', 'Me, a Haiku', 'Most people that know me would say I\'m', 'Favorite memory from my childhood', 'Thing\'s I am not']
  // };

  // separated into modal sections
  // refactor to a more elegant solution later
  const name = user ? user.name : 'loading...';
  const age = user ? calculateAge(user.birthday) : 'loading...';
  const location = 'San Jose, CA' // add maps api later

  // basics
  const orientation = user ? user.orientation : 'loading...';
  const gender = user ? user.gender : 'loading...';
  const relationship_type = user ? user.relationship_type : 'loading...';
  const relationship_status = user ? user.relationship_status : 'loading...';

  useEffect(() => {
    const setTitle = () => {
      document.title = `${name} / ${age} / ${location}`;
    };
    // remove after styling is completed
    // props.basicsForm();
    userOr()
    setTitle();
    console.log(props.user)
    return(() => {
    });
  }, [props.user]);

  const userOr = () => {
    if(!fetchedUser){
      if (!props.match.isExact) {
        props.fetchUser(props.history.location.pathname.slice(9));
      } else {
        props.fetchUser(localStorage.currentId);
      }
      setFetchedUser(true);
    }
  };

  return(
    <div className='profile'>
      <div className='profile-basics'>
        <div className='profile-basics-info'>
          <img className='profile-basics-img' src={placeholder.profile} alt='profile'/>
          <div className='profile-basics-details'>
            <div className='profile-basics-user'>{name} <i className='fas fa-pencil-alt'/></div>
            <div className='profile-basics-asl'>
              <p className='profile-basics-asl-age'>{`${age}`}</p>
              <p className='profile-basics-asl-spacer'>•</p>
              <p className='profile-basics-asl-location'>{location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='profile-content-wrap'>
        <div className='profile-content'>
        {/* essay questions */}
          <div className='profile-content-questions'>
            <div className='profile-content-section'>
              <div className='profile-content-aboutme'>
                <p className='profile-content-aboutme-title'>ABOUT ME</p>
                <p className='profile-content-aboutme-question'>My self-summary</p>
              </div>
              <i className='fas fa-angle-down'/>
            </div>
            <div className='profile-content-aboutme-essay'>
              <div className='profile-content-aboutme-essay-text'>{placeholder.abtme}
              <span className='profile-content-aboutme-essay-edit'><i className='fas fa-pencil-alt'/> <b>WRITE</b></span>
              </div>
            </div>
          </div>

          {/* attributes */}
          <div className='profile-content-details-container'>
            <div className='profile-content-details' onClick={() => props.basicsForm()}>
              <div className='profile-content-details-opt'>
                <i className='fas fa-cubes'/>
                <p className='profile-content-details-desc'>{`${orientation}, ${gender}, ${relationship_status}, ${relationship_type}`}</p>
              </div>
              <div className='profile-content-details-edit'>
                <i className='fas fa-chevron-right'/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default withRouter(Profile);