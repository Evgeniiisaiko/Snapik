import React, { useRef, useState, useEffect } from 'react';
import SectionsArea from '../../components/SectionsArea';
import { FilterSearchIcon, SearchIcon } from '../../icons';
import styles from './notFound.module.scss';
import TagsSection from '../../components/Sections/TagsSection';
import { getMultipleArray } from "../../utils/getMultipleArray";
import ExcursionCard from "../../components/Cards/ExcursionCard";
import { getImgPath } from "../../utils/getAssetsPath";
import List from "../../components/List";
import BackLink from "../../components/BackLink";
import SelectDropDown from "../../components/Dropdowns/Select";
import BaseLayout from "../../layouts/BaseLayout";
import { useInput } from '../../hooks/useInput';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAllCategories, getAllCities, getSearchedExcursions, setCategory, setSearch, setSearchCity, setSearchFilter } from '../../features/search/searchSlice';
import { filterVariants } from '../../features/search/filterVariants';
import { ExcursionProps } from '../../types/excursions.types';
import SelectInput from '../../components/SelectInput';
import { CustomSpinner } from '../../components/Preloader';
import UnfilledButton from '../../components/Buttons/UnfilledButton';
import { Link } from 'react-router-dom';


const NotFound = () => {
    
    return (
        <BaseLayout>
            <SectionsArea>
                <section style={{ backgroundImage: `url(${getImgPath("404.svg")})`}} className={`f-c-col ${styles.notFoundSection}`}>
                    <div className="wrapper">
                        <div className="notFoundBlock  gap-30">
                            <div className="f-column sectionBlock al-center">
                                <h2 className="section-title txt-center">Страница не найдена</h2>
                                <Link to={"/"}><UnfilledButton title={"Вернуться на главную"}/></Link>
                            </div>
                        </div>
                    </div>
                </section>
            
            </SectionsArea>
        </BaseLayout>

    );
};

export default NotFound;
