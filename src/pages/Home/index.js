import React from 'react'
import Header from '../../components/Home/Header'
import Menu from '../../components/Home/Menu'
import Footer from '../../components/Home/Footer'
import Loader from '../../components/common/Loader'
import EmptyViewComponent from '../../components/common/EmptyListComponent'
import ResultList from '../../components/Home/ResultsList'
import MenuItemsList from '../../components/Home/MenuItems'


const Home = () => {
  return (<>
    {/* header */}
    <Header />

    {/* menu */}
    <Menu />


    {/* people also seacrh for */}
    <MenuItemsList />


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