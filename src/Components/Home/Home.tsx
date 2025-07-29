import homeimg from '../../assets/f3f77ec6-9671-4cc5-b440-40ac5fee-removebg-preview.png'

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between
    items-start p-10 md:p-20">
        <div className="md:w-2/4 md:pt-10">
    <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
        Hi, I am Priyankar
    </h1>
    <p className="text-sm md:text-2xl tracking-tight">
        I'm a 3rd year bachelor student in CSE studying in Sikkim Manipal Institute of Technology.
    </p>
    
        </div>
        <div><img className="" src={homeimg} alt=""/></div>
    </div>
  )
}

export default Home