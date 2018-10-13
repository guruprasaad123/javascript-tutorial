// Initialize Firebase


// Add additional services you want to use


var config = {
  apiKey: "AIzaSyDCRN0VvElx8Xos0kf3eYDs576QDCzOJZ4",
  authDomain: "caseletize-demo.firebaseapp.com",
  databaseURL: "https://caseletize-demo.firebaseio.com",
  projectId: "caseletize-demo",
  storageBucket: "caseletize-demo.appspot.com",
  messagingSenderId: "47417023621"
};

firebase.initializeApp(config);
  var database = firebase.database();

  firebase.database().ref('ORG-DITIMICS/manage/system/caselet-masters-editing').set({
    username:'vinoth',
    email: 'email',
    profile_picture : 'null'
  });
