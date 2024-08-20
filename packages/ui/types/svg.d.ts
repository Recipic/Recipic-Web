declare module '*.svg' {
  import React from 'react';
  const SVGComponent: React.FC<React.SVGProps<SVGElement>>;
  export default SVGComponent;
}
