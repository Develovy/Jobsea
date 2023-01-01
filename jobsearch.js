import React,{useState} from 'react';
import "./jobsearch.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import bg from './pic1.jpg'; 
import carr from './SVG/Asset 3.svg'; 
import Cardbox from '../components/Cardbox';
import { Link } from 'react-router-dom';


function Jobseacrch() {
  const [selectedCity1, setSelectedCity1] = useState(null);

  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

const items = [
  {
      label: <Link to='/'>Home</Link>
  }, 
  {                    
    label: <Link to='/search-job'>See Jobs</Link>
    
  }
  
]

const onCityChange = (e) => {
  setSelectedCity1(e.value);
}



const start = 
<div class="grid">
  <div class="col">
  <Button icon="pi pi-bookmark" style={{marginTop: "20px", backgroundColor: "#1967d2"}} className="p-button-rounded p-button-secondary" aria-label="Bookmark" />
  </div>
  <div class="col justify-content-left">
    <h1 style={{ color: "#1967d2", marginRight: "15px "}}>Jobsea</h1>
  </div>
</div>
const end = <Link className="btn" to='/post-job'>Post a Job</Link>

  return (
  <div className='bg' >
      <div className='navbar'>
      <div className="card nav">
          <Menubar style={{ backgroundColor: "#f9fcff"}} model={items} start={start} end={end} />
      </div>
      <div className='landingtext p-jc-between'>
        <h1 style={{fontWeight:"500", fontSize: "28px" }}>The Most Exciting Jobs</h1>
        <h4 style={{marginTop: "35px", fontWeight: "400", fontSize: "18px"}}>Home <span style={{marginLeft: "10px"}}>-</span> <span style={{color: "#1967d2", marginLeft: "10px"}}>Jobs Grid</span></h4>
      </div>
    </div>

    <div className='container'>
      <div class="grid p-jc-center">
        <div class="col-4">
          f
        </div>
        <div class="col-8" style={{marginLeft: "345px", marginTop: "50px"}}>
          <div className='upper-sec flex'>
              <div className='sectiontext flex'>
                <h2  style={{fontFamily: "rubik", fontSize: "16px", fontWeight: "600"}}>Showing 2,150 jobs</h2>
              </div>

              <div className='drowpdown2 flex' style={{marginLeft: "200px"}}>
              <h2  style={{marginRight: "15px", fontFamily: "rubik", fontSize: "16px", fontWeight: "600"}}>Sort By</h2>
                <Dropdown value={selectedCity1} style={{marginRight:"20px"}} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Most Recent" />
                <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Show 10" />
              </div>
          </div>
         <div>
               <Cardbox />
               <Cardbox />
               <Cardbox />
               <Cardbox />
         </div>
        </div>
      </div>
    </div>
    <div className='foter col-12'>
            <div class="grid justify-content-center"style={{marginLeft: '200px', marginRight: '200px'}}>
              <div class="col-6 align-items-center" style={{marginTop: "30px"}}>
              <h2 className='sub2' >Join our email subscription now to get updates <br/>on new jobs and notifications.</h2>
              </div>
              <div class="col-5 align-items-center" style={{marginTop: "50px", marginLeft: "60px"}}>
              <div className="p-inputgroup">
                  <InputText placeholder="Enter Your Email" style={{ width: "500px", height: "70px"}}/>
                  <Button label="Keyword"  style={{backgroundColor: "#1967d2"}} className="p-button-info"/>
              </div>
              
            </div>
              
            </div>
            <img src={carr} alt="this is car" style={{width: "70%", height: "1px", marginLeft: "200px"}}/>
            <div class="grid justify-content-between"style={{marginLeft: '200px'}}>
              <div class="col-5" style={{marginTop: "30px", marginBottom: "30px", marginRight: "100px"}}>
              <h4  style={{fontWeight: "400",}}>Copyright © 2022 by thewebmax All Rights Reserved.</h4>
              </div>
              <div class="col-5" style={{marginTop: "30px", marginBottom: "30px"}}>
              <div className="template flex" style={{paddingTop: "10px", }}>
                <i className="flex-initial flex  pi pi-facebook px-2  icon" style={{'fontSize': '1.6em', marginRight: "30px"}}></i>
                <i className="flex-initial flex pi pi-twitter px-2 icon" style={{'fontSize': '1.6em', marginRight: "30px"}}></i>
                <i className="flex-initial flex pi pi-discord px-2 icon" style={{'fontSize': '1.6em', marginRight: "30px"}}></i>
                <i className="flex-initial flex pi pi-youtube px-3 icon " style={{'fontSize': '1.6em', marginRight: "30px"}}></i>
              </div>
              </div>
            </div>
          </div>
  </div>
  );
}

export default Jobseacrch;
