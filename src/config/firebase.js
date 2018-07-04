import * as firebase from "firebase";

import { FirebaseConfig } from "./keys";
firebase.initializeApp(FirebaseConfig);

export const storage = firebase.storage(); 
const databaseRef = firebase.database().ref();

export const articlesRef = databaseRef.child("articles");
export const contactRef = databaseRef.child("contacts");
export const themePicRef = databaseRef.child('themePic');

