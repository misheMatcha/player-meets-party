import React, { useEffect, useState } from 'react';
import { convertToString } from '../../util/general_util';

const ProfileAttributes = ({userOrMatch, section, attributes}) => {
  const hasMatchAttributes = [];
  const hasUserAttributes = [];
  const missingAttributes = [];
  const [matchAttributes, setMatchAttributes] = useState('');
  const [userAttributes, setUserAttributes] = useState('');
  const [missingUserAttributes, setMissingUserAttributes] = useState('');

  useEffect(() => {
    filterAttributes();
    convertForDisplay();
    // console.log(missingAttributes)
  });

  const sortAttributes = (arr, att, attVal) => {
    if(arr.indexOf(attVal) > -1){
      missingAttributes.push(attVal);
    }else{
      hasUserAttributes.push(attVal)
      addStringFlavor(att, attVal);
    }
  };

  const convertForDisplay = () => {
    setMatchAttributes(convertToString(hasMatchAttributes));
    setUserAttributes(convertToString(hasUserAttributes));
    if(missingAttributes.length) setMissingUserAttributes('Add: ' + convertToString(missingAttributes))
  };

  const filterAttributes = () => {
    for(const att in attributes){
      let attVal = attributes[att];
      if(att !== 'icon'){
        switch (section) {
          case 'Basics':
            const basicDefaults = ['Orientation', 'Gender'];
            sortAttributes(basicDefaults, att, attVal);
            break;
          case 'Pronouns':
            attVal === 'Pronouns' ? missingAttributes.push(attVal) : addStringFlavor(att, attVal);
            break;
          case 'Looks':
            const looksDefaults = [`Height`, 'Body type'];
            sortAttributes(looksDefaults, att, attVal);
            break;
          case 'Background':
            const bgDefaults = ['Politics', 'Education', 'Occupation', 'Religion', 'Sign'];

            if(Array.isArray(attVal)){
              if(attVal.length){
                addStringFlavor(att, attVal)
              }else{
                att === 'ethnicity' ? missingAttributes.push('Ethnicity') : missingAttributes.push('Language(s)');
              }
            }else{
              if(bgDefaults.indexOf(attVal) < 0){
                addStringFlavor(att, attVal);
              }else{
                missingAttributes.push(attVal);
              }
            }
            break;
          case 'Lifestyle':
            const lsDefaults = ['Smoking', 'Drinking', 'Marijuana', 'Diet'];
            sortAttributes(lsDefaults, att, attVal);
            break;
          case 'Family':
            const famDefaults = ['Children', 'Pets'];
            sortAttributes(famDefaults, att, attVal);
            break;
          case 'I am looking for':
            addStringFlavor(att, attVal);
            break;
          default:
            break;
        }
      }
    }
  };

  const addStringFlavor = (att, attVal) => {
    switch(att){
      case 'pronouns':
        hasMatchAttributes.push('Uses ' +  attVal + ' pronouns');
        break;
      case 'ethnicity':
        hasMatchAttributes.push(convertToString(attVal));
        break;
      case 'languages':
        hasMatchAttributes.push('Speaks ' + convertToString(attVal));
        break;
      case 'politics':
        hasMatchAttributes.push('Politically ' + attVal);
      case 'smoking':
        if(attVal === 'false'){
          hasMatchAttributes.push(`Doesn't smoke cigarettes`);
        }else{
          hasMatchAttributes.push('Smokes cigarettes ' + attVal);
        }
        break;
      case 'drinks':
        if(attVal === 'false'){
          hasMatchAttributes.push(`Doesn't drink`);
        }else{
          hasMatchAttributes.push('Drinks ' + attVal);
        }
        break;
      case 'marijuana':
        if(attVal === 'false'){
          hasMatchAttributes.push(`Doesn't smoke marijuana`);
        }else{
          hasMatchAttributes.push('Smokes marijuana ' + attVal);
        }
        break;
      case 'marijuana':
        if(attVal === 'false'){
          hasMatchAttributes.push(`Doesn't smoke marijuana`);
        }else{
          hasMatchAttributes.push('Smokes marijuana ' + attVal);
        }
        break;
      case 'children':
        if(attVal === 'false'){
          hasMatchAttributes.push(`Doesn't have kids`);
        }else{
          hasMatchAttributes.push('Has kid(s)');
        }
        break;
      case 'pets':
        if(attVal === 'false'){
          hasMatchAttributes.push(`Doesn't have pet(s)`);
        }else{
          hasMatchAttributes.push('Has ' + attVal);
        }
        break;
      case 'pref_gender':
        if(attVal === 'Gender'){
          hasMatchAttributes.push('Looking for people');
        }else{
          hasMatchAttributes.push('Looking for ' + attVal);
        }
        break;
      case 'pref_connections':
        if(attVal === 'Connections'){
          hasMatchAttributes.push(`for short & long term dating, hookups, and new friends.`);
        }else{
          hasMatchAttributes.push('for ' + attVal);
        }
        break;
      case 'pref_distance':
        break;
      case 'pref_age':
        break;
      default:
        hasMatchAttributes.push(attVal);
        break;
    }
  };

  const user =
  <>
      <div className='attribute-match user-pro'>
        <div className='user-pro-att-wrap'>
          <i className={attributes.icon} />
          <div className='user-pro-att'>
            <p className='user-pro-att-has'>{matchAttributes}</p>
            <p className='user-pro-att-miss'>{missingUserAttributes}</p>
          </div>
        </div>
        <div className='user-att-toggle'>
          <i className='fas fa-chevron-right'/>
        </div>
      </div>
  </>

  const match =
  <>
    <div className='attribute-match'>
      <i className={attributes.icon}/>
      <p className=''>{matchAttributes}</p>
    </div>
  </>

  return userOrMatch === 'user' ? user : match;
};

export default ProfileAttributes;