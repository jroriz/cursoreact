import { useState } from 'react';

function Home() {
  
  const [name, setName] = useState("César");
  
  return (
      <main>
        <h1>Ola {name}</h1>
        <button onClick={() => setName("joao")}>Clique aqui</button>
      </main>
  );
}

export default Home;
