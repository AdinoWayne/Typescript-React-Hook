import React from 'react';
import { IPlayer } from "../interfaces";
import Store from "../Store/Store";
import Card from "./Card";
import Unfortunately from "./unfortunately";
import {arrayPic} from "../utility/Globals";

export const Fav:React.FC = () => {
    const { favorites } = Store;
    if (favorites.length === 0) {
        return (
            <Unfortunately mainClass="Favourites" customStuff={{arrayPic}} title="No Fav has been used"/>
        )
    }
    return (
        <div className="row">
            {
                favorites.map((player: IPlayer, index: number) => {
                    return (
                        <Card {...player} key={index}/>
                    );
                })
            }
        </div>
    );
};
