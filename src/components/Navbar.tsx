import Link from "next/link";
export default function Navbar(){
    return(
        

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link href="./" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-pink-700 md:p-0 dark:text-white md:dark:text-pink-500" aria-current="page">нүүр хуудас</Link>
        </li>
        <li>
          <Link href="/about" className="block py-2 px-3 text-pink-900 rounded-sm hover:bg-pink-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent">миний тухай</Link>
        </li>
        <li>
          <Link href="/contact" className="block py-2 px-3 text-pink-900 rounded-sm hover:bg-pink-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent">холбоо барих</Link>
        </li>
        <li>
          <Link href="/blog" className="block py-2 px-3 text-pink-900 rounded-sm hover:bg-pink-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent">blog</Link>
        </li>
        <li>
          <Link href="/gallery" className="block py-2 px-3 text-pink-900 rounded-sm hover:bg-pink-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent">images</Link>
        </li>
        <li>
          <Link href="/todo" className="block py-2 px-3 text-pink-900 rounded-sm hover:bg-pink-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent">todo</Link>
        </li>
        <li>
          <Link href="/counter" className="block py-2 px-3 text-pink-900 rounded-sm hover:bg-pink-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent">counter</Link>
        </li>
         <li>
          <Link href="/login" className="block py-2 px-3 text-pink-900 rounded-sm hover:bg-pink-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent">login</Link>
        </li>
      </ul>
    </div>
</nav>

    )
} 