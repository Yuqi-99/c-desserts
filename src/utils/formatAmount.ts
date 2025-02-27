export function formatAmount(amt: number | bigint) {
	return amt?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatAmountStr(amt: string) {
	const amount = parseFloat(amt);
	return amount?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatExchangeRate(amt: number | bigint) {
	return amt?.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 });
}

export function formatExchangeRateStr(amt: string) {
	const amount = parseFloat(amt);
	return amount?.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 });
}

export function formatCountNumber(amt: number | bigint) {
	return amt?.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}
