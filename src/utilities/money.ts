export interface FormatMoneyOptions {
    currency?: string;
    locale?: string;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    currencyDisplay?: "symbol" | "narrowSymbol" | "code" | "name";
}

export function money(
    value: number,
    options: FormatMoneyOptions = {}
): string {
    const {
        currency = "USD",
        locale = "en-US",
        minimumFractionDigits = 0,
        maximumFractionDigits = 0,
        currencyDisplay = "code",
    } = options;

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        currencyDisplay,
        minimumFractionDigits,
        maximumFractionDigits,
    }).format(value);
}