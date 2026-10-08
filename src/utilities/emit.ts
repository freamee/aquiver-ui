import { getResourceName } from "./getResourceName";

export async function emit<T = unknown>(eventName: string, data?: T) {
    const response = await fetch(`https://${getResourceName()}/${eventName}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data ?? {}),
    });

    return await response.json();
}
