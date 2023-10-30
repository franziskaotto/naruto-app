import { useEffect, useState } from 'react'
import './styles/App.css'

const narutoCharacterAPI = "https://narutodb.xyz/api/character";



const getAllCharacters = async (setAllCharacters) => {
  fetch(
    "http://localhost:3000/api/character",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setAllCharacters(data.characters);
    })
    .catch((err) => console.log(err));
 
}



function App() {
  const [allCharacters, setAllCharacters] = useState([])




  useEffect(() => {
    getAllCharacters(setAllCharacters)
  }, [])

  return (
    <>
      <h1>Hello Naruto</h1>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      {allCharacters.map((character) => (
        <div key={character.id}>
          <p>Character: {character.name}</p>
          <button>Info</button>
        </div>
      ))}
    </>
  );
}

export default App;
