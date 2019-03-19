import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyA-lKFmq2SlZjRfWG2nneYvVCuI84dznzk',
  authDomain: 'commentform-1aca5.firebaseapp.com',
  databaseURL: 'https://commentform-1aca5.firebaseio.com',
  projectId: 'commentform-1aca5',
  storageBucket: 'commentform-1aca5.appspot.com',
  messagingSenderId: '580538636510'
};
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const commentsRef = databaseRef.child('comments');
export default firebase;
