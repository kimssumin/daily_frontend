import World from './World'
import styles from './Hello.module.css'

const Hello = function(){

  function showName(){
    alert('Mike');
  }

  function showText(e){
    console.log(e.target.value)
  }
  return (
    <div className = {styles.box}>
      <p>Hello</p>
      <World/>

      <button onClick = {showName}>Show name</button>
      <button onClick = {
        () => {
          alert(30)
        }
      }>Show age</button>
      <input type = "text" onChange = {showText}/>
    </div>
  );
}

export default Hello;