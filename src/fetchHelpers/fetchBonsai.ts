import { BonsaiGetResponse } from "../interfaces/responses";
import { handleFetch } from "./handleFetchReq";

export async function fetchBonsai(id: string): Promise<BonsaiGetResponse> {
    try {
        const response = await handleFetch('GET', `bonsai/${id}`);
        const bonsai = await response.json();
        return bonsai;
    } catch (error) {
        throw error;
    }
}