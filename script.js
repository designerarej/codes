function overlayImage() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.src = e.target.result;

    img.onload = function () {
      const overlayImg = new Image();
      overlayImg.src = 'overlay.png'; // Replace 'overlay.png' with your overlay image path

      overlayImg.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);
        ctx.drawImage(overlayImg, 0, 0, img.width, img.height);

        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = ''; // Clear previous image if any
        imageContainer.appendChild(canvas);
      };
    };
  };

  reader.readAsDataURL(file);
}

function downloadImage() {
  const canvas = document.querySelector('canvas');
  const url = canvas.toDataURL(); // default is png
  const a = document.createElement('a');
  a.href = url;
  a.download = 'image_with_overlay.png'; // You can customize the downloaded file name here
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
