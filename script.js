const search = async () => {
    event.preventDefault;

    //get the value inputed by the user
    searchValue = document.getElementById('search-input').value;

    //check if the there is actually a value inside the input
    if(searchValue && searchValue.trim()){
        //transform the string value into the pattern to call the API
        searchValue = handleInputedString(searchValue);
        //define the API's URL
        myUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`;

        await getBookinformation(myUrl);
        //printInformation(info)

    }else{
        alert("please inform the book title");
    }
}

const getBookinformation = async (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => data.items.forEach(element => {
        console.log(element.volumeInfo.title)
        console.log(element.volumeInfo.imageLinks.thumbnail)
        createCard(element.volumeInfo.title, element.volumeInfo.imageLinks.thumbnail ? element.volumeInfo.imageLinks.thumbnail : element.volumeInfo.imageLinks.smallThumbnail)
    }))

}
const handleInputedString = (inputedString) => {
    return inputedString.replace(/\s+/g, '+');
}

const createCard = (title, url) => {
    var result = document.querySelector(".container-result")
    var card = document.createElement('div')
    card.className = "card"
    var element = `
    <div class="book-cover">
        <img src="${url}" alt="book-cover">
    </div>
    <div class="book-info">
      ${title}
      <input class= "blue-btn" type="button" value="see more">
    </div>`
  card.innerHTML = element
  result.appendChild(card)
}