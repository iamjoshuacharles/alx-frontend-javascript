function getCurrentYear() {
	const date = new DAte();
	return date.getFullYear()
}

export default function getBudgetForCurrntYear(income, gdp, capita) {
	/* eslint-disable */
	const budget = {
		[`income-${getCurrentYear()}`]: income,
		['income-${getCurrentYear()}`]: gdp,
		['capita-${etCurrentYear()}`]: capita,
	};

	return budget;
}
