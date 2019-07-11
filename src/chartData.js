import { LOW_CONFIDENCE, UP_EXP_COLOR, DOWN_EXP_COLOR } from './colors';

function getChartData(results) {
	const chartData = {
		data: [],
		colors: [],
		hoverTexts: [],
		tissueNames: []
	};

	results.forEach(result => {
		// we need tStatistic value to be shown
		chartData.data.push(result.tStatistic);
		chartData.tissueNames.push(result.condition);

		// get color for this value
		let color = '';
		if (!result.expression) color = LOW_CONFIDENCE;
		else if (result.expression == 'UP') color = UP_EXP_COLOR;
		else if (result.expression == 'DOWN') color = DOWN_EXP_COLOR;
		else color = LOW_CONFIDENCE;
		chartData.colors.push(color);

		// get hover text for this tissue bar
		let regulationText = 'Low Confidence';
		if (result.expression === 'UP') regulationText = 'Up Regulated';
		else if (result.expression === 'DOWN') regulationText = 'Down Regulated';
		else regulationText = '';
		regulationText = `${regulationText}: (t-statistic: ${result.tStatistic}, p-value: ${result.pValue})`;
		chartData.hoverTexts.push(regulationText);
	});

	return chartData;
}

export default getChartData;
