import {BiSearch} from 'react-icons/bi';
import {AiOutlinePlus} from 'react-icons/ai'
import {MdClose} from 'react-icons/md'
import { Link } from 'react-router-dom' 
import NoteItem from '../Components/NoteItem'
import { useEffect, useState } from 'react';

const Notes = ({notes}) => {
  const [showSearch, setShowSearch]= useState(false);
  const[text, setText] = useState('');
  const [filteredNotes, setfilteredNotes]= useState(notes);
  const handleSearch =()=>{
    setfilteredNotes(notes.filter(note=>{
      if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
        return note;
      }
    }))
  }
  useEffect(handleSearch,[text])
  return (
    <section>
      <header className='notes__header'>
            {!showSearch && <h2>My Notes</h2>} 
             {showSearch &&<input type="text" value={text} onChange={(e)=> {setText(e.target.value); handleSearch();}}autoFocus placeholder='Keyword' />}
            <button className='btn' onClick={()=> setShowSearch(prevState=> !prevState)}> {showSearch ? <MdClose/> : <BiSearch/>}</button>
      </header>
      <div className='notes__container'>
        {filteredNotes.length == 0 && <p className='empty__notes'>Note notes found.</p>}
           {
            filteredNotes.map(note => <NoteItem key={note.id} note={note}/>)
           }
      </div>
        <Link to="/create-note" className="btn  add__btn"><AiOutlinePlus/></Link>
    </section>
  )
}

export default Notes