import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDemwSkkS6HFX_mtFtB3gQ21hGwos1MYS4",
    authDomain: "expensify-53470.firebaseapp.com",
    databaseURL: "https://expensify-53470-default-rtdb.firebaseio.com",
    projectId: "expensify-53470",
    storageBucket: "expensify-53470.appspot.com",
    messagingSenderId: "507565780818",
    appId: "1:507565780818:web:028b9d828a8c81fe7bd48b",
    measurementId: "G-VBS93F1JFY"
  };

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
      name: 'Paul Livak',
      age: 26,
      isSingle: false,
      location: {
          city: 'Great Barrington',
          county: 'United States'
      }
  }).then(() => {
    console.log('Data is saved');
  }).catch((e) => {
    console.log('This failed', e);
  });


//   database.ref('isSingle').set(null);

database.ref("isSingle")
    .remove()
    .then(() => {
      console.log('Data was removed');
    }).catch((e) => {
      console.log('did not remove data', e);
});