import React, { useEffect } from 'react';

const ProfileAttributes = ({userOrMatch, section, attributes}) => {
  useEffect(() => {
    console.log(attributes)
  }, []);
  const user = <>
    <div className=''>
      user
    </div>
  </>

  const match = <>
    <div className='attribute-match'>
      <i className={attributes.icon}/>
      <p>{section}</p>
    </div>
  </>

  return userOrMatch === 'user' ? user : match;
};

export default ProfileAttributes;