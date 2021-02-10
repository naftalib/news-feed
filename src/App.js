import React, { useState, useEffect } from "react"

const App = () => {
  //state innit
  const [news, setNews] = useState([])
  const [searchQuery, setSearchQuery] = useState('react')
  const [url, setUrl] = useState(
        "http://hn.algolia.com/api/v1/search?query=react"
  )
  //fetch news
  const fetchNews = () => {
    fetch(url)
    .then(result => result.json())
    .then(data => setNews(data.hits))
    .catch(error => console.log(error))
  }
  useEffect(() => {
    fetchNews()
  }, [url])

  const handleChange = (e) =>{
    setSearchQuery(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  }
  const searchBar = () => (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={handleChange} />
      <button>Search</button>
    </form>
  )
  const showNews = () => news.map((n,i) => <p key={i}>{n.title}</p>)
  
  return(
    <div>
      <div id='title'>
        <h2>Hacker News Search</h2>
      </div>
      <div id='main'>
        {searchBar()}
        {showNews()}
      </div>
    </div>
  ) 
}
export default App;
