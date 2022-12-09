import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import {addBook} from '../functions/http/http'

export default function BookCreate() {
    const navigate = useNavigate()
    const [newBook,setnewBook]=useState({
        bookname: "",
        description: "",
        author: "",
        picture: "",
        recyled: false,
    })
    const createBook= ()=> {
        addBook(newBook)
        .then((res)=>{
            if (res) {
                alert("xxxxx")
                
            }
                navigate("/")         
        })
    }

    const onChangeText= (event)=>{
        setnewBook({...newBook,[event.target.name]: event.target.value})
        console.log(newBook)
    }
  return (
    <div className="row">
        <div className="col-md-5">
        {/* <label>Picture</label>
          <input
            className="form-control"
            type="text"
             value= {<img src={newBook.picture} /> }
            name="picture"
            onChange={onChangeText}
          /> */}
        <label>Book Name</label>
          <input
            className="form-control"
            type="text"
             value={newBook.bookname}
            name="bookname"
            onChange={onChangeText}
          />
          <label>Author</label>
          <input
            className="form-control"
            type="text"
            value={newBook.author}
            name="author"
            onChange={onChangeText}
          />
          <label>Description</label>
          <input
            className="form-control"
            type="text"
            value={newBook.description}
            name="description"
            onChange={onChangeText}
          />
          <input  className="btn btn-success" type="submit" value ="Create" 
            onClick={() =>createBook()}
          />
        </div>
      </div>
  )
}
