import React,{useState} from 'react';
import "./Jobb.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import bg from './pic1.jpg'; 
import carr from './SVG/Asset 3.svg'; 
import { InputText } from 'primereact/inputtext';
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { CascadeSelect } from 'primereact/cascadeselect';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { TreeSelect } from 'primereact/treeselect';
import { Password } from 'primereact/password';


function App() {
  const [selectedCity1, setSelectedCity1] = useState(null);
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [nodes, setNodes] = useState(null);
  const [selectedNodeKey, setSelectedNodeKey] = useState(null);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState(null);
  const [value6, setValue6] = useState(null);
  const [value7, setValue7] = useState(null);
  const [value8, setValue8] = useState(null);
  const [value9, setValue9] = useState('');
  const [value10, setValue10] = useState(null);
  const [value11, setValue11] = useState(null);
  const [value12, setValue12] = useState(null);
  const [value13, setValue13] = useState('');
  const [value14, setValue14] = useState('');

  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  const items = [
    {
        label: 'Home',
    },
    {
      label: 'See Jobs',
      
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
const end = <Button label="Post a Job" icon="pi pi-check" style={{backgroundColor: "#1967d2", borderRadius: "10px" ,paddingTop: "10px", paddingRight: "9px", PaddingLeft: "0px", paddingBottom: "10px"}} className="p-button-info but"/>;

  return (
  <div className='bg' >
    <div className='navbar'>
      <div className="card nav">
          <Menubar style={{ backgroundColor: "#f9fcff"}} model={items} start={start} end={end} />
      </div>
    </div>
    <div className='section'>
      <div class="p-d-flex p-jc-center">
        <div class="p-mr-2">
          f
        </div>
        <div class="p-mr-2">
         <h1>Job Details</h1>
         <hr  style={{width: "1100px", height: "1px", marginLeft: "160px"}}/>
          <div className="card">
            <div className="p-fluid grid">
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputText id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
                        <label htmlFor="inputtext">InputText</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText id="lefticon" value={value2} onChange={(e) => setValue2(e.target.value)} />
                        <label htmlFor="lefticon">Left Icon</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-spin pi-spinner" />
                        <InputText id="righticon" value={value3} onChange={(e) => setValue3(e.target.value)} />
                        <label htmlFor="righticon">Right Icon</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <AutoComplete value={value4} suggestions={filteredCountries} field="name" onChange={(e) => setValue4(e.value)} />
                        <label htmlFor="autocomplete">AutoComplete</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <Calendar id="calendar" value={value5} onChange={(e) => setValue5(e.value)} />
                        <label htmlFor="calendar">Calendar</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <Chips id="chips" value={value6} onChange={(e) => setValue6(e.value)} />
                        <label htmlFor="chips">Chips</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputMask id="inputmask" value={value7} onChange={(e) => setValue7(e.value)} mask="99/99/9999" slotChar="mm/dd/yyyy" />
                        <label htmlFor="inputmask">InputMask</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputNumber inputId="inputnumber" value={value8} onChange={(e) => setValue8(e.value)} />
                        <label htmlFor="inputnumber">InputNumber</label>
                    </span>
                </div>
            </div>
          </div>
        </div>
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
        <div class="grid justify-content-between"style={{marginLeft: '160px', marginRight: '170px'}}>
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

export default App;
