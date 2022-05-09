let myLibrary = [];

function Book (Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
}


function pushToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    displayBooks();

}




function displayBooks() {
    const books = document.querySelector('.books');

    const removeDivs = document.querySelectorAll('.cards');
    for (let i=0; i<removeDivs.length; i++){
        removeDivs[i].remove();
    }
  
    //loop over library
    let index = 0;
    myLibrary.forEach(myLibrarys => {
        const card = document.createElement('div');
        card.classList.add('cards');
        books.appendChild(card);

        //remove button
        const removeButton = document.createElement('button');
        removeButton.classList.add('removeButton')
        removeButton.textContent = 'Remove';

        removeButton.dataset.linkedArray = index;
       
        card.appendChild(removeButton);

        removeButton.addEventListener('click', removeBook);
        function removeBook(){
            let bookToRemove = removeButton.dataset.linkedArray
            myLibrary.splice(parseInt(bookToRemove), 1);
            card.remove();
            displayBooks();
        }

        const readStatusButton = document.createElement("button");
        readStatusButton.classList.add("readStatus");
        readStatusButton.textContent = "Change Read Status";

       
        readStatusButton.dataset.linkedArray = index;
        card.appendChild(readStatusButton);

     
        readStatusButton.addEventListener("click", toggleReadStatus);

        function toggleReadStatus() {
            let retrieveBookToToggle = readStatusButton.dataset.linkedArray;
            Book.prototype = Object.create(Book.prototype);
            const toggleBook = new Book();

            
         
            if ((myLibrary[parseInt(retrieveBookToToggle)].Read) == "Yes")   {
                toggleBook.Read = "No";
                myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
            } else if ((myLibrary[parseInt(retrieveBookToToggle)].Read) == "No")  {
                toggleBook.Read = "Yes";
                myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
            }
            displayBooks();
        }

        for (let key in myLibrarys) {
            console.log(`${key}: ${myLibrarys[key]}`);
            const paragraph = document.createElement('p');
            paragraph.textContent=(`${key}: ${myLibrarys[key]}`);
            card.appendChild(paragraph);
            
        }
        index++
    })

}



const submitButton = document.querySelector('.Submit');

submitButton.addEventListener('click', () => {
    let Title = document.getElementById('Title').value;
    let Author = document.getElementById('Author').value;
    let Pages = document.getElementById('Pages').value;
    let Read = document.getElementById('Read').value;

    if ((Title== '') || (Author == '') || (Pages == '') || (Read == '')) {
        return;
    }

    pushToLibrary(Title, Author, Pages, Read);

    document.getElementById('add-book').reset();
  
})


// Book.prototype = Object.create(Book.prototype);
// const toggleColor = new Book();

// if (toggleColor.Read = "No") {
    
// } 