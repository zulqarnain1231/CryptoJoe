import React, { useContext, useState } from "react";
import ThemeContext from "@/components/ThemeContext";
import Select from "react-select";
import Image from "next/image";
import Chart from "@/components/Chart";

const Trade = ({ data }) => {
  const context = useContext(ThemeContext);
  const { darkMode, setDarkMode } = context;
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const[chart,setChart]=useState(false)
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const handleFrom = (e) => {
    setFrom(e.value);
    setChart(false)
    setToValue('')
  };
  const handleTo = (e) => {
    setTo(e.value);
   setChart(false)
    setToValue('')
  };
  const handleFromValue = (e) => {
    setFromValue(e.target.value);
    setChart(true)
    final();
   
  };
  
  
  const filterdData=  data.filter((item)=> item.symbol == to);
   const chartData=filterdData[0];
   console.log(chartData)
  const url = `https://api.coinconvert.net/convert/${from}/${to}?amount=${fromValue}`;
  const final = async () => {
    const response = await fetch(url);
    const result = await response.json();
    const To = to.toUpperCase();
    const { [To]: conversion } = result;
    setToValue(conversion);
  };
  const options = [];
  {
    data.map((item) => {
      const object = {
        value: item.symbol,
        image: item.image,
        label: item.name,
      };
      options.push(object);
    });
  }

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: `${darkMode ? "#334155" : "#ECECFE"}`,
      borderRadius: "1.5rem",
      padding: "4px",
      fontWeight: "bold",
      color: `${darkMode ? "white" : "black"}`,
    }),
    option:(styles,{data}) =>{
      return {...styles,color:'black',fontWeight:'bold',backgrounColor:`${darkMode? '#334155':'#ECECFE'}`}
    },
  };

  return (
    <div className="w-full my-28 px-8 md:px-16 gap-4 md:gap-0 grid md:grid-cols-2 grid-cols-1">
      <div className="col-span-1 pt-10 px-6 pb-6 w-full text-center">
       {
        chart? <Chart data={chartData} /> :
        <p className="font-bold">No Currencies selected</p>
      } 
      </div>

      <div
        className={`col-span-1 p-6 flex flex-col text-slate-400  w-full ${
          darkMode ? "bg-slate-800 " : "bg-white"
        } rounded-3xl`}
      >
        <div className="w-full justify-between flex ">
          <div className="flex flex-col gap-2">
            <p className="font-bold">Swap</p>
            <input
              className={`${
                darkMode ? "bg-slate-800" : "bg-white"
              } hover:border-none border-none focus:outline-none focus:ring-0 text-2xl font-bold focus:border-none`}
              type="number"
              onChange={handleFromValue}
              placeholder="0.0"
            />
          </div>
          <Select
            placeholder="Select Token"
            onChange={handleFrom}
            options={options}
            styles={colorStyles}
            getOptionLabel={(e) => (
              <div className="flex text-center gap-2 ">
                <Image
                  className="h-5 w-5 "
                  src={e.image}
                  height="500"
                  width="500"
                />
                <span style={{ marginLeft: 5 }}>{e.label}</span>
              </div>
            )}
          />
        </div>
        <div className={`w-full border-b-2  my-6`}></div>
        <div className="w-full justify-between flex ">
          <div className="flex flex-col gap-2">
            <p className="font-bold">To</p>
            <input
              className={`${
                darkMode ? "bg-slate-800" : "bg-white"
              } hover:border-none border-none focus:outline-none focus:ring-0 text-2xl font-bold focus:border-none `}
              value={toValue}
              type="number"
              placeholder="0.0"
            />
          </div>
          <Select
            placeholder="Select Token"
            onChange={handleTo}
            options={options}
            styles={colorStyles}
            getOptionLabel={(e) => (
              <div className="flex text-center gap-2 ">
                <Image
                  className="h-5 w-5 "
                  src={e.image}
                  height="500"
                  width="500"
                />
                <span style={{ marginLeft: 5 }}>{e.label}</span>
              </div>
            )}
          />
        </div>
        <button className="w-full mb-3 mt-6 bg-indigo-400 hover:bg-indigo-500  font-semibold text-white rounded-2xl p-3">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Trade;
