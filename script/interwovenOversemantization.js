// Author: Michael Kolesidis
// Title: interwoven oversemantization

// Copyright (c) 2023 Michael Kolesidis - https://michaelkolesidis.com/
// I am the sole copyright owner of this Work.
//
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

// Old (initial) point
let x, y;

// New point
let newX, newY;

// Colors
let black = 10;
let white = 255;

// Setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(black);
  x = width / 2;
  y = height / 2;
  noCursor();
}

// Draw
function draw() {
  strokeWeight(0.12);
  stroke(white);

  let radius = random(
    windowHeight > windowWidth ? windowWidth / 2.5 : windowHeight / 2.5
  );
  let a = random(TWO_PI);

  newX = width / 2 + cos(a) * radius; // will be within circle radius
  newY = height / 2 + sin(a) * radius; // will be within circle radius
  line(x, y, newX, newY);
  x = newX;
  y = newY;
}

// Reset
function mouseClicked() {
  background(black);
}

// Resize
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  background(black);
}
