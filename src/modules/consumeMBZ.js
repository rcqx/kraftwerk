async function fetchTitle(id) {
  const connect = await fetch(`https://musicbrainz.org/ws/2/release/${id}?inc=aliases%2Bartist-credits%2Blabels%2Bdiscids%2Brecordings&fmt=json`);
  const response = await connect.json().then(data => {
    const titleName = data.title;
    return titleName;
  });
  return response;
}

export default fetchTitle;
