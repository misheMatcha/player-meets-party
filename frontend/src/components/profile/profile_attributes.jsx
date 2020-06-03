import React, { useEffect } from 'react';

const ProfileAttributes = ({userOrMatch, section, attributes}) => {
  useEffect(() => {
    convertAttributesToTag(section)
    // console.log(hasAttributes)
    // console.log(missingAttributes)
  });

  const hasAttributes = [];
  const missingAttributes = [];
  
  const convertAttributesToTag = () => {
    // omit icon since it is a key
    // refactor later - possibly redundant since profile also has something to determine whether or not it is a default value
    for(const att in attributes){
      if(att !== 'icon'){
        switch(section){
          case 'Basics':
            if(att === 'Orientation' || att === 'Gender'){
              missingAttributes.push(attributes[att]);
            }else{
              hasAttributes.push(attributes[att]);
            }
            break;
          case 'Pronouns':
            if(att === 'Pronouns'){
              missingAttributes.push(attributes[att]);
            }else{
              hasAttributes.push(attributes[att]);
            }
            break;
          case 'Looks':
            if(att === `0"0'` || att === 'Body type'){
              missingAttributes.push(attributes[att]);
            }else{
              hasAttributes.push(attributes[att]);
            }
            break;
          case 'Background':
            // console.log(att)
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
      <p>{section}</p>
    </div>
  </>

  return userOrMatch === 'user' ? user : match;
};

export default ProfileAttributes;