/** @jsxRuntime classic */
/** @jsx jsx */
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { jsx, Heading } from '@keystone-ui/core';

export default function CustomPage() {
  return (
    <PageContainer header={<Heading type="h3">Custom Page</Heading>}>
      <h1
        css={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        Import Firestore Document from ContentId
      </h1>
    </PageContainer>
  );
}