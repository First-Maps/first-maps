import axios from "axios"

export default async function getLanguageData(lat, lng) {
  const url = `https://native-land.ca/api/index.php?maps=languages&position=${lat},${lng}`
  try {
    const response = await axios.get(url)
  return response.data
  } catch (error) {
    console.log('getLanguageData error', error)
  }
  
}