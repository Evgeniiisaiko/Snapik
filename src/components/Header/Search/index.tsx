import React, { useEffect, useState } from 'react';
import styles from '../header.module.scss';
import {

    SearchIcon,

} from '../../../icons';
import { useInput } from '../../../hooks/useInput';
import { trimStringBasedOnVariable } from '../../../utils/trimSearchVal';
import { useAppDispatch } from '../../../app/hooks';
import { setSearch } from '../../../features/search/searchSlice';
import { Link, useNavigate } from 'react-router-dom';
import { ExcursionApi } from '../../../types/excursions.types';
import { generateExcursions } from '../../../utils/factories/excursionFactory';
import { CustomSpinner } from '../../Preloader';
import { setLoginLoading } from '../../../features/profile/profileSlice';
import { useDeferred } from '../../../hooks/useDeffered';
import { ExcursionServiceApi } from '../../../http/api/excursion.api';

export const Search = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [searchLoading, setSearchLoading] = useState(false)
    const [searchedExcursions, setSearchExcursions] = useState<ExcursionApi[]>([])
    const [searchVal, changeSearchVal, setSearchVal] = useInput("")
    const [searchOpened, setSearchOpened] = useState(false)
    const defferedSearchVal = useDeferred(searchVal, 500)

    const resetSearch = () => {
        setSearchVal("")
        setSearchOpened(false)
        setSearchLoading(false)
    }

    const getSearchExcursions = async () => {
        setSearchLoading(true)
        try {
            const res = await ExcursionServiceApi.Get({
                search: defferedSearchVal
            })
            if (res.data) {
                setSearchExcursions(res.data)
                
            }
        } catch (error) {

        } finally {
            setSearchLoading(false)
        }
    }

    useEffect(() => {
        (async () => {
            if (defferedSearchVal.length) {
                getSearchExcursions()
                return;
            }
            setSearchExcursions([])
        })()
    }, [defferedSearchVal])

    useEffect(() => {
        console.log(searchedExcursions);
        
        const excursionsExist = searchedExcursions.length > 0
        setSearchOpened(excursionsExist)
    }, [searchedExcursions])

    return (
        <div className={`${styles.headerSearchBlock} bg-white f-row-betw p-rel`}>
            <input
                className={'f-1'}
                placeholder={'Что хотите посетить?'}
                type="text"
                value={searchVal}
                onChange={changeSearchVal}
            />
            <SearchIcon />
            {
                searchVal.length > 0 ?
                    <div className={`${styles.suggestions} d-n bg-white p-abs f-column w-100p left-0 bx-shadow`}>
                        {
                            searchLoading ?
                                <div className={"d-f pd-15"}>
                                    <CustomSpinner height={20} width={20} />
                                </div>
                                :
                                searchedExcursions.map((item, index) => (
                                    <Link onClick={resetSearch} to={`excursion/${item.id}`} key={index} className={`${styles.suggestion} w-100p`}>
                                        {item.title}
                                    </Link>
                                ))
                        }
                    </div> : null
            }

        </div>
    )
}
