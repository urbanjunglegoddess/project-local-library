//console.log('books:');
//console.log(books);
//console.log('authors:');
//console.log(authors);
//console.log('accounts:');
//console.log(accounts);

const { findBookById } = require("./books");

function getTotalBooksCount(books) {
  return books.length; 
}
//_____________________________________________________

function getTotalAccountsCount(accounts) {
  return accounts.length; 
}
//_____________________________________________________

function getBooksBorrowedCount(books) {
  //console.log('books:');
//console.log(books);
  //return the number of books currently checked out
  // .reduce
  return books.reduce((borrowed, book) => {
    // checking if book returned or not: count increase
    !book.borrows[0].returned ? borrowed++ : null;
    // return the count and repeat on all books
    return borrowed;
  }, 0);
}
//_____________________________________________________
//return the names of the genres 
  //return the number in that genre 
  //return no more than 5 books for each genre
//console.log('books:');
//console.log(books);



function getMostCommonGenres(books) {
  
let result = []

books.forEach((book) => {
let genreExists = result.find((genre) => genre.name === book.genre)
if (!genreExists) {
// push the name and count into new array
result.push({ name: book.genre, count: 1 }); }
  
else { genreExists.count += 1; } })

 return result.sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0,5);
  
  return result; 

}
//_____________________________________________________

function getMostPopularBooks(books) {
  //return the title of the book 
  //return the times its been borrowed 
  return books.map((book)=>{
  return {name: book.title, count: book.borrows.length}}).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0,5);



}
//_____________________________________________________


function getMostPopularAuthors(books, authors) {
  //return the authors name 
  //return the number of times the authors books been borrowed 
//console.log('books:');
//console.log(books);
//console.log('authors:');
//console.log(authors);
 //create new array for final result 
  let result = [] 
  // loop through authors 
  authors.forEach((author) => { 
    //filter authors by ones that match author.id 
    let bookAuthor = books.filter((book) => book.authorId === author.id) 
        //add how many times books were borrowed 
    let bookAuthBorrows = bookAuthor.reduce((borrowTot, book) => borrowTot + book.borrows.length, 0) 
    //push the final result into result array 
    result.push({name: author.name.first + " " + author.name.last, count: bookAuthBorrows}) }) 
  //sort results from most to least and slice down to a max of five results 
  return result.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1)).slice(0, 5) }
     //____________________

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
