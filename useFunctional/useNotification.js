import React, { useEffect, useRef, useState } from "react";

//https://developer.mozilla.org/en-US/docs/Web/API/notification
const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

export default function App() {
  const triggerNotif = useNotification("Can I steal your kimchi?", {
    body: "I love kimchi don't you"
  });
  const triggerNofif = useNotification();
  return <div className="App"></div>;
}
