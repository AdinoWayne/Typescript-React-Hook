import React from 'react';
import { IPlayer } from "../interfaces";
import Store from "../Store/Store";
import Card from "./Card";
import PlayerModel from "../Store/PlayerModel";

const Cards:React.FC = () => {
    const {players} = Store;

    return (
        <div className="row">
            {
                players.map((player: PlayerModel, index: number) => {
                    return (
                        <Card {...player} key={index}/>
                    );
                })
            }
        </div>
    );
};

export default Cards;