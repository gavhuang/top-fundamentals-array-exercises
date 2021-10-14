const getTheTitles = function (books) {
  return books.reduce((arrBook, nextBook) => {
    arrBook.push(nextBook.title);
    return arrBook;
  }, []);
};

/* Better solution:
const getTheTitles = function(array) {
  return array.map(book => book.title)
};
*/

// Do not edit below this line
module.exports = getTheTitles;
