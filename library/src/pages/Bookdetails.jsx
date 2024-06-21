import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import bookImg from '../assets/images.png';
export default function Bookdetails() {
  let { id } = useParams();
  let { data: book, loading, error } = useFetch(`http://localhost:3000/books/${id}`)
  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>loading ....</p>}
      {book && (
       <div className="w-full flex">
          <div className="w-1/2 bg-slate-100 p-5 ">
            <img src={bookImg} alt=""  className="w-[80%] mx-auto"/>
          </div>
          <div className="m-5">
            <h1>{book.title}</h1>
            <div className="my-4 ">
            {book.categories.map(category => (
              <span className='mx-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500 ' key={category}>
                {category}
              </span>
            ))}
            </div>
            <p>
              {book.description}
            </p>
          </div>
        </div>
      )}
    </>
  ) 
}
