import React, {useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CharacterContext } from '../context/CharcterContext';
import '../sytyles/BreakingBad.css';
function BreakingBad({id,src,name,nickname,occupation,birthday,status}) {
    const [open,setOpen] = useState(false);
     const{openCharacterDetails,quotes} = useContext(CharacterContext);
    const openInfo = ()=>{
        setOpen(!open);
    }
    const closeInfo = () => {
        setOpen(false);
    }
    // console.log(typeof(id));
   const getQuotesId = () => {
       let qouteId = quotes.map((quote)=> quote.quote_id);
       for(let i = 0;i<=qouteId.length;i++){
           if(qouteId[i] === id){
               return qouteId[i];
           }
       }
   }

    return (
        <div className="breakingBad">     
            <div id="breaking" className="breakingBad_character_details">
                <div className="breakingBad_hamburger_icon"  onClick={openInfo}>
                    <div className="breakingBad_hamburger_icon_1"></div>
                    <div className="breakingBad_hamburger_icon_2"></div>
                    <div className="breakingBad_hamburger_icon_3"></div>
                </div>
                   <img className="breakingBad_character_image" src={src} alt={name} onClick={closeInfo}/>
                    
                    <div className={`breakingBad_character_buttom ${open?"breakingBad_character_buttom2":null}`} onClick={closeInfo}>  
                       <div className="breakingBad_character_name">
                           <p>{name}</p>
                       </div>
                       <div className={`breakingBad_character_name_short ${open?"underline":null}`}>
                           <img className="beeLogo" src="https://i.pinimg.com/originals/d3/df/1e/d3df1e98bf9d8aae2174a0e0b7a1c94d.jpg" alt="beeImage" />
                           <p>{nickname}</p>
                       </div>
                      {(open?<div className="breakingBad_character_hidden_info">
                           <div>
                               <p>occupation:-</p>
                               <p>{occupation}</p>
                           </div>
                           <div>
                               <p>DOB</p>
                               <p>{birthday}</p>
                           </div>
                           <div>
                               <p>status</p>
                               <p>{status}</p>
                           </div>
                           <div className="breakingBad_character_detail">
                           <Link to="/CharacterDetails"><button className="breakingBad_character_detail_btn bouncy" onClick={() => openCharacterDetails(id,getQuotesId)}>Get Details</button></Link>
                           </div>
                        </div> : null)}
                    </div>   
            </div>
        </div>     
    )
}

export default BreakingBad;
