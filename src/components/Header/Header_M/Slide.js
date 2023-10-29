import { useEffect } from "react"

const Slide = () => {
    const slide = document.getElementById('slide')

    // useEffect(()=> {
    //     const slide = document.getElementById('slide')

    //     slide?.classList.add('left-[-150%]')
    //     slide?.classList.remove('left-0')
    // },[])

    const open = () => {
        const slide = document.getElementById('slide')

        slide?.classList.remove('left-[-150%]')
        slide?.classList.add('left-0')

    }
    const close = () => {
        const slide = document.getElementById('slide')

        slide?.classList.add('left-[-150%]')
        slide?.classList.remove('left-0')

    }

  return  {  
    open,
    close
}
  
}

export default Slide
