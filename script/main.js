// Author: Michael Kolesidis
// Title: interwoven oversemantization

// Copyright (c) 2023 Michael Kolesidis - https://michaelkolesidis.com/
// I am the sole copyright owner of this Work.

// Reproduction of any of the artwork on this website
// for commercial use is not permitted without first
// receiving written permission from the artist. You
// cannot host, display, distribute or share this Work
// in any form, including physical and digital. You
// cannot use this Work in any commercial or non-commercial
// product, website or project. You cannot sell this Work and
// you cannot mint an NFTs of it.

// Under the Copyright Law, it is fair use to reproduce a single
// copy for personal or educational purposes, provided that no
// changes are made to the content and provided that a copyright
// notice attesting to the content is attached to the reproduction.
// Beyond that, no further copies of works of art may be made or
// distributed on this website without written permission.

// Title
const title = document.createElement("h1");
title.innerHTML = `interwoven oversemantization`;
document.body.appendChild(title);

// Fast timer
const time = document.createElement("p");
time.setAttribute("id", "top-right");
time.innerHTML = `00:00:00`;
document.body.appendChild(time);

function formatTime(time) {
  let formattedTime, hours, minutes, seconds;
  hours = Math.floor(time / 3600);
  minutes = Math.floor((time - hours * 3600) / 60);
  seconds = Math.floor(time - hours * 3600 - minutes * 60);
  seconds = time - hours * 3600 - minutes * 60;
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  formattedTime = `${hours}:${minutes}:${seconds}`;
  return formattedTime;
}

let startTime = new Date();
const render = () => {
  let currentTime = new Date();
  // let timePassed = (currentTime - startTime) / 1000;
  let timePassed = currentTime - startTime;
  console.log(timePassed);
  if (timePassed > 420000) {
    // 6 minutes (6 * 60 * 1000)
    window.location.reload();
  }

  let formattedTime = formatTime(timePassed);
  time.innerHTML = `${formattedTime}`;
  window.requestAnimationFrame(render);
};
render();

// Footer
const footer = document.createElement("footer");
footer.innerHTML = `<p id="bottom-left">by michael kolesidis</p>`;
document.body.appendChild(footer);

// Hide text
setTimeout(() => {
  title.style.opacity = 0;
  footer.style.opacity = 0;
}, 6000);

// Prevent context menu
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
