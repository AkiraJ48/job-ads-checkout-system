import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import JobAdContainer from '../JobAdContainer';

describe('JobAdContainer', () => {

  test('should render successfully', async () => {
    const read = () => Promise.resolve([]);
    await act(async () => render(<JobAdContainer read={read} onCheckout={() => {}} />));
  })

  test('should trigger a read for loading job ads', async () => {
    let readWasTriggered = false;
    const read = () => {
      readWasTriggered = true;
      return Promise.resolve([]);
    }
    await act(async () => render(<JobAdContainer read={read} onCheckout={() => { }} />));

    expect(readWasTriggered).toBeTruthy();
  })
})