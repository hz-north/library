import book from '../assets/images.png'
export default function Booklist() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
      {[1, 2, 3, 4,5].map(() => (
        <div>
          <img src={book} alt="" />
          <div className='flex justify-center'>
          <h1>Book Title</h1>
          <p>Description</p>
          </div>
      </div>
    ))}
    </div>
  )
}
