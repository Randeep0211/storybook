import React from 'react';
import './avatar.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import classNames from 'classnames';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PageviewIcon from '@mui/icons-material/Pageview';
import MailIcon from '@mui/icons-material/Mail';
import { green, pink } from '@mui/material/colors';
// import { ClassNames } from '@emotion/react';

interface avatarProps {
  primary: boolean;
  size: 'small' | 'large' | 'medium';
  label: string;
  backgroundColor: string;
  text: string;
  onClick?: () => {};
}

export const Avatars = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  text,
}: avatarProps) => {
  return (
    <div>
      <Stack>
        <Avatar className={classNames([
            size === 'small' && 'storybook-avatar_small',
            size === 'large' && 'storybook-avatar_large',
            size === 'medium' && 'storybook-avatar_medium',
          ])}
          style={{ backgroundColor }}>
          {text === 'H' && <AssignmentIcon />}
          {text === 'PV' && <PageviewIcon />}
          {text === 'Mail' && <MailIcon />}
        </Avatar>
      </Stack>
      </div>
    
  );
};
export default Avatars;
