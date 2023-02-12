import React, { useState } from 'react'
import Header from '../../components/Home/Header'
import Menu from '../../components/Home/Menu'
import Footer from '../../components/Home/Footer'
import Loader from '../../components/common/Loader'
import EmptyViewComponent from '../../components/common/EmptyListComponent'
import ResultList from '../../components/Home/ResultsList'
import MenuItemsList from '../../components/Home/MenuItems'
import { pixabayAPI } from '../../config/data'
import axios from 'axios';
const Home = () => {

  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResultsCount, setSearchResultsCount] = useState(20);
  const [imageList, setImageList] = useState([]);
  // const [addImages, setAddImages] = useState([]);


  const searchResults = async (search) => {

    const API = `${pixabayAPI.url}?key=${pixabayAPI.key}&q=${search}&image_type=photo&per_page=${searchResultsCount}&safeSearch=true`; 

    setLoading(true);
    setShowMenu(false);
    axios.get(API).then((res)=>{
      setImageList(res.data.hits);
      console.log(res.data.hits);
      console.log(imageList);
      setLoading(false);
    }).catch((err) => console.log(err));


    // axios.get(API)
    // .then((response) => {
    //   // setImageList(response.data.hits);
    //   setAddImages(response.data.hits);
    //   console.log(response.data.hits);
    //   console.log("My Images", addImages)
    //   setLoading(false);
    // })
    // .catch(error => console.log(`Error: ${error}`));


    // const response = await fetch(`${pixabayAPI.url}?key=${pixabayAPI.key}&q=${search}&image_type=photo&per_page=${searchResultsCount}&safeSearch=true`);
    // const data = await response.json();
    // console.log(data?.hits);
    // setImageList(data?.hits);
    // console.log(imageList)
    // setLoading(false);
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  searchResults(searchInput);
}

const handleHomeClick = () => {
  setSearchInput('');
  setImageList([]);
  // setAddImages([]);
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



      {/* ImageList */}
      {!showMenu && !loading && !imageList.length ? (<EmptyViewComponent />) : null}


      {/* result List */}
      {!showMenu && !loading && imageList.length ? (<ResultList images={imageList} />) : null}
    </main>


    {/* footer */}
    <Footer />
  </>
)
}

export default Home