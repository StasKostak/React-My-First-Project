import logo from 'assets/logo.png'
import './Header.scss'
import SettingsIcon from '@mui/icons-material/Settings'
import NotificationsIcon from '@mui/icons-material/Notifications'
import WalletIcon from '@mui/icons-material/Wallet'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'
import HomeIcon from '@mui/icons-material/Home'
import HelpIcon from '@mui/icons-material/Help'
import MessageIcon from '@mui/icons-material/Message'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useState } from 'react'
import MenuItem from 'components/Menu/MenuItem'

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

    const [active, setActive] = useState<string>('nav-item')

    const changeActive = () => {
        setActive((prevState: string) => {
            if (prevState === 'nav-item active') {
                return 'nav-item'
            }
            if (prevState === 'nav-item') {
                return 'nav-item active'
            } else {
                return 'nav-item active'
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

                    <MenuItem to="/">
                        <HomeIcon></HomeIcon>
                        <span>Home</span>
                    </MenuItem>

                    <MenuItem to="slaider">
                        <AutoAwesomeMosaicIcon></AutoAwesomeMosaicIcon>
                        <span>Catalog</span>
                    </MenuItem>

                    <MenuItem to="about">
                        <WalletIcon></WalletIcon>
                        <span>Wallet</span>
                    </MenuItem>

                    <MenuItem to="payment">
                        <NotificationsIcon></NotificationsIcon>
                        <span>Notifications</span>
                    </MenuItem>

                    <MenuItem to="shipping">
                        <SettingsIcon></SettingsIcon>
                        <span>Settings</span>
                    </MenuItem>

                    <hr />
                    <div className="nav-title">Supports</div>

                    <MenuItem to="help">
                        <HelpIcon></HelpIcon>
                        <span>Get Help</span>
                    </MenuItem>

                    <MenuItem to="feedback">
                        <MessageIcon></MessageIcon>
                        <span>Send Feedback</span>
                    </MenuItem>
                </nav>
            </div>
        </>
    )
}
export default Header
