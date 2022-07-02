let imgs = document.querySelectorAll('.post img');
onload = function originalWidth() {
  for (let i = 0; i < imgs.length; i++) {
    let width = imgs[i].naturalWidth;
    console.log(width);
    if (imgs[i].naturalWidth <= 300) {
      imgs[i].style.width = imgs[i].naturalWidth + 'px';
    } else if (imgs[i].naturalWidth > 300) {
      imgs[i].style.width = '100%';
    }
  }
}