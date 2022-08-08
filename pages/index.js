import React from 'react'
import product from '../myshop/schemas/product'
import { client } from '../lib/client'
import { Product, HeroBanner, FooterBanner } from '../components'


const Home = ({products, bannerData}) => (
  <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />


    <div className="products-heading">
      <h2> Best selling product now</h2>
      <p> Animal feed mill plant</p>

    </div>
    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} /> )};
    </div>
    <div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
      
    </div>

  </>
)

export const getServerSideProps = async () => {
  const querry = `*[_type == "product"]`;
  const products = await client.fetch(querry);

  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}




export default Home