import './index.scss'
import { Link, } from 'react-router-dom'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import React, { useState } from 'react'
import {SidebarData} from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'

const Nav = styled.div`
    background: #2D3546;;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

`
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const SidebarNav = styled.nav `
    background: #2D3546;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`

const SidebarWrap = styled.div`
    width: 100%;
`

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar}/>
                    <h1 class="title">AP Study Resources</h1>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#">
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar
