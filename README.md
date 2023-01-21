<div align=center>
  <img src="./icons/icon-192x192.png">
  <h1>circle random lines</h1>

  [![Netlify Status](https://api.netlify.com/api/v1/badges/167fe081-b318-4922-b30b-3a7f76724456/deploy-status)](https://app.netlify.com/sites/circle-random-lines/deploys)

  <h4>a circle created dynamically by random lines</h4>
  
  <h3><a href="https://circle-random-lines.netlify.app/">Visit</a></h3>
</div>



## Technologies Used

<a href="https://p5js.org/"><img src="https://github.com/michaelkolesidis/tech-icons/blob/main/icons/p5js/p5js.svg" height="50px"/></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://en.wikipedia.org/wiki/JavaScript"><img src="https://github.com/michaelkolesidis/tech-icons/blob/main/icons/javascript/javascript-original.svg" height="50px" /></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://en.wikipedia.org/wiki/CSS"><img src="https://github.com/michaelkolesidis/tech-icons/blob/main/icons/css3/css3-plain.svg" height="50px" /></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/michaelkolesidis/tech-icons/blob/main/icons/html5/html5-plain.svg" height="50px" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



## Description

A colorful three-dimensional cube that rotates to x-axis and the y-axis according to the movement of the cursor inside the window. It is created dynamically on page load, according to window dimensions. Click to switch colors and redraw.

A line is drawn from a point in the center of the canvas to a random point located inside an imaginary circle. Then a new line is drawn from the previous random point to a new random point, still located inside an imaginary circle. The process is repeaded indefinitely and, using trigonometry and magic, a circle starts to form.It is housed in a simple HTML page, with some essential CSS.

Click to reverse colors, double-click to enter fullscreen mode, double-click again (or press ESC) to leave fullscreen mode.

Originally, I created it using [Processing](https://processing.org/), and then I ported it to the web using Processing's JavaScript sibling, p5.js.



## Demo
<img width="580px" src="./screenshots/circle-random-lines.gif">



## Screenshot
<img src="./screenshots/circle-random-lines-screenshot.png">



## Related Projects

- [fractal mountain](https://github.com/michaelkolesidis/fractal-mountain)
- [perlin landscape](https://github.com/michaelkolesidis/perlin-landscape)



## License

<a href="https://www.gnu.org/licenses/agpl-3.0.html"><img src="https://upload.wikimedia.org/wikipedia/commons/0/06/AGPLv3_Logo.svg" height="100px" /></a>

Copyright (c) 2023 Michael Kolesidis<br>
Licensed under the [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.html).
