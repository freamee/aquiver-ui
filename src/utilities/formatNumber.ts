export interface FormatNumberOptions {
    locale?: string;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    useGrouping?: boolean;
}

export function formatNumber(
    value: number,
    options: FormatNumberOptions = {}
): string {
    const {
        locale = "en-US",
        minimumFractionDigits = 0,
        maximumFractionDigits = 0,
        useGrouping = true,
    } = options;

    return new Intl.NumberFormat(locale, {
        minimumFractionDigits,
        maximumFractionDigits,
        useGrouping,
    }).format(value);
}