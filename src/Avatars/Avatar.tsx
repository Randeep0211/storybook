import React from 'react';
import './avatar.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import classNames from 'classnames';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PageviewIcon from '@mui/icons-material/Pageview';
import MailIcon from '@mui/icons-material/Mail';
import { green, pink } from '@mui/material/colors';


interface avatarProps {
  primary: boolean;
  size: 'small' | 'large' | 'medium';
  label: string;
  backgroundColor: string;
  onClick?: () => {};
}

export const Avatars = ({
  primary = false,
  size = 'small',
  backgroundColor,
  label,
}: avatarProps) => {
  return (
    <div>
      <Stack>
        <Avatar style={{ backgroundColor }}>
          {label === 'H' && <AssignmentIcon />}
          {label === 'PV' && <PageviewIcon />}
          {label=== 'Mail' && <MailIcon />}
        </Avatar>
      </Stack>
    </div>
  );
};
export default Avatars;
