import React, { Component } from 'react';
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import Drawer from '@material/react-drawer';
import MenuSurface, {Corner} from '@material/react-menu-surface';
import List,{ListItem,ListItemText,ListItemGraphic,ListItemMeta} from '@material/react-list';
import logo from './logo.svg';
import './App.scss';
export default function App() {
  const [isDrawerOpen,setDrawerOpen] = React.useState<boolean>(false)
  const [isMenuOpen,setMenuOpen] = React.useState<boolean>(false)
  const menuAnchorEl = React.useRef<any>(null)
  const onDrawerClose = () => {
    setDrawerOpen(false)
  }
  return (
    <div>
      <Drawer modal open={isDrawerOpen} onClose={onDrawerClose}>
        <List>
          <ListItem onClick={()=>setDrawerOpen(false)}>
            <ListItemGraphic graphic={<MaterialIcon icon='home'/>} />
            <ListItemText primaryText='Home' />
          </ListItem>
          <ListItem onClick={()=>setDrawerOpen(false)}>
            <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />
            <ListItemText primaryText='GR/PO' />
            <ListItemMeta meta='Inbound Goods' />
          </ListItem>
        </List>
      </Drawer>
      <div>
        <TopAppBar title='MDC React 101'
          navigationIcon={<MaterialIcon icon='menu' onClick={() => setDrawerOpen(true)}/>}
          actionItems={[
            <div className='mdc-menu-surface--anchor' ref={(e)=>menuAnchorEl.current = e}>
              <MaterialIcon key='item' icon='more_vert' onClick={()=>{
                console.log("Menu anchor element",menuAnchorEl)
                setMenuOpen(true)
              }}/>
            </div>
          ]}
          fixed/>
        <MenuSurface
          open={isMenuOpen}
          anchorCorner={Corner.BOTTOM_LEFT}
          onClose={() => setMenuOpen(false)}
          anchorElement={menuAnchorEl.current}
        >
        <List>
          <ListItem onClick={()=>setMenuOpen(false)}>
            <ListItemGraphic graphic={<MaterialIcon icon='power_settings_new'/>} />
            <ListItemText primaryText='Logout' />
          </ListItem>
          <ListItem onClick={()=>setMenuOpen(false)}>
            <ListItemGraphic graphic={<MaterialIcon icon='notifications'/>} />
            <ListItemText primaryText='Notifications' />
          </ListItem>
          <ListItem onClick={()=>setMenuOpen(false)}>
            <ListItemGraphic graphic={<MaterialIcon icon='person'/>} />
            <ListItemText primaryText='Profile' />
          </ListItem>
        </List>
      </MenuSurface>
        <TopAppBarFixedAdjust>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit a consectetur repellendus laborum unde dicta, voluptatum debitis in minima facere quisquam perspiciatis, amet tempore! Et eveniet corporis nam quos?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit a consectetur repellendus laborum unde dicta, voluptatum debitis in minima facere quisquam perspiciatis, amet tempore! Et eveniet corporis nam quos?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit a consectetur repellendus laborum unde dicta, voluptatum debitis in minima facere quisquam perspiciatis, amet tempore! Et eveniet corporis nam quos?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit a consectetur repellendus laborum unde dicta, voluptatum debitis in minima facere quisquam perspiciatis, amet tempore! Et eveniet corporis nam quos?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit a consectetur repellendus laborum unde dicta, voluptatum debitis in minima facere quisquam perspiciatis, amet tempore! Et eveniet corporis nam quos?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit a consectetur repellendus laborum unde dicta, voluptatum debitis in minima facere quisquam perspiciatis, amet tempore! Et eveniet corporis nam quos?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit a consectetur repellendus laborum unde dicta, voluptatum debitis in minima facere quisquam perspiciatis, amet tempore! Et eveniet corporis nam quos?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit a consectetur repellendus laborum unde dicta, voluptatum debitis in minima facere quisquam perspiciatis, amet tempore! Et eveniet corporis nam quos?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit a consectetur repellendus laborum unde dicta, voluptatum debitis in minima facere quisquam perspiciatis, amet tempore! Et eveniet corporis nam quos?</div>
        </TopAppBarFixedAdjust>
      </div>
    </div>    
  )
}
