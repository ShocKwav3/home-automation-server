const addSuccess = (contextName, syncedData) => {
  return {
    success: true,
    message: `${contextName} successfully added`,
    data: syncedData,
  }
}

const addFailure = (contextName, error) => {
  return {
    success: false,
    message: `${contextName} failed to add`,
    error,
  }
}

const fetchSuccess = (contextName, syncedData) => {
  return {
    success: true,
    message: `${contextName} successfully fetched`,
    data: syncedData,
  }
}

const fetchFailure = (contextName, error) => {
  return {
    success: false,
    message: `${contextName} failed to fetch`,
    error,
  }
}

const updateSuccess = (contextName, syncedData) => {
  return {
    success: true,
    message: `${contextName} successfully updated`,
    data: syncedData,
  }
}

const updateFailure = (contextName, error) => {
  return {
    success: false,
    message: `${contextName} failed to update`,
    error,
  }
}

const deleteSuccess = (contextName) => {
  return {
    success: true,
    message: `${contextName} successfully updated`,
  }
}

const deleteFailure = (contextName, error) => {
  return {
    success: false,
    message: `${contextName} failed to delete`,
    error,
  }
}


export default {
  addSuccess,
  addFailure,
  fetchSuccess,
  fetchFailure,
  updateSuccess,
  updateFailure,
  deleteSuccess,
  deleteFailure,
}