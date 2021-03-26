import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Modal, SendEmailTemplate, Text } from '@deriv/components';
import { localize, Localize } from '@deriv/translations';

const no_email_content = [
    {
        icon: 'IcEmailSpam',
        content: localize('The email is in your spam folder (Sometimes things get lost there).'),
    },
    {
        icon: 'IcEmail',
        content: localize(
            'You accidentally gave us another email address (Usually a work or a personal one instead of the one you meant).'
        ),
    },
    {
        icon: 'IcEmailFirewall',
        content: localize('We can’t deliver the email to this address (Usually because of firewalls or filtering).'),
    },
];

const SentEmailModal = ({ identifier_title, is_open, is_unlink_modal, onClose, onConfirm }) => {
    const getSubtitle = () => {
        let subtitle = '';
        switch (identifier_title) {
            case 'trading_password':
                subtitle = localize('Please click on the link in the email to reset your trading password.');
                break;
            case 'Google':
            case 'Facebook':
                subtitle = localize(
                    `Check your ${identifier_title} account email and click the link in the email to proceed.`
                );
                break;
            default:
                subtitle = localize('Please click on the link in the email to reset your password.');
                break;
        }
        return subtitle;
    };

    return (
        <Modal
            className={!is_unlink_modal && 'sent-email__modal'}
            is_open={is_open}
            has_close_icon={!is_unlink_modal}
            should_header_stick_body
            title={
                is_unlink_modal ? (
                    <Localize
                        i18n_default_text='Are you sure you want to unlink from {{identifier_title}}?'
                        values={{ identifier_title }}
                    />
                ) : (
                    ''
                )
            }
            toggleModal={onClose}
            width='440px'
        >
            {is_unlink_modal ? (
                <React.Fragment>
                    <Text className='sent-email__modal-unlink-title' size='xs'>
                        {localize('You will need to set a password to complete the process.')}
                    </Text>
                    <Modal.Footer>
                        <Button onClick={onClose} has_effect text={localize('Cancel')} secondary large />
                        <Button has_effect onClick={onConfirm} primary large>
                            <Localize
                                i18n_default_text='Unlink from {{identifier_title}}'
                                values={{ identifier_title }}
                            />
                        </Button>
                    </Modal.Footer>
                </React.Fragment>
            ) : (
                <Modal.Body>
                    <div onClick={onClose} className='sent-email__modal-close'>
                        <Icon icon='IcCross' />
                    </div>
                    <SendEmailTemplate
                        className='sent-email'
                        title={localize('We’ve sent you an email')}
                        subtitle={getSubtitle()}
                        lbl_no_receive={localize("Didn't receive the email?")}
                        txt_resend={localize('Resend email')}
                        txt_resend_in={localize('Resend email in {{seconds}}s', { seconds: '{{seconds}}' })}
                    >
                        {no_email_content.map((item, idx) => (
                            <div className='sent-email__content' key={idx}>
                                <Icon icon={item.icon} size={32} />
                                <Text size='xxs' as='p'>
                                    {item.content}
                                </Text>
                            </div>
                        ))}
                    </SendEmailTemplate>
                </Modal.Body>
            )}
        </Modal>
    );
};

SentEmailModal.propTypes = {
    identifier_title: PropTypes.string,
    is_open: PropTypes.bool,
    is_unlink_modal: PropTypes.bool,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
};

export default SentEmailModal;
