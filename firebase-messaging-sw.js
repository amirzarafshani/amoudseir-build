importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyAT1txCwLzpkyI1rERMPMNs0pjnII1XiP4",
    authDomain: "amoudseir-6e61c.firebaseapp.com",
    databaseURL: "https://amoudseir-6e61c.firebaseio.com",
    projectId: "amoudseir-6e61c",
    storageBucket: "amoudseir-6e61c.appspot.com",
    messagingSenderId: "712648793913",
    appId: "1:712648793913:web:e7044e0fa576b143cd52e8",
    measurementId: "G-KQG1BZ2XNS"
  });
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  alert('[firebase-messaging-sw.js] Received background message ', payload)
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
  });