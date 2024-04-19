import { memo, SVGProps } from 'react';

const ElementIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 924 792' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.6} clipPath='url(#clip0_2_255)'>
      <path
        d='M835.998 493.365C786.381 553.026 684.061 479.618 539.041 516.048C413.438 547.615 407.903 624.023 306.942 622.53C233.183 621.453 151.911 580.72 106.095 507.585C55.5688 426.949 71.3756 343.33 75.8844 323.024C96.003 231.945 160.728 182.674 183.575 165.829C277.703 96.467 385.305 105.808 436.925 110.263C630.831 127.062 841.042 260.461 853.667 410.389C855.338 430.017 858.395 466.423 835.998 493.365Z'
        fill='url(#paint0_linear_2_255)'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_2_255'
        x1={356.009}
        y1={742.124}
        x2={537.152}
        y2={151.876}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F3F7FF' />
        <stop offset={1} stopColor='#DEEEFE' />
      </linearGradient>
      <clipPath id='clip0_2_255'>
        <rect width={778.734} height={557.403} fill='white' transform='translate(731.038 791.609) rotate(-159.843)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(ElementIcon3);
export { Memo as ElementIcon3 };
