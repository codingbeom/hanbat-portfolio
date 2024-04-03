import { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
  menuClasses,
  MenuItemStyles,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const StyledSidebar = styled(Sidebar)`
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const OpenClose = styled.button`
  width: 20px;
  height: 20px;
`;

interface Props {
  children: React.ReactElement;
}

function SidebarCom({ children }: Props) {
  const [collapsed, setCollapsed] = useState(true);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  const [active, setActive] = useState("/");
  const [item, setItem] = useState([
    { key: "/", icon: null, name: "Home", active: true },
    { key: "/about", icon: null, name: "About", active: false },
    { key: "/contact", icon: null, name: "Contact", active: false },
  ]);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = () => {
    setToggled(false);
  };

  const handleActiveLink = (key: string) => {
    setItem;
  };

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {},
    subMenuContent: ({ level }) => ({}),
    button: {
      "&:hover": {
        backgroundColor: "#45C4B0",
      },
      "&:active": {
        color: "#9AEBA3",
        fontWeight: "bold",
      },
    },
    label: ({ open }) => ({}),
  };

  return (
    <SidebarWrapper>
      <StyledSidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={handleToggleSidebar}
        onBreakPoint={setBroken}
        breakPoint="md"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#13678A",
          },
          [`.${sidebarClasses.root}`]: {},
          [`.${menuClasses.active}`]: {
            color: "#9AEBA3",
            fontWeight: "bold",
          },
        }}
      >
        <OpenClose onClick={() => handleCollapsedChange()} />
        <Menu closeOnClick={true} menuItemStyles={menuItemStyles}>
          {item.map((menuItem) => (
            <MenuItem
              onClick={() => handleActiveLink(menuItem.key)}
              active={menuItem.active}
              key={menuItem.key}
              icon={menuItem.icon}
              component={<Link to={menuItem.key} />}
            >
              {menuItem.name}
            </MenuItem>
          ))}
        </Menu>
      </StyledSidebar>
      {children}
    </SidebarWrapper>
  );
}

export default SidebarCom;
