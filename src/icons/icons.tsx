import React from 'react';
import { MdSearch, MdDelete, MdFacebook } from 'react-icons/md';

export const IconMap: { [key: string]: any } = {
  Search: MdSearch,
  Delete: MdDelete,
  Facebook: MdFacebook,
};

interface Icon {
  iconName: keyof typeof IconMap;
}

function Icon({ iconName }: Icon) {
  const IconComponent = IconMap[iconName];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent />;
}

export default Icon;
