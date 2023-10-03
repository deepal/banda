import React from 'react';
import styled from 'styled-components';

const Layout = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--padding-xs)',
  paddingLeft: '11px',
  position: 'relative',
});

const RelativeFrame = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--padding-xs)',
});

export const AppLogo = () => {
  return (
    <Layout>
      <RelativeFrame>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="28px" />
      </RelativeFrame>
    </Layout>
  );
};
