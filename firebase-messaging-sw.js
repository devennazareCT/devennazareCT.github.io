importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAuzpLmfs_ZeBb1VxHZm_NMww1WEBNjJlo",
  authDomain: "websitetest-80b38.firebaseapp.com",
  projectId: "websitetest-80b38",
  storageBucket: "websitetest-80b38.firebasestorage.app",
  messagingSenderId: "394462402699",
  appId: "1:394462402699:web:189c6200695deed0f81c8e"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background message received:', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});