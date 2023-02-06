import React from 'react'
import LottieAnimation from '../LottieAnimations'
import { lottieLoader } from '../LottieAnimations/lottieData'
const Loader = () => {
  return (
    <LottieAnimation file={lottieLoader} width='300px' height='300px'/>
  )
}

export default Loader