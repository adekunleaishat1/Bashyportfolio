import React ,{useEffect}from "react";
import tableau from "./Images/WhatsApp Image 2024-12-05 at 20.14.31_9aafe0a6.jpg";
import powerbi from "./Images/WhatsApp Image powerbi.jpg"
import python from "./Images/WhatsApp Image python.jpg"
import excel from "./Images/WhatsApp Image 2024-12-05  excel.jpg"
import sql from "./Images/sql.png"
import powerbimg from "./Images/WhatsApp_Image_powerbi-removebg-preview.png"
import excelimg from "./Images/excelimg.png"
import pythonimg from "./Images/WhatsApp_Image_python-removebg-preview.png"
import mavenmarket from "./Images/WhatsApp Image 2024-12-09  Maven market.jpg"
import superstore from "./Images/WhatsApp Image 2024-12-09  Super Store.jpg"
import callcenter from "./Images/WhatsApp Image 2024-12-09 Call center.jpg"
import museum from "./Images/WhatsApp Image 2024-12-09  Museum data.jpg"
import salary from "./Images/WhatsApp Image 2024-12-14  salary.jpg"
import { BsTwitterX } from "react-icons/bs";
import { FaGithub ,FaLinkedinIn} from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

import Carousel from "./Carousel";
import Aos from "aos";
import "aos/dist/aos.css"
import { ReactTyped } from "react-typed";


