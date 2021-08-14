import React, { useContext } from 'react';
import { CharacterContext } from '../context/CharcterContext';
import '../sytyles/CharacterDetails.css';
import CharacterDetail from './CharacterDetail';

function CharacterDetails() {
    const {open,characters,id} = useContext(CharacterContext);
    if(open){
    return (
        <div className="characterDetails">
            <h1>Detail Of the Character...</h1>
            {characters.map((character)=>{
                if(id === character.char_id){
                  return  <CharacterDetail src={character.img} name={character.name} birthday={character.birthday} occupation={character.occupation} status = {character.status} nickname={character.nickname} actor={character.portrayed} key={character.char_id} season={character.appearance}/>
                }else{
                    return null;
                }
               
            })}
             
        </div>
    )
  }
  else{
      return null;
  }
}

export default CharacterDetails;
