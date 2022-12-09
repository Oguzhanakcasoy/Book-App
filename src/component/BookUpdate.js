import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getBook, updateSelectedBook } from '../functions/http/http';
import BookPage from './BookPage';

export default function BookUpdate() {
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location.state.id)

    const [selectedBook, setSelectedBook] = useState({
        picture: "",
        bookname: "",
        description: "",
        author: "",
        recyled: false
    });

    useEffect(() => {
        getBook(location.state.id).then((res) => {
            setSelectedBook(res.data)
        })
    }, [])

    const onChangeText = (event) => {
        setSelectedBook({...selectedBook,[event.target.name]: event.target.value})
        console.log(selectedBook)
    }

    const updateBook = () => {
        updateSelectedBook(location.state.id, selectedBook)
        .then((res)=>{
            if (res) {
                alert("Güncelleme Başarılı")
                
            }
                navigate("/")         
        })
    }

    return (
       <BookPage book = {selectedBook} onChangeText = {onChangeText} updateBook = {updateBook} />
    )
}
