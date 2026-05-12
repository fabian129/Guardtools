/* eslint-disable @typescript-eslint/no-namespace */

import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          icon?: string;
          width?: string | number;
          height?: string | number;
          inline?: boolean;
          flip?: string;
          rotate?: string | number;
        },
        HTMLElement
      >;
    }
  }
}

declare module 'unicornstudio-react' {
  import { FC } from 'react';
  interface UnicornSceneProps {
    projectId: string;
    [key: string]: unknown;
  }
  const UnicornScene: FC<UnicornSceneProps>;
  export default UnicornScene;
}
