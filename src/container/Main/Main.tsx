import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import ArticlePage from 'pages/ArticlePage/ArticlePage'

type Props = {}
const Main = (props: Props) => {
    return (
        <main>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="catalog" element={<ArticlePage />} />
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
