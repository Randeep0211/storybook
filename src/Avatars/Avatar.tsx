import React from 'react';
import './avatar.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import classNames from 'classnames';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PageviewIcon from '@mui/icons-material/Pageview';
import MailIcon from '@mui/icons-material/Mail';
import { green, pink } from '@mui/material/colors';
import { ClassNames } from '@emotion/react';

interface avatarProps {
  size: 'small' | 'large' | 'medium';
  label: string;
  backgroundColor: string;
  text: string;
  onClick?: () => {};
}

export const Avatars = ({
  size = 'medium',
  backgroundColor,
  label,
  text,
}: avatarProps) => {
  return (
    <div>
      <Stack>
        <Avatar
          className={classNames([
            size === 'small' && 'css-2s90m6-MuiAvatar-root_small',
            size === 'large' && 'css-2s90m6-MuiAvatar-root_large',
            size === 'medium' && 'css-2s90m6-MuiAvatar-root_medium',
            size === 'small' && 'css-i4bv87-MuiSvgIcon-root_small',
           
          ])}
          style={{ backgroundColor }}
        >
          {text === 'H' && <AssignmentIcon />}
          {text === 'PV' && <PageviewIcon />}
          {text === 'Mail' && <MailIcon />}
        </Avatar>
      </Stack>
    </div>
  );
};
export default Avatars;
