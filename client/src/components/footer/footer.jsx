import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestAllUsers } from '../../actions/user_actions';
import { fetchUsers } from '../../util/user_api_util';
import { useState } from 'react';
import Axios from 'axios';

const Footer = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    props.fetchList().then(users => {
      setData(users.users.data);
    })
  }, []);
  
  return <div>
    {
      data.map(item => {
        return <li>
          {item.name}
        </li>
      })
    }
  </div>
};

const mDTP = dispatch => ({
  fetchList: () => dispatch(requestAllUsers())
});

export default connect(null, mDTP)(Footer);