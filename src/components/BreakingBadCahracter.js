import React,{useContext,useState} from 'react';
import BreakingBad from './BreakingBad';
import '../sytyles/BreakingBadCharacter.css';
import Pagination from './Pagination';
import { CharacterContext } from '../context/CharcterContext';


function BreakingBadCahracter() {
    
    const [currentPage,setCurrentPage] = useState(1);
    const [characterPerPage] = useState(10);
     
    const {characters,loading,openBad}= useContext(CharacterContext);
  
    //get current characters
    const indexOfLastCharacter = currentPage * characterPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - characterPerPage;
    const currentCharacters = characters.slice(indexOfFirstCharacter,indexOfLastCharacter);

    //change page

    const paginate = (pageNumber) => setCurrentPage(pageNumber); 

   if(loading){
       return <h2 className='bouncing'>Loading....</h2>
   }
  else{
     if(openBad){
        return (
            <>
            <div className="breakingBadCharacter">
              {currentCharacters.map((character)=>(
                <BreakingBad key={character.char_id} id={character.char_id} src={character.img} name={character.name} nickname={character.nickname} occupation={character.occupation[0]} birthday={character.birthday} status={character.status}/>
              ))}
            </div>
            <Pagination characterPerPage={characterPerPage} totalChracters={characters.length} paginate = {paginate}/>
            </>
        )
     }
     else{
         return null;
     }  
    
     }
}

export default BreakingBadCahracter;
