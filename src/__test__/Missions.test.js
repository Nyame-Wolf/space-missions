import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../pages/Missions';
import store from '../redux/store';

describe('Missions page component testing using snapshots', () => {
  it('Test Missions component renders', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
