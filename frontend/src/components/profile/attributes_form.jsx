import React, { useEffect, useState } from 'react';
import { closeModal } from '../../actions/modal_actions';

const AttributesForm = props => {
  const [orientation, setOrientation ] = useState(props.user.orientation);
  const [gender, setGender ] = useState(props.user.gender);
  const [relationship_status, setRelationship_status] = useState(props.user.relationship_status);
  const [relationship_type, setRelationship_type] = useState(props.user.relationship_type);
  const [pronouns, setPronouns ] = useState(props.user.pronouns);
  const [heightFt, setHeightFt] = useState(props.user.height.slice(0, 2));
  const [heightIn, setHeightIn] = useState(props.user.height.slice(2));
  const [body_type, setBody_type] = useState(props.user.body_type);
  const [ethnicity, setEthnicity] = useState(props.user.ethnicity);
  const [asian, setAsian] = useState(props.user.ethnicity['Asian']);
  const [black, setBlack] = useState(props.user.ethnicity['Black']);
  const [latin, setLatin] = useState(props.user.ethnicity['Hispanic / Latin']);
  const [indian, setIndian] = useState(props.user.ethnicity['Indian']);
  const [middleEastern, setMiddleEastern] = useState(props.user.ethnicity['Middle Eastern']);
  const [nativeAmerican, setNativeAmerican] = useState(props.user.ethnicity['Native American']);
  const [pacificIslander, setPacificIslander] = useState(props.user.ethnicity['Pacific Islander']);
  const [white, setWhite] = useState(props.user.ethnicity['White']);
  const [other, setOther] = useState(props.user.ethnicity['Other']);
  const [language1, setLanguage1] = useState(props.user.languages[0]);
  const [language2, setLanguage2] = useState(props.user.languages[1]);
  const [language3, setLanguage3] = useState(props.user.languages[2]);
  const [language4, setLanguage4] = useState(props.user.languages[3]);
  const [language5, setLanguage5] = useState(props.user.languages[4]);
  const [fluency1, setFluency1] = useState(props.user.fluency[0]);
  const [fluency2, setFluency2] = useState(props.user.fluency[1]);
  const [fluency3, setFluency3] = useState(props.user.fluency[2]);
  const [fluency4, setFluency4] = useState(props.user.fluency[3]);
  const [fluency5, setFluency5] = useState(props.user.fluency[4]);
  const [politics, setPolitics] = useState(props.user.politics);
  const [education, setEducation] = useState(props.user.education);
  const [occupation, setOccupation] = useState(props.user.occupation);
  const [employer, setEmployer] = useState(props.user.employer);
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
  });

  const handleUpdate = (event, field) => {
    switch(field){
      case 'orientation':
        setOrientation(event.target.value);
        break;
      case 'gender':
        setGender(event.target.value);
        break;
      case 'relationship_type':
        setRelationship_type(event.target.value);
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
      case 'Asian':
        setAsian(!asian);
        break;
      case 'Black':
        setBlack(!black);
        break;
      case 'Hispanic / Latin':
        setLatin(!latin);
        break;
      case 'Indian':
        setIndian(!indian);
        break;
      case 'Middle Eastern':
        setMiddleEastern(!middleEastern);
        break;
      case 'Native American':
        setNativeAmerican(!nativeAmerican);
        break;
      case 'Pacific Islander':
        setPacificIslander(!pacificIslander);
        break;
      case 'White':
        setWhite(!white);
        break;
      case 'Other':
        setOther(!other);
        break;
      case 'language1':
        setLanguage1(event.target.value);
        break;
      case 'language2':
        setLanguage2(event.target.value);
        break;
      case 'language3':
        setLanguage3(event.target.value);
        break;
      case 'language4':
        setLanguage4(event.target.value);
        break;
      case 'language5':
        setLanguage5(event.target.value);
        break;
      case 'fluency1':
        setFluency1(event.target.value);
        break;
      case 'fluency2':
        setFluency2(event.target.value);
        break;
      case 'fluency3':
        setFluency3(event.target.value);
        break;
      case 'fluency4':
        setFluency4(event.target.value);
        break;
      case 'fluency5':
        setFluency5(event.target.value);
        break;
      case 'politics':
        setPolitics(event.target.value);
        break;
      case 'education':
        setEducation(event.target.value);
        break;
      case 'occupation':
        setOccupation(event.target.value);
        break;
      case 'employer':
        setEmployer(event.target.value);
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
      default:
        break;
    }
  };

  const addLanguagesToArray = languages => {
    const updatedLanguages = [];
    for(let i = 0; i < languages.length; i++){
      let language = languages[i];
      if(language && language !== ''){
        updatedLanguages.push(language);
      }
    }
    return updatedLanguages;
  };

  const addFluencyToArray = (languages, fluencies) => {
    const updatedFluencies = [];
    for(let i = 0; i < fluencies.length; i++){
      let fluency = fluencies[i];
      let language = languages[i];
      if(language){
        if(!fluency){
          updatedFluencies.push('');
        }else{
          updatedFluencies.push(fluency);
        }
      }
    }
    return updatedFluencies;
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
        modifiedUser.ethnicity = {
          'Asian': asian,
          'Black': black,
          'Hispanic / Latin': latin,
          'Indian': indian,
          'Middle Eastern': middleEastern,
          'Native American': nativeAmerican,
          'Pacific Islander': pacificIslander,
          'White': white,
          'Other': other
        };
        modifiedUser.languages = addLanguagesToArray([language1, language2, language3, language4, language5]);
        modifiedUser.fluency = addFluencyToArray([language1, language2, language3, language4, language5], [fluency1, fluency2, fluency3, fluency4, fluency5]);
        modifiedUser.politics = politics;
        modifiedUser.education = education;
        modifiedUser.occupation = occupation;
        modifiedUser.employer = employer;
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
                <option value=''>—</option>
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
        <div className='display-flex jc-space-between'>
          <div className='ethnicity-wrap'>
            <label>
              <input type='checkbox' checked={asian} onChange={event => handleUpdate(event, 'Asian')}/>
              Asian
            </label>
            <label>
              <input type='checkbox' checked={black} onChange={event => handleUpdate(event, 'Black')}/>
              Black
            </label>
            <label>
              <input type='checkbox' checked={latin} onChange={event => handleUpdate(event, 'Hispanic / Latin')}/>
              Hispanic / Latin
            </label>
          </div>
          <div className='ethnicity-wrap'>
            <label>
              <input type='checkbox' checked={indian} onChange={event => handleUpdate(event, 'Indian')}/>
              Indian
            </label>
            <label>
              <input type='checkbox' checked={middleEastern} onChange={event => handleUpdate(event, 'Middle Eastern')}/>
              Middle Eastern
            </label>
            <label>
              <input type='checkbox' checked={nativeAmerican} onChange={event => handleUpdate(event, 'Native American')}/>
              Native American
            </label>
          </div>
          <div className='ethnicity-wrap'>
            <label>
              <input type='checkbox' checked={pacificIslander} onChange={event => handleUpdate(event, 'Pacific Islander')}/>
              Pacific Islander
            </label>
            <label>
              <input type='checkbox' checked={white} onChange={event => handleUpdate(event, 'White')}/>
              White
            </label>
            <label>
              <input type='checkbox' checked={other} onChange={event => handleUpdate(event, 'Other')}/>
              Other
            </label>
          </div>
        </div>
      </div>
      <div className='height-spacing'>
        <p className='attribute-form-section-title'>Speaks</p>
        <div className='display-flex jc-space-between'>
          <div className='selectlist-container'>
            <div className='selectlist'>
              <div className='select'>
                <select value={language1} onChange={event => handleUpdate(event, 'language1')}>
                  <option value=''>—</option>
                  <option value="English">English</option>
                  <option value="Afrikaans">Afrikaans</option>
                  <option value="Albanian">Albanian</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Armenian">Armenian</option>
                  <option value="Basque">Basque</option>
                  <option value="Belarusian">Belarusian</option>
                  <option value="Bengali">Bengali</option>
                  <option value="Breton">Breton</option>
                  <option value="Bulgarian">Bulgarian</option>
                  <option value="Catalan">Catalan</option>
                  <option value="Cebuano">Cebuano</option>
                  <option value="Chechen">Chechen</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Chinese (Cantonese)">Chinese (Cantonese)</option>
                  <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                  <option value="C++">C++</option>
                  <option value="Croatian">Croatian</option>
                  <option value="Czech">Czech</option>
                  <option value="Danish">Danish</option>
                  <option value="Dutch">Dutch</option>
                  <option value="Esperanto">Esperanto</option>
                  <option value="Estonian">Estonian</option>
                  <option value="Finnish">Finnish</option>
                  <option value="French">French</option>
                  <option value="Frisian">Frisian</option>
                  <option value="Georgian">Georgian</option>
                  <option value="German">German</option>
                  <option value="Greek">Greek</option>
                  <option value="Gujarati">Gujarati</option>
                  <option value="Ancient Greek">Ancient Greek</option>
                  <option value="Hawaiian">Hawaiian</option>
                  <option value="Hebrew">Hebrew</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Hungarian">Hungarian</option>
                  <option value="Icelandic">Icelandic</option>
                  <option value="Ilongo">Ilongo</option>
                  <option value="Indonesian">Indonesian</option>
                  <option value="Irish">Irish</option>
                  <option value="Italian">Italian</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Khmer">Khmer</option>
                  <option value="Korean">Korean</option>
                  <option value="Latin">Latin</option>
                  <option value="Latvian">Latvian</option>
                  <option value="Lisp">LISP</option>
                  <option value="Lithuanian">Lithuanian</option>
                  <option value="Malay">Malay</option>
                  <option value="Maori">Maori</option>
                  <option value="Mongolian">Mongolian</option>
                  <option value="Norwegian">Norwegian</option>
                  <option value="Occitan">Occitan</option>
                  <option value="Other">Other</option>
                  <option value="Persian">Persian</option>
                  <option value="Polish">Polish</option>
                  <option value="Portuguese">Portuguese</option>
                  <option value="Punjabi">Punjabi</option>
                  <option value="Romanian">Romanian</option>
                  <option value="Rotuman">Rotuman</option>
                  <option value="Russian">Russian</option>
                  <option value="Sanskrit">Sanskrit</option>
                  <option value="Sardinian">Sardinian</option>
                  <option value="Serbian">Serbian</option>
                  <option value="Sign Language">Sign Language</option>
                  <option value="Slovak">Slovak</option>
                  <option value="Slovenian">Slovenian</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Swahili">Swahili</option>
                  <option value="Swedish">Swedish</option>
                  <option value="Tagalog">Tagalog</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Thai">Thai</option>
                  <option value="Tibetan">Tibetan</option>
                  <option value="Turkish">Turkish</option>
                  <option value="Ukrainian">Ukrainian</option>
                  <option value="Urdu">Urdu</option>
                  <option value="Vietnamese">Vietnamese</option>
                  <option value="Welsh">Welsh</option>
                  <option value="Yiddish">Yiddish</option>
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
                <select value={fluency1} onChange={event => handleUpdate(event, 'fluency1')}>
                  <option value=''>—</option>
                  <option value='Fluently'>Fluently</option>
                  <option value='Somewhat'>Somewhat</option>
                </select>
              </div>
            </div>
            <div className='selectlist-arrow'>
              <i className="fas fa-chevron-down" />
            </div>
          </div>
        </div>

        {
          language1 && language1 !== '' ?
          <div className='display-flex jc-space-between height-spacing-mini'>
            <div className='selectlist-container'>
              <div className='selectlist'>
                <div className='select'>
                  <select value={language2} onChange={event => handleUpdate(event, 'language2')}>
                    <option value=''>—</option>
                    <option value="English">English</option>
                    <option value="Afrikaans">Afrikaans</option>
                    <option value="Albanian">Albanian</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Armenian">Armenian</option>
                    <option value="Basque">Basque</option>
                    <option value="Belarusian">Belarusian</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Breton">Breton</option>
                    <option value="Bulgarian">Bulgarian</option>
                    <option value="Catalan">Catalan</option>
                    <option value="Cebuano">Cebuano</option>
                    <option value="Chechen">Chechen</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Chinese (Cantonese)">Chinese (Cantonese)</option>
                    <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                    <option value="C++">C++</option>
                    <option value="Croatian">Croatian</option>
                    <option value="Czech">Czech</option>
                    <option value="Danish">Danish</option>
                    <option value="Dutch">Dutch</option>
                    <option value="Esperanto">Esperanto</option>
                    <option value="Estonian">Estonian</option>
                    <option value="Finnish">Finnish</option>
                    <option value="French">French</option>
                    <option value="Frisian">Frisian</option>
                    <option value="Georgian">Georgian</option>
                    <option value="German">German</option>
                    <option value="Greek">Greek</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Ancient Greek">Ancient Greek</option>
                    <option value="Hawaiian">Hawaiian</option>
                    <option value="Hebrew">Hebrew</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Hungarian">Hungarian</option>
                    <option value="Icelandic">Icelandic</option>
                    <option value="Ilongo">Ilongo</option>
                    <option value="Indonesian">Indonesian</option>
                    <option value="Irish">Irish</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Khmer">Khmer</option>
                    <option value="Korean">Korean</option>
                    <option value="Latin">Latin</option>
                    <option value="Latvian">Latvian</option>
                    <option value="Lisp">LISP</option>
                    <option value="Lithuanian">Lithuanian</option>
                    <option value="Malay">Malay</option>
                    <option value="Maori">Maori</option>
                    <option value="Mongolian">Mongolian</option>
                    <option value="Norwegian">Norwegian</option>
                    <option value="Occitan">Occitan</option>
                    <option value="Other">Other</option>
                    <option value="Persian">Persian</option>
                    <option value="Polish">Polish</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Romanian">Romanian</option>
                    <option value="Rotuman">Rotuman</option>
                    <option value="Russian">Russian</option>
                    <option value="Sanskrit">Sanskrit</option>
                    <option value="Sardinian">Sardinian</option>
                    <option value="Serbian">Serbian</option>
                    <option value="Sign Language">Sign Language</option>
                    <option value="Slovak">Slovak</option>
                    <option value="Slovenian">Slovenian</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Swahili">Swahili</option>
                    <option value="Swedish">Swedish</option>
                    <option value="Tagalog">Tagalog</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Thai">Thai</option>
                    <option value="Tibetan">Tibetan</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Ukrainian">Ukrainian</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Welsh">Welsh</option>
                    <option value="Yiddish">Yiddish</option>
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
                  <select value={fluency2} onChange={event => handleUpdate(event, 'fluency2')}>
                    <option value=''>—</option>
                    <option value='Fluently'>Fluently</option>
                    <option value='Somewhat'>Somewhat</option>
                  </select>
                </div>
              </div>
              <div className='selectlist-arrow'>
                <i className="fas fa-chevron-down" />
              </div>
            </div>
          </div>
          : ''
        }

        {
          language2 && language2 !== '' ?
          <div className='display-flex jc-space-between height-spacing-mini'>
            <div className='selectlist-container'>
              <div className='selectlist'>
                <div className='select'>
                  <select value={language3} onChange={event => handleUpdate(event, 'language3')}>
                    <option value=''>—</option>
                    <option value="English">English</option>
                    <option value="Afrikaans">Afrikaans</option>
                    <option value="Albanian">Albanian</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Armenian">Armenian</option>
                    <option value="Basque">Basque</option>
                    <option value="Belarusian">Belarusian</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Breton">Breton</option>
                    <option value="Bulgarian">Bulgarian</option>
                    <option value="Catalan">Catalan</option>
                    <option value="Cebuano">Cebuano</option>
                    <option value="Chechen">Chechen</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Chinese (Cantonese)">Chinese (Cantonese)</option>
                    <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                    <option value="C++">C++</option>
                    <option value="Croatian">Croatian</option>
                    <option value="Czech">Czech</option>
                    <option value="Danish">Danish</option>
                    <option value="Dutch">Dutch</option>
                    <option value="Esperanto">Esperanto</option>
                    <option value="Estonian">Estonian</option>
                    <option value="Finnish">Finnish</option>
                    <option value="French">French</option>
                    <option value="Frisian">Frisian</option>
                    <option value="Georgian">Georgian</option>
                    <option value="German">German</option>
                    <option value="Greek">Greek</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Ancient Greek">Ancient Greek</option>
                    <option value="Hawaiian">Hawaiian</option>
                    <option value="Hebrew">Hebrew</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Hungarian">Hungarian</option>
                    <option value="Icelandic">Icelandic</option>
                    <option value="Ilongo">Ilongo</option>
                    <option value="Indonesian">Indonesian</option>
                    <option value="Irish">Irish</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Khmer">Khmer</option>
                    <option value="Korean">Korean</option>
                    <option value="Latin">Latin</option>
                    <option value="Latvian">Latvian</option>
                    <option value="Lisp">LISP</option>
                    <option value="Lithuanian">Lithuanian</option>
                    <option value="Malay">Malay</option>
                    <option value="Maori">Maori</option>
                    <option value="Mongolian">Mongolian</option>
                    <option value="Norwegian">Norwegian</option>
                    <option value="Occitan">Occitan</option>
                    <option value="Other">Other</option>
                    <option value="Persian">Persian</option>
                    <option value="Polish">Polish</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Romanian">Romanian</option>
                    <option value="Rotuman">Rotuman</option>
                    <option value="Russian">Russian</option>
                    <option value="Sanskrit">Sanskrit</option>
                    <option value="Sardinian">Sardinian</option>
                    <option value="Serbian">Serbian</option>
                    <option value="Sign Language">Sign Language</option>
                    <option value="Slovak">Slovak</option>
                    <option value="Slovenian">Slovenian</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Swahili">Swahili</option>
                    <option value="Swedish">Swedish</option>
                    <option value="Tagalog">Tagalog</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Thai">Thai</option>
                    <option value="Tibetan">Tibetan</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Ukrainian">Ukrainian</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Welsh">Welsh</option>
                    <option value="Yiddish">Yiddish</option>
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
                  <select value={fluency3} onChange={event => handleUpdate(event, 'fluency3')}>
                    <option value=''>—</option>
                    <option value='Fluently'>Fluently</option>
                    <option value='Somewhat'>Somewhat</option>
                  </select>
                </div>
              </div>
              <div className='selectlist-arrow'>
                <i className="fas fa-chevron-down" />
              </div>
            </div>
          </div>
          : ''
        }

        {
          language3 && language3 !== '' ?
          <div className='display-flex jc-space-between height-spacing-mini'>
            <div className='selectlist-container'>
              <div className='selectlist'>
                <div className='select'>
                  <select value={language4} onChange={event => handleUpdate(event, 'language4')}>
                    <option value=''>—</option>
                    <option value="English">English</option>
                    <option value="Afrikaans">Afrikaans</option>
                    <option value="Albanian">Albanian</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Armenian">Armenian</option>
                    <option value="Basque">Basque</option>
                    <option value="Belarusian">Belarusian</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Breton">Breton</option>
                    <option value="Bulgarian">Bulgarian</option>
                    <option value="Catalan">Catalan</option>
                    <option value="Cebuano">Cebuano</option>
                    <option value="Chechen">Chechen</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Chinese (Cantonese)">Chinese (Cantonese)</option>
                    <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                    <option value="C++">C++</option>
                    <option value="Croatian">Croatian</option>
                    <option value="Czech">Czech</option>
                    <option value="Danish">Danish</option>
                    <option value="Dutch">Dutch</option>
                    <option value="Esperanto">Esperanto</option>
                    <option value="Estonian">Estonian</option>
                    <option value="Finnish">Finnish</option>
                    <option value="French">French</option>
                    <option value="Frisian">Frisian</option>
                    <option value="Georgian">Georgian</option>
                    <option value="German">German</option>
                    <option value="Greek">Greek</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Ancient Greek">Ancient Greek</option>
                    <option value="Hawaiian">Hawaiian</option>
                    <option value="Hebrew">Hebrew</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Hungarian">Hungarian</option>
                    <option value="Icelandic">Icelandic</option>
                    <option value="Ilongo">Ilongo</option>
                    <option value="Indonesian">Indonesian</option>
                    <option value="Irish">Irish</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Khmer">Khmer</option>
                    <option value="Korean">Korean</option>
                    <option value="Latin">Latin</option>
                    <option value="Latvian">Latvian</option>
                    <option value="Lisp">LISP</option>
                    <option value="Lithuanian">Lithuanian</option>
                    <option value="Malay">Malay</option>
                    <option value="Maori">Maori</option>
                    <option value="Mongolian">Mongolian</option>
                    <option value="Norwegian">Norwegian</option>
                    <option value="Occitan">Occitan</option>
                    <option value="Other">Other</option>
                    <option value="Persian">Persian</option>
                    <option value="Polish">Polish</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Romanian">Romanian</option>
                    <option value="Rotuman">Rotuman</option>
                    <option value="Russian">Russian</option>
                    <option value="Sanskrit">Sanskrit</option>
                    <option value="Sardinian">Sardinian</option>
                    <option value="Serbian">Serbian</option>
                    <option value="Sign Language">Sign Language</option>
                    <option value="Slovak">Slovak</option>
                    <option value="Slovenian">Slovenian</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Swahili">Swahili</option>
                    <option value="Swedish">Swedish</option>
                    <option value="Tagalog">Tagalog</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Thai">Thai</option>
                    <option value="Tibetan">Tibetan</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Ukrainian">Ukrainian</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Welsh">Welsh</option>
                    <option value="Yiddish">Yiddish</option>
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
                  <select value={fluency4} onChange={event => handleUpdate(event, 'fluency4')}>
                    <option value=''>—</option>
                    <option value='Fluently'>Fluently</option>
                    <option value='Somewhat'>Somewhat</option>
                  </select>
                </div>
              </div>
              <div className='selectlist-arrow'>
                <i className="fas fa-chevron-down" />
              </div>
            </div>
          </div>
          : ''
        }

        {
          language4 && language4 !== '' ?
          <div className='display-flex jc-space-between height-spacing-mini'>
            <div className='selectlist-container'>
              <div className='selectlist'>
                <div className='select'>
                  <select value={language5} onChange={event => handleUpdate(event, 'language5')}>
                    <option value=''>—</option>
                    <option value="English">English</option>
                    <option value="Afrikaans">Afrikaans</option>
                    <option value="Albanian">Albanian</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Armenian">Armenian</option>
                    <option value="Basque">Basque</option>
                    <option value="Belarusian">Belarusian</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Breton">Breton</option>
                    <option value="Bulgarian">Bulgarian</option>
                    <option value="Catalan">Catalan</option>
                    <option value="Cebuano">Cebuano</option>
                    <option value="Chechen">Chechen</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Chinese (Cantonese)">Chinese (Cantonese)</option>
                    <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                    <option value="C++">C++</option>
                    <option value="Croatian">Croatian</option>
                    <option value="Czech">Czech</option>
                    <option value="Danish">Danish</option>
                    <option value="Dutch">Dutch</option>
                    <option value="Esperanto">Esperanto</option>
                    <option value="Estonian">Estonian</option>
                    <option value="Finnish">Finnish</option>
                    <option value="French">French</option>
                    <option value="Frisian">Frisian</option>
                    <option value="Georgian">Georgian</option>
                    <option value="German">German</option>
                    <option value="Greek">Greek</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Ancient Greek">Ancient Greek</option>
                    <option value="Hawaiian">Hawaiian</option>
                    <option value="Hebrew">Hebrew</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Hungarian">Hungarian</option>
                    <option value="Icelandic">Icelandic</option>
                    <option value="Ilongo">Ilongo</option>
                    <option value="Indonesian">Indonesian</option>
                    <option value="Irish">Irish</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Khmer">Khmer</option>
                    <option value="Korean">Korean</option>
                    <option value="Latin">Latin</option>
                    <option value="Latvian">Latvian</option>
                    <option value="Lisp">LISP</option>
                    <option value="Lithuanian">Lithuanian</option>
                    <option value="Malay">Malay</option>
                    <option value="Maori">Maori</option>
                    <option value="Mongolian">Mongolian</option>
                    <option value="Norwegian">Norwegian</option>
                    <option value="Occitan">Occitan</option>
                    <option value="Other">Other</option>
                    <option value="Persian">Persian</option>
                    <option value="Polish">Polish</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Romanian">Romanian</option>
                    <option value="Rotuman">Rotuman</option>
                    <option value="Russian">Russian</option>
                    <option value="Sanskrit">Sanskrit</option>
                    <option value="Sardinian">Sardinian</option>
                    <option value="Serbian">Serbian</option>
                    <option value="Sign Language">Sign Language</option>
                    <option value="Slovak">Slovak</option>
                    <option value="Slovenian">Slovenian</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Swahili">Swahili</option>
                    <option value="Swedish">Swedish</option>
                    <option value="Tagalog">Tagalog</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Thai">Thai</option>
                    <option value="Tibetan">Tibetan</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Ukrainian">Ukrainian</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Welsh">Welsh</option>
                    <option value="Yiddish">Yiddish</option>
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
                  <select value={fluency5} onChange={event => handleUpdate(event, 'fluency5')}>
                    <option value=''>—</option>
                    <option value='Fluently'>Fluently</option>
                    <option value='Somewhat'>Somewhat</option>
                  </select>
                </div>
              </div>
              <div className='selectlist-arrow'>
                <i className="fas fa-chevron-down" />
              </div>
            </div>
          </div>
          : ''
        }

      </div>
      <div className='attribute-form-section-wrap height-spacing'>
        <p className='attribute-form-section-title'>Politics</p>
        <div className='selectlist-container'>
          <div className='selectlist'>
            <div className='select'>
              <select value={politics} onChange={event => handleUpdate(event, 'politics')}>
                <option value=''>—</option>
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
      <div className='attribute-form-section-wrap height-spacing'>
        <p className='attribute-form-section-title'>Education</p>
        <div className='selectlist-container'>
          <div className='selectlist'>
            <div className='select'>
              <select value={education} onChange={event => handleUpdate(event, 'education')}>
                <option value=''>—</option>
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
      <div className='height-spacing'>
        <p className='attribute-form-section-title'>Occupation</p>
        <div className=''>
          <label className=''>
            <input type='text' placeholder='Title' value={occupation} onChange={event => handleUpdate(event, 'occupation')}/>
          </label>
          <label className=''>
            <input type='text' placeholder='Employer' value={employer} onChange={event => handleUpdate(event, 'employer')}/>
          </label>
        </div>
      </div>
      <div className='height-spacing'>
        <p className='attribute-form-section-title'>Religion</p>
        <div className='display-flex jc-space-between'>
          <div className='selectlist-container'>
          <div className='selectlist'>
            <div className='select'>
              <select value={religion} onChange={event => handleUpdate(event, 'religion')}>
                <option value=''>—</option>
                <option value='Agnostic'>Agnosticism</option>
                <option value='Atheist'>Atheism</option>
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
                <option value=''>—</option>
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
      <div className='attribute-form-section-wrap height-spacing'>
        <p className='attribute-form-section-title'>Sign</p>
        <div className='selectlist-container'>
          <div className='selectlist'>
            <div className='select'>
              <select value={sign} onChange={event => handleUpdate(event, 'sign')}>
                <option value=''>—</option>
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
                  <option value=''>—</option>
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
                  <option value=''>—</option>
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
                  <option value=''>—</option>
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
                  <option value=''>—</option>
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