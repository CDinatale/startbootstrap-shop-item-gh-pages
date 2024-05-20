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
    var mouseX = 0;
    var mouseY = 0;
    context.strokeStyle = 'black'; // initial brush color
    context.lineWidth = 1; // initial brush width
    var isDrawing = false;
  
  
    // Handle Colors
    var colors = document.getElementsByClassName('colors')[0];
  
    colors.addEventListener('click', function(event) {
      context.strokeStyle = event.target.value || 'black';
    });
  
    // Handle Brushes
    var brushes = document.getElementsByClassName('brushes')[0];
  
    brushes.addEventListener('click', function(event) {
      context.lineWidth = event.target.value || 1;
    });
  
    // Mouse Down Event
    canvas.addEventListener('mousedown', function(event) {
      setMouseCoordinates(event);
      isDrawing = true;
  
      // Start Drawing
      context.beginPath();
      context.moveTo(mouseX, mouseY);
    });
  
    // Mouse Move Event
    canvas.addEventListener('mousemove', function(event) {
      setMouseCoordinates(event);
  
      if(isDrawing){
        context.lineTo(mouseX, mouseY);
        context.stroke();
      }
    });
  
    // Mouse Up Event
    canvas.addEventListener('mouseup', function(event) {
      setMouseCoordinates(event);
      isDrawing = false;
    });
  
    // Handle Mouse Coordinates
    function setMouseCoordinates(event) {
      mouseX = event.clientX - boundings.left;
      mouseY = event.clientY - boundings.top;
    }
  
    // Handle Clear Button
    var clearButton = document.getElementById('clear');
  
    clearButton.addEventListener('click', function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    });

    var cartValue = 0;

    //handle add to cart button

    var addCartButton = document.getElementById('add-cart');
    addCartButton.addEventListener('click', function() {
        document.getElementById('inc').innerHTML = ++cartValue;
    } )

    var goToCartButton = document.getElementById('goToCart');
    goToCartButton.addEventListener('click', function() {
        window.location.href = `cart.html?cartValue=${cartValue}`;
    } )

    var buyNowButton = document.getElementById('buy-now');
    buyNowButton.addEventListener('click', function() {
        window.location.href = `cart.html?cartValue=1`;
    } )

  };
  