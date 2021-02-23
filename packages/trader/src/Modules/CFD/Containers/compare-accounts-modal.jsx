import React from 'react';
import {
    Button,
    Modal,
    DesktopWrapper,
    MobileDialog,
    MobileWrapper,
    Table,
    UILoader,
    Text,
    ThemedScrollbars,
} from '@deriv/components';
import { isMobile } from '@deriv/shared';
import { localize, Localize } from '@deriv/translations';
import { connect } from 'Stores/connect';

const CFDAttributeDescriber = ({ name, counter }) => {
    return (
        <Text as='p' weight='bold' size='xs' line_height='s' className='cfd-attribute-describer'>
            {name}
            <Text weight='bold' line_height='x' size='xxxs' className='counter'>
                {counter}
            </Text>
        </Text>
    );
};

const filterAvailableAccounts = (landing_companies, table, is_logged_in, platform) => {
    return table.map(({ attribute, mt5, dxtrade }) => {
        const { synthetic, financial_stp, financial } = platform === 'mt5' ? mt5 : dxtrade;
        if (is_logged_in) {
            return {
                attribute,
                ...(landing_companies?.mt_gaming_company?.financial ? { synthetic } : {}),
                ...(landing_companies?.mt_financial_company?.financial ? { financial } : {}),
                ...(landing_companies?.mt_financial_company?.financial_stp && platform === 'mt5'
                    ? { financial_stp }
                    : {}),
            };
        }
        if (platform === 'dxtrade') {
            return {
                attribute,
                ...{ synthetic },
                ...{ financial },
            };
        }
        return {
            attribute,
            ...{ synthetic },
            ...{ financial },
            ...{ financial_stp },
        };
    });
};

