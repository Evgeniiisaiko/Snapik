import { ExcursionDetailsApi } from "../details.types"
import { LocationApi } from "../locations.types"

export type DetailsGetRequest = {
    excursion?: string
}

export type DetailsCreateRequest = Omit<ExcursionDetailsApi, "id">[]
