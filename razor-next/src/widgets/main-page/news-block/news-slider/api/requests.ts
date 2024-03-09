import axios from "axios"
const newsUrl = 'http://localhost:8000/news'

async function getNews(){
  const response = await axios.get(newsUrl) 
  return response.data
}

export { getNews }