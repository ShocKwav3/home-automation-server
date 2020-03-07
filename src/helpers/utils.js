const constructString = (method, location, concernedString, targetString) => {
  let resultString = ''

  if(method==='remove'){
    if(location==='end'){
      resultString = targetString.substring(0, targetString.length - concernedString.length)
    }
  }

  return resultString
}

export const getDateString = (date) => {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  return new Date(date).toLocaleDateString('en-US', options)
}

export const getTimeString = (date) => {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  return new Date(date).toLocaleDateString('en-US', options).split(', ')[1]
}


export default {
  constructString,
  getDateString,
  getTimeString,
}