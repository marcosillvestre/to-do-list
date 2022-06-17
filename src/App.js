import './App.css';
import React, { useState, useRef } from 'react';
import { Container, List } from './styles'

// const element = document.getElementById('Done').style.textDecorationLine = 'none';

function App() {


  const [things, setThinghs] = useState([])
  const [done, setDone] = useState()
  const inputList = useRef()

  function toDo() {
    setThinghs([...things, { id: Math.random(), frase: inputList.current.value }])
    console.log(things)
  }

  function deleteItem(id) {
    let filtered = things.filter((item) => item.id !== id)
    console.log(filtered)
    setThinghs(filtered)
  }
  return (
    <Container>
      <header>
        <input placeholder="things to do" className='mainInput' ref={inputList} required />
        <button className="button" type='const name = new type(arguments);' onClick={toDo}>Launch </button>
      </header>
      <div className="container" >
        <ul >
          {things.map((thing) => (
            < List key={thing.id} >


              <input className='checkbox' type='checkbox' />
              <p id='Done'>{thing.frase}</p>

              <button className="btn-icon" onClick={() => deleteItem(thing.id)}>   <i className='bx bxs-trash'></i> </button>
            </List>
          ))}
        </ul>
      </div>

    </Container>
  );
}

export default App;
