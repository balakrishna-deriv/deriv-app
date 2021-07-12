import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Popover, Text } from '@deriv/components';
// import { WS } from '@deriv/shared';
import { localize, Localize } from '@deriv/translations';
import FormSubHeader from 'Components/form-sub-header';
import SentEmailModal from 'Components/sent-email-modal';

const PasswordsPlatform = ({ has_set_deriv_x_trading_password, has_set_trading_password }) => {
    const [identifier, setIdenifier] = React.useState('');
    const IDT_DERIV_X = 'derivx_trading_password';
    const IDT_DMT5 = 'trading_password';
    const [is_sent_email_modal_open, setIsSentEmailModalOpen] = React.useState(false);

    const getPlatformTitle = () => {
        let title = '';
        if (has_set_trading_password) {
            title = localize('DMT5 Password');
        } else if (has_set_deriv_x_trading_password) {
            title = localize('Deriv X Password');
        }
        return title;
    };

    const onClickSendEmail = id => {
        // WS.verifyEmail(email, 'reset_password');
        setIdenifier(id);
        setIsSentEmailModalOpen(true);
    };

    return (
        <React.Fragment>
            <FormSubHeader title={getPlatformTitle()} />
            <div className='account__passwords-wrapper'>
                {has_set_trading_password && (
                    <React.Fragment>
                        <Text as='p' className='passwords-platform__desc' color='prominent' size='xs' weight='lighter'>
                            {
                                <Localize
                                    i18n_default_text='Use the <0>DMT5 password</0> to log in to your DMT5 accounts on the desktop, web and mobile apps.'
                                    components={[<strong key={0} />]}
                                />
                            }
                        </Text>
                        <div className='passwords-platform__content'>
                            <Popover alignment='bottom' message='DMT5'>
                                <Icon icon='IcBrandDmt5' size={32} />
                            </Popover>
                            <Button
                                className='account__passwords-footer-btn'
                                type='button'
                                onClick={() => onClickSendEmail(IDT_DMT5)}
                                text={localize('Change password')}
                                primary
                                large
                            />
                        </div>
                    </React.Fragment>
                )}
                {has_set_deriv_x_trading_password && (
                    <React.Fragment>
                        <Text as='p' className='passwords-platform__desc' color='prominent' size='xs' weight='lighter'>
                            {
                                <Localize
                                    i18n_default_text='Use the <0>Deriv X password</0> to log in to your Deriv X accounts on the web and mobile apps.'
                                    components={[<strong key={0} />]}
                                />
                            }
                        </Text>
                        <div className='passwords-platform__content'>
                            <Popover alignment='bottom' message='Deriv X'>
                                <Icon icon='IcBrandDxtrade' size={32} />
                            </Popover>
                            <Button
                                className='account__passwords-footer-btn'
                                type='button'
                                onClick={() => onClickSendEmail(IDT_DERIV_X)}
                                text={localize('Change password')}
                                primary
                                large
                            />
                        </div>
                    </React.Fragment>
                )}
                <SentEmailModal
                    is_open={is_sent_email_modal_open}
                    identifier_title={identifier}
                    onClose={() => setIsSentEmailModalOpen(false)}
                    onClickSendEmail={onClickSendEmail}
                />
                {/*
                <SuccessDialog
                    is_open={is_success_dialog_open}
                    is_dxtrade_allowed={is_dxtrade_allowed}
                    onClose={() => setIsSuccessDialogOpen(false)}
                /> */}
            </div>
        </React.Fragment>
    );
};

PasswordsPlatform.propTypes = {
    has_set_deriv_x_trading_password: PropTypes.bool,
    has_set_trading_password: PropTypes.bool,
};

export default PasswordsPlatform;
