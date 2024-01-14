const search = () => {
    event.preventDefault;

    //get the value inputed by the user
    searchValue = document.getElementById('search-input').value;

    //check if the there is actually a value inside the input
    if(searchValue && searchValue.trim()){
        //transform the string value into the pattern to call the API
        searchValue = handleInputedString(searchValue);
        //define the API's URL
        myUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`;

        console.log(myUrl);
    }else{
        alert("please inform the book title");
    }
}

const handleInputedString = (inputedString) => {
    return inputedString.replace(/\s+/g, '+');
}
