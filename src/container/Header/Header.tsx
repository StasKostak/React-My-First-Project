import bg from 'assets/bg.jpg'
import logo from 'assets/logo.png'
import './Header.scss'
import SettingsIcon from '@mui/icons-material/Settings'
import NotificationsIcon from '@mui/icons-material/Notifications'
import WalletIcon from '@mui/icons-material/Wallet'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import DashboardIcon from '@mui/icons-material/Dashboard'
import HelpIcon from '@mui/icons-material/Help'
import MessageIcon from '@mui/icons-material/Message'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

type Props = {}

const sidebar = document.querySelector('.sidebar')
const navItems = document.querySelector('nav .nav-item')
const toggle = document.querySelector('.toggle')

toggle?.addEventListener('click', () => {
    if (sidebar?.className === 'sidebar') sidebar?.classList.add('open')
    else sidebar?.classList.remove('open')
})

const Header = (props: Props) => {
    return (
        <>
            <div className="sidebar open">
                <div className="toggle">
                    <i className="bx">
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
