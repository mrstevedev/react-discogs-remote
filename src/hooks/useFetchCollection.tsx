import { useCallback, useEffect, useState } from "react";
import { getCollection } from "@/services";
import { getErrorMessage } from "@/utils";
import { Collection, FetchCollectionProps } from "@/types";
import { setLocalStorage } from "@/utils";

export default function useFetchCollection({ limit }: FetchCollectionProps) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState<Collection>([]);

    const getAllReleases = useCallback(async () => {
        try {
            const response = await getCollection(limit);
            setData(response);
            setLoading(false);
            setLocalStorage("limit", limit);
            return response;
        } catch (error: unknown) {
            return {
                error: getErrorMessage(error)
            };
        } finally {
            setLoading(false);
        }
    }, [limit]);

    useEffect(() => {
        getAllReleases();
    }, [getAllReleases]);

    return { loading, error, data };
}
