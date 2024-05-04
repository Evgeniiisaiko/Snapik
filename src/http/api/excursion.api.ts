import { AxiosResponse } from "axios/index";
import { AccessUserLoginData, AccessUserRegisterData, AuthResponse, JWT, UserData } from "../../types/user.types";
import { PATHS, api, authApi } from "../instance";
import { EditProfileRequest, EditProfileResponse, GetProfileResponse, LoginRequest, LoginResponse, MakeGuideAccountRequest, RefreshRequest, RefreshResponse, RegisterRequest, RegisterResponse } from "../../types/api/user.api.types";
import { CreateReviewRequest, CreateReviewResponse } from "../../types/api/review.api.types";
import { ExcursionsCreateRequest, ExcursionsGetRequest } from "../../types/api/excursion.api.types";
import { ExcursionApi, ExcursionKind, ExcursionTransport, ExcursionsPayment } from "../../types/excursions.types";
import { ConvertDataToGetParams } from "../../utils/ConvertDataToGetParams";

export class ExcursionServiceApi {
    static async Get(req: ExcursionsGetRequest): Promise<AxiosResponse<ExcursionApi[]>> {
        const res: AxiosResponse<any> = await api.get(PATHS.EXCURSIONS_GET + ConvertDataToGetParams(req));
        return res
    }
    static async GetKinds(): Promise<AxiosResponse<ExcursionKind[]>> {
        const res: AxiosResponse<ExcursionKind[]> = await api.get(PATHS.EXCURSIONS_KINDS);
        return res
    }
    static async GetPaymentsTypes(): Promise<AxiosResponse<ExcursionsPayment[]>> {
        const res: AxiosResponse<ExcursionsPayment[]> = await api.get(PATHS.EXCURSIONS_PAYMENT_TYPES);
        return res
    }
    static async GetTransports(): Promise<AxiosResponse<ExcursionTransport[]>> {
        const res: AxiosResponse<ExcursionTransport[]> = await api.get(PATHS.EXCURSIONS_TRANSPORTS);
        return res
    }
    static async GetById(req: number): Promise<AxiosResponse<ExcursionApi>> {
        const res: AxiosResponse<any> = await api.get(`${PATHS.EXCURSIONS_GET}/${req}/`)
        return res
    }
    static async Create(req: any): Promise<AxiosResponse<any>> {
        const res: AxiosResponse<any> = await authApi.post(PATHS.EXCURSION_CREATE, { ...req });
        return res
    }
    static async Delete(req: { id: number }): Promise<AxiosResponse<any>> {
        const res: AxiosResponse<any> = await authApi.delete(`${PATHS.EXCURSIONS_GET}${req.id}/`);
        console.log(res);
        
        if(!res.status) {
            throw res
        }
        return res
    }
}

