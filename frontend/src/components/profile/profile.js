import React, { useEffect } from 'react';

const Profile = props => {
  const placeholder = {
    username: 'Mishe',
    profile: 'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg',
    age: 33,
    location: 'Rainbow Road, MK',
    abtme: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue diam id aliquam sagittis. Aenean ac dapibus sapien, sodales pretium sem. Mauris enim dolor, rhoncus consectetur porttitor non, volutpat in leo. Mauris nibh massa, blandit sit amet consequat sit amet, porttitor nec dolor. Ut congue quis lectus at dapibus. Pellentesque a justo non elit ornare fringilla. Donec in sodales sem. Donec convallis eget mauris et tincidunt. Cras dictum justo a pharetra tempor. Suspendisse molestie convallis sollicitudin. Quisque sapien justo, molestie sed eros vitae, pellentesque venenatis lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer fermentum nunc odio, pellentesque lobortis dui ultrices vel. Sed a eros ligula. Donec luctus felis sed tortor accumsan, nec maximus velit cursus.

    Nunc molestie enim lorem, ac porta lectus semper at. Vestibulum euismod, nisi at venenatis mattis, eros mauris suscipit est, non euismod tortor nunc vel risus. Ut eu felis at enim rhoncus molestie eu eu magna. Cras gravida, est et feugiat fringilla, lacus dui ultricies erat, ut accumsan eros risus id tortor. Vivamus porta, lorem nec consectetur sollicitudin, sapien lacus eleifend sem, vel fermentum lacus nisl non erat. Duis egestas est turpis, vitae cursus nibh pharetra sed. Donec consectetur mattis massa pharetra fringilla. Aenean sed dictum sapien, maximus scelerisque ligula. Nullam ut lorem varius, finibus ipsum in, porttitor quam. Morbi nec vulputate nisl, sit amet vehicula tellus. Proin id scelerisque neque. Sed dui eros, fermentum ut porta in, imperdiet vel risus. Suspendisse diam lorem, finibus a sodales vestibulum, viverra et leo.

    Fusce posuere, nisi sit amet cursus bibendum, erat est fringilla libero, at iaculis urna ipsum quis eros. Nam nec ligula purus. Ut ut dictum mi. Cras id auctor nulla, sed commodo elit. Donec convallis volutpat leo in accumsan. Duis nec maximus tortor. Sed nec turpis justo. Proin posuere lobortis ipsum. Aenean vel eleifend mi, vitae tempor mauris. Fusce enim lectus, tristique vitae rhoncus id, commodo non tellus. Aliquam erat volutpat. Vestibulum gravida nunc a pulvinar aliquet. In condimentum tortor velit, vel pellentesque felis bibendum et. Nunc cursus vitae tortor eget lobortis.`
  };

  // const section = {
  //     aboutme: ['My self-summary', 'Favorite thing about the place I live', 'Me, a Haiku', 'Most people that know me would say I\'m', 'Favorite memory from my childhood', 'Thing\'s I am not']
  // };

  useEffect(() => {
    const setTitle = () => {
      document.title = `${placeholder.username} / ${placeholder.age} / ${placeholder.location}`;
    };
    setTitle();
    
    return(() => {
    });
  }, [placeholder.username, placeholder.age, placeholder.location]);

  return(
    <div className='profile'>
      <div className='profile-basics'>
        <div className='profile-basics-info'>
          <img className='profile-basics-img' src={placeholder.profile} alt='profile'/>
          <div className='profile-basics-details'>
            <div className='profile-basics-user'>{placeholder.username} <i className='fas fa-pencil-alt'/></div>
            <div className='profile-basics-asl'>
              <p className='profile-basics-asl-age'>{placeholder.age}</p>
              <p className='profile-basics-asl-spacer'>•</p>
              <p className='profile-basics-asl-location'>{placeholder.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='profile-content-wrap'>
        <div className='profile-content'>
          <div className='profile-content-questions'>
            <div className='profile-content-section'>
              <div className='profile-content-aboutme'>
                <p className='profile-content-aboutme-title'>ABOUT ME</p>
                <p className='profile-content-aboutme-question'>My self-summary</p>
              </div>
              <i className='fas fa-angle-down'/>
            </div>
            <div className='profile-content-aboutme-essay'>
              <div className='profile-content-aboutme-essay-text'>{placeholder.abtme}
              <span className='profile-content-aboutme-essay-edit'><i className='fas fa-pencil-alt'/> <b>WRITE</b></span>
              </div>
            </div>
          </div>
          <div className='profile-content-details-container'>
            <div className='profile-content-details'>
              <div className='profile-content-details-opt'>
                <i className='fas fa-cubes'/>
                <p className='profile-content-details-desc'>Bisexual, Woman, Single, Monogamous</p>
              </div>
              <div className='profile-content-details-edit'>
                <i className='fas fa-chevron-right'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;