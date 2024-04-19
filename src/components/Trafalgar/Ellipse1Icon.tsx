import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 141 141' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={70.5} cy={70.5} r={70.5} fill='white' />
  </svg>
);
const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
