import './Home.css'
import data from '../data'
import Cards from '../Cards/Cards'
import ImgLogo from '../Img/logo.jpeg'

const Home = () => {
  return (
    <>
      <div className='main'>
        <div className='logo'>
          <img src={ImgLogo} alt='name' />
          <h1>LiveLink</h1>
        </div>
        {data.map((d, index) => (
          <div key={index}>
            <Cards key={index} d={d} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
