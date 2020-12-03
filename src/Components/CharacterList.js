import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'; 

function CharacterList(){
    const [CharacterList, setCharacterList] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(res => {
            console.log(res.data.results);
            setCharacterList(res.data.results);
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

const filteredCharacterList = CharacterList.filter( char =>{
    return char.name.toLowerCase().includes( search.toLowerCase() )
}) 

    return(
        <div>
            <h2>Ricky and Morty Characters</h2>
            <input className="search" type="text" onChange={e=>setSearch(e.target.value)}/>
            <button className="btn" type="submit" >Search</button>
            <button className="btn" url="http://localhost:3000/">Reset</button> 
            <div className="card">
            {filteredCharacterList.map((chars, id) =>{
                return <CharacterCard key={id} chars={chars}/>
            }).slice(0,6)}
            </div>
        </div> 
    )
}

export default CharacterList