import { Link } from 'react-router-dom';
import book from '../assets/images.png'
import useFetch from '../hooks/useFetch';
export default function Booklist() {
  let { data: books, loading, error } = useFetch("http://localhost:3000/books");
  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      {loading && <p>Loading..</p>}

      {/* booklist */}

      {!!books && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-3">
          {books.map((b) => (
            <Link to={`/books/${b.id}`} key={b.id}>
              <div className='p-4 border border-1' key={b.id}>
              <img src={book} alt="" />
              <div className='text-center space-y-2 mt-3'>
                <h1>{b.title}</h1>
                <p>{b.description}</p>
              </div>
              <div className='flex flex-wrap'>
                {b.categories.map((categ) => (
                  <span key={categ} className='mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500'> { categ }</span>
                ))}
              </div>
            </div>
            </Link>

          ))}
        </div>
      )}
    </>
  )
}
