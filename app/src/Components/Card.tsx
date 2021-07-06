import React from 'react';
import {IEpisode, IPlayer} from "../interfaces";
import {Store} from "../Store/Store";
import {toggleAction} from "../Store/Actions";

const Card: React.FC<IPlayer> = (props) => {

    const {state, dispatch} = React.useContext(Store);

    const {id, name, club, position, image, squad_number } = props;
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
                        onClick={() => toggleAction(state, dispatch, props)}
                    >
                        {
                            state.favourites.find((fav: IEpisode) => fav.id === id) ? 'UnFollow' : 'Follow'
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Card);