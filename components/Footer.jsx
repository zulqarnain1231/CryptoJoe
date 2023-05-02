import React from 'react'
import { BsBookmarkDashFill } from 'react-icons/bs'
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa'
const Footer = ({ isdark }) => {
  return (
    <div className={`px-4  md:gap-4 py-4 grid grid-cols-1 md:grid-cols-3 ${isdark ? 'bg-[#1F202E] text-white' : 'bg-white'} `}>
      <div className='col-span-1 flex flex-col md:mr-6 gap-6'>
        <h1 className='font-bold'>Need Help?</h1>
        <p> Visit <span className='text-[#FF8F4D] cursor-pointer font-semibold hover:underline'>our support centre </span>for troubleshooting</p>
        <p>Join <span className='text-[#FF8F4D] cursor-pointer font-semibold hover:underline'>our official Discord</span>  for dedicated support</p>
        <div className='flex items-center gap-12'>
          <button className='text-white bg-[#FF8F4D] rounded-full p-3 hover:bg-orange-500 '>
            <FaDiscord size={20} />
          </button>

          <button className='text-white bg-[#FF8F4D] rounded-full p-3 hover:bg-orange-500 '>
            <FaTwitter size={20} />
          </button>

          <button className='text-white bg-[#FF8F4D] rounded-full p-3 hover:bg-orange-500 '>
            <FaGithub size={20} />
          </button>

          <button className='text-white bg-[#FF8F4D] rounded-full p-3 hover:bg-orange-500 '>
            <BsBookmarkDashFill size={20} />
          </button>

        </div>
        <div className='flex items-center gap-6'>
          <p className='text-[#FF8F4D] font-semibold cursor-pointer hover:underline'>Security</p>
          <p className='text-[#FF8F4D] font-semibold cursor-pointer hover:underline'>Developers</p>
          <p className='text-[#FF8F4D] font-semibold cursor-pointer hover:underline'>Privacy</p>
          <p className='text-[#FF8F4D] font-semibold cursor-pointer hover:underline'>Services</p>
        </div>

      </div>
      <div className='col-span-1 mt-6 md:mt-0 md:col-span-2'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold '>DONK COIN Token</h1>
            <a className='font-semibold hover:underline hover:text-[#FF8F4D]' href=''>Coingecko</a>
            <a className='font-semibold hover:underline hover:text-[#FF8F4D]' href=''>CoinMarketCap</a>
            <p className='font-semibold mt-8'>Analytics</p>
            <a className='font-semibold hover:underline hover:text-[#FF8F4D]' href=''>Token Terminal</a>
            <a className='font-semibold hover:underline hover:text-[#FF8F4D]' href=''>DefiLiama</a>
            <a className='font-semibold hover:underline hover:text-[#FF8F4D]' href=''>GeckoTerminal</a>

          </div>
          <div className='flex flex-col gap-4'>

            <p className='font-bold'>Exchanges</p>
            <a className='font-semibold hover:underline hover:text-[#FF8F4D]' href="">Binance</a>
            <a className='font-semibold hover:underline hover:text-[#FF8F4D]' href="">Crypto.com</a>
            <a className='font-semibold hover:underline hover:text-[#FF8F4D]' href="">Gate.io</a>
            <a className='font-semibold hover:underline hover:text-[#FF8F4D]' href="">MEXC</a>
            <a className='font-semibold hover:underline hover:text-[#FF8F4D]' href="">OKX</a>

          </div>

          <div className='flex flex-col gap-4'>

            <p className='font-bold'>Bussiness</p>
            <a className='font-semibold hover:underline hover:text-[#FF8F4D]' href="">Apply For PartnerShip</a>
            <a className='font-semibold hover:underline hover:text-[#FF8F4D]' href="">Token Listing</a>
            <a className='font-semibold hover:underline hover:text-[#FF8F4D]' href="">NFT Listing</a>
            <a className='font-semibold hover:underline hover:text-[#FF8F4D]' href="">Contact Us</a>

          </div>

        </div>


      </div>

    </div>
  )
}

export default Footer