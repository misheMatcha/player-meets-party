import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { calculateAge } from '../../util/general_util';

const Doubletake = props => {
  const [listIdx, setListIdx] = useState(0);
  const user = props.users ? props.users[listIdx] : '';
  const testPhoto = 'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg';
  const match = '87%';
  const location = 'Mountain View, CA';

  useEffect(() => {
    if(!props.users) props.fetchUsers();
    if(user._id === localStorage.currentId) setListIdx(listIdx + 1);
    return(() => {
    });
  });

  return <div className='doubletake-container'>
    <div className='doubletake-bg'>
      <div className='doubletake-bg-header'/>
    </div>
    <div className='doubletake-content'>
      <div className='doubletake'>
        <div className='doubletake-header'>
          <div className='doubletake-matchlist-wrap'>
            <div className='doubletake-undo'>
              <button type='button' className='fas fa-undo-alt' />
            </div>
            <div className='doubletake-matchlist'>
              <img src={testPhoto} alt='match'/>
              <img src={testPhoto} alt='match'/>
              <img src={testPhoto} alt='match'/>
              <img src={testPhoto} alt='match'/>
              <img src={testPhoto} alt='match'/>
              <img src={testPhoto} alt='match'/>
              <img src={testPhoto} alt='match'/>
              <img src={testPhoto} alt='match'/>
              <img src={testPhoto} alt='match'/>
              <img src={testPhoto} alt='match'/>
            </div>
          </div>
        </div>
        <div className='doubletake-preview'>
          <div className='doubletake-preview-info'>
            <div className='doubletake-preview-info-wrap'>
              <div className='doubletake-preview-info-asl'>
                <p className='doubletake-preview-info-asl-name'>{user.name}</p>
                <div className='doubletake-preview-info-asl-details'>
                  <p>{calculateAge(user.birthday)}</p>
                  <p className='doubletake-preview-info-asl-details-spacer'>•</p>
                  <p>{location}</p>
                  <p className='doubletake-preview-info-asl-details-spacer'>•</p>
                  <p>{match} Match</p>
                  <Link to={`/profile/${user._id}`}>View Profile <i className="fas fa-chevron-right"/></Link>
                </div>
              </div>
            </div>
            <div className='doubletake-preview-info-buttons'>
              <button className='doubletake-preview-pass'>X PASS</button>
              <button className='doubletake-preview-like'><i className="fas fa-heart"/>LIKE</button>
            </div>
          </div>
          <div className='doubletake-gallery-wrap'>
            <div className='doubletake-gallery'>
              <img src={testPhoto} alt='match' />
              <img src={testPhoto} alt='match' />
              <img src={testPhoto} alt='match' />
              <img src={testPhoto} alt='match' />
              <img src={testPhoto} alt='match' />
            </div>
          </div>
          <div className='doubletake-preview-footer-wrap'>
            <p>If you like each other, we’ll let you know!</p>
            <div className='doubletake-preview-footer'>
              <button className='doubletake-preview-footer-selected'/>
              <button className='doubletake-preview-footer-notselected'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Doubletake;