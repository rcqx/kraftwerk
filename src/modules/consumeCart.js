// const image = fetch('https://coverartarchive.org/release/57ceaa04-f3b1-445c-a7b3-154319f6a3ab')
//   .then(response => response.json())
//   .then(data => console.log(data));


async function fetchCover(id) {
  const connect = await fetch(`https://coverartarchive.org/release/${id}`);
  const response = await connect.json().then(data => {
    const imageUrl = data.images[0].thumbnails.large;
    return imageUrl;
  });
  return response;
}

export default fetchCover; response