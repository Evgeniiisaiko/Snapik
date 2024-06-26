import React from 'react';
import ExcursionsLayout from '../../layouts/ExcursionsLayout';
import { getMultipleArray } from '../../utils/getMultipleArray';
import FilledButton from '../../components/Buttons/FilledButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { remove } from '../../features/favorites/favoritesSlice';
import { clearSeen } from '../../features/seen/seenSlice';

const Seen = () => {
    const seenItems = useAppSelector(state => state.seen.items)
    const dispatch = useAppDispatch()
    const clearHistory = () => {
        dispatch(clearSeen())
    }

    return (
        <div className="wrapper">
            <ExcursionsLayout
             beforeExcursions={(
                <FilledButton clickHandle={clearHistory} className={"w-content"} title={"Очистить историю"}/>
                
            )}
                emptyText={"История пуста."}
                sectionTitle={'История просмотра'}
                countText={'Просмотрено'}
                excursions={seenItems}
                backLinkText={'На главную'}
            />
        </div>
    );
};

export default Seen;
