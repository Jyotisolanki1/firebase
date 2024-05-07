importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyA8DwQ_xR-yuUR4Y2uW5gqlww3l1qgMWuc",
  authDomain: "mern-estate-cb480.firebaseapp.com",
  projectId: "mern-estate-cb480",
  storageBucket: "mern-estate-cb480.appspot.com",
  messagingSenderId: "1001257561173",
  appId: "1:1001257561173:web:0b1fbb8d9872bd9a16b8dc"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
