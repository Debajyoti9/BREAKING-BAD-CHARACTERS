import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router';

export const CharacterContext = createContext();

const CharacterContextProvider = (props) =>{
    const [characters,setCharacters] = useState([]);
    const [quotes,setQuotes] = useState([]);
    const [loading,setLoading] = useState(false);
    const [open,setOpen] = useState(false);
    const [openBad,setOpenBad] = useState(true);
    const [id,setId] = useState(0);
    const [quoteId,setQuoteId] = useState(0);
   
    // const history = useHistory();

    useEffect(()=>{
        async function fetchData(){
            setLoading(true);
            const request1 = await axios.get(props.fetchUrl);
            const request2 = await axios.get(props.fetchQuote);
            setCharacters(request1.data);
            setQuotes(request2.data);
            setLoading(false);
        }
        fetchData();
    },[props.fetchUrl,props.fetchQuote]);

    

    const openCharacter = () =>{
        setOpen(true);
    }

    const openBrekingBad = ()=>{
        setOpenBad(!openBad);
    }

    const openCharacterDetails = (charId,quote) =>{
        openBrekingBad();
        openCharacter();
        setId(charId);
        setQuoteId(quote);
        // history.push("/CharacterDetails");
    }

    return(
        <CharacterContext.Provider value={{characters,loading,open,openBad,id,quotes,quoteId,openCharacter,openCharacterDetails,setOpenBad}}>
           {props.children}
        </CharacterContext.Provider>
    )


}


export default CharacterContextProvider;