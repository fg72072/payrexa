      import firebase from 'firebase';
  
      const firebaseConfig = {
        apiKey: "AIzaSyDGqxvyeWcXf2jt7qzEjutfwoZNbqKpN_U",
        authDomain: "payrexa-38820.firebaseapp.com",
        projectId: "payrexa-38820",
        storageBucket: "payrexa-38820.appspot.com",
        messagingSenderId: "9956278626",
        appId: "1:9956278626:web:ce988e5dc6e48298e6ac3b"
      };
        
      firebase.initializeApp(firebaseConfig);
      var auth = firebase.auth();
      export {auth , firebase};