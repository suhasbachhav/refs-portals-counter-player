import { useState, useRef } from "react";

export default function Player() {
  const [name, setName] = useState('');
  const playerName = useRef();

  function handleSubmit(e) {
    e.preventDefault(); // Prevent form submission
    setName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {name || 'unknown entity'}</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input ref={playerName} type="text" placeholder="Enter your name" />
          <button type="submit">Set Name</button>
        </p>
      </form>
    </section>
  );
}
