declare function GetParentResourceName(): string;

export function getResourceName(): string {
    if (typeof GetParentResourceName === "function") {
        return GetParentResourceName();
    }

    return "nui-dev";
}