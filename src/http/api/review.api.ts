import { AxiosResponse } from "axios/index";
import { AccessUserLoginData, AccessUserRegisterData, AuthResponse, JWT, UserData } from "../../types/user.types";
import { PATHS, api, authApi } from "../instance";
import { CreateReviewRequest, CreateReviewResponse, ReviewsGetRequest } from "../../types/api/review.api.types";
import { CategoryApi } from "../../types/categories.types.";
import { ConvertDataToGetParams } from "../../utils/ConvertDataToGetParams";
import { ReviewApi } from "../../types/reviews.types";

export class ReviewServiceApi {
    static async Create(req: CreateReviewRequest): Promise<AxiosResponse<CreateReviewResponse>> {
        const res: AxiosResponse<CreateReviewResponse> = await authApi.post(PATHS.REVIEW_CREATE, { ...req });
        return res
    }
    static async Get(req: ReviewsGetRequest): Promise<AxiosResponse<ReviewApi[]>> {
        const res: AxiosResponse<ReviewApi[]> = await api.get(PATHS.REVIEWS_GET + ConvertDataToGetParams(req));
        return res
    }
}

