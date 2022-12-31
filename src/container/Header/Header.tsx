import logo from 'assets/logo.png'
import * as React from 'react'
import './Header.scss'
import SettingsIcon from '@mui/icons-material/Settings'
import NotificationsIcon from '@mui/icons-material/Notifications'
import WalletIcon from '@mui/icons-material/Wallet'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import DashboardIcon from '@mui/icons-material/Dashboard'
import HelpIcon from '@mui/icons-material/Help'
import MessageIcon from '@mui/icons-material/Message'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Component, useState } from 'react'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'

type Props = {}

const Header = (props: Props) => {
    const [size, setSize] = useState<string>('sidebar')

    const changeSize = () => {
        setSize((prevState: string) => {
            if (prevState === 'sidebar open') {
                return 'sidebar'
            } else {
                return 'sidebar open'
            }
        })
    }

    return (
        <>
            <div className={size}>
                <div className="toggle">
                    <i className="bx" onClick={() => changeSize()}>
                        <NavigateNextIcon
                            className="vector"
                            fontSize="large"
                        ></NavigateNextIcon>
                    </i>
                </div>
                <div className="logo">
                    <img src={logo} alt="" />
                    <h3>Welcome to my Page</h3>
                </div>
                <nav>
                    <div className="nav-title">Management</div>
                    <ul>
                        <li className="nav-item active">
                            <i className="bx">
                                <DashboardIcon></DashboardIcon>
                            </i>
                            <span>Dashboard</span>
                        </li>
                        <li className="nav-item">
                            <i className="bx">
                                <AnalyticsIcon></AnalyticsIcon>
                            </i>
                            <span>Analitics</span>
                        </li>
                        <li className="nav-item">
                            <i className="bx">
                                <WalletIcon></WalletIcon>
                            </i>
                            <span>Wallet</span>
                        </li>
                        <li className="nav-item">
                            <i className="bx">
                                <NotificationsIcon></NotificationsIcon>
                            </i>
                            <span>Notifications</span>
                        </li>
                        <li className="nav-item">
                            <i className="bx">
                                <SettingsIcon></SettingsIcon>
                            </i>
                            <span>Settings</span>
                        </li>
                    </ul>
                    <hr />
                    <div className="nav-title">Supports</div>
                    <ul>
                        <li className="nav-item">
                            <i className="bx">
                                <HelpIcon></HelpIcon>
                            </i>
                            <span>Get Help</span>
                        </li>
                        <li className="nav-item">
                            <i className="bx">
                                <MessageIcon></MessageIcon>
                            </i>
                            <span>Send Feedback</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Header
