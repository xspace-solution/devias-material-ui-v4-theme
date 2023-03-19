import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('!babel-loader!mdx-loader!./Content.mdx'));

const StateManagementView = () => {
  return (
    <Page title="State Management">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
};

export default StateManagementView;
