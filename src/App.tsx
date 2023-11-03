import { useEffect, useState } from 'react'
import { QuotesResponse } from './types/QuotesResponse'
import { QuoteCategorySelector } from './component/QuoteCategorySelector'
import { Spinner } from './component/spinner/Spinner'
import './App.css'

function App() {
  const [category, setCategory] = useState('happiness')
  const [quotes, setQuotes] = useState<QuotesResponse>(Object)
  const [loading, setLoading] = useState(false)

  const fetchQuotes = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
        headers: {
          "X-Api-Key": "YOUR API KEY"
        }
      })
      const data = await response.json();
      const quotes: QuotesResponse = data[0]
      console.log(quotes.category);

      setQuotes(quotes)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
    // setTimeout(fetchQuotes, 10000);
  }


  useEffect(() => {
    fetchQuotes()
  }, [])

  return (
    <div className="App">
      <h2>Choose a category</h2>
      <QuoteCategorySelector category={category}
        onChange={(e) => setCategory(e.target.value)
        } />
      <div className="quote-card">
        {loading ? <Spinner /> :
          <div>

            <div className="quote">
              {quotes?.quote}
            </div>
            <div className="author">
              {quotes?.author}
            </div>
          </div>}
      </div>

      <button onClick={() => fetchQuotes()}>Next</button>
    </div>
  )
}

export default App
