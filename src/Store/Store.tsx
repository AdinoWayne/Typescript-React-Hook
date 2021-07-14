import axios from "axios";
import { action, observable, runInAction, configure } from "mobx";
import PlayerModel from "./PlayerModel";
import { IPlayer } from "../interfaces";
import { fetchDataAction } from ".//Actions";

configure({enforceActions: 'observed'}) // strict mode

class PlayerStore {
    @observable count: number = 0;

    @observable.ref
    players: PlayerModel[] = []

    @observable.ref
    favorites: PlayerModel[] = []

    @action
    updateCount = (count: number) => {
        this.count = count;
    }

    @action
    pushToFavorite = (element: PlayerModel) => {
        this.favorites.push(element);
    }

    @action
    actionExample = () => {
        console.log('trigger action player')
        // TODO
    }

    @action
    getPlayers = () => {
        fetchDataAction().then(res => {
            const data: PlayerModel[] = res.map((e: IPlayer) => new PlayerModel(e))
            runInAction(() => {
                this.updateCount(data.length);
                this.players = data;
            })
        })
    }

}

const store = new PlayerStore();

export default store;