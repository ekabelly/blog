import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
//import { SetCookie, GetCookie } from './cookies';

import err from './middlewares/err';

import reducers from './reducers/reducers';

import { fetchArticles } from './actions/articles.actions';
import { fetchThemePic, newVisit } from './actions/index.actions';

const store = createStore(reducers, applyMiddleware(promise(), thunk, createLogger(), err));

//  const displayVisits = () =>{    
//   // How many visits so far? 
//       var numVisits = GetCookie("numVisits"); 
//       if (numVisits) numVisits = parseInt(numVisits) + 1; 
//       else numVisits = 1; // the value for the new cookie 
  
//   // Show the number of visits 
       store.dispatch(newVisit());
  
//   // Set the cookie to expire 365 days from now 
//       var today = new Date(); 
//       today.setTime(today.getTime() + 1 /*days*/ * 24 /*hours*/ * 60 /*minutes*/ * 60 /*seconds*/ * 1000 /*milliseconds*/); 
//       SetCookie("numVisits", numVisits, today); 
//   }

// displayVisits();

store.dispatch(fetchThemePic());
store.dispatch(fetchArticles());

export default store;