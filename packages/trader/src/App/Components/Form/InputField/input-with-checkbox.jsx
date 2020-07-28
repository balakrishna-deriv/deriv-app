import PropTypes from 'prop-types';
import { PropTypes as MobxPropTypes } from 'mobx-react';
import React from 'react';
import { Checkbox, Popover, DesktopWrapper, MobileWrapper, Icon } from '@deriv/components';
import { isMobile, getDecimalPlaces } from '@deriv/shared';

import InputField from './input-field.jsx';

const InputWithCheckbox = ({
    addToast,
    classNameInlinePrefix,
    classNameInput,
    className,
    currency,
    defaultChecked,
    error_messages,
    is_disabled,
    is_single_currency,
    is_negative_disabled,
    is_input_hidden,
    label,
    name,
    max_value,
    onChange,
    checkbox_tooltip_label,
    tooltip_alignment,
    error_message_alignment,
    tooltip_label,
    value,
}) => {
    const checkboxRef = React.useRef();
    const input_wrapper_ref = React.useRef();

    const [is_checked, setChecked] = React.useState(defaultChecked);

    const checkboxName = `has_${name}`;

    React.useEffect(() => {
        setChecked(defaultChecked);
    }, [defaultChecked]);

    React.useEffect(() => {
        if (isMobile() && error_messages?.length > 0) {
            showErrorToast(error_messages[0]);
        }
    }, [error_messages]);

    const focusInput = () => {
        setTimeout(() => {
            const el_input = input_wrapper_ref.current.nextSibling.querySelector('input.input-wrapper__input');
            el_input.focus();
        });
    };

    const changeValue = e => {
        const new_is_checked = !is_checked;
        // e.target.checked is not reliable, we have to toggle its previous value
        onChange({ target: { name: e.target.name, value: new_is_checked } });
        if (new_is_checked) focusInput();
    };

    const enableInputOnClick = () => {
        if (!is_checked) {
            setChecked(true);
            onChange({ target: { name: checkboxName, value: true } });
            focusInput();
        }
    };

    const input = (
        <InputField
            className={className}
            classNameInlinePrefix={classNameInlinePrefix}
            classNameInput={classNameInput}
            currency={currency}
            error_messages={error_messages}
            error_message_alignment={error_message_alignment}
            is_error_tooltip_hidden={isMobile()}
            is_disabled={is_disabled ? 'disabled' : undefined}
            fractional_digits={getDecimalPlaces(currency)}
            id={`dt_${name}_input`}
            inline_prefix={is_single_currency ? currency : null}
            is_autocomplete_disabled
            is_float
            is_hj_whitelisted
            is_incrementable
            is_negative_disabled={is_negative_disabled}
            max_length={10}
            max_value={max_value}
            name={name}
            onChange={onChange}
            onClickInputWrapper={is_disabled ? undefined : enableInputOnClick}
            type='number'
            value={value}
        />
    );

    const checkbox = (
        <Checkbox
            className={`${name}-checkbox__input`}
            ref={checkboxRef}
            id={`dt_${name}-checkbox_input`}
            onChange={changeValue}
            name={checkboxName}
            label={label}
            classNameLabel={`${name}-checkbox__label`}
            defaultChecked={defaultChecked}
            disabled={is_disabled}
        />
    );

    const showToast = () => {
        if (typeof addToast === 'function') {
            addToast({
                key: name,
                content: tooltip_label,
                type: 'info',
                is_bottom: true,
            });
        }
    };

    const showErrorToast = () => {
        if (typeof addToast === 'function') {
            addToast({
                key: `${name}__error`,
                content: error_messages,
                type: 'error',
            });
        }
    };

    return (
        <React.Fragment>
            <div ref={input_wrapper_ref} className='input-wrapper--inline'>
                {checkbox_tooltip_label ? (
                    <Popover
                        alignment='left'
                        classNameBubble='trade-container__popover'
                        is_bubble_hover_enabled
                        margin={2}
                        message={checkbox_tooltip_label}
                        relative_render
                    >
                        {checkbox}
                    </Popover>
                ) : (
                    <React.Fragment>{checkbox}</React.Fragment>
                )}
                {tooltip_label && (
                    <React.Fragment>
                        <DesktopWrapper>
                            <Popover
                                alignment={tooltip_alignment || 'left'}
                                icon='info'
                                id={`dt_${name}-checkbox__tooltip`}
                                message={tooltip_label}
                                margin={tooltip_alignment === 'bottom' ? 0 : 210}
                                relative_render
                            />
                        </DesktopWrapper>
                        <MobileWrapper>
                            <Icon icon='IcInfoOutline' onClick={showToast} />
                        </MobileWrapper>
                    </React.Fragment>
                )}
            </div>
            {!is_input_hidden && input}
        </React.Fragment>
    );
};

InputWithCheckbox.propTypes = {
    addToast: PropTypes.func,
    checkbox_tooltip_label: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.string]),
    className: PropTypes.string,
    classNameInlinePrefix: PropTypes.string,
    classNameInput: PropTypes.string,
    classNamePrefix: PropTypes.string,
    currency: PropTypes.string,
    defaultChecked: PropTypes.bool,
    error_messages: MobxPropTypes.arrayOrObservableArray,
    is_negative_disabled: PropTypes.bool,
    is_single_currency: PropTypes.bool,
    is_input_hidden: PropTypes.bool,
    label: PropTypes.string,
    max_value: PropTypes.number,
    name: PropTypes.string,
    onChange: PropTypes.func,
    tooltip_label: PropTypes.string,
    tooltip_alignment: PropTypes.string,
    error_message_alignment: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default InputWithCheckbox;
