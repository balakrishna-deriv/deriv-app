import classNames from 'classnames';
import { PropTypes as MobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AutoSizer, CellMeasurer, CellMeasurerCache, List } from 'react-virtualized';
import { Icon, ThemedScrollbars } from '@deriv/components';
import { localize } from '@deriv/translations';
import routes from 'Constants/routes';
import EmptyPortfolioMessage from 'Modules/Reports/Components/empty-portfolio-message.jsx';
import Shortcode from 'Modules/Reports/Helpers/shortcode';
import { connect } from 'Stores/connect';
import { isEnded, isValidToSell } from 'Stores/Modules/Contract/Helpers/logic';
import { getContractTypesConfig } from 'Stores/Modules/Trading/Constants/contract';
import { isCallPut } from 'Stores/Modules/Contract/Helpers/contract-type';
import PositionsDrawerCard from './PositionsDrawerCard';

class PositionsDrawer extends React.Component {
    list_cell_measurer_cache = new CellMeasurerCache({
        defaultHeight: 230,
        fixedWidth: true,
        keyMapper: index => this.positions[index] && this.positions[index].id,
    });

    positions_height_types = [];

    componentDidMount() {
        this.props.onMount();
    }

    componentWillUnmount() {
        this.props.onUnmount();
    }

    itemRender = ({ index, parent, style, isScrolling }) => {
        const {
            currency,
            onClickCancel,
            onClickSell,
            onClickRemove,
            onHoverPosition,
            toggleUnsupportedContractModal,
        } = this.props;
        const portfolio_position = this.positions[index];

        const height_type = this.getPositionHeightType(portfolio_position);
        return (
            <CellMeasurer
                cache={this.list_cell_measurer_cache}
                columnIndex={0}
                key={portfolio_position.id}
                parent={parent}
                rowIndex={index}
            >
                {({ measure }) => {
                    return (
                        <div style={style}>
                            <CSSTransition
                                appear
                                key={portfolio_position.id}
                                in={true}
                                timeout={isScrolling ? 0 : 150}
                                classNames={
                                    isScrolling
                                        ? {}
                                        : {
                                              appear: 'positions-drawer-card__wrapper--enter',
                                              enter: 'positions-drawer-card__wrapper--enter',
                                              enterDone: 'positions-drawer-card__wrapper--enter-done',
                                              exit: 'positions-drawer-card__wrapper--exit',
                                          }
                                }
                                unmountOnExit
                            >
                                <PositionsDrawerCard
                                    onClickCancel={onClickCancel}
                                    onClickSell={onClickSell}
                                    onClickRemove={onClickRemove}
                                    onMouseEnter={() => {
                                        onHoverPosition(true, portfolio_position);
                                    }}
                                    onMouseLeave={() => {
                                        onHoverPosition(false, portfolio_position);
                                    }}
                                    key={portfolio_position.id}
                                    currency={currency}
                                    index={index}
                                    height_type={height_type}
                                    measure={measure}
                                    show_transition={!isScrolling}
                                    toggleUnsupportedContractModal={toggleUnsupportedContractModal}
                                    {...portfolio_position}
                                />
                            </CSSTransition>
                        </div>
                    );
                }}
            </CellMeasurer>
        );
    };

    filterByContractType = ({ contract_type, shortcode }) => {
        const { trade_contract_type } = this.props;
        const is_call_put = isCallPut(trade_contract_type);
        const is_high_low = Shortcode.isHighLow({ shortcode });
        const trade_types = is_call_put
            ? ['CALL', 'CALLE', 'PUT', 'PUTE']
            : getContractTypesConfig()[trade_contract_type].trade_types;
        const match = trade_types.includes(contract_type);
        if (trade_contract_type === 'high_low') return is_high_low;
        return match && !is_high_low;
    };

    getPositionHeightType = position => {
        // It is to notify the height of the position card has changed which helps in remeasuring the card
        const { contract_info } = position;
        const has_ended = isEnded(contract_info);
        const is_valid_to_sell = isValidToSell(contract_info);
        if (!contract_info.underlying) {
            return -1;
        } else if (has_ended) {
            return 1;
        }

        return is_valid_to_sell ? 2 : 3;
    };

    getCachedPositionHeight = index => {
        return this.positions_height_types[index];
    };

