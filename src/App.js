import Layout from "./component/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import BookList from "./component/BookList"
import BookRecyled from "./component/BookRecyled";
import BookCreate from "./component/BookCreate";
import BookUpdate from "./component/BookUpdate";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<BookList/>}></Route>
          <Route path="/recyled" element={<BookRecyled/>}></Route>
          <Route path="/book/create" element={<BookCreate/>}></Route>
          
          <Route path="/book/update/:id" element={<BookUpdate/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
