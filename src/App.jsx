import axios from 'axios'
import { useState, useEffect } from 'react'

// App component handles fetching and displaying paginated images
const App = () => {

  // Stores fetched image data
  const [initdata, setinitdata] = useState([])

  // Tracks current page index
  const [indexval, setindexval] = useState(1)

  // Fetch images from API based on current page
  async function getdata() {
    const api1 = await axios.get(`https://picsum.photos/v2/list?page=${indexval}&limit=9`)
    setinitdata(api1.data)
  }

  // Re-fetch data whenever page changes
  useEffect(() => {
    getdata()
  }, [indexval])

  // Default loading state
  let imgdata = 'Loading...'

  // Map API data to UI cards
  if (initdata.length > 0) {
    imgdata = initdata.map((data, index) => (
      <div key={index}>
        <a href={data.url} target='_blank' rel="noreferrer">
          <img
            className='w-125 h-75 rounded-2xl'
            src={data.download_url}
            alt="image"
          />
          <h2>{data.author}</h2>
        </a>
      </div>
    ))
  }

  return (
    // Main container
    <div className='flex flex-col items-center'>

      {/* Image grid */}
      <div className='flex flex-wrap gap-3 justify-center items-center px-10 py-10'>
        {imgdata}
      </div>

      {/* Pagination controls */}
      <div className='flex gap-5'>

        {/* Previous button */}
        <button
          onClick={() => {
            if (indexval > 1) {
              setindexval(indexval - 1)
            }
            setinitdata([])
          }}
          className='w-[100px] h-[40px] bg-black text-white rounded-2xl mb-8'
        >
          Previous
        </button>

        {/* Current page display */}
        <h3>Page {indexval}</h3>

        {/* Next button */}
        <button
          onClick={() => {
            setindexval(indexval + 1)
            setinitdata([])
          }}
          className='w-[100px] h-[40px] bg-black text-white rounded-2xl mb-8'
        >
          Next
        </button>

      </div>
    </div>
  )
}

export default App
