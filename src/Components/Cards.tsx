import React from 'react';
import {IEpisode, IPlayer} from "../interfaces";
import Store from "../Store/Store";
import Card from "./Card";

const Cards:React.FC = () => {
    const {players} = Store;

    return (
        <div className="row">
            {
                players.map((player: IPlayer, index: number) => {
                    return (
                        <Card {...player} key={index}/>
                    );
                })
            }
        </div>
    );
};

export default Cards;