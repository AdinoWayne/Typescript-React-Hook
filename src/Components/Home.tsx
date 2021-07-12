import React, {useEffect} from 'react';
import Store from "../Store/Store";
import AdvanceFilters from "./AdvanceFilters";
import {useFetch} from "../hooks/FetchingHook";


const CardsList = React.lazy(() => import('./Cards'));

export const Home:React.FC = () => {
    const { getPlayers } = Store;

    useFetch(getPlayers); //TODO checking api call during every change of router

    return (
        <>
            <React.Suspense fallback={<div>...Loading</div>}>
                <AdvanceFilters/>
                <CardsList/>
            </React.Suspense>
        </>
    );
};
