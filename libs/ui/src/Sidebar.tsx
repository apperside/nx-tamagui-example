import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {
  AlignJustify as IcAlignJustify,
  Heart as IcHeart,
  ChevronsLeft,
} from '@tamagui/feather-icons';
import { XStack } from 'tamagui';
import { useState } from 'react';
import { Pressable } from 'react-native';
type Props = {
  items: any;
};

function Sidebar({ items }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <XStack>
      <ProSidebar collapsed={isCollapsed}>
        <SidebarHeader>
          <Pressable
            onPress={() => {
              alert()
              setIsCollapsed((prev) => !prev);
            }}
          >
            <ChevronsLeft onClick={()=>{setIsCollapsed(prev=>!prev)}} />
          </Pressable>
          {/**
           *  You can add a header for the sidebar ex: logo
           */}
        </SidebarHeader>
        <Menu iconShape="square">
          <MenuItem icon={<IcAlignJustify />}>Dashboard</MenuItem>
          <SubMenu title="Components" icon={<IcHeart />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </XStack>
  );
}

export default Sidebar;
