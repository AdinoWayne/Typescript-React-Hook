/*-------------Store.tsx interfaces-------------*/
export interface IState {
    episodes: Array<any>
    favourites: Array<any>,
    filters: Array<any>,
    Info: {
        seasonsDrop: Array<any>,
        episodesDrop: {
            season: any
        }
    },
    filteredEpisodes:Array<any>
}

export interface IAction {
    type: string,
    payload: any
}

export interface ArrayObjectCheckbox {
    "name": string,
    "id": number | string
}

export interface IPropsSelect {
    Array: Array<ArrayObjectCheckbox>,
    placeholder: string,
    multiple?: boolean,
    className?: string,
    value?: string,
    handleChange?: any
}

export interface IPlayer {
    age: number,
    club: string,
    id: number,
    image: string,
    name: string,
    position: string,
    squad_number: number,
    stats: any,
    team_id: number
}