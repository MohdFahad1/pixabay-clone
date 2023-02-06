import React from 'react'
import { lottieNotFound } from '../LottieAnimations/lottieData'
import LottieAnimation from '../LottieAnimations'
const EmptyViewComponent = () => {
  return (
    <LottieAnimation file={ lottieNotFound } width='300px' height='300px'/>
  )
}

export default EmptyViewComponent