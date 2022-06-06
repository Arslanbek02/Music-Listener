import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBT1Q-8Hfhvx0QjN4i9HwQQ6ifK1gm2Cl4',
  authDomain: 'music-abee9.firebaseapp.com',
  projectId: 'music-abee9',
  storageBucket: 'music-abee9.appspot.com',
  // messagingSenderId: '669366060458',
  appId: '1:669366060458:web:fba2043d759d7a4fbc57d3',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
