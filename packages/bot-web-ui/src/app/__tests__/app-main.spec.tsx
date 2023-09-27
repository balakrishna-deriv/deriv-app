import { initSurvicate, initSurvicateCalled } from '../../public-path';
import React from 'react';
import moment from 'moment';
import { mockStore } from '@deriv/stores';
import { render } from '@testing-library/react';
import { TRootStore } from 'Types';
import { mock_ws } from '../../utils/mock';
import App from '../app-main';

const root_store = {
    ...mockStore({}),
    common: {
        ...mockStore({}).common,
        server_time: moment(new Date()).utc(),
    },
    client: {
        ...mockStore({}).client,
        is_landing_company_loaded: true,
        is_logged_in: false,
    },
};

jest.mock('@deriv/bot-skeleton/src/scratch/blockly', () => jest.fn());
jest.mock('@deriv/bot-skeleton/src/scratch/dbot', () => jest.fn());
jest.mock('@deriv/bot-skeleton/src/scratch/hooks/block_svg', () => jest.fn());
jest.mock('@deriv/deriv-charts', () => ({
    setSmartChartsPublicPath: jest.fn(),
}));

jest.mock('@deriv/components', () => ({
    Loading: () => <div>Loading...</div>,
    initSurvicate: () => <div>script...</div>,
}));

const mockDOM = `
  <div id="dbot-survicate">
    <div id="survicate-box" style="display: block;"></div>
  </div>
`;
document.body.innerHTML = mockDOM;

describe('App', () => {
    //mock for blockly
    window.Blockly = {
        Colours: {
            RootBlock: {},
        },
    };

    it('should render loader on app', async () => {
        const { container } = render(
            <App
                passthrough={{
                    root_store: root_store as unknown as TRootStore,
                    WS: mock_ws,
                }}
            />
        );
        expect(container).toBeInTheDocument();
    });
    it('check survicate script appended', () => {
        initSurvicate();

        expect(initSurvicateCalled).toBe(true);
    });
});