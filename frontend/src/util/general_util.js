export const calculateAge = birthday => {
  const birthDate = new Date(birthday);
  const currentDate = new Date(Date.now());
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  
  if(currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) age--;

  return age;
};

export const convertToString = array => {
  if(!array.length) return '';
  let converted = '';
  for(let i = 0; i < array.length; i++){
    let el = array[i];
    if(i !== array.length - 1){
      converted = converted + el + ', ';
    }else{
      converted = converted + el;
    }
  }
  return converted;
};

export const checkDefaults = (arr, attObj) => {
  for (const att in attObj) {
    const attVal = attObj[att];
    if (att !== 'icon') {
      if (arr.indexOf(attVal) === -1) return true;
    }
  }
  return false;
};

export const isEmptyStr = str => {
  // console.log(str.length)
};

// if there is a value that is not empty then return false
export const checkForEmptyDefaults = obj => {
  for(let key in obj){
    let val = obj[key];
    if(key !== 'icon'){
      console.log(val.length)
      if(!val.length) return false;
    }
  }
  return true;
};

export const anyTrueValues = object => {
  for (let key in object) {
    if (object[key]) return true;
  }
  return false;
};