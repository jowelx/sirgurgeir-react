import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import styled from '@emotion/styled';
type Anchor =  'left';
const Link = styled.a({
  width: "100%",
  fontSize: "2vh",
  letterSpacing: 1,
  fontWeight: 300,
  margin: 0,
  color: "rgb(10,10,10)",
  textAlign: "left",
  textDecoration: "none",
});
const dataNav = [
  { name: "ABOUT", url: "/about" },
  { name: "MEN", url: "/SearchProduct" },
  { name: "WOMEN", url: "/SearchProduct" },
  { name: "EXPLORE", url: "/PrincipalPage" },
  { name: "CONTACT", url: "/contact" },
];
export default function MenuMobile({toggleDrawer,state}:any) {


  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {dataNav.map((text, index) => (
          <ListItem key={index} disablePadding>
                <ListItemButton>
                    <Link href={text.url}>
                        
              <ListItemText primary={text.name} />
                    </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}