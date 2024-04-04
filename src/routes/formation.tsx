import React, { useState } from "react"
import Background from "../components/Background"
import { TEAMS } from "../constant"

import Team from "../components/Team";

export default function FormationPage () {

  const [team1, setTeam1] = useState<string>("-1");
  const [team2, setTeam2] = useState<string>("-1");

  return (
    <>
      <Background />
      <h2 className="mt-10 text-center text-5xl font-bold">Formation</h2>
      <div className="flex justify-center my-4 gap-2">

      <select className="rounded p-1 cursor-pointer" value={team1} onChange={(e)=> setTeam1(e.target.value)}>
        <option value={"-1"} disabled>Elegir equipo 1</option>
        {TEAMS.map(team => (
          team.name !== team2 ? <option key={team.code}>{team.name}</option> : null
          ))}
      </select>
      <select className="rounded p-1 cursor-pointer" onChange={(e) => setTeam2(e.target.value)}>
        <option value={"-1"} disabled>Elegir Equipo 2</option>
        {TEAMS.map(team => (
          team.name !== team1 ? <option key={team.code}>{team.name}</option> : null
          ))}
      </select>
          </div>
      <div className="flex gap-8 items-center justify-center">

      <Team teamNumber={1} team={team1} TEAMS={TEAMS}/>
      <Team teamNumber={2} team={team2} TEAMS={TEAMS}/>
      
      </div>
    </>
    
  )
}