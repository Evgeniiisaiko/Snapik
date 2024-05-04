import React, { useEffect } from 'react';
import AppRoutes from './router/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ServiceComponents/ScrollToTop';
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setIsMobile } from "./features/main/main";
import Modals from "./components/ServiceComponents/Modals";
import MobileBar from "./components/MobileBar";
import { addToStorage } from './utils/LocalStorageExplorer';
import { getPopularCategories, getPopularCities, getPopularExcursions, getPopularReviews } from './features/main-data/mainDataSlice';
import { getUser } from './features/profile/profileSlice';
import useToken from './hooks/useToken';
import { handleSelection } from './features/modals/modalsSlice';
import { getAllCategories, getAllCities } from './features/search/searchSlice';

const MOBILE_WIDTH = 1050

function App() {
    const dispatch = useAppDispatch()
    const token = useToken()
    const { isMobile } = useAppSelector(state => state.main)
    const favoritesItems = useAppSelector(state => state.favorites.items)
    const seenItems = useAppSelector(state => state.seen.items)

    const handleResize = () => {
        const isMobile = window.innerWidth <= MOBILE_WIDTH
        dispatch(setIsMobile(isMobile))
    }
    const initResize = () => {
        window.addEventListener('resize', () => {
            setTimeout(handleResize, 800)
        })
        handleResize()
    }

    const handleDefferedSelectionModal = (seconds: number) => {
        setTimeout(() => {
            dispatch(handleSelection())
        }, seconds * 1000)
    }

    useEffect(() => {
        addToStorage("favorites", favoritesItems)
    }, [favoritesItems])

    useEffect(() => {
        addToStorage("seen", seenItems)
    }, [seenItems])

    useEffect(() => {
        if (token) {
            dispatch(getUser())
        }
    }, [token])

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getAllCities())
        initResize()
        //handleDefferedSelectionModal(60)
    }, [])

    return (
        <div className="App h-100p f-column jc-between">
            <div className="AppContent">
                <ScrollToTop />
                <Header />
                <AppRoutes />
            </div>
            <Footer />
            <Modals />
            {isMobile ? <MobileBar /> : null}
            {/*<Messenger/>*/}

        </div>
    );
}

export default App;
