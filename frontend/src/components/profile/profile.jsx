import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { calculateAge } from '../../util/general_util';
import { ABOUTME_SECTIONS, PROFILE_QUESTIONS } from './profile_questions';

// future additions and refactors
// - maps api to geolocate by zip
// - aws to store profile photos
// - online status
// - matching percentages

const Profile = props => {
  const user = props.user;
  const isCurrentUser = user && props.user ? props.user._id === props.current._id : false;
  const [displayMore, setDisplayMore] = useState(true);
  // placeholders
  const online = true;
  const match = '87%';
  const photo = 'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg';
  const intro = 'Hi, how are you?';
  const [fetched, setFetched] = useState(false);
  // question section
  const profile_essay_questions = user ? user.profile_essay_questions : 'loading...';
  const profile_essay_answers = user ? user.profile_essay_answers : 'loading...';
  // separated into modal sections
  // refactor to a more elegant solution later
  const name = user ? user.name : 'loading...';
  const age = user ? calculateAge(user.birthday) : 'loading...';
  const location = 'San Jose, CA'
  // basics
  const orientation = user ? user.orientation : 'loading...';
  const gender = user ? user.gender : 'loading...';
  const relationship_status = user ? user.relationship_status : 'loading...';
  const relationship_type = user ? user.relationship_type : 'loading...';
  // pronouns
  const pronouns = user ? user.pronouns : 'loading...';
  // looks
  // const height = user ? user.height : 'loading...';
  // const body_type = user ? user.body_type : 'loading...';

  useEffect(() => {
    const setTitle = () => document.title = `${name} / ${age} / ${location}`;
    const checkIsUser = () => {
      if(!fetched) props.fetchUser(props.history.location.pathname.slice(9));
      setFetched(true);
    };
    checkIsUser()
    setTitle();
    return (() => {
    });
  });

  const profile = <div className='profile'>
    <div className='profile-header'>
      <div className='profile-header-basics'>
        <div className='profile-header-basics-userinfo'>
          <img src={photo} alt='profile' />
          <div className='profile-header-basics-asl'>
            <div className='profile-header-basics-asl-status'>
              <p className=''>{name}</p>
              {
                !isCurrentUser && online ?
                <div className='asl-online'>
                  <i className="fas fa-circle" />
                </div>
                : ''
              }
              {
                isCurrentUser ?
                <button className='asl-edit' onClick={() => console.log('User settings')}>
                  <i className='fas fa-pencil-alt' />
                </button>
                : ''
              }
            </div>
            <div className='profile-header-basics-asl-details'>
              <p>{age}</p>
              <p className='profile-spacer'>•</p>
              <p className='profile-header-basics-asl-section'>{location}</p>
              {
                isCurrentUser ? '' :
                <>
                  <p className='profile-spacer'>•</p>
                  <p className='profile-header-basics-asl-section asl-match'>{`${match} Match`}</p>
                  <button className='fas fa-ellipsis-h' onClick={() => console.log('User actions')}/>
                </>
              }
            </div>
          </div>
        </div>
        {
          isCurrentUser ? '' :
          <div className='profile-header-passlike'>
            <button className='passlike-buttons passlike-pass' onClick={() => console.log('Pass')}>X PASS</button>
            <button className='passlike-buttons passlike-like' onClick={() => console.log('Like')}><i className='far fa-heart' /> LIKE</button>
          </div>
        }
      </div>
    </div>
    <div className='profile-content'>
      <div className='profile-content-wrap'>

        <div className='profile-content-questions'>

          {
            !isCurrentUser ?
            <>
              <div className='profile-content-msg'>
                <div className='profile-content-msg-header'>
                  <p>They wrote you an intro</p>
                  <button className='fas fa-flag' onClick={() => console.log('Flag user')}/>
                </div>
                <p className='profile-content-msg-intro'>{intro}</p>
                <div className='profile-content-msg-tail'/>
              </div>
              <div className='profile-content-questions-wrap' style={{maxHeight: displayMore ? 'none' : '500px'}}>
                <div className='questions-section-wrap'>
                  {
                    ABOUTME_SECTIONS.map((section, idx) => {
                      let essayQuestion = PROFILE_QUESTIONS[idx][profile_essay_questions[idx]];
                      if(profile_essay_answers[idx] !== ''){
                        return <div className=''>
                          <p>{profile_essay_answers[idx]}</p>
                        </div>
                      }
                    })
                  }
                </div>
                {
                  displayMore ? '' :
                  <div className='questions-section-display'>
                      <button type='button' onClick={() => setDisplayMore(true)}><span>+</span> <span>More</span></button>
                  </div>
                }
              </div>
              <div className='profile-match-summary'>
                <p className='profile-match-summary-header'>You & {name}</p>
                <div className='profile-match-summary-details'>
                  <div className='profile-match-summary-percent-wrap'>
                    <div className='profile-match-summary-percent-users'>
                      <div className='profile-match-summary-percent-you'>
                        <img src={`https://chillabit-seeds.s3-us-west-1.amazonaws.com/user_generic4.jpg`} alt='you'/>
                      </div>
                      <div className='profile-match-summary-percent-match'>
                        <img src={`https://chillabit-seeds.s3-us-west-1.amazonaws.com/user_generic5.jpg`} alt={name}/>
                      </div>
                    </div>
                    <div className='profile-match-summary-percent-number'>
                      <p>{match}</p>
                    </div>
                  </div>
                  <div className='profile-match-summary-questions-wrap'>
                    <div className='profile-match-summary-question-section'>
                      <p className='profile-match-summary-question'>AGREE <span>😊</span></p>
                      <span>8</span>
                    </div>
                    <div className='profile-match-summary-question-section mid-border'>
                      <p className='profile-match-summary-question'>DISAGREE <span>🙃</span></p>
                      <span>5</span>
                    </div>
                    <div className='profile-match-summary-question-section'>
                      <p className='profile-match-summary-question'>FIND OUT <span>🔮</span></p>
                      <span>138</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
             : ''
          }

        </div>

        <div className='profile-content-attributes'>
          attributes
        </div>

      </div>
    </div>
  </div>

  return user ? profile : 'loading'
};

export default withRouter(Profile);





