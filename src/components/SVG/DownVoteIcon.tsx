type DownVoteIconProps = {
  fill: string;
};

export const DownVoteIcon = ({ fill }: DownVoteIconProps) => (
  <svg focusable="false" width="24px" height="24px" viewBox="0 0 24 24">
    <path fill={fill} d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
  </svg>
);
