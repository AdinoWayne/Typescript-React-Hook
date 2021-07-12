import { action, observable } from "mobx";
import { IPlayer } from "../interfaces";


class PlayerModel {

    constructor(data: IPlayer) {
        this.age= data.age;
        this.club= data.club;
        this.id= data.id;
        this.image= data.image;
        this.name= data.name;
        this.position= data.position;
        this.squad_number= data.squad_number;
        this.stats= data.stats;
        this.team_id= data.team_id;
    }

    id: number = 0;
    age: number = 0;
    club: string = '';
    image: string = '';
    name: string = '';
    position: string = '';
    squad_number: number = 0;
    stats: string = '';
    team_id: number = 0;

    @observable
    completed: boolean = false;

    @action
    toggleComplete = () => {
        this.completed = !this.completed;
    }
}

export default PlayerModel;