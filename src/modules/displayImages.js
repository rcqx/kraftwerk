const displayImages = async (imageUrl) => {
  const albumsCont = document.getElementById('albums');
  const image = document.createElement('img');
  image.src = imageUrl;
  albumsCont.appendChild(image);
}

export default displayImages;