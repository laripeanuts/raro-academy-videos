type UpVoteIconProps = {
  fill: string;
};

export const UpVoteIcon = ({ fill }: UpVoteIconProps) => (
  <svg focusable="false" width="24px" height="24px" viewBox="0 0 24 24">
    <path fill={fill} d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
  </svg>
);
