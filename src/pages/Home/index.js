import React, { useState } from 'react'
import Header from '../../components/Home/Header'
import Menu from '../../components/Home/Menu'
import Footer from '../../components/Home/Footer'
import Loader from '../../components/common/Loader'
import EmptyViewComponent from '../../components/common/EmptyListComponent'
import ResultList from '../../components/Home/ResultsList'
import MenuItemsList from '../../components/Home/MenuItems'
import axios from 'axios';
const Home = () => {

  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchResultsCount, setSearchResultsCount] = useState(21);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResult, setTotalResult] = useState();


  const searchResults = async (search) => {

    const API = `${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${search}&image_type=photo&per_page=${searchResultsCount}&safeSearch=true&per_page=${searchResultsCount}`; 
    setIsLoading(true);
    setLoading(true);
    setShowMenu(false);
    axios.get(API).then((res)=>{
      setImageList(res.data.hits);
      setTotalResult(res.data.totalHits);
      setLoading(false);
      setIsLoading(false);
    }).catch((err) => console.log(err));
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  searchResults(searchInput);
}

const handleHomeClick = () => {
  setSearchInput('');
  setImageList([]);
  setShowMenu(true);
}

const handleMenuItemClicked = (e) => {
  const searchFor = e.target.id;
  console.log(searchFor);
  setSearchInput(searchFor);
  searchResults(searchFor)
}


return (
  <>
    {/* header */}
    <Header handleHomeClick={handleHomeClick} />

    {/* menu */}
    <main>
      {showMenu && <Menu handleFormSubmit={handleFormSubmit} handleInputChange={e => setSearchInput(e.target.value)} searchInputValue={searchInput} />}


      {/* people also seacrh for */}
      {showMenu && <MenuItemsList handleMenuItemClicked={handleMenuItemClicked} />}


      {/* Loader */}
      {loading && <Loader />}



      {/* Empty List View */}
      {!showMenu && !loading && !imageList.length ? (<EmptyViewComponent />) : null}


      {/* result List */}
      {!showMenu && !loading && imageList.length  ? (totalResult && <ResultList images={imageList} searchInputValue={searchInput} searchResultsCount={searchResultsCount} setSearchResultsCount={setSearchResultsCount} isLoading={isLoading} totalResult={totalResult}/>) : null}
    </main>


    {/* footer */}
    <Footer />
  </>
)
}

export default Home