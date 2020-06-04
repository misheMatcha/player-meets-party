export const calculateAge = birthday => {
  const birthDate = new Date(birthday);
  const currentDate = new Date(Date.now());
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  
  if(currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) age--;

  return age;
};

export const convertToString = array => {
  return array.join(', ');
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