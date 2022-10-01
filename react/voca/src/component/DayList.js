//import dummy from '../db/data.json'
import {Link} from 'react-router-dom'
//import {useState, useEffect} from 'react';
import useFetch from '../hooks/useFetch';


export default function DayList(){

  const days = useFetch('http://localhost:3001/days');
  // const [days, setDays] = useState([]);

  // useEffect(() =>{
  //   fetch('http://localhost:3001/days')
  //     .then(res =>{
  //       return res.json()
  //     })
  //     .then(data =>{
  //       setDays(data);
  //     })
  // }, []) //count 일때만 실행 ((의존성))

  return (
    <>
    <ul className = "list_day">
    {days.map(day =>(
      <li key = {day.id}>
        <Link to={`/day/${day.day}`}> Day {day.day}</Link>
      </li>
    ))}
    <li></li>
    </ul>
    </>
  )
}

//dummy.days -> days (by )