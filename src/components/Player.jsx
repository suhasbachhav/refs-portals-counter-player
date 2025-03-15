import { useState } from "react";

export default function Player() {

  const [name, setName] = useState();
  const [submit, setSubmit] = useState();


  function handleName(e){
    setSubmit(false )
    setName(e.target.value)
  }
  function handleSubmit(e){
    setSubmit(true)
  }
  return (
    <section id="player">
      <h2>Welcome {submit ?  name : 'unknown entity'}</h2>
      <p>
        <input onChange={handleName} type="text" value={name}/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
