import * as c from './../actions/ActionTypes';

export default (state = "splash", action) => {
  switch(action.type) {
    case c.SHOW_BIO:
      return "bio";
    case c.SHOW_PROJECTS:
      return "projects";
    case c.SHOW_SPLASH:
      return "splash";
    default:
      return state;
  }
};