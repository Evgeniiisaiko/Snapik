import React from 'react';
import AuthModal from "../Modals/Auth/LoginModal";
import RegisterModal from "../Modals/Auth/RegisterModal";
import SelectionModal from "../Modals/SelectionModal";
import OrderModal from "../Modals/Order";
import {useAppSelector} from "../../app/hooks";
import MobileMenu from "../MobileMenu";

const Modals = () => {
    const {register, login, selection, order} = useAppSelector(state => state.modals)
    const {isMobile} = useAppSelector(state => state.main)
    return (
        <>
            {isMobile? <MobileMenu/> : null}
            {login ? <AuthModal/> : null}
            {register ? <RegisterModal/> : null}
            {selection ? <SelectionModal/> : null}
           
        </>
    );
};

export default Modals;