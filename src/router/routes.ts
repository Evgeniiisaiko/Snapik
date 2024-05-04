import Main from '../pages/Main';
import { RoutesList } from '../types/router.types';
import NeededAuth from '../pages/NeededAuth';
import Login from '../pages/Login';
import City from '../pages/City';
import Favorites from '../pages/Favorites';
import Seen from '../pages/Seen';
import Excursion from '../pages/Excursion';
import Search from '../pages/Search';
import ProfileContainer from "../pages/Account/Profile";
import GuideRoute from "./GuideRoute";
import GuideExcursions from "../pages/Account/Guide/Excursions";
import ExcursionFormContainer from "../pages/Account/Guide/NewExcursion";
import GuideHub from "./GuideHub";
import NotFound from '../pages/NotFound';
import { ExcursionRoute } from '../pages/Excursion/ExcursionRoute';
import DocumentPage from '../pages/Document';
import { CityRoute } from '../pages/City/CityRoute';
import ExcursionCreated from '../pages/ExcursionCreated';

export interface RoutesCollection {
    auth: RoutesList;
    public: RoutesList;
    non_auth: RoutesList;
}


export const routes: RoutesCollection = {
    public: [
        {
            Component: Main,
            path: '/',
        },
        {
            Component: CityRoute,
            path: '/city/:id',
        },
        {
            Component: ExcursionRoute,
            path: '/excursion/:id',
        },
        {
            Component: Favorites,
            path: '/favorites',
        },
        {
            Component: Seen,
            path: '/seen',
        },
        {
            Component: Search,
            path: '/search',
        },
        {
            Component: DocumentPage,
            path: '/doc',
        },
        {
            Component: ExcursionCreated,
            path: '/created-successfully',
        },
        {
            Component: NotFound,
            path: '*',
        },
    ],
    auth: [
        {
            Component: ProfileContainer,
            path: '/profile/*',
        },
        {
            Component: GuideHub,
            path: "/guide/*"

        }
    ],
    non_auth: [
        {
            Component: Login,
            path: '/login',
        },
    ],
};
