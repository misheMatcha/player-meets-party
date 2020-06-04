import React, { useEffect, useState } from 'react';
import { convertToString } from '../../util/general_util';

const ProfileAttributes = ({userOrMatch, section, attributes}) => {
  const hasAttributes = [];
  const missingAttributes = [];
  const [matchAttributes, setMatchAttributes] = useState('');

  useEffect(() => {
    sortAndStringifyAttributes();
    console.log('has: ', hasAttributes)
    console.log('missing: ', missingAttributes)
  }, []);

  const sortAndStringifyAttributes = () => {
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
            if(Array.isArray(attVal)){
              if(attVal.length){
                // console.log(attVal)
                bgStringy(att, attVal)
              }else{
                att === 'ethnicity' ? missingAttributes.push('Ethnicity') : missingAttributes.push('Language');
              }
            }else{
              // console.log('not array')
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

  const bgStringy = (att, attVal) => {
    switch(att){
      case 'ethnicity':
        hasAttributes.push(convertToString(attVal));
        break;
      case 'languages':
        hasAttributes.push('Speaks ' + convertToString(attVal));
        break;
      default:
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