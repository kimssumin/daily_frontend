
//import dummy from '../db/data.json'
import {useParams} from 'react-router-dom';
import Word from './Word'
import {useState, useEffect} from 'react'

//dummy words
export default function Day(){

  const day = useParams().day;
  // const wordList = dummy.words.filter(word =>(
  //   word.day === Number(day)
  // ))
  const [words, setWords] = useState([]);

  useEffect(() =>{
    fetch(`http://localhost:3001/words?day=${day}`)
      .then(res =>{
        return res.json()
      })
      .then(data =>{
        setWords(data);
      })
  }, [day]) //count 일때만 실행 ((의존성))


  return (
    <>
    <h2>Day {day}</h2>
    <table className="Day">
      <tbody>
        {words.map(word =>(
          <Word word={word} key = {word.id}/>
        ))}
        
      </tbody>
    </table>
  </>)
}