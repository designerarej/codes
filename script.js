$(document).ready(function() {
  $('#imageInput').change(function() {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#uploadedImage').attr('src', e.target.result);
    }
    reader.readAsDataURL(file);
  });

  $('#downloadBtn').click(function() {
    var container = $('#imageContainer')[0];
    html2canvas(container).then(function(canvas) {
      var link = document.createElement('a');
      link.download = 'edited-image.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  });
});
