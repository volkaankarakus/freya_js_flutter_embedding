// integration.js
/// AUTH : Gets the [authToken] required for authentication
export const getAuthToken = async () => {
  // Implement your custom logic for fetching the auth token here!!
  let authToken =
    "hLwD2myc8CdH9bRrkrAbSxepcWK0X3I9kKckujoWd0RA6PY3HY6j4DrDsJYAkJKc";
  return authToken;
};
/// USER : It takes user information to the prompt for clearer answers in the artificial intelligence section
export const getUserInformation = async () => {
  // Implement your custom logic for fetching the user information
  let user_meta = {
    name: "lea",
    gender: "female",
  };
  return user_meta;
};
