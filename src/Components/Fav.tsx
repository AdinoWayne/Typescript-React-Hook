import React from 'react';
import { IPlayer } from "../interfaces";
import Store from "../Store/Store";
import Card from "./Card";
import Unfortunately from "./unfortunately";
import {arrayPic} from "../utility/Globals";
import { observer } from 'mobx-react';

const Fav:React.FC = () => {
    const { favorites } = Store;
    if (favorites.length === 0) {
        return (
            <div className="favor">
                <Unfortunately mainClass="Favourites" customStuff={{arrayPic}} title="No Fav has been used"/>
            </div>
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

export default observer(Fav)
