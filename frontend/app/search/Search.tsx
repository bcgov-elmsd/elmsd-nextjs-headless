'use client'
import React, {FormEvent,useState} from 'react'
import { useRouter } from 'next/navigation'


function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()
  //search using router push
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchTerm('')
    router.push(`/search/${searchTerm}`)
  }

  return (
    <form 
    onSubmit={handleSearch}
    className="flex space-x-4 divide-x-2 p-5"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
    </form>
  )
}

export default Search