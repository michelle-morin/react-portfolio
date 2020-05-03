export default (state = "splash", action) => {
  switch(action.type) {
    case 'SHOW_BIO':
      return "bio";
    case 'SHOW_PROJECTS':
      return "projects";
    case 'SHOW_SPLASH':
      return "splash";
    default:
      return state;
  }
};