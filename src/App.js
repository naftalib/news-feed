import React, { Component } from "react"

class App extends Component {
  //state innit

  state = {
      news:[],
      // searchQuery:'react',
      // url: "http://hn.algolia.com/api/v1/search?query=react"
  }
//   const [news, setNews] = useState([])
//   const [searchQuery, setSearchQuery] = useState('react')
//   const [url, setUrl] = useState(
//         "http://hn.algolia.com/api/v1/search?query=react"
//   )
  //fetch news
componentDidMount(){
    fetch("http://hn.algolia.com/api/v1/search?query=php")
    .then(result => result.json())
    .then(data => {
      console.log(data)
        this.setState({
            news: data.hits
        })
    })
    .catch(error => console.log(error))
}

//   const fetchNews = () => {
//     fetch(url)
//     .then(result => result.json())
//     .then(data => setNews(data.hits))
//     .catch(error => console.log(error))
//   }
//   useEffect(() => {
//     fetchNews()
//   }, [url])

//   const handleChange = (e) =>{
//     setSearchQuery(e.target.value)
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
//   }
//   const searchBar = () => (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={searchQuery} onChange={handleChange} />
//       <button>Search</button>
//     </form>
//   )
  
  render(){
    const showNews = this.state.news.map((n,i) => <p key={i}>{n.title}</p>)

  return(
    <div>
      <div id='title'>
        <h2>Hacker News Search</h2>
      </div>
      <div id='main'>
       <h2>{showNews}</h2>
      </div>
    </div>
  ) 
  }
}
export default App;
