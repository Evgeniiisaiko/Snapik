
import { CategoryApi } from "../../types/categories.types."
import { CityApi } from "../../types/cities.types"
import { getImgPath } from "../getAssetsPath"

export const generateCategories = (length: number) => {
    const result: CategoryApi[] = []
    for (let i = 0; i < length; i++) {
        const newItem: CategoryApi = {
            id: i + 1,
            name: `Категория ${i+1}`
        }
        result.push(newItem)
    }
    return result
}