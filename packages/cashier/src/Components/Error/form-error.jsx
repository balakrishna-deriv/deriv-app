import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Dialog } from '@deriv/components';
import { localize } from '@deriv/translations';
import { routes } from '@deriv/shared';
import { connect } from 'Stores/connect';

const FormError = ({ disableApp, enableApp, setErrorMessage, error = {}, loginid, account_status }) => {
    const history = useHistory();
    const [is_visible, setIsVisible] = React.useState(false);
    const [details, setDetails] = React.useState({
        title: '',
        cancel_button_text: undefined,
        confirm_button_text: '',
        onConfirm: undefined,
        message: '',
    });

    React.useEffect(() => {
        // avoid resetting the text when dismissing the pop up
        if (error.message) {
            mapErrorToDetails(error.code, error.message);
        }
    }, [error.code]);

    React.useEffect(() => {
        setErrorVisibility(!!error.message);
    }, [error.message]);

    const redirectToAllowDocumentUpload = () => {
        const {
            authentication: { needs_verification },
            status,
        } = account_status;

        const needs_authentication = needs_verification.length || status?.includes('allow_document_upload');

        const needs_poa = needs_authentication && needs_verification.includes('document');
        const needs_poi = needs_authentication && needs_verification.includes('identity');

        if (needs_poi) {
            history.push(routes.proof_of_identity);
        } else if (needs_poa) {
            history.push(routes.proof_of_address);
        }
    };

    const mapErrorToDetails = (error_code, error_message) => {
        if (error_code === 'Fiat2CryptoTransferOverLimit') {
            setDetails({
                title: localize('Please verify your identity'),
                cancel_button_text: localize('Cancel'),
                confirm_button_text: localize('Verify identity'),
                onConfirm: () => history.push(routes.proof_of_identity),
                message: error_message,
            });
        } else if (error_code === 'TransferBetweenAccountsError') {
            setDetails({
                title: localize('Cashier Error'),
                cancel_button_text: undefined,
                confirm_button_text: localize('OK'),
                onConfirm: () => {
                    // If the error message has loginid, then the account needs authentication
                    if (new RegExp(loginid).test(error_message)) {
                        redirectToAllowDocumentUpload();
                    } else {
                        history.push(routes.financial_assessment);
                    }
                },
                message: error_message,
            });
        } else {
            setDetails({
                title: localize('Cashier Error'),
                cancel_button_text: undefined,
                confirm_button_text: localize('OK'),
                onConfirm: undefined,
                message: error_message,
            });
        }
    };

    const setErrorVisibility = is_error_visible => {
        setIsVisible(is_error_visible);
    };

    const dismissError = () => {
        setErrorMessage('');
        setErrorVisibility(false);
    };

    return (
        <Dialog
            title={details.title}
            confirm_button_text={details.confirm_button_text}
            cancel_button_text={details.cancel_button_text}
            onConfirm={() => {
                if (typeof details.onConfirm === 'function') {
                    details.onConfirm();
                }
                dismissError();
            }}
            onCancel={details.cancel_button_text ? dismissError : undefined}
            disableApp={disableApp}
            enableApp={enableApp}
            is_visible={is_visible}
            portal_element_id='modal_root'
        >
            {/* to avoid the message disappearing before the pop-up */}
            {/* use details.message instead of error.message */}
            {/* since the setErrorVisibility hook gets called after error.message is removed */}
            {details.message}
        </Dialog>
    );
};

FormError.propTypes = {
    error: PropTypes.object,
    disableApp: PropTypes.func,
    enableApp: PropTypes.func,
    setErrorMessage: PropTypes.func,
    loginid: PropTypes.string,
    account_status: PropTypes.object,
};

export default connect(({ modules, ui, client }) => ({
    disableApp: ui.disableApp,
    enableApp: ui.enableApp,
    setErrorMessage: modules.cashier.setErrorMessage,
    loginid: client.loginid,
    account_status: client.account_status,
}))(FormError);
