function findAccountById(accounts, id) {
 //console.log('findAccounts');
  //console.log(accounts); 
  //console.log('findAccount Id');
  //console.log(id);
  //console.log('findAccount');
  //console.log(Object.values(accounts));
 //needs to print 
let accountId= accounts.find(account => account.id===id);
//console.log(accountId);
return accountId;
//-----------------------------------------------------

  /*for (let i = 0; i < accounts.length; i++) {
  if(id == accounts[i].id) { return accounts[i]; }
}*/};
//_____________________________________________________


function sortAccountsByLastName(accounts) {
  //console.log('sort:')
 // let namesArray =[]
  //console.log(accounts);
  
  return accounts.sort((accountA,accountB) => {
    if (accountA.name.last < accountB.name.last) {
    return -1;
  }
  if (accountA.name.last > accountB.name.last) {
    return 1;
  }
  // a must be equal to b
  return 0;
  })
  //-----------------------------------------------------

  /*accounts.forEach(function(account){ 
    //console.log(account.name.last)
   namesArray.push(account.name.last);
    })*/
//need an array that contains the last names 
//console.log('long names list')
//console.log(namesArray);
//console.log(namesArray.sort())
//return namesArray.sort();
 //need to sort out the last names of the account objects 
;
};  
//_____________________________________________________


function getTotalNumberOfBorrows(account, books) {

//console.log('account:');
//console.log(account)
//console.log('books:');
//console.log(books);
//console.log('print borrows:');
//console.log(books.values());
//hint .reduce

//-----------------------------------------------------

//return number of books borrowed by account id
 const accountId = account.id;
  //loop through borrows array to match the account id
  return books.reduce((total, {borrows}) => {
    //if there is a match, total is incremented
    if (borrows.some((record) => record.id === accountId)) 
      total++;
        //return the total amount of books that have been borrowed
        return total;
  }, 0);
};
//_____________________________________________________


function getBooksPossessedByAccount(account, books, authors) {
//console.log('account:');
//console.log(account);
//console.log('books:');
//console.log(books);
//console.log('authors:');
//console.log(authors);
//hint  .filter

//-----------------------------------------------------

/*let {id}=account;
console.log('account Id ')
console.log(id);*/
//-----------------------------------------------------
  
// This functions returns true or false depending on the match of the book borrows id to the account id passed

const accountBook = books.filter((book)=> book.borrows.some(borrowed => borrowed.id === account.id && borrowed.returned === false));

accountBook.map(book => {book.author = authors.find((author) => author.id === book.authorId);return book});
  return accountBook; 
  
};


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
