// React
import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRounded from '@material-ui/icons/HomeRounded';
import PermMediaRounded from '@material-ui/icons/PermMediaRounded';
import ContactMailRounded from '@material-ui/icons/ContactMailRounded';


export const Navbar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        console.log("newValue: ", newValue)
        setValue(newValue);
      }}
      showLabels
      className="navbar-container"
    >
      <BottomNavigationAction href="/" label="About Me" icon={<HomeRounded />} />
      <BottomNavigationAction href="/projects" label="Projects" icon={<PermMediaRounded />} />
      <BottomNavigationAction href="/contact" label="Contact" icon={<ContactMailRounded />} />
    </BottomNavigation>
  );
};
