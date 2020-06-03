import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { calculateAge } from '../../util/general_util';
import { ABOUTME_SECTIONS, PROFILE_QUESTIONS, ATTRIBUTES_SECTIONS } from './profile_options';
import MatchQuestionSection from './match_question_section.jsx';
import UserQuestionSection from './user_question_section.jsx';
import ProfileAttributes from './profile_attributes.jsx';

// future additions and refactors
// - maps api to geolocate by zip
// - aws to store profile photos
// - online status
// - matching percentages

const Profile = props => {
  const user = props.user;
  // const isCurrentUser = user && props.user ? props.user._id === props.current._id : false;
  const isCurrentUser = false;
  const [displayMore, setDisplayMore] = useState(false);
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
  const name = user ? user.name : '';
  const age = user ? calculateAge(user.birthday) : '';
  const location = 'San Jose, CA'
  const basic = !user ? '' : {
    orientation: user.orientation,
    gender: user.gender,
    relationship_status: user.relationship_status,
    relationship_type: user.relationship_type,
    icon: 'fas fa-cubes'
  };
  const pronouns = !user ? '' : {
    pronouns: user.pronouns,
    icon: 'fas fa-bullhorn'
  };
  const looks = !user ? '' : {
    height: user.height,
    body_type: user.body_type,
    icon: 'fas fa-seedling'
  };
  const background = !user ? '' : {
    ethnicity: user.ethnicity,
    languages: user.languages,
    politics: user.politics,
    education: user.education,
    occupation: user.occupation,
    religion: user.religion,
    sign: user.sign,
    icon: 'fas fa-globe'
  };
  const lifestyle = !user ? '' : {
    tobacco: user.tobacco,
    drinks: user.drinks,
    marijuana: user.marijuana,
    diet: user.diet,
    icon: 'fas fa-glass-martini'
  };
  const family = !user ? '' : {
    kids: user.kids,
    pets: user.pets,
    icon: 'fas fa-home'
  };
  const preferences = !user ? '' : {
    pref_gender: user.pref_gender,
    pref_distance: user.pref_distance,
    pref_age: user.pref_age,
    pref_connections: user.pref_connections,
    icon: 'far fa-eye'
  };

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

  const setAttributeProps = section => {
    switch(section){
      case 'Basics':
        return basic;
      case 'Pronouns':
        return pronouns;
      case 'Looks':
        return looks;
      case 'Background':
        return background;
      case 'Lifestyle':
        return lifestyle;
      case 'Family':
        return family;
      case 'I am looking for':
        return preferences;
      default:
        break;
    }
  };

  const displayAttributes = section => {
    switch(section){
      case 'Basics':
        return true;
      case 'Pronouns':
        if(pronouns.pronouns === 'Pronouns'){
          return false;
        }else{
          return true;
        }
      case 'Looks':
        if(looks.height === `0"0'` && looks.body_type === 'Body type'){
          return false;
        }else{
          return true;
        }
      case 'Background':
        const bgDefaults = ['Politics', 'Education', 'Occupation', 'Religion', 'Sign'];
        let bgDisplay = false;
        for(const key in background){
          let bgVal = background[key];

          if(key !== 'icon'){
            if(Array.isArray(bgVal)){
              if(bgVal.length) bgDisplay = true;
            }else{
              if(bgDefaults.indexOf(bgVal) < 0) bgDisplay = true;
            }
          }
        }
        return bgDisplay ? true : false;
      case 'Lifestyle':
        if((!lifestyle.tobacco && !lifestyle.drinks) && (lifestyle.diet === 'Diet' && !lifestyle.kids)){
          return false;
        }else{
          return true;
        }
      case 'Family':
        if(!family.kids && !family.pets){
          return false;
        }else{
          return true;
        }
      case 'I am looking for':
        return true;
      default:
        break;
    }
  };

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

              <div className='match-profile-container' style={{maxHeight: displayMore ? 'none' : '500px'}}>
                <div className='match-profile-questions-container'>
                  {
                    ABOUTME_SECTIONS.map((section, idx) => {
                      let essayQuestion = PROFILE_QUESTIONS[idx][profile_essay_questions[idx]];
                      let essayAnswer = profile_essay_answers[idx];
                      return essayAnswer !== '' ? <MatchQuestionSection key={idx} section={section} essayQuestion={essayQuestion} essayAnswer={essayAnswer} /> : ''
                    })
                  }
                </div>
                {/* toggles the displayer */}
                {
                  displayMore ? '' :
                      <div className='match-profile-display-toggle'>
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
                      <p className='profile-match-summary-question'>AGREE <span role='img' aria-label='AGREE'>😊</span></p>
                      <span>8</span>
                    </div>
                    <div className='profile-match-summary-question-section mid-border'>
                      <p className='profile-match-summary-question'>DISAGREE <span role='img' aria-label='DISAGREE'>🙃</span></p>
                      <span>5</span>
                    </div>
                    <div className='profile-match-summary-question-section'>
                      <p className='profile-match-summary-question'>FIND OUT <span role='img' aria-label='FIND OUT'>🔮</span></p>
                      <span>138</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
             :
            <>
              <div className='profile-content-questions-wrap'>
                <div className='questions-section-wrap'>
                  {
                    ABOUTME_SECTIONS.map((section, idx) => {
                      let essayQuestion = PROFILE_QUESTIONS[idx][profile_essay_questions[idx]];
                      let essayAnswer = profile_essay_answers[idx];
                      return <UserQuestionSection key={idx} section={section} essayList={PROFILE_QUESTIONS[idx]} essayQuestion={essayQuestion} essayAnswer={essayAnswer} />
                    })
                  }
                </div>
              </div>
            </>
          }

        </div>

        <div className='profile-content-attributes'>
          {
            isCurrentUser ?
            <>
              {
                ATTRIBUTES_SECTIONS.map((section, idx) => {
                  return <ProfileAttributes key={idx} userOrMatch={'user'} section={section} attributes={setAttributeProps(section)} />
                })
              }
            </> :
            <>
              {
                ATTRIBUTES_SECTIONS.map((section, idx) => {
                  return !displayAttributes(section) ? '' :
                  <ProfileAttributes key={idx} userOrMatch={'match'} section={section} attributes={setAttributeProps(section)} />
                })
              }
            </>
          }
        </div>

      </div>
    </div>
  </div>

  return user ? profile : 'loading'
};

export default withRouter(Profile);