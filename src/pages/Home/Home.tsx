import Intro from 'components/Intro/Intro'
import Slider from 'components/Slider/Slider'
import './Home.scss'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Slider />
            <Intro />
        </>
    )
}
export default Home
