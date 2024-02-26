document.getElementById('generate-btn').addEventListener('click', function() {
  var background = document.getElementById('background-image-input').files[0];
  var overlay = document.getElementById('overlay-image-input').files[0];

  var reader = new FileReader();

  reader.onload = function(e) {
    var backgroundImg = e.target.result;
    var imgContainer = document.getElementById('image-container');
    imgContainer.innerHTML = `<img src="${backgroundImg}" alt="Background Image">`;

    var overlayImg = new Image();
    overlayImg.src = URL.createObjectURL(overlay);
    overlayImg.onload = function() {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = overlayImg.width;
      canvas.height = overlayImg.height;
      ctx.drawImage(backgroundImg, 0, 0, overlayImg.width, overlayImg.height);
      ctx.globalAlpha = 0.5; // Adjust opacity as needed
      ctx.drawImage(overlayImg, 0, 0, overlayImg.width, overlayImg.height);
      imgContainer.appendChild(canvas);

      var downloadLink = document.getElementById('download-link');
      downloadLink.href = canvas.toDataURL('image/jpeg');
    };
  };

  reader.readAsDataURL(background);
});
