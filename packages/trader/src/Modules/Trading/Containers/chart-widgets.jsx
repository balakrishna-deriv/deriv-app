import React from 'react';
import { isMobile } from '@deriv/shared';
import Digits from 'Modules/Contract/Components/Digits';
import AccumulatorsStats from 'Modules/Contract/Components/AccumulatorsStats';
import BottomWidgets from '../../SmartChart/Components/bottom-widgets.jsx';
import TopWidgets from '../../SmartChart/Components/top-widgets.jsx';
import { symbolChange } from '../../SmartChart/Helpers/symbol';
import BottomWidgetsAlpha from '../../SmartChartAlpha/Components/bottom-widgets.jsx';
import TopWidgetsAlpha from '../../SmartChartAlpha/Components/top-widgets.jsx';
import { symbolChangeAlpha } from '../../SmartChartAlpha/Helpers/symbol';
import { useTraderStore } from 'Stores/useTraderStores';
import { observer, useStore } from '@deriv/stores';

export const DigitsWidget = observer(({ digits, tick }) => {
    const { contract_trade } = useStore();
    const {
        onChange: onDigitChange,
        symbol: underlying,
        contract_type: trade_type,
        last_digit: selected_digit,
    } = useTraderStore();
    const { last_contract } = contract_trade;
    const { contract_info = {}, digits_info = {}, display_status, is_digit_contract, is_ended } = last_contract;
    return (
        <Digits
            contract_info={contract_info}
            digits_array={digits}
            digits_info={digits_info}
            display_status={display_status}
            is_digit_contract={is_digit_contract}
            is_ended={is_ended}
            onDigitChange={onDigitChange}
            is_trade_page
            tick={tick}
            trade_type={trade_type}
            selected_digit={selected_digit}
            underlying={underlying}
        />
    );
});

// Chart widgets passed into SmartCharts
export const ChartTopWidgets = observer(({ charts_ref, open_market, open }) => {
    const { client, ui } = useStore();
    const { is_digits_widget_active, onChange: onSymbolChange } = useTraderStore();
    const { is_alpha_chart } = client;
    const { is_dark_mode_on } = ui;
    const theme = is_dark_mode_on ? 'dark' : 'light';
    let yAxiswidth;
    if (charts_ref && charts_ref.chart) {
        yAxiswidth = charts_ref.chart.yAxiswidth;
    }
    return (
        <>
            {is_alpha_chart && (
                <TopWidgetsAlpha
                    open_market={open_market}
                    open={open}
                    is_mobile={isMobile()}
                    is_digits_widget_active={is_digits_widget_active}
                    onSymbolChange={symbolChangeAlpha(onSymbolChange)}
                    theme={theme}
                    y_axis_width={yAxiswidth}
                />
            )}
            {!is_alpha_chart && (
                <TopWidgets
                    open_market={open_market}
                    open={open}
                    is_mobile={isMobile()}
                    is_digits_widget_active={is_digits_widget_active}
                    onSymbolChange={symbolChange(onSymbolChange)}
                    theme={theme}
                    y_axis_width={yAxiswidth}
                />
            )}
        </>
    );
});

export const ChartBottomWidgets = observer(({ digits, tick, show_accumulators_stats }) => {
    return (
        <>
            {is_alpha_chart && (
                <BottomWidgetsAlpha
                    Widget={
                        show_accumulators_stats ? <AccumulatorsStats /> : <DigitsWidget digits={digits} tick={tick} />
                    }
                />
            )}
            {!is_alpha_chart && (
                <BottomWidgets
                    Widget={
                        show_accumulators_stats ? <AccumulatorsStats /> : <DigitsWidget digits={digits} tick={tick} />
                    }
                />
            )}
        </>
    );
});
