/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

window.onload = function () {

  // Definitions
  var canvas = document.getElementById("paint-canvas");
  var context = canvas.getContext("2d");
  var boundings = canvas.getBoundingClientRect();

  // Specifications
  var isDrawing = false;

  // Handle Colors
  var colors = document.querySelectorAll('.colors button');

colors.forEach(function(button) {
  button.addEventListener('click', function(event) {
    context.strokeStyle = button.value || 'black';
  });
});

  // Handle Brushes
  var brushes = document.querySelectorAll('.brushes button');

brushes.forEach(function(button) {
  button.addEventListener('click', function(event) {
    context.lineWidth = parseFloat(button.value) || 1;
  });
});

  // Mouse Down and Touch Start Events
  function startDrawing(event) {
    event.preventDefault();
    setCoordinates(event);
    isDrawing = true;

    // Start Drawing
    context.beginPath();
    context.moveTo(mouseX, mouseY);
  }

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('touchstart', startDrawing);

  // Mouse Move and Touch Move Events
  function draw(event) {
    event.preventDefault();
    if (isDrawing) {
      setCoordinates(event);
      context.lineTo(mouseX, mouseY);
      context.stroke();
    }
  }

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('touchmove', draw);

  // Mouse Up and Touch End Events
  function stopDrawing(event) {
    event.preventDefault();
    setCoordinates(event);
    isDrawing = false;
  }

  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('touchend', stopDrawing);

  // Handle Mouse and Touch Coordinates
  var mouseX = 0;
  var mouseY = 0;

  function setCoordinates(event) {
    var clientX, clientY;
    if (event.clientX && event.clientY) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else if (event.touches && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    }
    mouseX = clientX - boundings.left;
    mouseY = clientY - boundings.top;
  }

  // Handle Clear Button
  var clearButton = document.getElementById('clear');

  clearButton.addEventListener('click', function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var cartValue = 0;

  //handle add to cart button

  var addCartButton = document.getElementById('add-cart');
  addCartButton.addEventListener('click', function () {
    document.getElementById('inc').innerHTML = ++cartValue;
  })

  var goToCartButton = document.getElementById('goToCart');
  goToCartButton.addEventListener('click', function () {
    window.location.href = `cart.html?cartValue=${cartValue}`;
  })

  var buyNowButton = document.getElementById('buy-now');
  buyNowButton.addEventListener('click', function () {
    window.location.href = `cart.html?cartValue=1`;
  })

};
