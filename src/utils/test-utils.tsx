import { ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react';

import { MockedProvider, MockedProviderProps } from '@apollo/client/testing';

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event'

// For default component testing
export { render } from '@testing-library/react';

// For apollo provider component tests
export const renderWithAppProviders = (
  node: ReactElement,
  { mocks, addTypename = false, defaultOptions, cache, resolvers, ...options }: MockedProviderProps & Omit<RenderOptions, 'wrapper'>
) => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
      resolvers={resolvers}
    >
      {node}
    </MockedProvider>,
    options
  );
};

