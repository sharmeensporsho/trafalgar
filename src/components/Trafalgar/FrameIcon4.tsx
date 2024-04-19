import { memo, SVGProps } from 'react';

const FrameIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1119 968' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.6} clipPath='url(#clip0_2_783)'>
      <path
        d='M111.047 356.268C172.423 285.781 293.629 376.969 469.25 337.061C621.359 302.479 630.11 210.622 751.642 215.177C840.431 218.487 937.183 269.755 990.356 359.072C1049 457.551 1027.68 557.81 1021.7 582.139C994.983 691.263 915.698 748.826 887.728 768.487C772.488 849.44 643.173 835.254 581.136 828.479C348.1 802.957 98.6139 636.583 87.5053 455.701C86.0289 432.02 83.342 388.098 111.047 356.268Z'
        fill='url(#paint0_linear_2_783)'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_2_783'
        x1={695.823}
        y1={69.8267}
        x2={461.583}
        y2={775.635}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F3F7FF' />
        <stop offset={1} stopColor='#DEEEFE' />
      </linearGradient>
      <clipPath id='clip0_2_783'>
        <rect width={937.962} height={671.376} fill='white' transform='translate(245.578) rotate(21.4558)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(FrameIcon4);
export { Memo as FrameIcon4 };
