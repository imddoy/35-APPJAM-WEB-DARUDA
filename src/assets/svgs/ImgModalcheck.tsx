import * as React from 'react';
import type { SVGProps } from 'react';

const SvgImgModalcheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={179} height={195} fill="none" {...props}>
    <g filter="url(#img_modalcheck_svg__a)">
      <path
        fill="#F77B1B"
        fillRule="evenodd"
        d="M72.185 53.253c.995 4.62-4.374 7.92-8.047 4.947L24.942 26.479c-2.686-2.174-2.416-6.35.528-8.16L54.054.746c2.944-1.81 6.792-.166 7.52 3.212zM54.448 79.056c4.485 1.486 4.606 7.787.181 9.444l-47.22 17.686c-3.237 1.211-6.699-1.14-6.765-4.595L.001 68.043c-.066-3.455 3.303-5.937 6.583-4.85zm42.997-23.237c-.679 4.676 4.901 7.604 8.364 4.39l36.951-34.311c2.532-2.352 1.979-6.5-1.081-8.105L111.967 2.2c-3.06-1.605-6.788.297-7.284 3.716z"
        clipRule="evenodd"
      />
    </g>
    <g filter="url(#img_modalcheck_svg__b)">
      <path
        fill="#4D4ECD"
        fillRule="evenodd"
        d="M99.433 81.713c-10.807-1.849-21.066 5.414-22.915 16.22L66.28 157.79c-1.849 10.807 5.413 21.067 16.22 22.915l59.856 10.239c10.807 1.848 21.067-5.414 22.915-16.221l10.239-59.855c1.848-10.808-5.414-21.067-16.221-22.916zm48.407 48.346a4.671 4.671 0 1 0-5.425-7.606l-28.326 20.202-10.795-15.367a4.672 4.672 0 0 0-7.645 5.371l13.501 19.216a4.67 4.67 0 0 0 6.534 1.117z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="img_modalcheck_svg__a"
        width={156.361}
        height={114.508}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={12} dy={8} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.46 0" />
        <feBlend in2="shape" result="effect1_innerShadow_40001898_19040" />
      </filter>
      <filter
        id="img_modalcheck_svg__b"
        width={112.805}
        height={114.805}
        x={65.992}
        y={81.425}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={3} dy={5} />
        <feGaussianBlur stdDeviation={7.65} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_40001898_19040" />
      </filter>
    </defs>
  </svg>
);
export default SvgImgModalcheck;
