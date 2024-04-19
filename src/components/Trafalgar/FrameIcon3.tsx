import { memo, SVGProps } from 'react';

const FrameIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_2_389)'>
      <path
        d='M0.803536 5.30357L11.4107 5.30357L9.08032 7.63393C8.75889 7.95536 8.75889 8.4375 9.08032 8.75893C9.40175 9.08036 9.88389 9.08036 10.2053 8.75893L13.9018 5.0625C14.2232 4.74107 14.2232 4.25893 13.9018 3.9375L10.2053 0.241071C9.88389 -0.0803576 9.40175 -0.0803576 9.08032 0.241071C8.75889 0.562499 8.75889 1.04464 9.08032 1.36607L11.4107 3.69643L0.803536 3.69643C0.40175 3.69643 -3.53477e-05 4.01786 -3.53898e-05 4.5C-3.5432e-05 4.98214 0.40175 5.30357 0.803536 5.30357Z'
        fill='#4089ED'
      />
    </g>
    <defs>
      <clipPath id='clip0_2_389'>
        <rect width={14.1429} height={9} fill='white' transform='translate(14.1428 9) rotate(-180)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(FrameIcon3);
export { Memo as FrameIcon3 };
