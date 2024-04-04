import React from "react";
import { Teams } from "../constant";

interface TeamProps {
    teamNumber: number;
    team: string;
    TEAMS: Teams[];
}

export default function Team({ teamNumber, team, TEAMS }: TeamProps) {
    console.log(teamNumber);
    if(team == "-1") return <div className="w-28 sm:w-48">Select a team</div>

    return (
        <div className="flex flex-col gap-3 w-28 sm:w-48 text-nowrap duration-200 animate-pulse-short">
            <h1>Team {teamNumber}: {team}</h1>
            <div className="flex flex-col gap-2">
                {TEAMS.map((item) => {
                    if (item.name === team) {
                        const alignments = [];
                        for (let i = 1; i <= 25; i++) {
                            alignments.push(<p key={i} className={`${i > 11 ? "bg-neutral-800" : "bg-green-600"} hover:bg-black duration-200 py-1 px-2 rounded border border-neutral-300 overflow-clip text-ellipsis`}>{i} - {item.alignment[i]}</p>);
                        }
                        return alignments;
                    }
                    return null;
                })}
            </div>
        </div>
    );
}