    handleScroll = ({ target }) => {
        const { scrollTop, scrollLeft } = target;
        this.list_ref.Grid.handleScrollEvent({ scrollTop, scrollLeft });
    };

    render() {
        const { all_positions, error, is_positions_drawer_on, symbol, toggleDrawer } = this.props;

        const positions = all_positions.filter(
            p =>
                !p.contract_info ||
                !p.contract_info.underlying ||
                (symbol === p.contract_info.underlying && this.filterByContractType(p.contract_info))
        );
        this.positions = positions;

        const body_content = (
            <React.Fragment>
                <AutoSizer>
                    {({ width, height }) => (
                        <ThemedScrollbars
                            style={{
                                height,
                                width,
                            }}
                            onScroll={this.handleScroll}
                            autoHide
                        >
                            <TransitionGroup component='div'>
                                <List
                                    ref={ref => (this.list_ref = ref)}
                                    style={{ overflow: 'inherit' }}
                                    containerStyle={{ marginBottom: 117 }}
                                    estimatedRowSize={200}
                                    deferredMeasurementCache={this.list_cell_measurer_cache}
                                    height={height}
                                    overscanRowCount={2}
                                    rowCount={this.positions.length}
                                    rowHeight={this.list_cell_measurer_cache.rowHeight}
                                    rowRenderer={this.itemRender}
                                    width={width}
                                />
                            </TransitionGroup>
                        </ThemedScrollbars>
                    )}
                </AutoSizer>
            </React.Fragment>
        );

        return (
            <React.Fragment>
                <div
                    className={classNames('positions-drawer__bg', {
                        'positions-drawer__bg--open': is_positions_drawer_on,
                    })}
                />
                <div
                    id='dt_positions_drawer'
                    className={classNames('positions-drawer', {
                        'positions-drawer--open': is_positions_drawer_on,
                    })}
                >
                    <div className='positions-drawer__header'>
                        <span className='positions-drawer__title'>{localize('Recent Positions')}</span>
                        <div
                            id='dt_positions_drawer_close_icon'
                            className='positions-drawer__icon-close'
                            onClick={toggleDrawer}
                        >
                            <Icon icon='IcMinusBold' />
                        </div>
                    </div>
                    <div className='positions-drawer__body' ref={ref => (this.drawer_ref = ref)}>
                        {this.positions.length === 0 || error ? <EmptyPortfolioMessage error={error} /> : body_content}
                    </div>
                    <div className='positions-drawer__footer'>
                        <NavLink
                            id='dt_positions_drawer_report_button'
                            className='btn btn--secondary btn__large'
                            to={routes.reports}
                        >
                            <span className='btn__text'>{localize('Go to Reports')}</span>
                        </NavLink>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

PositionsDrawer.propTypes = {
    all_positions: MobxPropTypes.arrayOrObservableArray,
    children: PropTypes.any,
    currency: PropTypes.string,
    error: PropTypes.string,
    is_loading: PropTypes.bool,
    is_positions_drawer_on: PropTypes.bool,
    onChangeContractUpdate: PropTypes.func,
    onClickContractUpdate: PropTypes.func,
    onClickRemove: PropTypes.func,
    onClickSell: PropTypes.func,
    onHoverPosition: PropTypes.func,
    onMount: PropTypes.func,
    onUnmount: PropTypes.func,
    symbol: PropTypes.string,
    toggleDrawer: PropTypes.func,
};

export default connect(({ modules, client, ui }) => ({
    currency: client.currency,
    all_positions: modules.portfolio.all_positions,
    error: modules.portfolio.error,
    is_loading: modules.portfolio.is_loading,
    onClickCancel: modules.portfolio.onClickCancel,
    onClickSell: modules.portfolio.onClickSell,
    onClickRemove: modules.portfolio.removePositionById,
    onHoverPosition: modules.portfolio.onHoverPosition,
    onMount: modules.portfolio.onMount,
    onUnmount: modules.portfolio.onUnmount,
    symbol: modules.trade.symbol,
    trade_contract_type: modules.trade.contract_type,
    is_positions_drawer_on: ui.is_positions_drawer_on,
    toggleDrawer: ui.togglePositionsDrawer,
    toggleUnsupportedContractModal: ui.toggleUnsupportedContractModal,
}))(PositionsDrawer);
