import './styles.css';
import fetchCover from './modules/consumeCart.js';
import displayImages from './modules/displayImages.js';
import fetchTitle from './modules/consumeMBZ.js';

const albums = [
  '57ceaa04-f3b1-445c-a7b3-154319f6a3ab',
  '4e56c217-9ad6-4a72-948a-f862ed48ce29',
  'e4d727d2-e71a-47ee-8203-3ba14c1df659',
  '3591d22e-fdc5-309a-91d3-7bbafe086d6c',
  '7cf68c5e-56aa-4649-8821-a9885cc45493',
  '8327a929-e283-4307-8219-50a9166ef335',
  '8360f429-ab2c-3b1c-ae23-3e94b7ef7438',
  'fed2c979-be66-3af6-885c-a87f1ddf1964',
  'ff9cca71-3068-48f3-b4a9-eb81cd678e0d',
  'ee5f888d-2734-3ace-a25b-b6f9f39ca147'
];

fetchCover('57ceaa04-f3b1-445c-a7b3-154319f6a3ab').then((imageUrl) => {
  displayImages(imageUrl).then(fetchCover('4e56c217-9ad6-4a72-948a-f862ed48ce29').then((imageUrl) => {
    displayImages(imageUrl).then(fetchCover('e4d727d2-e71a-47ee-8203-3ba14c1df659').then((imageUrl) => {
      displayImages(imageUrl).then(fetchCover('3591d22e-fdc5-309a-91d3-7bbafe086d6c').then((imageUrl) => {
        displayImages(imageUrl).then(fetchCover('7cf68c5e-56aa-4649-8821-a9885cc45493').then((imageUrl) => {
          displayImages(imageUrl).then(fetchCover('8327a929-e283-4307-8219-50a9166ef335').then((imageUrl) => {
            displayImages(imageUrl).then(fetchCover('8360f429-ab2c-3b1c-ae23-3e94b7ef7438').then((imageUrl) => {
              displayImages(imageUrl).then(fetchCover('fed2c979-be66-3af6-885c-a87f1ddf1964').then((imageUrl) => {
                displayImages(imageUrl).then(fetchCover('a22aede2-04cb-3fa1-b15a-93ab59accb27').then((imageUrl) => {
                  displayImages(imageUrl).then(fetchCover('ee5f888d-2734-3ace-a25b-b6f9f39ca147').then((imageUrl) => {
                    displayImages(imageUrl).then((images) => {
                      const imgs = document.getElementsByTagName('img');
                      for (let i = 0; i < imgs.length; i++) {
                        imgs[i].addEventListener('click', () => {
                          document.getElementById('pops').classList.toggle('hidden');
                        })

                        const popshead = document.getElementById('popsHead');
                        const title = document.createElement('h1');
                        console.log(fetchTitle(albums[i]));
                        popshead.appendChild(title);

                      };
                    });
                  }));
                }));
              }));
            }));
          }));
        }));
      }));
    }));
  }));
});

const closeBtn = () => {
  document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('pops').classList.toggle('hidden');
  });
}

closeBtn();

fetchTitle('57ceaa04-f3b1-445c-a7b3-154319f6a3ab');
