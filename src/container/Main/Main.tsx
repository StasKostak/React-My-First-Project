import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Swiper from 'components/Swiper/Swiper'
import Home from 'pages/Home/Home'

type Props = {}
const Main = (props: Props) => {
    return (
        <main>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="slaider" element={<Swiper />} />
                    <Route path="about" />
                    <Route path="payment" />
                    <Route path="shipping" />
                    <Route path="help" />
                    <Route path="feedback" />
                </Routes>
            </Container>
        </main>
    )
}
export default Main
