export const storeAuthData = (email, password, userData, gymName) => {
  sessionStorage.setItem('gymnify_user_email', email);
  sessionStorage.setItem('gymnify_user_password', password);
  sessionStorage.setItem('gymnify_user_data', JSON.stringify(userData));
  sessionStorage.setItem('gymnify_gym_name', gymName);
};

export const getAuthData = () => {
  const email = sessionStorage.getItem('gymnify_user_email');
  const password = sessionStorage.getItem('gymnify_user_password');
  const userData = JSON.parse(sessionStorage.getItem('gymnify_user_data'));
  const gymName = sessionStorage.getItem('gymnify_gym_name');
  
  return { email, password, userData, gymName };
};

export const clearAuthData = () => {
  sessionStorage.removeItem('gymnify_user_email');
  sessionStorage.removeItem('gymnify_user_password');
  sessionStorage.removeItem('gymnify_user_data');
  sessionStorage.removeItem('gymnify_gym_name');
};

// Add this logout function
export const logout = () => {
  clearAuthData();
  // Optional: You might want to add other cleanup here
  // For example:
  // - Clearing any other session data
  // - Redirecting to login page (though this is better handled in the component)
  // - Any analytics tracking for logout
};