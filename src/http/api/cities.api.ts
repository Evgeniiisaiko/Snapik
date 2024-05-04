import { AxiosResponse } from "axios/index";
import { AccessUserLoginData, AccessUserRegisterData, AuthResponse, JWT, UserData } from "../../types/user.types";
import { PATHS, api, authApi } from "../instance";
import { EditProfileRequest, EditProfileResponse, GetProfileResponse, LoginRequest, LoginResponse, MakeGuideAccountRequest, RefreshRequest, RefreshResponse, RegisterRequest, RegisterResponse } from "../../types/api/user.api.types";
import { CreateReviewRequest, CreateReviewResponse } from "../../types/api/review.api.types";
import { CitiesGetRequest } from "../../types/api/cities.api.types";
import { CityApi } from "../../types/cities.types";
import { ConvertDataToGetParams } from "../../utils/ConvertDataToGetParams";

export class CityServiceApi {
    static async Get(req: CitiesGetRequest): Promise<AxiosResponse<CityApi[]>> {
        const res: AxiosResponse<CityApi[]> = await api.get(PATHS.CITIES_GET + ConvertDataToGetParams(req));
        return res
    }
    static async GetById(req: number): Promise<AxiosResponse<CityApi>> {
        const res: AxiosResponse<CityApi> = await api.get(`${PATHS.CITIES_GET}/${req}`);
        return res
    }
}

