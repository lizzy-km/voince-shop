import HeaderM from './HeaderM'

const NavBarM = () => {
  return (
    <div className=' flex flex-col w-full bg-[#212121] ' >
        <div className=" w-[100%] h-[100%] flex justify-normal flex-col " >
        <div className=" text-[#d8c7af] py-1 flex w-full bg-[#38383880] justify-center items-center gap-2 " >
          <img src="/src/assets/Car.svg" alt=""/>  <p  className="  capitalize text-capitalize font-light text-[12px]  " >FREE SHIPPING FOR ORDERS OVER $50</p>
        </div>
        <HeaderM/>
      </div>
    </div>
  )
}

export default NavBarM
