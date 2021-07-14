import React from 'react';
import { IPlayer } from "../interfaces";
import PlayerModel from '../Store/PlayerModel';
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
                    Club:{club} <br/>
                    Position:{position} <br/>
                    Squad Number:{squad_number} <br/>
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
    );
};

export default React.memo(Card);