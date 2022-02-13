import Head from "next/head";
import Image from "next/image";
import Tabs, { TabPane } from 'rc-tabs';
import Fade from 'react-reveal'
import Link from "next/link";
import RepoList from "../components/RepoList";
import Favorites from '../components/Favorites'



function Home() {
  
const hoverStyle =  {
  cursor: "pointer",
};

var callback = function(key) {};

  

  

  return (
    <div className="relative z-0 backdrop-opacity-95 w-full h-96 bg-cover ">
      <Head>
        <title>Best Github repo's </title>
        <meta name="description" content="Generated by shar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  

<Image
src="/images/background/bgimgone.jpg"
className="object-cover"
layout="fill"

/>

    
  <div className="absolute z-50 inset-0 text-2xl font-bold text-white" style={hoverStyle} >
  <Fade top>
  <h1 className="text-9xl text-white font-bold text-center mt-20 mb-20">Github's Finest</h1>
  </Fade>
  <Tabs defaultActiveKey="2" onChange={callback} >
    <TabPane tab="Repo List" key="1"><RepoList/></TabPane>
    <TabPane tab="My favorites" key="2"><Favorites/></TabPane>
    </Tabs>
  
       
      </div>
      </div>
    
    
  );
}


export default Home;
