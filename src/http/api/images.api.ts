import { AxiosResponse } from "axios/index";
import { PATHS, api, authApi } from "../instance";
import { ConvertDataToGetParams } from "../../utils/ConvertDataToGetParams";
import { CategoriesGetRequest } from "../../types/api/categories.api.types";
import { CategoryApi } from "../../types/categories.types.";
import { ImageApi } from "../../types/images.types";
import { ImagesGetRequest } from "../../types/api/images.api.types";

export class ImageServiceApi {
    static async Get(req: ImagesGetRequest): Promise<AxiosResponse<ImageApi[]>> {
        const res: AxiosResponse<ImageApi[]> = await api.get(PATHS.PHOTOS_GET + ConvertDataToGetParams(req));
        return res
    }
}

