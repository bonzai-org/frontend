import { BonsaiGetResponse } from "../interfaces/responses";
import { CreateBonsaiPayload } from "../interfaces/requests";
import { handleFetch } from "./handleFetchReq";

export async function getBonsai(id: string): Promise<BonsaiGetResponse> {
    try {
        const response = await handleFetch('GET', `bonsai/${id}`);
        const bonsai = await response.json();
        return bonsai;
    } catch (error) {
        throw error;
    }
}

// Backend will send 204 on success to redir to /bonsai/:id
export async function postBonsai(payload: CreateBonsaiPayload): Promise<Response> {
    try {
        const response = await handleFetch('POST', 'bonsai', payload);
        return response;
    } catch (error) {
        throw error;
    }
}