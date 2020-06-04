import React, { useEffect, useState } from 'react';
import { convertToString } from '../../util/general_util';

const ProfileAttributes = ({userOrMatch, section, attributes}) => {
  const hasAttributes = [];
  const missingAttributes = [];
  const [matchAttributes, setMatchAttributes] = useState('');

  useEffect(() => {
    checkAndSortAttributes();
  });

  const checkAndSortAttributes = () => {
    for(const att in attributes){
      let attVal = attributes[att];
      if(att !== 'icon'){
        switch (section) {
          case 'Basics':
            break;
          case 'Pronouns':
            break;
          case 'Looks':
            break;
          case 'Background':
            const bgDefaults = ['Politics', 'Education', 'Occupation', 'Religion', 'Sign'];

            if(Array.isArray(attVal)){
              if(attVal.length){
                addStringFlavor(att, attVal)
              }else{
                att === 'ethnicity' ? missingAttributes.push('Ethnicity') : missingAttributes.push('Language');
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
            break;
          case 'Family':
            break;
          case 'I am looking for':
            break;
          default:
            break;
        }
      }
    }
  };

  const addStringFlavor = (att, attVal) => {
    switch(att){
      case 'ethnicity':
        hasAttributes.push(convertToString(attVal));
        break;
      case 'languages':
        hasAttributes.push('Speaks ' + convertToString(attVal));
        break;
      case 'politics':
        hasAttributes.push('Politically ' + attVal);
        break;
      default:
        hasAttributes.push(attVal);
        break;
    }
    setMatchAttributes(convertToString(hasAttributes))
  };

  const user =
  <>
      <div className='attribute-match'>
        <i className={attributes.icon} />
        <p>{section}</p>
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