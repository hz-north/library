import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex justify-between items-center max-w-screen-md mx-auto py-10">
          <li className="text-2xl font-bold"><Link to="/">BooK</Link></li>
          <div className="flex justify-around gap-10  items-center">
            <li>
              <Link to="/create">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              </Link>
            </li>
            <li>
              <Link to="/search">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              </Link>
            </li>
            <li className="w-12 h-12">
              <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" className="w-full h-full rounded-full" />
            </li>
          </div>
        </ul>
      </nav>

    </div>
  )
}
