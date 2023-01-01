import React,{useState} from 'react';
import './Home.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import car from './Asset3.svg'; 
import carr from './SVG/Asset 3.svg'; 
import { Link } from 'react-router-dom';


function Home() {
  const [value, setValue] = useState('');
  const [selectedCity1, setSelectedCity1] = useState(null);

  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

const onCityChange = (e) => {
  setSelectedCity1(e.value);
}
const items = [
  {
      label: <Link to='/'>Home</Link>
  },
  {
    label: <Link to='/search-job'>See Jobs</Link>
    
  }
  
]

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
    <div className='navbarr'>
      <div className="card nav">
          <Menubar style={{ backgroundColor: "#f9fcff"}} model={items} start={start} end={end} />
      </div>
    </div>
    <div class="grid body">
    <div class="col-6">
      <div>
        <div className='h1tag'>
          <h1 style={{fontWeight: "700"}}>Find the <span style={{color: "#1967d2"}}>job</span> that fits <br></br>your life</h1>
        </div>
        <div className='h2tag'>
          <h4 style={{fontWeight: "400"}}>Type your keyword, then click search to find your perfect job.</h4>
        </div>
        <div class="grid inputbox">
            <div class="col-3">
              <div>
                <div className='dropdoentext'>
                  <h3 style={{fontWeight: "400", marginLeft: "10px"}}>WHAT</h3>
                </div>
                <div className='dropdoen'>
                  <Dropdown style={{fontSize: "12px",fontWeight: "bold", width: "170px", color: "black",backgroundColor: "#dfe5f0"}}   value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Job Title" />
                </div>
              </div>
            </div>
            <div class="col-3">
              <div>
                <div className='dropdoentext'>
                  <h3 style={{fontWeight: "400"}}>TYPE</h3>
                </div>
                <div className='dropdoen'>
                  <Dropdown style={{ fontSize: "12px",fontWeight: "bold", width: "170px", color: "black",backgroundColor: "#dfe5f0"}}   value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="All Category" />
                </div>
              </div>
            </div>
            <div class="col-3">
              <div>
                <div className='dropdoentext'>
                  <h3 style={{fontWeight: "400", marginLeft: "10px"}}>lOCATION</h3>
                </div>
                <div className='dropdoen'>
                  <Dropdown style={{ fontSize: "12px",fontWeight: "bold", width: "170px", color: "black",backgroundColor: "#dfe5f0"}}   value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Search..." />
                </div>
              </div>
            </div>
            <div class="col-3">
              <div className='button'>
              <Button label="Find Job" style={{ marginTop: "30px", backgroundColor: "#1967d2" , marginLeft: "10px"}}  className="p-button-info"/>
              </div>
            </div> 
        </div>
        <div className='main'>
        <h3>Popular Searches: <span className='sub'>Developer ,Designer ,Architect ,Engineer...</span></h3>
        </div>
      </div>
    </div>
    <div class="col-5 img">
      <img src={car} alt="this is car"   style={{width: "600px"}}/>
    </div>
    </div>
    <div className='foter col-12'>
        <div class="grid justify-content-center"style={{marginLeft: '150px', marginRight: '170px'}}>
          <div class="col-6 align-items-center" style={{marginTop: "30px", marginBottom: "30px"}}>
          <h2 className='sub2' >Join our email subscription now to get updates <br/>on new jobs and notifications.</h2>
          </div>
          <div class="col-5 align-items-center" style={{marginTop: "50px", marginBottom: "30px", marginLeft: "60px"}}>
          <div className="p-inputgroup">
              <InputText placeholder="Enter Your Email" style={{ width: "500px", height: "70px"}}/>
              <Button label="Keyword"  style={{backgroundColor: "#1967d2"}} className="p-button-info"/>
          </div>
          
        </div>
          
        </div>
        <img src={carr} alt="this is car" style={{width: "75%", height: "1px", marginLeft: "170px"}}/>
        <div class="grid justify-content-between"style={{marginLeft: '160px'}}>
          <div class="col-5" style={{marginTop: "30px"}}>
          <h4  style={{fontWeight: "400",}}>Copyright © 2022 by thewebmax All Rights Reserved.</h4>
          </div>
          <div class="col-5" style={{marginTop: "30px"}}>
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

export default Home;
