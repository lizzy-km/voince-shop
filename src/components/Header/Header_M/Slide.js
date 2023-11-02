import { useEffect } from "react"

const Slide = () => {

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

    const openSearch = () => {
        const searchBox = document.getElementById('searchBox')
        searchBox.classList.remove('right-[-130%]')
        searchBox.classList.add('right-0')
    }

    const closeSearch = () => {
        const searchBox = document.getElementById('searchBox')
        searchBox.classList.remove('right-0')
        searchBox.classList.add('right-[-130%]')
    }

  return  {  
    open,
    close,
    openSearch,
    closeSearch
}
  
}

export default Slide
