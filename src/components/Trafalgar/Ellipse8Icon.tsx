import { memo, SVGProps } from 'react';

const Ellipse8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={20.5} cy={20.5} r={20.5} fill='white' />
  </svg>
);
const Memo = memo(Ellipse8Icon);
export { Memo as Ellipse8Icon };
