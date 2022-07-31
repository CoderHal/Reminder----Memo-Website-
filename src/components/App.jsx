import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App(){
  const [notes, setNotes] = useState([]);

  function addItem(newNotes){
    setNotes(prevNotes=>{
      return [...prevNotes,newNotes]
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes=>{
      return (prevNotes.filter((items, index)=>{
        return id !== index;
      }))
    })
  }
  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      {notes.map((noteItem,index)=>{
        return (
          <Note key= {index} 
          id = {index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;