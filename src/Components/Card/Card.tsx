import data from '../data'
import ImgLogo from '../Img/logo.jpeg'
import './Card.css'
import { useParams } from 'react-router-dom'

interface Item {
  name: string
  title: string
  img: string
  desc: string
}

const Card = () => {
  const { id } = useParams()
  const item = data.find((item) => item.id === Number(id))
  const { name, title, img, desc }: Item = item!

  return (
    <>
      <div className='main'>
        <div className='logo'>
          <img src={ImgLogo} alt='name' />
          <h1>LiveLink</h1>
        </div>
        <div className='card'>
          <div className='imgContainer'>
            <img src={img} alt='name' />
          </div>
          <div className='container'>
            <div className='innerContainer'>
              <p className='p1'>{name}</p>
              <p className='p2'>{title}</p>
            </div>
            <div className='outerContainer'>
              <p className='p3'>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
