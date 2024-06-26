import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_2_384)'>
      <path
        d='M1.37501 5.30357L11.9822 5.30357L9.65179 7.63393C9.33037 7.95536 9.33037 8.4375 9.65179 8.75893C9.97322 9.08036 10.4554 9.08036 10.7768 8.75893L14.4732 5.0625C14.7947 4.74107 14.7947 4.25893 14.4732 3.9375L10.7768 0.241071C10.4554 -0.0803576 9.97322 -0.0803576 9.65179 0.241071C9.33037 0.562499 9.33037 1.04464 9.65179 1.36607L11.9822 3.69643L1.37501 3.69643C0.973223 3.69643 0.571437 4.01786 0.571437 4.5C0.571437 4.98214 0.973222 5.30357 1.37501 5.30357Z'
        fill='#4089ED'
      />
    </g>
    <defs>
      <clipPath id='clip0_2_384'>
        <rect width={14.1429} height={9} fill='white' transform='translate(14.7143 9) rotate(-180)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(FrameIcon);
export { Memo as FrameIcon };
