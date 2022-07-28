import classnames from 'classnames';
import { EnvironmentHighlightColorStyle } from 'insomnia-common';
import React, { forwardRef, memo, ReactNode } from 'react';

import {
  COLLAPSE_SIDEBAR_REMS,
  SIDEBAR_SKINNY_REMS,
} from '../../../common/constants';
import type { Environment } from '../../../models/environment';

interface Props {
  activeEnvironment: Environment | null;
  children: ReactNode;
  environmentHighlightColorStyle: EnvironmentHighlightColorStyle;
  hidden: boolean;
  width: number;
}

export const Sidebar = memo(
  forwardRef<HTMLElement, Props>(({
    activeEnvironment,
    children,
    environmentHighlightColorStyle,
    hidden,
    width,
  }, ref) => {
    return (
      <aside
        ref={ref}
        className={classnames('sidebar', 'theme--sidebar', {
          'sidebar--hidden': hidden,
          'sidebar--skinny': width < SIDEBAR_SKINNY_REMS,
          'sidebar--collapsed': width < COLLAPSE_SIDEBAR_REMS,
        })}
        style={{
          borderRight:
            activeEnvironment &&
            activeEnvironment.color &&
            environmentHighlightColorStyle === 'sidebar-edge'
              ? '5px solid ' + activeEnvironment.color
              : undefined,
        }}
      >
        {children}
      </aside>
    );
  })
);

Sidebar.displayName = 'Sidebar';
