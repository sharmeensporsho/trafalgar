import { memo, SVGProps } from 'react';

const Ellipse7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={20.5} cy={20.5} r={20.5} fill='#458FF6' />
  </svg>
);
const Memo = memo(Ellipse7Icon);
export { Memo as Ellipse7Icon };
