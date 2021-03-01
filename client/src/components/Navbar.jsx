import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { setUser } from '../redux/slices/user';

export const Navbar = ({user}) => {

    const [activeItem, setActiveItem] = useState("home");
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    
    useEffect(() => {
      const updatedPath = location.pathname.split("/")[1];
      setLocation(updatedPath);
    }, [activeItem])

    const setLocation = (pathname) => {
      pathname === "" ? setActiveItem("home") : setActiveItem(pathname);
    }

    const handleItemClick = (e, {name}) => {
      setActiveItem(name);
      switch (name) {
        case "profile":
          history.push(`/${name}/${user.displayName}`);
          break;
        case "home":
          history.push("/");
          break;
        case "logout":
          localStorage.removeItem("token");
          dispatch(
            setUser({
              username: null,
              displayName: null,
              token: null,
              img: null,
            })
          );
        default:
          break;
      }
    };

    return (
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={(e, info) => handleItemClick(e, info)}
          />
          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            onClick={(e, info) => handleItemClick(e, info)}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={(e, info) => handleItemClick(e, info)}
            />
          </Menu.Menu>
        </Menu>
    );
}
