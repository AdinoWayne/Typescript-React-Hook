import axios from "axios";
import { action, observable, runInAction, configure } from "mobx";
import PlayerModel from "./PlayerModel";
import { IPlayer } from "../interfaces";
import { fetchDataAction } from ".//Actions";

configure({enforceActions: true}) // strict mode

class PlayerStore {
    @observable count: number = 0;

    @observable.ref
    players: PlayerModel[] = []

    @action
    updateCount = (count: number) => {
        this.count = count;
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
                this.players = data;
            })
        })
    }

}

const store = new PlayerStore();

export default store;