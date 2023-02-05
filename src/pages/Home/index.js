import React from 'react'
import Header from '../../components/Home/Header'
import Menu from '../../components/Home/Menu'
import Footer from '../../components/Home/Footer'
import Loader from '../../components/common/Loader'
import EmptyViewComponent from '../../components/common/EmptyView'
import ResultList from '../../components/Home/ResultsList'


const Home = () => {
  return (<>
    {/* header */}
    <Header />

    {/* menu */}
    <Menu />

    {/* Loader */}
    <Loader />



    {/* ImageList */}
    <EmptyViewComponent />


    {/* result List */}
    <ResultList />


    {/* footer */}
    <Footer />
    </>
  )
}

export default Home