import * as firebase from "firebase";

import { FirebaseConfig } from "./keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
<<<<<<< HEAD
export const articlesRef = databaseRef.child("articles");
=======
export const articlesRef = databaseRef.child("articles");
export const MeRef = databaseRef.child("me");
>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d
