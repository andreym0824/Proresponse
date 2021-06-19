import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu'; 
import Link from 'next/link';
import styles from '../styles/Layout.module.css'

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.navBar}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <MenuIcon className={styles.Color}/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href='/'><MenuItem onClick={handleClose}>Home</MenuItem></Link>
        <Link href='/lodging'><MenuItem onClick={handleClose}>Create/Update Lodging</MenuItem></Link>
        <Link href='/timesheets'><MenuItem onClick={handleClose}>New Timesheet</MenuItem></Link>
        <Link href='/job-orders'><MenuItem onClick={handleClose}>New Job Order</MenuItem></Link>
        <Link href='/documents'><MenuItem onClick={handleClose}>Upload Documents</MenuItem></Link>
       
      </Menu>
    </div>
  );
}
