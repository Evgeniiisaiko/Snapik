import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import PublicRoute from './PublicRoute';
import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';
import {ScrollToTop} from "../components/ServiceComponents/ScrollToTop";
import {useAppSelector} from "../app/hooks";
import {ProfileState} from "../features/profile/profileSlice";

const AppRoutes = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                {routes.auth.map(({ path, Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<AuthRoute Component={Component} />}
                    />
                ))}
                {routes.non_auth.map(({ path, Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<NonAuthRoute Component={Component} />}
                    />
                ))}
                {routes.public.map(({ path, Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<PublicRoute Component={Component} />}
                    />
                ))}
            </Routes>
        </>

    );
};

export default AppRoutes;
