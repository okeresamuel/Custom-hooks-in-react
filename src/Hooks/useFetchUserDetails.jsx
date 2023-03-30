import { useEffect, useState} from "react";
import axios from "axios";
const api_base_url = "https://jsonplaceholder.typicode.com/users/"
const useFetchUser = () => {

const [user_details, set_user_details] = useState(null)

useEffect(()=>{ 
  const api_controller = new AbortController()
  const signal = api_controller.signal
  let isMounted = true

const  fetch_user_info = async () => {
  try {
    let user_info = await axios.get(api_base_url, signal)
    if(isMounted) set_user_details(user_info) 
  } catch (error) {
     console.log(error.message)
  }  
} 
fetch_user_info()

  return ()=>{
    isMounted = false
    api_controller.abort()
    console.log("Request aborted")
  }
}, [])

return user_details
};
export default useFetchUser;