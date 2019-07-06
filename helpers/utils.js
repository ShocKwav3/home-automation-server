const constructString = (method, location, concernedString, targetString) => {
  let resultString = '';

  if(method==='remove'){
    if(location==='end'){
      resultString = targetString.substring(0, targetString.length - concernedString.length);
    }
  }

  return resultString;
};


export default {
  constructString,
};