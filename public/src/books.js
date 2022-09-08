//console.log('books:');
//console.log(books);
//console.log('authors:');
//console.log(authors);
//console.log('accounts:');
//console.log(accounts);
//_____________________________________________________

function findAuthorById(authors, id) {
  //returns authour id 
  let authorId= authors.find(author => author.id===id);
//console.log(authorId);
return authorId;
}
//_____________________________________________________

function findBookById(books, id) {
  //returns book id 
  let bookId= books.find(book => book.id===id);
//console.log(bookId);
return bookId;
}
//_____________________________________________________


function partitionBooksByBorrowedStatus(books) {
  
  //if statement with a else if statement 
  
  //need to access books.borrows.returned property
  console.log(books.borrows);
//-----------------------------------------------------

  //one array returns the books.borrows.returned true
let booksReturned = books.filter((book) => book.borrows[0].returned === true)
   //one array returns the books.borrows.returned false 
  let booksBorrowed = books.filter((book) => book.borrows[0].returned === false); 
  
 return [booksBorrowed, booksReturned]
  //return two arrays 
  
}
//_____________________________________________________


function getBorrowersForBook(book, accounts) {
  //console.log('book');
  //console.log(book);
  //console.log('accounts');
  //console.log(accounts);
  //console.log('accounts.length');
  //console.log(accounts.length);
  //console.log('account id')
  //console.log(accounts.id);
 //-----------------------------------------------------

return book.borrows
 //should represents the accounts given by the IDs in the provided book's `borrows` array
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
  //each account object should include the `returned` entry from the corresponding transaction object 
   return { ...borrow, ...account };
  })
  //should return an array of ten or fewer account objects
  .slice(0, 10);

};
//_____________________________________________________


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
