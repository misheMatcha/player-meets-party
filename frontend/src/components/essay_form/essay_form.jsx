import React, { useEffect } from 'react';

const EssayForm = props => {
  useEffect(() => {
    console.log(props)
  });
  return <>
    <div className=''>
      <div className=''>
        <p>{props.formType}</p>
        <p></p>
      </div>
    </div>
  </>
};

export default EssayForm;