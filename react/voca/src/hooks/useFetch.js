
import {useState, useEffect} from 'react'

export default function useFetch(url){

  const [data, setData] = useState([]);

  useEffect(() =>{
    fetch(url)
      .then(res =>{
        return res.json()
      })
      .then(data =>{
        setData(data);
      })
  }, [url]) //count 일때만 실행 ((의존성))

  return data
}