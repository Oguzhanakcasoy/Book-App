import axios from "axios";

const url ='https://books-c2cd5-default-rtdb.firebaseio.com/';

export async function getBooks() {
    const response = await axios.get(url + '/books.json');

    const books = [];

    for (const key in response.data) {
        const booksObj = {
            id: key,
            author: response.data[key].author,
            bookname: response.data[key].bookname,
            description: response.data[key].description,
            picture: response.data[key].picture,
            recyled: response.data[key].recyled
        }
        books.push(booksObj);
    }
    return books;
}

export async function addBook (book){
    const response = await axios.post(url + 'books.json', book)
   
    const id = response.data.name
    return id 
}

export function getBook(id) {
    return axios.get(url + `books/${id}.json`)
}

export function updateSelectedBook(id, bookData) {
    return axios.put(url + `books/${id}.json`, bookData)
}