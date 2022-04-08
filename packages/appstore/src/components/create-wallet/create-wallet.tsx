import React from 'react';
import classNames from 'classnames';
import { Localize } from '@deriv/translations';
import { Icon, Text, ThemedScrollbars } from '@deriv/components';
import Providers from './create-wallet-provider';
import WalletCard from 'Components/wallet';
import WalletIcon from 'Assets/svgs/wallet';

type TCreateWallet = {
    dark: boolean;
    should_show_fiat: boolean;
    setShouldShowFiat: (show: boolean) => void;
    setSeletedWallet: (wallet: string) => void;
    selected_wallet: string;
};

const CreateWallet = ({
    dark,
    should_show_fiat,
    setShouldShowFiat,
    setSeletedWallet,
    selected_wallet,
}: TCreateWallet) => {
    const wallets = should_show_fiat ? Providers.fiat_wallets : Providers.wallets;
    const header_title = should_show_fiat
        ? Providers.fiat_wallets_header_info.getTitle()
        : Providers.wallets_header_info.getTitle();
    const header_content = should_show_fiat
        ? Providers.fiat_wallets_header_info.getContent()
        : Providers.wallets_header_info.getContent();

    const onWalletClicked = (wallet: string) => {
        if (!should_show_fiat) {
            setSeletedWallet(wallet);
        }
    };

    const snakeToPascal = (string: string) => {
        return string
            .split('_')
            .map(substr => substr.charAt(0).toUpperCase() + substr.slice(1))
            .join('');
    };

    return (
        <div className='create-wallet'>
            <div className='create-wallet-title'>
                {should_show_fiat && (
                    <Icon icon='IcArrowLeft' className='create-wallet-back' onClick={() => setShouldShowFiat(false)} />
                )}
                <div>
                    <Text align='left' size='m' as='h2' weight='bold'>
                        <Localize i18n_default_text={header_title} />
                    </Text>
                    <Text align='left' size='s' as='p' line_height='xxl'>
                        <Localize i18n_default_text={header_content} />
                    </Text>
                </div>
            </div>
            <ThemedScrollbars className='create-wallet-scroll'>
                {wallets?.map((wallet, index) => {
                    // TODO: Shouuld replaced with get_account_type result once the BE method get ready
                    return (
                        <div key={`${wallet.getTitle()}${index}`} className='create-wallet-detail'>
                            <div className='create-wallet-detail-title'>
                                <Text align='left' size='s' weight='bold' className='create-wallet-detail-title__text'>
                                    {wallet.getTitle()}
                                </Text>
                                {wallet?.has_information && (
                                    <Icon icon='IcInfoOutline' onClick={() => setShouldShowFiat(true)} />
                                )}
                            </div>
                            <div
                                className={classNames('create-wallet-list__items', {
                                    'create-wallet-list__items__center': wallet.content.length < 5,
                                })}
                            >
                                {wallet.content?.map((wallet_name, id) => {
                                    const name = snakeToPascal(wallet_name || '');
                                    const wallet_logo = `${name}${dark ? 'Dark' : 'Light'}`;
                                    const is_wallet_selected = selected_wallet === wallet_name;

                                    return (
                                        <div
                                            key={`${wallet_name}${id}`}
                                            className={classNames(
                                                'create-wallet-card-button',
                                                // { 'wallet-radio-button--disabled': is_disabled },
                                                { 'create-wallet-card-button__pointer': !should_show_fiat }
                                            )}
                                            onClick={() => onWalletClicked(wallet_name)}
                                        >
                                            {is_wallet_selected && (
                                                <Icon icon='IcAppstoreCheck' className='create-wallet-card-icon' />
                                            )}

                                            <div
                                                className={classNames('create-wallet-card-button__icon__border', {
                                                    'create-wallet-card-button__icon__border--red': is_wallet_selected,
                                                })}
                                            >
                                                {should_show_fiat && (
                                                    <div className='create-wallet-fiat-icon'>
                                                        <WalletIcon icon={wallet_logo} />
                                                    </div>
                                                )}
                                                {!should_show_fiat && (
                                                    <WalletCard size='small' wallet_name={wallet_name} />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </ThemedScrollbars>
        </div>
    );
};

export default CreateWallet;
