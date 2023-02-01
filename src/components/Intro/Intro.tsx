import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'
import authorsArray from 'components/Articles/authorsArray'
import articlesArray from 'components/Articles/articlesArray'
import './Intro.scss'

type Props = {}

type AuthorsProps = {
    id: number
    name: string
    content: string
    image: string
    category?: string
}

type ArticlesProps = {
    id: number
    title: string
    author: string
    content: string
    date: string
    image: string
    category?: string
}

const Intro = (props: Props) => {
    return (
        <>
            <div className="main-intro">
                <div className="articles-intro">
                    {articlesArray.map(
                        ({
                            title,
                            author,
                            content,
                            date,
                            image,
                        }: ArticlesProps) => (
                            <div className="artticle-container">
                                <img src={image} alt="" />
                                <div className="artticle-content">
                                    <p className="artticle-title">{title}</p>
                                    <p className="artticle-content">
                                        {content}
                                    </p>
                                    <div className="artticle-info">
                                        <p className="artticle-date">{date}</p>
                                        <p className="artticle-author">
                                            {author}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
                <div className="authors-intro">
                    {authorsArray.map(
                        ({ name, content, image }: AuthorsProps) => (
                            <div className="card-author">
                                <img src={image} alt="" />
                                <p className="author-name">{name}</p>
                                <p className="author-content">{content}</p>
                                <div className="author-contact">
                                    <button>
                                        <TelegramIcon />
                                    </button>
                                    <button>
                                        <InstagramIcon />
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
}
export default Intro
