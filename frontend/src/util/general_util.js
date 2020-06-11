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

export const trueObjectValuesToArray = obj => {
  const values = [];
  for(let key in obj){
    if(obj[key]){
      values.push(key);
    }
  }
  return values;
};

export const anyTrueValues = object => {
  for (let key in object) {
    if (object[key]) return true;
  }
  return false;
};

export const has5options = options => {
  let count = 0;
  for(let option in options){
    if(options[option]) count++;
    if(count === 5) return true;
  }
  return false;
};

// future - max tags  is 5
export const checkTagCount = list => {
  let count = 0;
  list.forEach(item => {
    if (item) count++;
  })
  return count;
};