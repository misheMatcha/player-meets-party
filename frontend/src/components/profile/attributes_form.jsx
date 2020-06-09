import React, { useEffect, useState } from 'react';
import { closeModal } from '../../actions/modal_actions';

const AttributesForm = props => {
  const [orientation, setOrientation ] = useState(props.user.orientation);
  const [gender, setGender ] = useState(props.user.gender);
  const [relationship_status, setRelationship_status] = useState(props.user.relationship_status);
  const [relationship_type, setRelationship_type] = useState(props.user.relationship_type);
  const [pronouns, setPronouns ] = useState(props.user.pronouns);
  const [height, setHeight] = useState(props.user.height);
  const [heightFt, setHeightFt] = useState(props.user.height.slice(0, 2));
  const [heightIn, setHeightIn] = useState(props.user.height.slice(2));
  const [body_type, setBody_type] = useState(props.user.body_type);
  const [ethnicity, setEthnicity] = useState(props.user.ethnicity);
  const [languages, setLanguages] = useState(props.user.languages);
  const [politics, setPolitics] = useState(props.user.politics);
  const [education, setEducation] = useState(props.user.education);
  const [occupation, setOccupation] = useState(props.user.occupation);
  const [religion, setReligion] = useState(props.user.religion);
  const [religion_weight, setReligion_weight] = useState(props.user.religion_weight);
  const [sign, setSign] = useState(props.user.sign);
  const [smoking, setSmoking] = useState(props.user.smoking);
  const [drinks, setDrinks] = useState(props.user.drinks);
  const [marijuana, setMarijuana] = useState(props.user.marijuana);
  const [diet, setDiet] = useState(props.user.diet);
  const [children, setChildren] = useState(props.user.children);
  const [pets, setPets] = useState(props.user.pets);
  const [pref_gender, setPref_gender] = useState(props.user.pref_gender);
  const [pref_distance, setPref_distance] = useState(props.user.pref_distance);
  const [pref_age, setPref_age] = useState(props.user.pref_age);
  const [pref_connections, setPref_connections] = useState(props.user.pref_connections);

  useEffect(() => {
  })

  const handleUpdate = (event, field) => {
    switch(field){
      case 'orientation':
        setOrientation(event.target.value);
        break;
      case 'pronouns':
        setPronouns(event.target.value);
        break;
      case 'height-ft':
        setHeightFt(event.target.value);
        break;
      case 'height-in':
        setHeightIn(event.target.value);
        break;
      case 'body-type':
        setBody_type(event.target.value);
        break;
      case 'smoking':
        setSmoking(event.target.value);
        break;
      case 'drinks':
        setDrinks(event.target.value);
        break;
      case 'marijuana':
        setMarijuana(event.target.value);
        break;
      case 'diet':
        setDiet(event.target.value);
        break;
      case 'politics':
        setPolitics(event.target.value);
        break;
      case 'education':
        setEducation(event.target.value);
        break;
      case 'religion':
        setReligion(event.target.value);
        break;
      case 'religion_weight':
        setReligion_weight(event.target.value);
        break;
      case 'sign':
        setSign(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event, formType) => {
    event.preventDefault();

    const modifiedUser = {
      _id: props.currentId
    };

    switch (formType) {
      case 'Basics':
        modifiedUser.orientation = orientation;
        modifiedUser.gender = gender;
        modifiedUser.relationship_status = relationship_status;
        modifiedUser.relationship_type = relationship_type;
        break;
      case 'Pronouns':
        modifiedUser.pronouns = pronouns;
        break;
      case 'Looks':
        modifiedUser.height = heightFt + heightIn;
        modifiedUser.body_type = body_type;
        break;
      case 'Background':
        modifiedUser.ethnicity = ethnicity;
        modifiedUser.languages = languages;
        modifiedUser.politics = politics;
        modifiedUser.education = education;
        modifiedUser.occupation = occupation;
        modifiedUser.religion = religion;
        modifiedUser.religion_weight = religion_weight;
        modifiedUser.sign = sign;
        break;
      case 'Lifestyle':
        modifiedUser.smoking = smoking;
        modifiedUser.drinks = drinks;
        modifiedUser.marijuana = marijuana;
        modifiedUser.diet = diet;
        break;
      case 'Family':
        modifiedUser.children = children;
        modifiedUser.pets = pets;
        break;
      case 'I am looking for':
        modifiedUser.pref_gender = pref_gender;
        modifiedUser.pref_distance = pref_distance;
        modifiedUser.pref_age = pref_age;
        modifiedUser.pref_connections = pref_connections;
        break;
      default:
        break;
    }
    // console.log(modifiedUser)

    props.updateUser(modifiedUser).then(() => props.closeModal());
  };

  const whichForm = formType => {
    switch (formType) {
      case 'Basics':
        return basicsContent;
      case 'Pronouns':
        return pronounsContent;
      case 'Looks':
        return looksContent;
      case 'Background':
        return backgroundContent;
      case 'Lifestyle':
        return lifestyleContent;
      case 'Family':
        return familyContent;
      case 'I am looking for':
        return lookingForContent;
      default:
        break;
    }
  };

  const basicsContent = <>
    <div className=''>
      basics
    </div>
  </>

  const pronounsContent = <>
    <div className='attribute-form-section'>
      <p className='attribute-form-section-title'>{props.formType}</p>
      <label className='attribute-form-section-label'>
        <input type='text' placeholder='ex: they/them, or enter your own' value={pronouns} onChange={event => handleUpdate(event, 'pronouns')}/>
      </label>
    </div>
  </>

  const looksContent = <>
    <div className='attribute-form-section display-flex jc-space-between'>
      <div className='attribute-form-section-wrap'>
        <p className='attribute-form-section-title'>Height</p>
        <div className='attribute-form-section display-flex'>
          <div className='selectlist-container-height'>
            <div className='selectlist-height'>
              <div className='select'>
                <select value={heightFt} onChange={event => handleUpdate(event, 'height-ft')}>
                  <option value="3'">3'</option>
                  <option value="4'">4'</option>
                  <option value="5'">5'</option>
                  <option value="6'">6'</option>
                  <option value="7'">7'</option>
                </select>
              </div>
            </div>
            <div className='selectlist-arrow-height'>
              <i className="fas fa-chevron-down" />
            </div>
          </div>
          <div className='selectlist-container-height input-spacing'>
            <div className='selectlist-height'>
              <div className='select'>
                <select value={heightIn} onChange={event => handleUpdate(event, 'height-in')}>
                  <option value='0"'>0"</option>
                  <option value='1"'>1"</option>
                  <option value='2"'>2"</option>
                  <option value='3"'>3"</option>
                  <option value='4"'>4"</option>
                  <option value='5"'>5"</option>
                  <option value='6"'>6"</option>
                  <option value='7"'>7"</option>
                  <option value='8"'>8"</option>
                  <option value='9"'>9"</option>
                  <option value='10"'>10"</option>
                  <option value='11"'>11"</option>
                </select>
              </div>
            </div>
            <div className='selectlist-arrow-height'>
              <i className="fas fa-chevron-down" />
            </div>
          </div>
        </div>
      </div>
      <div className='attribute-form-section-wrap'>
        <p className='attribute-form-section-title'>Body type</p>
        <div className='selectlist-container'>
          <div className='selectlist'>
            <div className='select'>
              <select value={body_type} onChange={event => handleUpdate(event, 'body-type')}>
                <option value='---'>---</option>
                <option value='Thin'>Thin</option>
                <option value='Overweight'>Overweight</option>
                <option value='Average build'>Average build</option>
                <option value='Fit'>Fit</option>
                <option value='Jacked'>Jacked</option>
                <option value='A little extra'>A little extra</option>
                <option value='Curvy'>Curvy</option>
                <option value='Full figured'>Full figured</option>
              </select>
            </div>
          </div>
          <div className='selectlist-arrow'>
            <i className="fas fa-chevron-down" />
          </div>
        </div>
      </div>
    </div>
  </>

  const backgroundContent = <>
    <div className=''>
      <div className=''>
        <p className='attribute-form-section-title'>Ethnicity</p>
      </div>
      <div className=''>
        <p className='attribute-form-section-title'>Speaks</p>
      </div>
      <div className='attribute-form-section-wrap'>
        <p className='attribute-form-section-title'>Politics</p>
        <div className='selectlist-container'>
          <div className='selectlist'>
            <div className='select'>
              <select value={politics} onChange={event => handleUpdate(event, 'politics')}>
                <option value='---'>---</option>
                <option value='Politically liberal'>Politically liberal</option>
                <option value='Politically moderate'>Politically moderate</option>
                <option value='Politically conservative'>Politically conservative</option>
                <option value='Other'>Other</option>
              </select>
            </div>
          </div>
          <div className='selectlist-arrow'>
            <i className="fas fa-chevron-down" />
          </div>
        </div>
      </div>
      <div className='attribute-form-section-wrap'>
        <p className='attribute-form-section-title'>Education</p>
        <div className='selectlist-container'>
          <div className='selectlist'>
            <div className='select'>
              <select value={education} onChange={event => handleUpdate(event, 'education')}>
                <option value='---'>---</option>
                <option value='High school'>High school</option>
                <option value='Trade/tech school'>Trade/tech school</option>
                <option value='In college'>In college</option>
                <option value='Undergraduate degree'>Undergraduate degree</option>
                <option value='In grad school'>In grad school</option>
                <option value='Graduate degree'>Graduate degree</option>
              </select>
            </div>
          </div>
          <div className='selectlist-arrow'>
            <i className="fas fa-chevron-down" />
          </div>
        </div>
      </div>
      <div className=''>
        <p className='attribute-form-section-title'>Occupation</p>
      </div>
      <div className=''>
        <p className='attribute-form-section-title'>Religion</p>
        <div className='display-flex jc-space-between'>
          <div className='selectlist-container'>
          <div className='selectlist'>
            <div className='select'>
              <select value={religion} onChange={event => handleUpdate(event, 'religion')}>
                <option value='---'>---</option>
                <option value='Agnostic'>Agnosticism</option>
                <option value='Atheism'>Atheism</option>
                <option value='Christian'>Christianity</option>
                <option value='Jewish'>Judaism</option>
                <option value='Catholic'>Catholicism</option>
                <option value='Muslim'>Islam</option>
                <option value='Hindu'>Hinduism</option>
                <option value='Buddhist'>Buddhism</option>
                <option value='Sikh'>Sikh</option>
                <option value='Other'>Other</option>
              </select>
            </div>
          </div>
          <div className='selectlist-arrow'>
            <i className="fas fa-chevron-down" />
          </div>
        </div>
        <div className='selectlist-container'>
          <div className='selectlist'>
            <div className='select'>
              <select value={religion_weight} onChange={event => handleUpdate(event, 'religion_weight')}>
                <option value='---'>---</option>
                <option value="(and it's important)">and it's important</option>
                <option value="(but it's not important)">but it's not important</option>
                <option value='(and laughing about it)'>and laughing about it</option>
              </select>
            </div>
          </div>
          <div className='selectlist-arrow'>
            <i className="fas fa-chevron-down" />
          </div>
        </div>
        </div>
      </div>
      <div className='attribute-form-section-wrap'>
        <p className='attribute-form-section-title'>Sign</p>
        <div className='selectlist-container'>
          <div className='selectlist'>
            <div className='select'>
              <select value={sign} onChange={event => handleUpdate(event, 'sign')}>
                <option value='---'>---</option>
                <option value='Aquarius'>Aquarius</option>
                <option value='Pisces'>Pisces</option>
                <option value='Aries'>Aries</option>
                <option value='Taurus'>Taurus</option>
                <option value='Gemini'>Gemini</option>
                <option value='Cancer'>Cancer</option>
                <option value='Leo'>Leo</option>
                <option value='Virgo'>Virgo</option>
                <option value='Libra'>Libra</option>
                <option value='Scorpio'>Scorpio</option>
                <option value='Sagittarius'>Sagittarius</option>
                <option value='Capricorn'>Capricorn</option>
              </select>
            </div>
          </div>
          <div className='selectlist-arrow'>
            <i className="fas fa-chevron-down" />
          </div>
        </div>
      </div>
    </div>
  </>

  const lifestyleContent = <>
    <div className='attribute-form-section display-flex flex-column'>
      <div className='attribute-form-section-position jc-space-between'>
        <div className='attribute-form-section-wrap'>
          <p className='attribute-form-section-title'>Tobacco</p>
          <div className='selectlist-container'>
            <div className='selectlist'>
              <div className='select'>
                <select value={smoking} onChange={event => handleUpdate(event, 'smoking')}>
                  <option value='---'>---</option>
                  <option value='often'>Often</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
              </div>
            </div>
            <div className='selectlist-arrow'>
              <i className="fas fa-chevron-down" />
            </div>
          </div>
        </div>
        <div className='attribute-form-section-wrap'>
          <p className='attribute-form-section-title'>Drinks</p>
          <div className='selectlist-container'>
            <div className='selectlist'>
              <div className='select'>
                <select value={drinks} onChange={event => handleUpdate(event, 'drinks')}>
                  <option value='---'>---</option>
                  <option value='often'>Often</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
              </div>
            </div>
            <div className='selectlist-arrow'>
              <i className="fas fa-chevron-down" />
            </div>
          </div>
        </div>
      </div>
      <div className='attribute-form-section-position jc-space-between height-spacing'>
        <div className='attribute-form-section-wrap'>
          <p className='attribute-form-section-title'>Marijuana</p>
          <div className='selectlist-container'>
            <div className='selectlist'>
              <div className='select'>
                <select value={marijuana} onChange={event => handleUpdate(event, 'marijuana')}>
                  <option value='---'>---</option>
                  <option value='often'>Often</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
              </div>
            </div>
            <div className='selectlist-arrow'>
              <i className="fas fa-chevron-down" />
            </div>
          </div>
        </div>
        <div className='attribute-form-section-wrap'>
          <p className='attribute-form-section-title'>Diet</p>
          <div className='selectlist-container'>
            <div className='selectlist'>
              <div className='select'>
                <select value={diet} onChange={event => handleUpdate(event, 'diet')}>
                  <option value='---'>---</option>
                  <option value='Omnivore'>Omnivore</option>
                  <option value='Vegetarian'>Vegetarian</option>
                  <option value='Vegan'>Vegan</option>
                  <option value='Kosher'>Kosher</option>
                  <option value='Halal'>Halal</option>
                  <option value='Gluten Free'>Gluten Free</option>
                  <option value='Pescatarian'>Pescatarian</option>
                  <option value='Jain'>Jain</option>
                  <option value='Lactovegetarian'>Lactovegetarian</option>
                  <option value='Intermittent Fasting'>Intermittent Fasting</option>
                  <option value='Ketogenic'>Ketogenic</option>
                </select>
              </div>
            </div>
            <div className='selectlist-arrow'>
              <i className="fas fa-chevron-down" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

  const familyContent = <>
    <div className=''>
      fam
    </div>
  </>

  const lookingForContent = <>
    <div className=''>
      looking for
    </div>
  </>

  return <>
    <div className='attribute-form'>
      <div className='attribute-form-container'>
        <div className='attribute-form-header'>
          <p className='attribute-form-header-title'>{props.formType}</p>
          <div className='attribute-form-header-close' onClick={() => props.closeModal()}>X</div>
        </div>
        <div className='attribute-form-sections'>
          <form className='' onSubmit={event => handleSubmit(event, props.formType)}>
            {
              whichForm(props.formType)
            }
            <div className='attribute-form-buttons'>
              <button className='attribute-form-buttons-save' type='submit'>SAVE</button>
              <button className='attribute-form-buttons-cancel' type='button' onClick={() => props.closeModal()}>CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>;
};

export default AttributesForm;