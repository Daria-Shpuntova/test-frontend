// src/components/Sidebar.jsx
import { useState } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

// Styled components
const SidebarContainer = styled.div`
    width: 250px;
    transition: width 0.3s ease;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

    &.opened {
        width: 250px;
    }

    &.closed {
        width: 80px;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    cursor: pointer;
    
    img {
        width: 30px;
        margin-right: 8px;
    }

    span {
        font-weight: bold;
        color: ${({ theme }) => theme.logoColor};
        transition: color 0.3s ease;
    }
`;

const NavItem = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
        background: ${({ theme }) => theme.hoverBackground};
        color: ${({ theme }) => theme.textHover};
    }

    &:active {
        background: ${({ theme }) => theme.activeBackground};
        color: ${({ theme }) => theme.textActive};
        
    }

    svg {
        margin-right: 8px;
    }
`;

const Sidebar = (props) => {
    const { color } = props;
    const [isOpened, setIsOpened] = useState(true);

    const theme = color === 'dark' ? {
        background: 'var(--color-sidebar-background-dark-default)',
        hoverBackground: 'var(--color-sidebar-background-dark-hover)',
        activeBackground: 'var(--color-sidebar-background-dark-active)',
        text: 'var(--color-text-dark-default)',
        textHover: 'var(--color-text-dark-hover)',
        textActive: 'var(--color-text-dark-active)',
        logoColor: 'var(--color-text-logo-dark-default)',
        buttonBackground:'var(--color-button-background-dark-default)',
        buttonBackgroundActive:'var(--color-button-background-dark-active)'
    } : {
        background: 'var(--color-sidebar-background-light-default)',
        hoverBackground: 'var(--color-sidebar-background-light-hover)',
        activeBackground: 'var(--color-sidebar-background-light-active)',
        text: 'var(--color-text-light-default)',
        textHover: 'var(--color-text-light-hover)',
        textActive: 'var(--color-text-light-active)',
        logoColor: 'var(--color-text-logo-light-default)',
        buttonBackground:'var(--color-button-background-light-default)',
        buttonBackgroundActive:'var(--color-button-background-light-active)'
    };

    const toggleSidebar = () => {
        setIsOpened(prev => !prev);
    };

    return (
        <SidebarContainer className={classnames({ opened: isOpened, closed: !isOpened })} theme={theme}>
            <LogoContainer onClick={toggleSidebar}>
                <img src={logo} alt="Logo" />
                {isOpened && <span>TensorFlow</span>}

                <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
            </LogoContainer>
            <div>
                {routes.map(route => (
                    <NavItem key={route.title} theme={theme} onClick={() => console.log(`going to "${route.path}"`)}>
                        <FontAwesomeIcon icon={route.icon} />
                        {isOpened && <span>{route.title}</span>}
                    </NavItem>
                ))}
            </div>
            <div>
                {bottomRoutes.map(route => (
                    <NavItem key={route.title} theme={theme} onClick={() => console.log(`going to "${route.path}"`)}>
                        <FontAwesomeIcon icon={route.icon} />
                        {isOpened && <span>{route.title}</span>}
                    </NavItem>
                ))}
            </div>
        </SidebarContainer>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
