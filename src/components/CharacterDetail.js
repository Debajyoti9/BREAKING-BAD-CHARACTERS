import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { CharacterContext } from '../context/CharcterContext';
import Quotes from './Quotes'

function CharacterDetail({src,name,birthday,occupation,status,nickname,actor,season}) {

     const {quoteId,quotes,setOpenBad} = useContext(CharacterContext);

     const history = useHistory();
    //  console.log(quoteId);
    //  const getSeasons = () =>{
    //      let str = '';
    //      season.forEach(element => {
    //          str +=`Season:${element},`
    //      });
    //      return str;
    //  }

    const backToPrevious = ()=>{
        history.goBack();
        setOpenBad(true);
    }

    return (
        <>
          <div className="characterDetails_info">
            <div>
                <h2>Jack Walker</h2>
                <img className="characterDetails_info_img"  src={src} alt={name} />
            </div>
           <div className='characterDetails_data'>
            <div>
                <h4>DOB:</h4>
                <p>{birthday}</p>
                <h4>Occupation:</h4>
                <p>{occupation}</p>
                <h4>Status:</h4>
                <p>{status}</p>
                <h4>NickName:</h4>
                <p>{nickname}</p>
            </div>
            <div>  
                <h4>Actor:</h4>
                <p>{actor}</p>
                <h4>Seasons</h4>
                 <p>{season}</p>
                <h4>All Quotes</h4>
                
                {quotes.map((qte)=>{
                    if(qte.quote_id === quoteId){
                        return <Quotes quote = {qte.quote} key={qte.quote_id}/>
                    }
                    else{
                        return null;
                    }
                    
                })}
            </div>   
            </div>
            <button className="go_back_to_prev" onClick={backToPrevious}>go back</button>
            </div>  
            
        </>
    )
}

export default CharacterDetail;