const compareAccountsData = ({ landing_companies, is_eu, is_eu_country, is_logged_in, platform }) => {
    const show_eu_related = (is_logged_in && is_eu) || (!is_logged_in && is_eu_country);
    return filterAvailableAccounts(
        landing_companies,
        [
            {
                attribute: <CFDAttributeDescriber name={localize('Account currency')} />,
                mt5: {
                    synthetic: show_eu_related ? localize('EUR') : localize('USD'),
                    financial: show_eu_related ? localize('EUR/GBP') : localize('USD'),
                    financial_stp: localize('USD'),
                },
                dxtrade: {
                    synthetic: show_eu_related ? localize('EUR') : localize('USD'),
                    financial: show_eu_related ? localize('EUR/GBP') : localize('USD'),
                },
            },
            {
                attribute: <CFDAttributeDescriber name={localize('Maximum leverage')} counter={1} />,
                mt5: {
                    synthetic: localize('Up to 1:1000'),
                    financial: show_eu_related ? localize('Up to 1:30') : localize('Up to 1:1000'),
                    financial_stp: localize('Up to 1:100'),
                },
                dxtrade: {
                    synthetic: localize('Up to 1:1000'),
                    financial: show_eu_related ? localize('Up to 1:30') : localize('Up to 1:1000'),
                },
            },
            {
                attribute: <CFDAttributeDescriber name={localize('Order execution')} counter={2} />,
                mt5: {
                    synthetic: localize('Market'),
                    financial: localize('Market'),
                    financial_stp: localize('Market'),
                },
                dxtrade: {
                    synthetic: localize('Market'),
                    financial: localize('Market'),
                },
            },
            {
                attribute: <CFDAttributeDescriber name={localize('Spread')} counter={3} />,
                mt5: {
                    synthetic: localize('Fixed/Variable'),
                    financial: localize('Variable'),
                    financial_stp: localize('Variable'),
                },
                dxtrade: {
                    synthetic: localize('Fixed/Variable'),
                    financial: localize('Variable'),
                },
            },
            {
                attribute: <CFDAttributeDescriber name={localize('Commission')} counter={4} />,
                mt5: {
                    synthetic: localize('No'),
                    financial: localize('No'),
                    financial_stp: localize('No'),
                },
                dxtrade: {
                    synthetic: localize('No'),
                    financial: localize('No'),
                },
            },
            {
                attribute: <CFDAttributeDescriber name={localize('Minimum deposit')} />,
                mt5: {
                    synthetic: localize('No'),
                    financial: localize('No'),
                    financial_stp: localize('No'),
                },
                dxtrade: {
                    synthetic: localize('No'),
                    financial: localize('No'),
                },
            },
            {
                attribute: <CFDAttributeDescriber name={localize('Margin call')} counter={5} />,
                mt5: {
                    synthetic: localize('100%'),
                    financial: show_eu_related ? localize('100%') : localize('150%'),
                    financial_stp: localize('150%'),
                },
                dxtrade: {
                    synthetic: localize('100%'),
                    financial: localize('100%'),
                },
            },
            {
                attribute: <CFDAttributeDescriber name={localize('Stop out level')} counter={6} />,
                mt5: {
                    synthetic: localize('50%'),
                    financial: show_eu_related ? localize('50%') : localize('75%'),
                    financial_stp: localize('75%'),
                },
                dxtrade: {
                    synthetic: localize('50%'),
                    financial: localize('50%'),
                },
            },
            {
                attribute: <CFDAttributeDescriber name={localize('Number of assets')} />,
                mt5: { synthetic: localize('10+'), financial: localize('50+'), financial_stp: localize('50+') },
                dxtrade: { synthetic: localize('10+'), financial: localize('50+') },
            },
            {
                attribute: <CFDAttributeDescriber name={localize('Cryptocurrency trading')} counter={7} />,
                mt5: { synthetic: localize('N/A'), financial: localize('24/7'), financial_stp: localize('24/7') },
                dxtrade: { synthetic: localize('N/A'), financial: localize('24/7') },
            },
            {
                attribute: <CFDAttributeDescriber name={localize('Trading instruments')} />,
                mt5: {
                    synthetic: localize('Synthetics'),
                    financial: show_eu_related
                        ? localize('FX-majors (standard), FX-minors, Commodities, Cryptocurrencies')
                        : localize('FX-majors (standard/micro lots), FX-minors, Commodities, Cryptocurrencies'),
                    financial_stp: localize('FX-majors, FX-minors, FX-exotics, Cryptocurrencies'),
                },
                dxtrade: {
                    synthetic: localize('Synthetics'),
                    financial: show_eu_related
                        ? localize('FX-majors (standard), FX-minors, Commodities, Cryptocurrencies')
                        : localize('FX-majors (standard/micro lots), FX-minors, Commodities, Cryptocurrencies'),
                },
            },
        ],
        is_logged_in,
        platform
    );
};

