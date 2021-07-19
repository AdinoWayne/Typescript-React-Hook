import React from 'react';
import Store from "../Store/Store";
import {useFetch} from "../hooks/FetchingHook";
import { observer } from 'mobx-react';

const CardsList = React.lazy(() => import('./Cards'));

const Home:React.FC = () => {
    const { getPlayers } = Store;

    useFetch(getPlayers); //TODO checking api call during every change of router

    return (
        <>
            <React.Suspense fallback={<div>...Loading</div>}>
                <CardsList/>
            </React.Suspense>
        </>
    );
};

export default observer(Home);
