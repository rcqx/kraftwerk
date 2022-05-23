// const kraftwerkID = '5700dcd4-c139-4f31-aa3e-6382b9af9032';

const test = fetch('https://musicbrainz.org/ws/2/artist/5700dcd4-c139-4f31-aa3e-6382b9af9032?inc=aliases&fmt=json')
  // .then(response => response.text())
  .then(data => console.log(data));

export default test;