const LandingPgae = () => {
    let images = [
        powerbimg,
        tableau,
        excelimg,
        sql,
        pythonimg,
        powerbimg,
        tableau,
        excelimg,
        sql,
        pythonimg
    ]
        
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <div>
      <div className="w-full h-[800px] bg-land flex justify-center items-center relative">
     {/* <div className="absolute top-0">
     <Navbar/>
     </div> */}
        <div data-aos="fade-up" data-aos-duration="1000" className=" mx-auto text-center ">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-l from-[#c084fc] to-[#db2777] text-[50px] md:text-[70px] font-bold ">Hello, I'm</h1>
          <h1 className="text-[#fff] text-[30px] md:text-[50px] lg:text-[70px] font-bold uppercase">
          <ReactTyped 
          className=" text-white text-[30px]   md:text-[50px] lg:text-[70px] font-bold uppercase"
      strings={[
        "Basirat Boyejo",
        "Data Analyst",
      ]}
      typeSpeed={40}
      backSpeed={100}
      loop>
    </ReactTyped>
            
            <br />
            Portfolio
          </h1>
          <p className="text-white text-[20px] md:text-[30px] mt-5">
            Data Analyst well versed in SQL, Python, Tableau, Power BI, Excel
          </p>
        </div>
        <div className="absolute right-1/2 transform translate-x-1/2 bottom-16  rounded-t-md w-full px-6 md:px-0 ">
        <Carousel images={images}/>
        </div>
      </div>
      <div id="skills"  className=" bg-[#121212] py-10 px-12">
        <div className=" h-full max-w-[1200px] mx-auto">
            <h2 className="text-white mt-4 text-[40px] font-semibold">My Skills</h2>
            <aside className="rounded-md h-[4px] bg-gradient-to-l from-[#c084fc] to-[#db2777]  w-[200px]"></aside>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:px-6 md:px-12 lg:px-0 mt-10 ">
              <div className="bg-[#1e1e1f] border-[#383838] border-2 px-10 py-10 rounded-xl">
                <img
                  className="w-[80px] h-auto max-w-[100%]"
                  src={powerbi}
                  alt=""
                />
                <div className="mt-4">
                  <h3 className="text-[#fff] text-xl font-bold ">Power Bi</h3>
                  <ul className="text-[#fff] text-xs mt-3 list-disc">
                    <li className="p-1">  As a skilled data analyst, I'm proficient in creating robust
                    data models, cleaning and transforming raw data, and
                    leveraging DAX to perform complex calculations.This ensures
                    data accuracy and reliability for insightful analysis.</li>
                    <li className="p-1"> I
                    excel at crafting engaging and interactive dashboards that
                    bring data to life. By leveraging Power BI's capabilities, I
                    design visually appealing visualizations and implement
                    interactive features to enable deep data exploration and
                    insightful storytelling.</li>
                    <li className="p-1">I am skilled in analyzing data to
                    uncover valuable insights, identify key performance
                    indicators (KPIs), and provide actionable recommendations to
                    drive business decisions.</li>
                  </ul>

                </div>
              </div>
              <div className="bg-[#1e1e1f] border-[#383838] border-2 px-10 py-10 rounded-xl">
                <img
                  className="w-[80px] h-auto max-w-[100%]"
                  src={excel}
                  alt=""
                />
                <div className="mt-4">
                  <h3 className="text-[#fff] text-xl font-bold ">Excel</h3>
                  <ul className="text-[#fff] text-xs mt-3  list-disc">
                    <li className="p-1">   As a skilled data analyst, I leverage Excel's powerful tools to extract meaningful insights.</li>
                    <li className="p-1"> I proficiently use pivot tables and charts to summarize and visualize data, apply advanced formulas
                       like VLOOKUP and INDEX-MATCH for complex calculations, 
                      and employ data validation and formatting techniques to ensure data accuracy and consistency.</li>
                    <li className="p-1">I create visually appealing and informative charts and dashboards. By leveraging Excel's charting capabilities,
                    I can effectively communicate data insights through various chart types, including line charts, bar charts, and pie charts.</li>
                    <li className="p-1">
                    I also employ advanced formatting techniques to enhance the visual appeal of these visualizations.
                    </li>
                    <li className="p-1">I excel at cleaning and preparing raw data for analysis. 
                      This involves identifying and handling missing values, outliers, and inconsistencies. By formatting and standardizing data,
                       I ensure its accuracy and reliability for further analysis.</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#1e1e1f] border-[#383838] border-2 px-10 py-10 rounded-xl">
                <img
                  className="w-[80px] h-auto max-w-[100%]"
                  src={powerbi}
                  alt=""
                />
                <div className="mt-4">
                  <h3 className="text-[#fff] text-xl font-bold ">SQL </h3>
                  <ul className="text-[#fff] text-xs mt-3  list-disc">
                    <li className="p-1">   Skilled in writing complex SQL queries to extract, transform, and analyze data efficiently.</li>
                    <li className="p-1"> Experienced in designing efficient database schemas and implementing indexing strategies to optimize query performance.</li>
                    <li className="p-1">Proficient in cleaning and transforming raw data to ensure data quality and consistency.</li>
                    <li className="p-1">Skilled in integrating data from multiple sources to create a unified view.</li>
                  </ul> 
                </div>
              </div>
              <div className="bg-[#1e1e1f] border-[#383838] border-2 px-10 py-10 rounded-xl">
                <img
                  className="w-[80px] h-auto max-w-[100%]"
                  src={tableau}
                  alt=""
                />
                <div className="mt-4">
                  <h3 className="text-[#fff] text-xl font-bold ">Tableau</h3>
                  <ul className="text-[#fff] text-xs mt-3  list-disc">
                    <li className="p-1">  I leverage the power of Tableau to create dynamic and interactive dashboards that drive informed decision-making.</li>
                    <li className="p-1"> I am experienced in:
                    Creating compelling visualizations that effectively communicate complex data insights.</li>
                    <li className="p-1"> Utilizing advanced Tableau features like calculated fields, parameters, and LOD expressions to perform in-depth analysis.
                    interactive dashboards that enable users to explore data at different levels of detail.</li>
                  </ul> 
                </div>
              </div>
              <div className="bg-[#1e1e1f] border-[#383838] border-2 px-10 py-10 rounded-xl">
                <img
                  className="w-[80px] h-auto max-w-[100%]"
                  src={python}
                  alt=""
                />
                <div className="mt-4">
                  <h3 className="text-[#fff] text-xl font-bold ">Python</h3>
                  <ul className="text-[#fff] text-xs mt-3  list-disc">
                    <li className="p-1">  Proficient in cleaning and transforming raw data, handling missing values, outliers, and inconsistencies..</li>
                    <li className="p-1">Skilled in conducting in-depth EDA to understand data distributions, identify outliers, and uncover hidden patterns.</li>
                    <li className="p-1"> Experienced in creating informative and visually appealing data visualizations using libraries like Matplotlib and Seaborn.</li>
                    <li className="p-1">  Effectively communicating data insights through clear and concise narratives.</li>
                    <li className="p-1"> Applying statistical techniques to analyze data and draw meaningful conclusions.</li>
                  </ul> 
                </div>
              </div>
              
            </div>
        </div>
      </div>
      <div id="project" className="py-10 px-12 bg-[#121212] ">
         <div className="mx-auto max-w-[1400px] h-auto">
            <h2 className="text-white mt-4 text-[40px] font-semibold">My Projects</h2>
            <aside className="rounded-xl h-[4px] bg-gradient-to-l from-[#c084fc] to-[#db2777]  w-[200px]"></aside>
              <div className="mt-6 py-4  mx-auto max-w-[1300px] px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="w-full px-0  md:px-3 py-4 ">
                  <div className="w-auto md:w-[500px] h-[300px]">
                  <img className="w-full h-full" src={mavenmarket} alt="" />
                  </div>
                  <div className="mt-3 ">
                    <h1 className="text-xl font-bold text-[#fff]"> Maven Market Dashboard</h1>
                    <p className="text-[16px] text-[#fff] mt-3">Insights into Sales, Orders, and Customer Performance
                    This interactive dashboard provides decision-makers with a comprehensive overview of Maven Market's key
                    performance metrics and trends. It offers a detailed yet intuitive visualization of revenue, profit,
                    transactions, and returns, segmented by product categories, customer demographics, and regions.</p>
                 <div className="relative w-[180px] h-[40px] px-1 py-1 rounded-md bg-gradient-to-l mt-4 from-[#c084fc] to-[#db2777]">
                  <a
                    className=" w-full h-full bg-black text-white rounded-md text-center flex justify-center items-center"
                    href="https://app.powerbi.com/view?r=eyJrIjoiYWU5NjE2MjAtMGJhZS00NzczLTk0YzctNTU2MGNkZDdmMmE1IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9 "
                     target="_blank"
                  >
                    View Project
                  </a>
                </div>
                  </div>
                </div>
                <div className="w-full px-0   md:px-3 py-4 rounded-md">
                  <div className="w-auto md:w-[500px] h-[300px]">
                  <img className="w-full h-full" src={superstore} alt="" />
                  </div>
                  <div className="mt-3 ">
                    <h1 className="text-xl font-bold text-[#fff]">Superstore Dashboard</h1>
                    <p className="text-[16px] text-[#fff] mt-3">Comprehensive Insights into Sales and Profit Performance
                    This interactive dashboard provides decision-makers with a detailed analysis of the Superstore’s operations, focusing on sales performance, profitability, and key business drivers. 
                    It combines high-level metrics with granular insights to enable data-driven strategies for growth and optimization.</p>
                 <div className="relative w-[180px] h-[40px] px-1 py-1 rounded-md bg-gradient-to-l mt-4 from-[#c084fc] to-[#db2777]">
                  <a
                    className=" w-full h-full bg-black text-white rounded-md text-center flex justify-center items-center "
                    href="https://app.powerbi.com/view?r=eyJrIjoiY2MyY2ZjM2UtZjg5OS00ZDM4LThmMGMtN2FkYjcyOWNhMDk2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
                     target="_blank"
                  >
                    View Project
                  </a>
                </div>
                  </div>
                </div>
                <div className="w-full px-0  md:px-3 py-4 mt-3">
                  <div className="w-auto md:w-[500px]  h-[300px]">
                  <img className="w-full h-full" src={callcenter} alt="" />
                  </div>
                  <div className="mt-3 ">
                    <h1 className="text-xl font-bold text-[#fff]">Call Center Performance Dashboard</h1>
                    <p className="text-[16px] text-[#fff] mt-3">
                    This dashboard provides a comprehensive overview of key call center metrics, including call volume, resolution rates, 
                    agent performance, and customer satisfaction. It empowers decision-makers to identify trends, optimize operations, 
                    and improve overall customer experience.</p>
                 <div className="relative w-[180px] h-[40px] px-1 py-1 rounded-md bg-gradient-to-l mt-4 from-[#c084fc] to-[#db2777]">
                  <a
                    className=" w-full h-full bg-black text-white rounded-md flex justify-center items-center "
                    href="https://app.powerbi.com/view?r=eyJrIjoiNzBlNjZjYmMtYTdiNy00YzI4LWI5YWYtNjk4YmY5Y2UwZjg5IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
                     target="_blank"
                  >
                    View Project
                  </a>
                </div>
                  </div>
                </div>
                <div className="w-full px-0  md:px-3 py-4 rounded-md mt-3">
                  <div className="w-auto md:w-[500px] h-[300px]">
                  <img className="w-full h-full" src={museum} alt="" />
                  </div>
                  <div className="mt-3 ">
                    <h1 className="text-xl font-bold text-[#fff]">Museum Data set</h1>
                    <p className="text-[16px] text-[#fff] mt-3">
                    This project analyzes the Mesum dataset to uncover meaningful insights about museums,
                     artists, paintings, and their attributes. Using SQL queries, we answer critical questions related to museum operations,
                      artwork pricing, artist popularity, and more.</p>
                 <div className="relative w-[180px] h-[40px] px-1 py-1 rounded-md bg-gradient-to-l mt-4 from-[#c084fc] to-[#db2777]">
                  <a
                    className=" w-full h-full bg-black text-white rounded-md  flex justify-center items-center "
                    href="https://github.com/Timileyin1298/portfolio_projects/blob/main/museum%20sql.sql "
                     target="_blank"
                  >
                    View Project
                  </a>
                </div>
                  </div>
                </div>
                <div className="w-full px-0  md:px-3 py-4 rounded-md mt-3">
                  <div className="w-auto md:w-[500px] h-[300px]">
                  <img className="w-full h-full" src={salary} alt="" />
                  </div>
                  <div className="mt-3 ">
                    <h1 className="text-xl font-bold text-[#fff]"> Employee Salary Analysis</h1>
                    <p className="text-[16px] text-[#fff] mt-3">
                    This project delves into the analysis of employee salary data. Leveraging Python's powerful data science libraries, NumPy, Pandas, and Matplotlib,
                     we explored the dataset to uncover insights into salary distribution, departmental variations, and correlations with other factors.
                              </p>
                 <div className="relative w-[180px] h-[40px] px-1 py-1 rounded-md bg-gradient-to-l mt-4 from-[#c084fc] to-[#db2777]">
                  <a
                    className=" w-full h-full bg-black text-white rounded-md  flex justify-center items-center "
                    href="https://github.com/Timileyin1298/portfolio_projects/blob/main/Employee%20salary.ipynb"
                     target="_blank"
                  >
                    View Project
                  </a>
                </div>
                  </div>
                </div>
              </div>
         </div>
      </div>
      {/* <div id="about" className="py-10 px-12 bg-[#000] ">
          <div className="mx-auto max-w-[1400px] h-auto">
          <h2 className="text-white mt-4 text-[40px] font-semibold">About Me</h2>
          <aside className="rounded-md h-[4px] bg-gradient-to-l from-[#c084fc] to-[#db2777]  w-[200px]"></aside>
          <div className="grid grid-cols-2 gap-4 items-center mt-7">
            <div>
               <img src={superstore} alt="" />
            </div>
            <div>
               <h1 className="text-white font-normal ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate odio nemo assumenda aperiam rem placeat pariatur
                 doloribus eligendi fugiat consectetur ducimus, mollitia animi harum optio accusantium quam et, 
                rerum delectus natus ea ipsam, enim magni. Sapiente doloribus error officia illo!
               </h1>
            </div>
          </div>
          </div>
      </div> */}
      <div className="bg-[#000] py-10 px-4" id="footer">
        <div className="w-full md:w-[50%] mx-auto py-4"> 
        <h1 className="text-center text-white font-semibold text-[32px]">Let's work together</h1>
        <p className="text-center text-[#FFFFFF80] text-[16px] font-medium leading-5 mb-3">I'd love to learn more about your project and how I can assist you. Feel free to share your project details using the form below.
           If you prefer to email instead, you can reach out to me at </p>
           <a className="text-white" href="http://" target="_blank" rel="noopener noreferrer"></a>
        </div>
           <form  className="w-full md:w-[50%] mx-auto mt-6" action="" method="post">
           <div className="grid grid-cols-2 gap-4 mb-6">
           <input name="name" className="border-none bg-[#101010] rounded-lg py-4 px-4 outline-none text-white text-[16px] font-medium" type="text" placeholder="Name" />
           <input name="email" className="border-none bg-[#101010] rounded-lg py-4 px-4 outline-none  text-white text-[16px] font-medium" type="text" placeholder="Email" />
           </div>
            <textarea name="message" className="border-none bg-[#101010] rounded-lg py-4 px-4 w-full outline-none  text-white text-[16px] font-medium" name="" id="" cols="30" rows="10" placeholder="Tell me more about your project">

            </textarea>
            <button className="w-full py-3 px-6 rounded-md border-none text-[16px] font-medium text-white bg-gradient-to-l mt-4 from-[#c084fc] to-[#db2777]">Send</button>
           </form>
      </div>
      <div className="grid grid-cols-3 gap-5 py-10  items-center text-center  bg-[#000]">
          <p className="text-[#FFFFFF80] text-[18px] font-medium leading-5 "> © 2024.</p>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsCSpGBbMkLlJJWjvpGqHKCZtCzDnKwtxVLJljzWDsNgzfjMrlQRSfgVkDzfrkpZwWwMhPRG" target="_blank" rel="noopener noreferrer"> <p className="text-[#FFFFFF80] text-[18px] font-medium leading-5  items-center">Designed by Dev_yeesha</p></a>
          <div className="flex justify-content-center items-between gap-12 mx-auto ">
          <a className="text-[#FFFFFF80] text-[20px] font-medium" href="http://" target="_blank" rel="noopener noreferrer"><BsTwitterX /></a>
           <a className="text-[#FFFFFF80] text-[20px] font-medium" href="https://" target="_blank" rel="noopener noreferrer"><SiInstagram /></a>
           <a className="text-[#FFFFFF80] text-[20px] font-medium" href="https://www.linkedin.com/in/boyejo-basirat-9446b0236" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
           <a className="text-[#FFFFFF80] text-[20px] font-medium" href="https://github.com/Timileyin1298" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>  
    </div>
  );
};

export default LandingPgae;
