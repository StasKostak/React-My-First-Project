import './Slaider.scss'
import wallpaper1 from 'assets/wallpaper1.jpg'
import wallpaper2 from 'assets/wallpaper2.png'
import wallpaper3 from 'assets/wallpaper3.png'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

type Props = {}
const Slaider = (props: Props) => {
    return (
        <>
            <div className="container">
                <div className="slider">
                    <img className="slider-item" src={wallpaper1} />
                    <img className="slider-item" src={wallpaper2} />
                    <img className="slider-item" src={wallpaper3} />
                </div>
                <div className="slaider-contols">
                    <span>
                        <ChevronLeftIcon />
                    </span>
                    <span>
                        <ChevronRightIcon />
                    </span>
                </div>
            </div>
        </>
    )
}
export default Slaider
