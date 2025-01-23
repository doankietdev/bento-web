import React from 'react';

// ----------------------------------------------------------------------

interface Props {
  className?: string;
}

export default function GoogleSVG({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_236_99)">
        <path
          d="M19.9905 10.1871C19.9905 9.3677 19.9224 8.76977 19.7752 8.14969H10.1992V11.848H15.8201C15.7068 12.7671 15.0948 14.1512 13.7349 15.0813L13.7159 15.2051L16.7436 17.4969L16.9534 17.5174C18.8798 15.7789 19.9905 13.2211 19.9905 10.1871Z"
          fill="#4285F4"
        />
        <path
          d="M10.1992 19.9313C12.953 19.9313 15.2648 19.0454 16.9534 17.5174L13.7349 15.0813C12.8737 15.6682 11.7177 16.0779 10.1992 16.0779C7.50211 16.0779 5.21297 14.3395 4.39695 11.9366L4.27734 11.9466L1.12906 14.3273L1.08789 14.4391C2.76508 17.6945 6.21016 19.9313 10.1992 19.9313Z"
          fill="#34A853"
        />
        <path
          d="M4.39695 11.9366C4.18164 11.3165 4.05703 10.6521 4.05703 9.96562C4.05703 9.27905 4.18164 8.6147 4.38562 7.99463L4.37992 7.86257L1.19219 5.44363L1.08789 5.49211C0.396641 6.84302 0 8.36005 0 9.96562C0 11.5712 0.396641 13.0881 1.08789 14.4391L4.39695 11.9366Z"
          fill="#FBBC05"
        />
        <path
          d="M10.1992 3.85336C12.1144 3.85336 13.4062 4.66168 14.1429 5.33718L17.0213 2.59107C15.2535 0.985496 12.953 0 10.1992 0C6.21016 0 2.76508 2.23672 1.08789 5.49214L4.38563 7.99466C5.21297 5.59183 7.50211 3.85336 10.1992 3.85336Z"
          fill="#EB4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_236_99">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
