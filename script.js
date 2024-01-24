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
    }))

}
const handleInputedString = (inputedString) => {
    return inputedString.replace(/\s+/g, '+');
}
