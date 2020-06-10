import React, { useEffect, useState } from 'react';
import { convertToString } from '../../util/general_util';

const ProfileAttributes = props => {
  const hasMatchAttributes = [];
  const hasUserAttributes = [];
  const missingAttributes = [];
  const [matchAttributes, setMatchAttributes] = useState('');
  const [missingUserAttributes, setMissingUserAttributes] = useState('');

  useEffect(() => {
    filterAttributes();
    convertForDisplay();
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
    if(missingAttributes.length) setMissingUserAttributes('Add: ' + convertToString(missingAttributes))
  };

  const anyEthnicities = ethnicities => {
    for (let ethnicity in ethnicities) {
      if (ethnicities[ethnicity]) return true;
    }
    return false;
  };

  const sortEthnicities = ethnicities => {
    const updatedEthnicities = [];
    for(let ethnicity in ethnicities){
      if(ethnicities[ethnicity]) updatedEthnicities.push(ethnicity);
    }
    return updatedEthnicities;
  };

  const filterAttributes = () => {
    for(const att in props.attributes){
      let attVal = props.attributes[att];
      if(att !== 'icon'){
        switch (props.section) {
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
            const bgAttributes = ['politics', 'education', 'occupation', 'religion', 'sign'];
            const bgDefaults = ['Politics', 'Education', 'Occupation', 'Religion', 'Sign'];

            switch(att){
              case 'languages':
                if(attVal.length){
                  addStringFlavor(att, attVal);
                }else{
                  missingAttributes.push('Language(s)');
                }
                break;
              case 'ethnicity':
                switch(anyEthnicities(attVal)){
                case true:
                  addStringFlavor(att, sortEthnicities(attVal));
                  break;
                case false:
                  missingAttributes.push('Ethnicity');
                  break;
                default:
                  break;
                }
                break;
              case 'religion_weight':
                break;
              case 'fluency':
                break;
              case 'employer':
                break;
              default:
                if(attVal){
                  addStringFlavor(att, attVal);
                }else{
                  let bgAttIdx = bgAttributes.indexOf(att);
                  missingAttributes.push(bgDefaults[bgAttIdx]);
                }
                break;
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

  const sortLanguagesByFluency = (languages, fluencies) => {
    const speaks = [];
    const some = [];
    for(let i = 0; i < languages.length; i++){
      let fluency = fluencies[i];
      let language = languages[i];
      if(fluency === '' || fluency === 'Fluently'){
        speaks.push(language);
      }else{
        some.push(language);
      }
    }

    let fluentLanguages = convertToString(speaks);
    let someLanguages = convertToString(some);

    if(speaks.length && some.length){
      hasMatchAttributes.push('Speaks ' + fluentLanguages + ', and some ' + someLanguages);
    }else if(speaks.length && !some.length){
      hasMatchAttributes.push('Speaks ' + fluentLanguages);
    }else if(!speaks.length && some.length){
      hasMatchAttributes.push('Speaks some ' + someLanguages);
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
        sortLanguagesByFluency(attVal, props.attributes.fluency)
        break;
      case 'fluency':
        // this attribute is only meant to enhance flavor and shouldn't be directly added to the array
        break;
      case 'religion':
        if(props.attributes.religion_weight){
          if (props.attributes.religion_weight !== ''){
            hasMatchAttributes.push(attVal + ' ' + props.attributes.religion_weight);
          }
        }else{
          hasMatchAttributes.push(attVal);
        }
        break;
      case 'religion_weight':
        break;
      case 'occupation':
        if(props.attributes.employer){
          hasMatchAttributes.push(attVal + ' at ' + props.attributes.employer);
        }else{
          hasMatchAttributes.push(attVal);
        }
        break;
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
      <div className='attribute-match user-pro' onClick={() => {
        switch(props.section){
          case 'Basics':
            props.basics();
            break;
          case 'Pronouns':
            props.pronouns();
            break;
          case 'Looks':
            props.looks();
            break;
          case 'Background':
            props.background();
            break;
          case 'Lifestyle':
            props.lifestyle();
            break;
          case 'Family':
            props.family();
            break;
          case 'I am looking for':
            props.lookingFor();
            break;
          default:
            break;
        }
      }}>
        <div className='user-pro-att-wrap'>
          <i className={props.attributes.icon} />
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
      <i className={props.attributes.icon}/>
      <p className=''>{matchAttributes}</p>
    </div>
  </>

  return props.userOrMatch === 'user' ? user : match;
};

export default ProfileAttributes;