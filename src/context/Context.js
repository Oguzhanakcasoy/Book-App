import { createContext, useReducer } from "react";
import { getBooks } from "../functions/http/http";

export const BookContext = createContext(
    {
        // bookList: []
        books: [],
        setBooks:(books) => {}
    }
);
    // action : parmetre, metot ismi
function bookReducer(state, action) { // Gelen veriyi işliyor.
    switch (action.type) {
        case "SET":
            const inverted = action.payload.reverse(); // reverse büyükten küçüğe sıralar
            return inverted;
        default:
            return state;
    }
}

function BookProvider({children}) {
    const [bookState, dispatch] = useReducer(bookReducer, []); // dispatch reducer a veri gönderir.

    function setBook(books) {
        dispatch({type:'SET', payload: books}) 
    };

    const value = {
        books: bookState,
        setBook: setBook
    };
    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;