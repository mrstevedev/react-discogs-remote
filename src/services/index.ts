import { baseURL } from "@/constants";
import { getErrorMessage } from "@/utils";
import axios, { AxiosError } from "axios";

const API = axios.create({
    baseURL: baseURL.LOCAL
});

// Fetch a single release
export async function getRelease(id: string) {
    try {
        const response = await API.get(`/release?id=${id}`);
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            return {
                error: getErrorMessage(error)
            };
        }
    }
}

export async function getCollection(limit: string) {
    const response = await API.get(`/collection?_limit=${limit}`);
    return response.data;
}
