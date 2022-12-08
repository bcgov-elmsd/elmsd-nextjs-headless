import React from 'react'

type PageProps = {
  params: {
    searchTerm: string;
  }
}

function SearchResults({params:{searchTerm}}:PageProps) {
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults