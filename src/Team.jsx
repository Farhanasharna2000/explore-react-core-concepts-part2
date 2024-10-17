import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11)
    const teamStyle={
        border: '12px solid purple',
        margin:'12px',
        padding:'12px',
        borderRadius:'12px'

    }
    const teamAdd=()=>{
        const newTeam= team+1;
        setTeam(newTeam);
    }
    const teamRemove=()=>{
        setTeam(team-1);
    }
    return(
        <div style={teamStyle}>
            <h3>Players : {team}</h3>
            <button onClick={teamAdd}>Add</button>
            <button onClick={teamRemove}>Remove</button>

        </div>
    )
}