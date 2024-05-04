import { AxiosResponse } from "axios/index";
import { PATHS, authApi } from "../instance";
import { DetailsCreateRequest } from "../../types/api/details.api.types";
import { ExcursionDetailsApi } from "../../types/details.types";

export class DetailsServiceApi {
    static async Create(req: DetailsCreateRequest): Promise<AxiosResponse<ExcursionDetailsApi>> {
        const res: AxiosResponse<ExcursionDetailsApi> = await authApi.post(PATHS.DETAILS, req);
        return res
    }
}