const CompareAccountFootNotes = () => {
    const footer_content = [
        {
            title: 'Maximum leverage',
            description:
                'Leverage gives you the ability to trade a larger position using your existing capital. Leverage varies across different symbols.',
        },
        {
            title: 'Order execution',
            description:
                "All 3 account types use market execution. This means you agree with the broker's price in advance and will place orders at the broker's price.",
        },
        {
            title: 'Spread',
            description:
                "The spread is the difference between the buy price and sell price. A variable spread means that the spread is constantly changing, depending on market conditions. A fixed spread remains constant but is subject to alteration, at the Broker's absolute discretion.",
        },
        {
            title: 'Commission',
            description: 'Deriv charges no commission across all account types.',
        },
        {
            title: 'Margin call',
            description:
                'When the remaining funds in your account is deemed insufficient to cover the leverage or margin requirements, your account will be placed under margin call. To prevent a margin call escalating to a stop out level, you can deposit  additional funds into your account or close any open positions.',
        },
        {
            title: 'Stop out level',
            description:
                'If your account reaches the stop out level, then your account will be in stop out state. Trading positions and orders on your account are forcibly closed until there are no more open positions or until your margin level increases above the stop out level.',
        },
        {
            title: 'Cryptocurrency trading',
            description: 'Indicates the availability of cryptocurrency trading on a particular account.',
        },
    ];
    return (
        <div className='cfd-compare-accounts__details'>
            <div className='cfd-compare-accounts__hint'>
                <div className='cfd-compare-accounts__bullet-wrapper'>
                    <span className='cfd-compare-accounts__bullet cfd-compare-accounts__bullet--circle' />
                    <Localize i18n_default_text='At bank rollover, liquidity in the forex markets is reduced and may increase the spread and processing time for client orders. This happens around 21:00 GMT during daylight saving time, and 22:00 GMT non-daylight saving time.' />
                </div>
                <div className='cfd-compare-accounts__bullet-wrapper'>
                    <span className='cfd-compare-accounts__bullet cfd-compare-accounts__bullet--circle' />
                    <Localize i18n_default_text='Margin call and stop out level will change from time to time based on market condition.' />
                </div>
                <div className='cfd-compare-accounts__bullet-wrapper'>
                    <Text
                        size='xs'
                        line_height='x'
                        weight='bold'
                        className='cfd-compare-accounts__bullet cfd-compare-accounts__bullet--star cfd-compare-accounts__star'
                    >
                        *
                    </Text>
                    <Localize i18n_default_text='To protect your portfolio from adverse market movements due to the market opening gap, we reserve the right to decrease leverage on all offered symbols for financial accounts before market close and increase it again after market open. Please make sure that you have enough funds available in your MT5 account to support your positions at all times.' />
                </div>
            </div>
            <div className='cfd-compare-accounts__explanation-wrapper'>
                {footer_content.map((item, i) => (
                    <div key={i} className='cfd-compare-accounts__explanation'>
                        <div className='cfd-compare-accounts__explanation-title'>
                            <Text weight='bold' size='xs'>
                                <Text weight='bold' size='xs' className='cfd-compare-accounts__explanation-index'>
                                    {i + 1}.{' '}
                                </Text>
                                {item.title}
                            </Text>
                        </div>
                        <div className='cfd-compare-accounts__explanation-description'>
                            <Text size='xxs'>{item.description}</Text>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ModalContent = ({ is_eu, landing_companies, is_eu_country, is_logged_in, platform }) => {
    const [cols, setCols] = React.useState([]);
    const [template_columns, updateColumnsStyle] = React.useState('1.5fr 1fr 2fr 1fr');

    React.useEffect(() => {
        setCols(compareAccountsData({ landing_companies, is_eu, is_eu_country, is_logged_in, platform }));

        if (is_logged_in) {
            updateColumnsStyle(
                `1.5fr ${landing_companies?.mt_gaming_company?.financial ? '1fr' : ''} ${
                    landing_companies?.mt_financial_company?.financial ? '2fr' : ''
                } ${landing_companies?.mt_financial_company?.financial_stp ? ' 1fr ' : ''}`
            );
        }
    }, [
        landing_companies?.mt_financial_company,
        landing_companies?.mt_gaming_company,
        is_eu,
        is_logged_in,
        is_eu_country,
        landing_companies,
        platform,
    ]);

    return (
        <div
            className='cfd-compare-accounts'
            style={{
                '--cfd-compare-accounts-template-columns': template_columns,
            }}
        >
            <ThemedScrollbars is_bypassed={isMobile()}>
                <Table>
                    <Table.Header>
                        <Table.Row className='cfd-compare-accounts__table-row'>
                            <Table.Head fixed />
                            {is_logged_in ? (
                                <React.Fragment>
                                    {landing_companies?.mt_gaming_company?.financial && (
                                        <Table.Head>{localize('Synthetic')}</Table.Head>
                                    )}
                                    {landing_companies?.mt_financial_company?.financial && (
                                        <Table.Head>
                                            {localize('Financial')}
                                            <Text size='s' weight='bold' className='cfd-compare-accounts__star'>
                                                *
                                            </Text>
                                        </Table.Head>
                                    )}
                                    {landing_companies?.mt_financial_company?.financial_stp && platform === 'mt5' && (
                                        <Table.Head>
                                            {localize('Financial STP')}
                                            <Text size='s' weight='bold' className='cfd-compare-accounts__star'>
                                                *
                                            </Text>
                                        </Table.Head>
                                    )}
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Table.Head>{localize('Synthetic')}</Table.Head>
                                    <Table.Head>
                                        {localize('Financial')}
                                        <Text size='s' weight='bold' className='cfd-compare-accounts__star'>
                                            *
                                        </Text>
                                    </Table.Head>
                                    {platform === 'mt5' && (
                                        <Table.Head>
                                            {localize('Financial STP')}
                                            <Text size='s' weight='bold' className='cfd-compare-accounts__star'>
                                                *
                                            </Text>
                                        </Table.Head>
                                    )}
                                </React.Fragment>
                            )}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {cols.map((row, i) => (
                            <Table.Row key={i} className='cfd-compare-accounts__table-row'>
                                {Object.keys(row).map((col, j) => (
                                    <Table.Cell key={j} fixed={j === 0}>
                                        {row[col]}
                                    </Table.Cell>
                                ))}
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <CompareAccountFootNotes />
            </ThemedScrollbars>
        </div>
    );
};

const CompareAccountsModal = ({
    disableApp,
    enableApp,
    is_compare_accounts_visible,
    landing_companies,
    is_loading,
    is_logged_in,
    is_eu,
    is_eu_country,
    platform,
    toggleCompareAccounts,
}) => (
    <div
        className='cfd-compare-accounts-modal__wrapper'
        style={{ marginTop: platform === 'dxtrade' ? '5rem' : '2.4rem' }}
    >
        <Button
            className='cfd-dashboard__welcome-message--button'
            has_effect
            text={localize('Compare accounts')}
            onClick={toggleCompareAccounts}
            secondary
            disabled={is_loading}
        />
        <React.Suspense fallback={<UILoader />}>
            <DesktopWrapper>
                <Modal
                    className='cfd-dashboard__compare-accounts'
                    disableApp={disableApp}
                    enableApp={enableApp}
                    is_open={is_compare_accounts_visible}
                    title={localize('Compare accounts')}
                    toggleModal={toggleCompareAccounts}
                    type='button'
                    height='696px'
                    width='903px'
                >
                    <ModalContent
                        is_logged_in={is_logged_in}
                        is_eu={is_eu}
                        is_eu_country={is_eu_country}
                        landing_companies={landing_companies}
                        platform={platform}
                    />
                </Modal>
            </DesktopWrapper>
            <MobileWrapper>
                <MobileDialog
                    portal_element_id='deriv_app'
                    title={localize('Compare accounts')}
                    wrapper_classname='cfd-dashboard__compare-accounts'
                    visible={is_compare_accounts_visible}
                    onClose={toggleCompareAccounts}
                >
                    <ModalContent
                        is_logged_in={is_logged_in}
                        is_eu={is_eu}
                        is_eu_country={is_eu_country}
                        landing_companies={landing_companies}
                        platform={platform}
                    />
                </MobileDialog>
            </MobileWrapper>
        </React.Suspense>
    </div>
);

export default connect(({ modules, ui, client }) => ({
    disableApp: ui.disableApp,
    enableApp: ui.enableApp,
    is_compare_accounts_visible: modules.cfd.is_compare_accounts_visible,
    is_loading: client.is_populating_mt5_account_list,
    is_eu: client.is_eu,
    is_eu_country: client.is_eu_country,
    is_logged_in: client.is_logged_in,
    landing_companies: client.landing_companies,
    toggleCompareAccounts: modules.cfd.toggleCompareAccountsModal,
}))(CompareAccountsModal);
