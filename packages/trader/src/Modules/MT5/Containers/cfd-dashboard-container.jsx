import React from 'react';
import { Icon, Text } from '@deriv/components';
import { Localize } from '@deriv/translations';
import { general_messages } from '../Constants/cfd-shared-strings';
import { getMT5WebTerminalLink, getPlatformMt5DownloadLink } from '../Helpers/constants';

const CFDDashboardContainer = ({ platform }) => (
    <div className='cfd-dashboard__download-center'>
        <h1 className='cfd-dashboard__download-center--heading'>{general_messages.getDownloadHeader(platform)}</h1>
        <div
            className='cfd-dashboard__download-center-options'
            style={{ justifyContent: platform === 'dxtrade' ? 'space-evenly' : null }}
        >
            <div
                className='cfd-dashboard__download-center-options--desktop'
                style={{ marginTop: platform === 'dxtrade' ? 'auto' : null }}
            >
                <div className='cfd-dashboard__download-center-options--desktop-links'>
                    <div>
                        <div className='cfd-dashboard__download-center-options--desktop-row'>
                            {platform === 'mt5' && (
                                <React.Fragment>
                                    <Icon icon='IcMt5DeviceDesktop' width={118} height={85} />
                                    <Icon icon='IcMt5DeviceLaptop' width={75} height={51} />
                                </React.Fragment>
                            )}
                            {platform === 'dxtrade' && (
                                <React.Fragment>
                                    <Icon icon='IcDxtradeDeviceDesktop' width={128} height={83} />
                                    <Icon icon='IcDxtradeDeviceLaptop' width={81} height={54} />
                                </React.Fragment>
                            )}
                        </div>
                        <div className='cfd-dashboard__download-center-options--desktop-row'>
                            {platform === 'dxtrade' && (
                                <a
                                    className='cfd-dashboard__dxtrade-download'
                                    href='https://demo.dx.trade/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Icon
                                        className='cfd-dashboard__dxtrade-download--icon'
                                        icon='IcBrandDxtrade'
                                        width={32}
                                        height={32}
                                    />
                                    <div className='cfd-dashboard__dxtrade-download-text'>
                                        <Text
                                            className='cfd-dashboard__dxtrade-download--title'
                                            color='colored-background'
                                            size='xxs'
                                            weight='bold'
                                        >
                                            <Localize i18n_default_text='Web terminal' />
                                        </Text>
                                        <Text
                                            className='cfd-dashboard__dxtrade-download--subtitle'
                                            color='colored-background'
                                            size='xxs'
                                        >
                                            <Localize i18n_default_text='Demo/real account' />
                                        </Text>
                                    </div>
                                </a>
                            )}
                            {platform === 'mt5' && (
                                <React.Fragment>
                                    <a
                                        href={getMT5WebTerminalLink({ category: 'demo' })}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <Icon icon='IcInstallationWebDemo' width={138} height={40} />
                                    </a>
                                    <a
                                        href={getMT5WebTerminalLink({ category: 'real' })}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <Icon icon='IcInstallationWebReal' width={138} height={40} />
                                    </a>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                    {platform === 'mt5' && (
                        <div className='cfd-dashboard__download-center-options--desktop-download'>
                            <a href={getPlatformMt5DownloadLink('windows')} target='_blank' rel='noopener noreferrer'>
                                <Icon icon='IcInstallationWindows' width={138} height={40} />
                            </a>
                            <a href={getPlatformMt5DownloadLink('macos')} target='_blank' rel='noopener noreferrer'>
                                <Icon icon='IcInstallationMacos' width={138} height={40} />
                            </a>
                            <a href={getPlatformMt5DownloadLink('linux')} target='_blank' rel='noopener noreferrer'>
                                <Icon icon='IcInstallationLinux' width={138} height={40} />
                            </a>
                        </div>
                    )}
                </div>
                {platform === 'mt5' && (
                    <Text as='p' size='xxxs' className='cfd-dashboard__download-center--hint'>
                        <Localize i18n_default_text='The MT5 desktop app is not supported by Windows XP, Windows 2003, and Windows Vista.' />
                    </Text>
                )}
            </div>
            <div className='cfd-dashboard__download-center-options--mobile'>
                <div className='cfd-dashboard__download-center-options--mobile-devices'>
                    {platform === 'mt5' && (
                        <React.Fragment>
                            <Icon icon='IcMt5DeviceTablet' width={133} height={106} />
                            <Icon icon='IcMt5DevicePhone' width={48} height={74} />
                        </React.Fragment>
                    )}
                    {platform === 'dxtrade' && (
                        <React.Fragment>
                            <Icon icon='IcDxtradeDeviceTablet' width={133} height={106} />
                            <Icon icon='IcDxtradeDevicePhone' width={48} height={74} />
                        </React.Fragment>
                    )}
                </div>
                <div className='cfd-dashboard__download-center-options--mobile-links'>
                    <a
                        className='cfd-dashboard__download-center-options--mobile-link'
                        href={getPlatformMt5DownloadLink('android')}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Icon icon='IcInstallationGoogle' width={135} height={40} />
                    </a>
                    <a
                        className='cfd-dashboard__download-center-options--mobile-link'
                        href={getPlatformMt5DownloadLink('ios')}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Icon icon='IcInstallationApple' width={120} height={40} />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default CFDDashboardContainer;
