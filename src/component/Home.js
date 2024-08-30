import React from 'react'
import Carousel from './Carousel'
import Gallery from './Gallery'
import { useState } from 'react'
import Loader from './Loader';

export default function Home() {

  let [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 100);

  if (load) {
    return (
      <Loader />
    )
  }
  else {
    return (
      <>
        <Carousel />
        <Gallery />
      </>
    )
  }
}
