import { Field, Formik } from 'formik';
import React from 'react';
import cn from 'classnames';
import {
    Div100vhContainer,
    Modal,
    ThemedScrollbars,
    FormSubmitButton,
    AutoHeightWrapper,
    StaticUrl,
} from '@deriv/components';
import { isDesktop, isMobile, PlatformContext } from '@deriv/shared';
import { localize, Localize } from '@deriv/translations';
import CheckboxField from './checkbox-field.jsx';
import { SharedMessage, BrokerSpecificMessage, Hr } from './terms-of-use-messages.jsx';
import './terms-of-use.scss';

const TermsOfUse = ({
    getCurrentStep,
    onCancel,
    goToPreviousStep,
    goToNextStep,
    onSubmit,
    value,
    real_account_signup_target,
    onSubmitEnabledChange,
    selected_step_ref,
    ...props
}) => {
    const { is_appstore } = React.useContext(PlatformContext);
    const is_submit_disabled_ref = React.useRef(true);

    const handleCancel = () => {
        const current_step = getCurrentStep() - 1;
        onCancel(current_step, goToPreviousStep);
    };

    const checkSubmitStatus = values => {
        const is_submit_disabled = !values.agreed_tos || !values.agreed_tnc;

        if (is_submit_disabled_ref.current !== is_submit_disabled) {
            is_submit_disabled_ref.current = is_submit_disabled;
            onSubmitEnabledChange?.(!is_submit_disabled);
        }
    };

    return (
        <Formik
            innerRef={selected_step_ref}
            initialValues={value}
            onSubmit={(values, actions) => {
                onSubmit(getCurrentStep() - 1, {}, actions.setSubmitting, goToNextStep);
            }}
            validate={checkSubmitStatus}
        >
            {({ handleSubmit, values, isSubmitting }) => (
                <AutoHeightWrapper default_height={380} height_offset={isDesktop() ? 81 : null}>
                    {({ setRef }) => (
                        <form ref={setRef} onSubmit={handleSubmit}>
                            <Div100vhContainer
                                className='details-form'
                                height_offset={is_appstore ? '242px' : '110px'}
                                is_disabled={isDesktop()}
                            >
                                <ThemedScrollbars is_bypassed={is_appstore}>
                                    <div
                                        className={cn('details-form__elements', 'terms-of-use')}
                                        style={{ paddingBottom: isDesktop() ? 'unset' : null }}
                                    >
                                        <BrokerSpecificMessage target={real_account_signup_target} />
                                        <Hr />
                                        <SharedMessage />
                                        <Field
                                            component={CheckboxField}
                                            className='terms-of-use__checkbox'
                                            name='agreed_tos'
                                            id='agreed_tos'
                                            label={localize(
                                                'I am not a PEP, and I have not been a PEP in the last 12 months.'
                                            )}
                                        />
                                        <Hr />
                                        <Field
                                            component={CheckboxField}
                                            className='terms-of-use__checkbox'
                                            name='agreed_tnc'
                                            id='agreed_tnc'
                                            label={
                                                <Localize
                                                    i18n_default_text='I agree to the <0>terms and conditions</0>.'
                                                    components={[
                                                        <StaticUrl
                                                            key={0}
                                                            className='link'
                                                            href='/terms-and-conditions'
                                                        />,
                                                    ]}
                                                />
                                            }
                                        />
                                    </div>
                                </ThemedScrollbars>
                            </Div100vhContainer>
                            {!is_appstore && (
                                <Modal.Footer has_separator is_bypassed={isMobile()}>
                                    <FormSubmitButton
                                        is_disabled={isSubmitting || !values.agreed_tos || !values.agreed_tnc}
                                        label={localize('Add account')}
                                        has_cancel
                                        is_absolute={isMobile()}
                                        onCancel={() => handleCancel()}
                                        cancel_label={localize('Previous')}
                                        form_error={props.form_error}
                                    />
                                </Modal.Footer>
                            )}
                        </form>
                    )}
                </AutoHeightWrapper>
            )}
        </Formik>
    );
};

export default TermsOfUse;
