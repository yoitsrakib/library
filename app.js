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
    myLibrary.forEach(myLibrary => {
        const card = document.createElement('div');
        card.classList.add('cards');
        books.appendChild(card);
        const removeButton = document.createElement('button');
        removeButton.classList.add('removeButton')
        removeButton.textContent = 'Remove';
        card.appendChild(removeButton);
      
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const paragraph = document.createElement('p');
            paragraph.textContent=(`${key}: ${myLibrary[key]}`);
            card.appendChild(paragraph);
            
        }
    })

}

// pushToLibrary('gasfd', 'sdasd', 'sdsdas', 'sdsd');


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


