import React, { FC } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { RouteProps } from '../types/router.types';
import {useAppSelector} from "../app/hooks";
import {ProfileState} from "../features/profile/profileSlice";
import useAccount from "../hooks/useAccount";

const REDIRECT_PATH = '/profile';
const NonAuthRoute: FC<RouteProps> = ({Component }) => {
    const isAuth = useAccount()

    return isAuth ? <Navigate to={REDIRECT_PATH} /> : <Component />;
};

export default NonAuthRoute;
