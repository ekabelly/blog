import * as firebase from "firebase";

export const login = (email, password) => async dispatch => {
	console.log('login attempt');
	/*const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(result => {
		const token = result.credential.accessToken;
		// The signed-in user info.
		const user = result.user;
		dispatch({type:'LOGIN', payload:user});
	}).catch(error => {
	  // Handle Errors here.
	  //const errorCode = error.code;
	  //const errorMessage = error.message;
	  console.error(error.message, error.code);
	  // The email of the user's account used.
	  //const email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  //const credential = error.credential;
	  // ...
	});*/
	firebase.auth().signInWithEmailAndPassword(email, password).then(x => {
		console.log(x);
		dispatch({type:'LOGIN', payload:{}});
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	});
}

export const logout = () =>{
	firebase.auth().signOut().then(function() {
  // Sign-out successful.
	}).catch(function(error) {
  // An error happened.
	});
}
