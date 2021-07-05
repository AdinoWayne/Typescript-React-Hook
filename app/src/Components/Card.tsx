import React from 'react';
import {IEpisode, IPlayer} from "../interfaces";
import {Store} from "../Store/Store";
import {toggleAction} from "../Store/Actions";

const Card: React.FC<IPlayer> = (props) => {

    const {state, dispatch} = React.useContext(Store);

    const {id, name, club, position, image, squad_number } = props;
    return (
        <div className="card special_card col-lg-4 col-md-6 col-sm-12" key={id}>
            {image && <img src={(image) ? image : ""} alt={name}/>
            }
            <div className="card_header">{name}</div>
            <div className="card_body">
                club:{club} <br/>
                position:{position} <br/>
                squad_number:{squad_number} <br/>
                <button
                    className="btn btns"
                    onClick={() => toggleAction(state, dispatch, props)}
                >
                    {
                        state.favourites.find((fav: IEpisode) => fav.id === id) ? 'UnFav' : 'Fav'
                    }
                </button>
            </div>
        </div>
    );
};

export default React.memo(Card);