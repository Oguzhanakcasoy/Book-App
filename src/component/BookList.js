/*
import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { BookContext } from '../context/Context';
import { getBooks } from '../functions/http/http';
import BookDetail from './BookDetail';
import { useNavigate } from 'react-router-dom'

export default function BookList() {
    const context = useContext(BookContext);
    const navigate = useNavigate()
    const detail = (b) => {
        console.log(b)
    }

    useEffect(() => {
        async function getAllBooks() {
            const books = await getBooks(); // api den çekilen kitaplar
            context.setBook(books);
            // console.log(books)
        }
        getAllBooks();
    }, [])
    return (
        <div className='row'>
            <div className='col-md-7'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Book Name</th>
                            <th>Description</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {context.books.map(b => {
                            return (
                                <tr onClick={() => detail(b)} key={b.id}>
                                    <td><img src={b.picture} width="75px" /></td>
                                    <td>{b.bookname}</td>
                                    <td>{b.description}</td>
                                    <td>{b.author}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='col-md-5'>
                <BookDetail book = {context.books}/>
            </div>
        </div>
    )
}
*/

import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { BookContext } from '../context/Context';
import { getBooks } from '../functions/http/http';
import { useNavigate } from 'react-router-dom';

export default function BookList() {
    const navigate = useNavigate()
    const context = useContext(BookContext);
    const detail = (b) => {
        console.log(b)
    }

    useEffect(() => {
        async function getAllBooks() {
            const books = await getBooks(); // api den çekilen kitaplar
            context.setBook(books);
            //  console.log(books)
        }
        getAllBooks();
    }, [])
    return (
      <div  className='row'>
        <div className='col-md-7'>
            <button className='btn btn-primary'
            onClick={()=> navigate("/book/create")}
            >New Book</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Book Name</th>
                    <th>Description</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
                {context.books.map(b => {
                    return ( 
                        <tr onClick={() => detail(b)} key={b.id}>
                            <td><img src={b.picture} width="75px" /></td>
                            <td>{b.bookname}</td>
                            <td>{b.description}</td>
                            <td>{b.author}</td>
                            <td>
                                <button 
                                className='btn btn-success' 
                                onClick={() => 
                                    navigate("/book/update/" + b.id, {
                                        state: {id : b.id}
                                    })}> Update Book </button>
                            </td>
                        </tr>
                    )

                })}

            </tbody>

        </table>
        </div>
        <div className='col-md-6' >
          Details:

        </div>
        </div>
    )
}



