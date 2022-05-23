import './styles.css';
import fetchCover from './modules/consumeCart.js';
import displayImages from './modules/displayImages.js';

const albumsIds = [
  '57ceaa04-f3b1-445c-a7b3-154319f6a3ab',
  '4e56c217-9ad6-4a72-948a-f862ed48ce29',
  'e4d727d2-e71a-47ee-8203-3ba14c1df659',
  '3591d22e-fdc5-309a-91d3-7bbafe086d6c',
  '7cf68c5e-56aa-4649-8821-a9885cc45493',
  '8327a929-e283-4307-8219-50a9166ef335',
  '8360f429-ab2c-3b1c-ae23-3e94b7ef7438',
  'fed2c979-be66-3af6-885c-a87f1ddf1964',
  'a22aede2-04cb-3fa1-b15a-93ab59accb27',
  'ee5f888d-2734-3ace-a25b-b6f9f39ca147',
];

// const test = fetch('https://musicbrainz.org/ws/2/release?artist=5700dcd4-c139-4f31-aa3e-6382b9af9032&type=album|ep&fmt=json')
//   .then(response => response.json())
//   .then(data => {
//     data.releases.forEach(item => console.log(item.title, item.date))
//   });

// // general information
// const band = fetch('https://musicbrainz.org/ws/2/artist/5700dcd4-c139-4f31-aa3e-6382b9af9032?inc=aliases&fmt=json')
//   .then(response => response.json())
//   .then(data => {
//     data.aliases.forEach(item => console.log(item.name))
//   });

for (let i = 0; i < albumsIds.length; i++) {
  fetchCover(albumsIds[i]).then((imageUrl) => {
    displayImages(imageUrl)
  })
}
