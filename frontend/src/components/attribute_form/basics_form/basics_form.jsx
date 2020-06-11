import React, { useEffect, useState } from 'react';
import { ORIENTATION_LIST, GENDER_LIST, ORIGENDER_LIST } from '../../profile/profile_options';
import { convertToString } from '../../../util/general_util';

const BasicsForm = props => {
  const [straight, setStraight] = useState(props.user.orientation['Straight']);
  const [gay, setGay] = useState(props.user.orientation['Gay']);
  const [bisexual, setBisexual] = useState(props.user.orientation['Bisexual']);
  const [lesbian, setLesbian] = useState(props.user.orientation['Lesbian']);
  const [queer, setQueer] = useState(props.user.orientation['Queer']);
  const [pansexual, setPansexual] = useState(props.user.orientation['Pansexual']);
  const [questioning, setQuestioning] = useState(props.user.orientation['Questioning']);
  const [heteroflexible, setHeteroflexible] = useState(props.user.orientation['Heteroflexible']);
  const [homoflexible, setHomoflexible] = useState(props.user.orientation['Homoflexible']);
  const [asexual, setAsexual] = useState(props.user.orientation['Asexual']);
  const [grayAsexual, setGrayAsexual] = useState(props.user.orientation['Gray-asexual']);
  const [demisexual, setDemisexual] = useState(props.user.orientation['Demisexual']);
  const [reciprosexual, setReciprosexual] = useState(props.user.orientation['Reciprosexual']);
  const [akiosexual, setAkiosexual] = useState(props.user.orientation['Akiosexual']);
  const [aceflux, setAceflux] = useState(props.user.orientation['Aceflux']);
  const [grayromantic, setGrayromantic] = useState(props.user.orientation['Grayromantic']);
  const [demiromantic, setDemiromantic] = useState(props.user.orientation['Demiromantic']);
  const [recipromantic, setRecipromantic] = useState(props.user.orientation['Recipromantic']);
  const [akioromantic, setAkioromantic] = useState(props.user.orientation['Akioromantic']);
  const [aroflux, setAroflux] = useState(props.user.orientation['Aroflux']);
  let orientation = [straight, gay, bisexual, lesbian, queer, pansexual, questioning, heteroflexible, homoflexible, asexual, grayAsexual, demisexual, reciprosexual, akiosexual, aceflux, grayromantic, demiromantic, recipromantic, akioromantic, aroflux];
  const [oCount, setOCount] = useState(null);

  const [woman, setWoman] = useState(props.user.gender['Woman']);
  const [man, setMan] = useState(props.user.gender['Man']);
  const [agender, setAgender] = useState(props.user.gender['Agender']);
  const [androgynous, setAndrogynous] = useState(props.user.gender['Androgynous']);
  const [bigender, setBigender] = useState(props.user.gender['Bigender']);
  const [cisMan, setCisMan] = useState(props.user.gender['Cis Man']);
  const [cisWoman, setCisWoman] = useState(props.user.gender['Cis Woman']);
  const [genderfluid, setGenderfluid] = useState(props.user.gender['Genderfluid']);
  const [genderqueer, setGenderqueer] = useState(props.user.gender['Genderqueer']);
  const [genderNonconforming, setGenderNonconforming] = useState(props.user.gender['Gender Nonconforming']);
  const [hijira, setHijira] = useState(props.user.gender['Hijira']);
  const [intersex, setIntersex] = useState(props.user.gender['Intersex']);
  const [nonBinary, setNonBinary] = useState(props.user.gender['Non-binary']);
  const [other, setOther] = useState(props.user.gender['Other']);
  const [pangender, setPangender] = useState(props.user.gender['Pangender']);
  const [transfeminine, setTransfeminine] = useState(props.user.gender['Transfeminine']);
  const [transgender, setTransgender] = useState(props.user.gender['Transgender']);
  const [transmasculine, setTransmasculine] = useState(props.user.gender['Transmasculine']);
  const [transsexual, setTranssexual] = useState(props.user.gender['Transsexual']);
  const [transMan, setTransMan] = useState(props.user.gender['Trans Man']);
  const [transWoman, setTransWoman] = useState(props.user.gender['Trans Woman']);
  const [twoSpirit, setTwoSpirit] = useState(props.user.gender['Two Spirit']);
  let gender = [woman, man, agender, androgynous, bigender, cisMan, cisWoman, genderfluid, genderqueer, genderNonconforming, hijira, intersex, nonBinary, other, pangender, transfeminine, transgender, transmasculine, transsexual, transMan, transWoman, twoSpirit];
  const [gCount, setGCount] = useState(null);

  const [relationship_status, setRelationship_status] = useState(props.user.relationship_status);
  const [relationship_type, setRelationship_type] = useState(props.user.relationship_type);
  useEffect(() => {
    if(oCount === null) initialCountTotal(orientation, setOCount);
    if(gCount === null) initialCountTotal(gender, setGCount);
  });

  const initialCountTotal = (list, setter) => {
    let result = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i]) result++;
    }
    setter(result);
  };

  const updateOrientation = type => {
    switch (type) {
      case 'Straight':
        setStraight(!straight);
        break;
      case 'Gay':
        setGay(!gay);
        break;
      case 'Bisexual':
        setBisexual(!bisexual);
        break;
      case 'Lesbian':
        setLesbian(!lesbian);
        break;
      case 'Queer':
        setQueer(!queer);
        console.log('clicked')
        break;
      case 'Pansexual':
        setPansexual(!pansexual);
        break;
      case 'Questioning':
        setQuestioning(!questioning);
        break;
      case 'Heteroflexible':
        setHeteroflexible(!heteroflexible);
        break;
      case 'Homoflexible':
        setHomoflexible(!homoflexible);
        break;
      case 'Asexual':
        setAsexual(!asexual);
        break;
      case 'Gray-asexual':
        setGrayAsexual(!grayAsexual);
        break;
      case 'Demisexual':
        setDemisexual(!demisexual);
        break;
      case 'Reciprosexual':
        setReciprosexual(!reciprosexual);
        break;
      case 'Akiosexual':
        setAkiosexual(!akiosexual);
        break;
      case 'Aceflux':
        setAceflux(!aceflux);
        break;
      case 'Grayromantic':
        setGrayromantic(!grayromantic);
        break;
      case 'Demiromantic':
        setDemiromantic(!demiromantic);
        break;
      case 'Recipromantic':
        setRecipromantic(!recipromantic);
        break;
      case 'Akioromantic':
        setAkioromantic(!akioromantic);
        break;
      case 'Aroflux':
        setAroflux(!aroflux);
        break;
      default:
        break;
    }
  };

  const updateGender = type => {
    switch (type) {
      case 'Woman':
        setWoman(!woman);
        break;
      case 'Man':
        setMan(!man);
        break;
      case 'Agender':
        setAgender(!agender);
        break;
      case 'Androgynous':
        setAndrogynous(!androgynous);
        break;
      case 'Bigender':
        setBigender(!bigender);
        break;
      case 'Cis Man':
        setCisMan(!cisMan);
        break;
      case 'Cis Woman':
        setCisWoman(!cisWoman);
        break;
      case 'Genderfluid':
        setGenderfluid(!genderfluid);
        break;
      case 'Genderqueer':
        setGenderqueer(!genderqueer);
        break;
      case 'Gender-nonconforming':
        setGenderNonconforming(!genderNonconforming);
        break;
      case 'Hijira':
        setHijira(!hijira);
        break;
      case 'Intersex':
        setIntersex(!intersex);
        break;
      case 'Non-binary':
        setNonBinary(!nonBinary);
        break;
      case 'Other':
        setOther(!other);
        break;
      case 'Pangender':
        setPangender(!pangender);
        break;
      case 'Transfeminine':
        setTransfeminine(!transfeminine);
        break;
      case 'Transgender':
        setTransgender(!transgender);
        break;
      case 'Transmasculine':
        setTransmasculine(!transmasculine);
        break;
      case 'Transsexual':
        setTranssexual(!transsexual);
        break;
      case 'Trans Man':
        setTransMan(!transMan);
        break;
      case 'Trans Woman':
        setTransWoman(!transWoman);
        break;
      case 'Two Spirit':
        setTwoSpirit(!twoSpirit);
        break;
      default:
        break;
    }
  };

  const handleChange = (change, field, type=null) => {
    switch(field){
      case 'orientation':
        updateOrientation(type);
        break;
      case 'gender':
        updateGender(type);
        break;
      case 'relationship_status':
        setRelationship_status(change);
        break;
      case 'relationship_type':
        setRelationship_type(change);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const updatedOrientation = {
      'Straight': straight,
      'Gay': gay,
      'Bisexual': bisexual,
      'Lesbian': lesbian,
      'Queer': queer,
      'Pansexual': pansexual,
      'Questioning': questioning,
      'Heteroflexible': heteroflexible,
      'Homoflexible': homoflexible,
      'Asexual': asexual,
      'Gray-asexual': grayAsexual,
      'Demisexual': demisexual,
      'Reciprosexual': reciprosexual,
      'Akiosexual': akiosexual,
      'Aceflux': aceflux,
      'Grayromantic': grayromantic,
      'Demiromantic': demiromantic,
      'Recipromantic': recipromantic,
      'Akioromantic': akioromantic,
      'Aroflux': aroflux
    };
    const updatedGender = {
      'Woman': woman,
      'Man': man,
      'Agender': agender,
      'Androgynous': androgynous,
      'Bigender': bigender,
      'Cis Man': cisMan,
      'Cis Woman': cisWoman,
      'Genderfluid': genderfluid,
      'Genderqueer': genderqueer,
      'Gender Nonconforming': genderNonconforming,
      'Hijira': hijira,
      'Intersex': intersex,
      'Non-binary': nonBinary,
      'Other': other,
      'Pangender': pangender,
      'Transfeminine': transfeminine,
      'Transgender': transgender,
      'Transmasculine': transmasculine,
      'Transsexual': transsexual,
      'Trans Man': transMan,
      'Trans Woman': transWoman,
      'Two Spirit': twoSpirit
    };
    const modifiedUser = {
      _id: props.user._id,
      orientation: updatedOrientation,
      gender: updatedGender,
      relationship_status: relationship_status,
      relationship_type: relationship_type
    };
    props.editUser(modifiedUser)
      .then(() => props.closeModal());
  };
  
  return <>
    <div className='attribute-form'>
      <div className='attribute-form-container'>
        <div className='attribute-form-header'>
          <p className='attribute-form-header-title'>{props.formType}</p>
          <div className='attribute-form-header-close' onClick={() => props.closeModal()}>X</div>
        </div>
        <div className='attribute-form-sections'>
          <form className='' onSubmit={event => handleSubmit(event)}>
            <p className='attribute-form-section-title'>I am a...</p>
            <div className=''>
              <div className=''>
                {
                  ORIENTATION_LIST.map((orient, idx) => {
                    return <button key={idx} className={`form-tag-button ${orientation[idx] ? 'selected-tag' : ''}`} type='button' onClick={event => handleChange(event, 'orientation', orient)}>{orient}</button>
                  })
                }
              </div>
              <div className=''>
                {
                  GENDER_LIST.map((gen, idx) => {
                    return <button key={idx} className={`form-tag-button ${gender[idx] ? 'selected-tag' : ''}`} type='button' onClick={event => handleChange(event, 'gender', gen)}>{gen}</button>
                  })
                }
              </div>
              <div className=''>
                <button>Continue</button>
                <button>Cancel</button>
              </div>
            </div>
            
            <div className='display-flex jc-space-between'>
              <button className=''></button>
              <button className=''></button>
            </div>

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

export default BasicsForm;