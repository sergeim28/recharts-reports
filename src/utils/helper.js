export const numberToMoneyString = (value) => {
	const regExp = /\d(?=(\d{3})+,)/g;
	const replacePattern = '$&.';
	return value.toFixed(1).split('.').join(',').replace(regExp, replacePattern)
}