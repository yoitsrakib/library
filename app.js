let myLibrary = []; //Blank Library



//Constructor
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return title + ' by ' + author + ', ' + pages + ' pages, ' + read
    }
 
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
const harryPotter = new Book('Harry Potter', 'J.K Rowling', '295', 'not read yet');



console.log(theHobbit.info());

// Function to add Books to myLibrary

function addToLibrary() {
    myLibrary.push(theHobbit)
    myLibrary.push(harryPotter)
}

addToLibrary();

console.log(myLibrary);
