import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import './App.scss'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <Header></Header>
            <Main></Main>
            <div className="background">
                <img src="/images/bg1.jpg" alt="" />
            </div>
        </>
    )
}
export default App
