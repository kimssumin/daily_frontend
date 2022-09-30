import {useState} from "react";

export default function Welcome(props){
  //let name = "Mike"
  const [name, setName] = useState('Mike');

  function changeName(){
    const newName = name === 'Mike' ? 'Jane' : 'Mike';
    setName(newName)
  }
  return (
    <div>
      <h2>Welcome</h2>
      <h2>컴포넌트의 속성값 {name} ({props.age})</h2>
      <button onClick = {changeName}>Change Name</button>
    </div>
  )
}