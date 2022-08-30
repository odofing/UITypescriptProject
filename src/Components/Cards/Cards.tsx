import './Cards.css'
import { Link } from 'react-router-dom'

interface cardProps {
  d: {
    id: Number
    name: String
    title: String
    img: string
  }
}

const Cards = ({ d }: cardProps) => {
  const { name, title, img } = d
  return (
    <>
      <Link to={`/${d.id}`}>
        <div className='cards'>
          <div className='imgContainer'>
            <img src={img} alt='name' />
          </div>
          <div className='container'>
            <p className='p1'>{name}</p>
            <p className='p2'>{title}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Cards
