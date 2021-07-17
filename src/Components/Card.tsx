import React from 'react';
import { IPlayer } from "../interfaces";
import PlayerModel from '../Store/PlayerModel';
import { observer } from 'mobx-react';
import Store from "../Store/Store";

const Card: React.FC<IPlayer> = (props) => {

    const { pushToFavorite, favorites } = Store;

    const {id, name, club, position, image, squad_number, age, team_id, stats } = props;

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 pb-4" key={id}>
            <div className="card special_card">
                <div className="card_image">
                    {image && <img src={(image) ? image : ""} alt={name}/>}
                </div>
                <div className="card_header">{name}</div>
                <div className="card_body">
                    <div className="card_body_detail">
                        <div>
                            Club: {club} <br/>
                            Position: {position} <br/>
                            Age: {age}
                        </div>
                        <div>
                            <span className="card_number">{squad_number}</span>
                        </div>
                    </div>
                    <div className="card_button">
                        <button
                            className="btn btns"
                            onClick={() => pushToFavorite(new PlayerModel({
                                id,
                                age,
                                stats,
                                team_id,
                                name,
                                club,
                                position,
                                image,
                                squad_number
                            }))}
                        >
                            {
                                favorites.find((fav: IPlayer) => fav.id === id) ? 'UnFollow' : 'Follow'
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(Card);