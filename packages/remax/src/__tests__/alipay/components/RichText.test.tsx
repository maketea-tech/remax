import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import RadioGroup from '../../../adapters/alipay/components/RadioGroup';

describe('RadioGroup', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<RadioGroup />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
