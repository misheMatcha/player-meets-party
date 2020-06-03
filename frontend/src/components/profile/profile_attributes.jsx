import React, { useEffect } from 'react';

const ProfileAttributes = ({userOrMatch, section, attributes}) => {
  const hasAttributes = [];
  const missingAttributes = [];
  const stringifiedAttributes = [];

  useEffect(() => {
    sortAndStringifyAttributes();
    console.log('has: ' ,hasAttributes)
    console.log('missing: ' ,missingAttributes)
    console.log('str: ' ,stringifiedAttributes)
  });

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
                bgStringy(att, attVal);
                hasAttributes.push(attVal.join(', '));
              }else{
                att === 'ethnicity' ? missingAttributes.push('Ethnicity') : missingAttributes.push('Language');
              }
            }else{
              console.log('not array')
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
        stringifiedAttributes.push(attVal.join(', '));
        break;
      case 'language':
        let attStr = attVal.join(', ');
        stringifiedAttributes.push(('Speaks ' + attStr));
        break;
      default:
        break;
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
      <p className=''>
        {hasAttributes.join(', ')}
      </p>
    </div>
  </>

  return userOrMatch === 'user' ? user : match;
};

export default ProfileAttributes;