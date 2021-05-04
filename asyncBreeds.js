const fs = require('fs');

const breedDetailsFromFile = (breed, done) => {
  console.log('breedDetailsFromFile: Calling readFile...\n');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log('In readFile\'s Callback: it has the data.\n');
    if (!error) {
      done(data);
    }
  });
};

breedDetailsFromFile('Bombay', bombay => {
  console.log('Return value:', bombay);
});
