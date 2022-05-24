async function fetchCover(id) {
  const connect = await fetch(`https://coverartarchive.org/release/${id}`);
  const response = await connect.json().then(data => {
    const imageUrl = data.images[0].thumbnails.large;
    return imageUrl;
  });
  return response;
}

export default fetchCover;