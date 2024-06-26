import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Excursion from '.'
import NotFound from '../NotFound'
import City from '.'

export const CityRoute = () => {
    const params = useParams()
    const paramId = params?.id
    const numberedId = Number(paramId)
    const IdIsCorrect = !isNaN(numberedId)

    if (IdIsCorrect) {
        if (numberedId > 0) {
            return <City />
        }
        return <NotFound />
    }

    return <NotFound />
}
