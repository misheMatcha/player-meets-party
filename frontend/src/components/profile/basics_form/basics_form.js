import React, { useState, useEffect } from 'react';

const BasicsForm = props => {
  let user;
  const [name, setName] = useState('testing');

  useEffect(() => {
    if(props.user !== null || props.user === undefined) user = props.user;
    console.log(user)
    return () => {
    };
  });

  const updateInput = (event, field) => {
    switch(field){
      case 'name':
        setName(event.target.value)
        break;
      default:
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // console.log('submitted!')
    if(user !== undefined){
      props.editUser({
        _id: user._id,
        name: name
      })

    }
  };


  return(
    <div className='bf-test'>
      <form className='' onSubmit={event => handleSubmit(event)}>
        <input className='' type='text' value={name} placeholder='la la la name' onChange={event => updateInput(event, 'name')}></input>
        <button>update</button>
      </form>
    </div>
  );
};

export default BasicsForm;