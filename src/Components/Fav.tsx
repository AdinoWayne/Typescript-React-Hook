import React from 'react';
import {IEpisode, IPlayer} from "../interfaces";
import Store from "../Store/Store";
import Card from "./Card";
import Unfortunately from "./unfortunately";
import {arrayPic} from "../utility/Globals";

export const Fav:React.FC = () => {
    const {players} = Store;
    const state = { favourites: players}
    if (state.favourites.length === 0) {
        return (
            <Unfortunately mainClass="Favourites" customStuff={{arrayPic}} title="No Fav has been used"/>
        )
    }
    return (
        <div className="row">
            {
                state.favourites.map((player: IPlayer, index: number) => {
                    return (
                        <Card {...player} key={index}/>
                    );
                })
            }
        </div>
    );
};
