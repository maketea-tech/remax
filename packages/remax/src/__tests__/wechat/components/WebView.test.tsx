import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import WebView from '../../../adapters/wechat/components/WebView';

describe('WebView', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<WebView />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
