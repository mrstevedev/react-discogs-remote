import { Activity } from "@/components/Dashboard/Activity";
import { ErrorCode } from "@/constants";
import { AxiosError } from "axios";

export function getLocalStorage(key: string) {
    try {
        const item = window.localStorage.getItem(key);
        return item ? item : undefined;
    } catch (error) {
        console.error(error);
    }
}

export function setLocalStorage(key: string, value: string) {
    try {
        window.localStorage.setItem(key, value);
    } catch (error) {
        console.error(error);
    }
}

export function displayActivityStatus(data: Activity) {
    switch (data.action) {
        case "added":
            return `added ${data.title} to wantlist ${data.timeago}`;
        case "removed":
            return "removed ${data.title} from wantlist ${data.timeago}";
        default:
            return "";
    }
}

export function formatReleaseSlug(name: string) {
    return name.split(" ").join("-").toLowerCase();
}

export function getErrorMessage(error: unknown) {
    let message: string = "";
    if (error instanceof AxiosError) {
        if (error.code === ErrorCode.ERR_NETWORK) {
            message = "Please check your internet connection.";
        } else if (error.code === ErrorCode.ERR_BAD_REQUEST) {
            message = "Bad Request. Please try again.";
        } else if (error.code === ErrorCode.ETIMEDOUT) {
            message = "Request Timeout. Please try again.";
        } else if (error.code === ErrorCode.ECONNREFUSED) {
            message = "Connection Refused. Please try again.";
        } else if (error.code === ErrorCode.ENOTFOUND) {
            message = "Not Found. Please try again.";
        }
    } else if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message);
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Something went wrong";
    }

    return message;
}

export function truncate(text: string) {
    return text.length > 22 ? `${text.substring(0, 22)}...` : text;
}
