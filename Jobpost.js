import 'primeicons/primeicons.css';
import { useState } from 'react';
import './JobPost.css';
import "@fontsource/rubik";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import car from './Asset3.svg'; 
import carr from './Asset 3.svg'; 
import { Link } from 'react-router-dom';
 
const Jobpost = () => {
    const [jobs,setJobs] = useState([])
    const [name,setName] = useState('')
    const [category,setCategory] = useState()
    const [type,setType] = useState()
    const [salary,setSalary] = useState()
    const [country,setCountry] = useState()
    const [email,setEmail] = useState()
    const [city,setCity] = useState()
    const [gender,setGender] = useState()
    const [location,setLocation] = useState()
    const [experience,setExperience] = useState()
    const [qualification,setQualification] = useState()
    const [website,setWebsite] = useState()
    const [since,setSince] = useState()
    const [address,setAddress] = useState()
    const [startdate,setStartdate] = useState()
    const [enddate,setEnddate] = useState()
    const [description,setDescription] = useState()
    const addJob = (job) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newJob = {id,...job}
      setJobs([...jobs, newJob])
    }
    const onSubmit = (e) => {
      addJob({name,category,type,salary,country,email,city,gender,location,experience,qualification,website,since,address,startdate,enddate,description})

      setName('')
      setCategory('')
      setType('')
      setSalary()
      setCountry('')
      setEmail()
      setCity()
      setGender()
      setLocation()
      setExperience()
      setQualification()
      setWebsite()
      setSince()
      setAddress()
      setStartdate()
      setEnddate()
      setDescription()
  }
  const items = [
    {
        label: <Link to='/'>Home</Link>
    },
    {
      label: <Link to='/search-job'>See Jobs</Link>
      
    }
    
  ]
  
  const genders = [
    {name: 'Male', code: 'ma'},
    {name: 'Female', code: 'fm'},
    {name: 'Other', code: 'ot'},
  ]
    const salaries = [
        {name: '$500', code: 'NY'},
        {name: '$1000', code: 'RM'},
        {name: '$1500', code: 'LDN'},
        {name: '$2000', code: 'IST'},
        {name: '$2500', code: 'PRS'}
    ];
    const categories = [
      {name: 'Agriculture', code: '12'},
        {name: 'Audio/Video Technology', code: '34'},
        {name: 'Business and Finance', code: '56'},
        {name: 'Information Technology', code: '78'},
        {name: 'Health Science', code: '91'}
    ]
    const types = [
      {name: 'Full Time', code: 'ft'},
        {name: 'Freelance', code: 'fl'},
        {name: 'Part Time', code: 'pt'},
        {name: 'Intership', code: 'is'},
        {name: 'Temporary', code: 'tp'}
    ]
    const countries = [
      {name: 'Pakistan', code: 'pk'},
        {name: 'America', code: 'am'},
        {name: 'England', code: 'el'},
        {name: 'India', code: 'in'},
        {name: 'China', code: 'ch'}
    ]
    const cities = [
      {name: 'Lahore', code: 'la'},
        {name: 'Karachi', code: 'ka'},
        {name: 'Islamabad', code: 'is'},
        {name: 'Rawalpindi', code: 'ra'},
        {name: 'Multan', code: 'mu'}
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
    return(
    <div>
      <div className='navbar'>
      <div className="card nav">
          <Menubar style={{ backgroundColor: "#f9fcff"}} model={items} start={start} end={end} />
      </div>
      <div className='landingtext p-jc-between'>
        <h1 style={{fontWeight:"500", fontSize: "28px" }}>Company Post a Job</h1>
        <h4 style={{marginTop: "35px", fontWeight: "400", fontSize: "18px"}}>Home <span style={{marginLeft: "10px"}}>-</span> <span style={{color: "#1967d2", marginLeft: "10px"}}>Company Post a Job</span></h4>
      </div>
    </div>
      <div className='page grid'>
        <div class="col-3"></div>
        <div className='section col-9'>
          {/* <div className='heading' style={{marginTop: '100px'}}>
            <h1>Post a Job</h1>
            <p style={{fontWeight: "400"}}>Home  .  Dasboard . <span style={{color: "#1967D2"}}>Job Submission Form</span></p>
          </div> */}
          <div className='container'>
            <div className='flex-container' style={{marginBottom: "8px"}}>
            <i className="pi pi-briefcase mr-2" style={{color:'#000',fontSize: 25,paddingTop:25,paddingRight:10}}></i>
              <h3 style={{fontWeight: 600,marginTop:"25px",fontFamily: 'rubik !important', fontWeight: "400"}}>Job Details</h3>
            </div>
            <div className='line' style={{marginBottom: "8px"}}/>
                  <form className="add-form grid">
                    <div class="flex card-container gap-6">
                  <div className="form-control col-3">
                  <label>Name</label>
                  <span className="p-input-icon-left">
                      <i className="pi pi-id-card" style={{color:'#1967D2'}} />
                      <InputText value={name}  style={{ height: "53px" }}  type='text' onChange={(e) => setName(e.target.value)} placeholder="Name" />
                  </span>
                  </div>
                  <div className="form-control col-3">
                  <label>Job Category</label>
                  <div className='flex-container ' >
                        <Dropdown optionLabel="name" value={category}
                        optionValue="code" options={categories}
                        onChange={(e) => setCategory(e.target.value)} placeholder="Select Category" editable/>
                    </div>
                  </div>
                  <div className="form-control col-3">
                  <label>Job Type</label>
                  <div className='flex-container'>
                    <Dropdown optionLabel="name" value={type} options={types}
                    optionValue="code"
                    onChange={(e) => setType(e.target.value)} placeholder="Select Category" editable/>
                    </div>
                  </div>
                  </div>
                  <div class="flex card-container gap-6">
                  <div className="form-control col-3">
                  <label>Salary</label>
                  <div className='flex-container'>
                    <Dropdown optionLabel="name" value={salary} 
                    optionValue="code" options={salaries}
                    onChange={(e) => setSalary(e.target.value)} placeholder="Salary" editable/>
                    </div>
                  </div>
                  <div className="form-control col-3">
                  <label>Experience</label>
                  <span className="p-input-icon-left">
                      <i className="pi pi-user-edit" style={{color:'#1967D2'}} />
                      <InputText value={experience}   style={{ height: "53px" }}  onChange={(e) => setExperience(e.target.value)} placeholder="E.g. Minimum 3 years" />
                  </span>
                  </div>
                  <div className="form-control col-3">
                  <label>Qualification</label>
                  <span className="p-input-icon-left">
                      <i className="pi pi-user ml-2 mr-3" style={{color:'#1967D2'}} />
                      <InputText className='input'  style={{ height: "53px" }}  value={qualification} onChange={(e) => setQualification(e.target.value)} placeholder="Qualification Title" />
                  </span>
                  </div>
                  </div>
                  <div class="flex card-container gap-6">
                  <div className="form-control col-3">
                  <label>Country</label>
                  <span >
                    <Dropdown optionLabel="name" value={country} optionValue="code" options={countries}
                    onChange={(e) => setCountry(e.target.value)} placeholder="Country" editable/>
                    </span>
                  </div>
                  <div className="form-control col-3">
                  <label>City</label>
                  <div className='flex-container'>
                    <Dropdown optionLabel="name" value={city} optionValue="code" options={cities}
                    onChange={(e) => setCity(e.target.value)} placeholder="City" editable/>
              </div>
                  </div>
                  <div className="form-control col-3">
                  <label>Location</label>
                  <span className="p-input-icon-left">
                      <i className="pi pi-map-marker" style={{color:'#1967D2'}} />
                      <InputText value={location}  style={{ height: "53px" }} onChange={(e) => setLocation(e.target.value)} placeholder="Type Address" />
                  </span>
                  </div>
                  </div>
                  <div class="flex card-container gap-6">
                  <div className="form-control col-3">
                  <label>Email</label>
                  <span className="p-input-icon-left">
                      <i className="pi pi-at" style={{color:'#1967D2'}} />
                      <InputText value={email}   style={{ height: "53px" }} onChange={(e) => setEmail(e.target.value)} placeholder="David@example.com" />
                  </span>
                  </div>
                  <div className="form-control col-3">
                  <label>Website</label>
                  <span className="p-input-icon-left">
                      <i className="pi pi-globe" style={{color:'#1967D2'}} />
                      <InputText value={website}  style={{ height: "53px" }}  onChange={(e) => setWebsite(e.target.value)} placeholder="https://...." />
                  </span>
                  </div>
                  <div className="form-control col-3">
                  <label>Est.Since</label>
                  <span className="p-input-icon-left">
                      <i className="pi pi-clock" style={{color:'#1967D2'}} />
                      <InputText value={since}  style={{ height: "53px" }}  onChange={(e) => setSince(e.target.value)} placeholder="Since" />
                  </span>
                  </div>
                  </div>
                  <div className="form-control col-4">
                  <label>Gender</label>
                  <div className='flex-container'>
                    <Dropdown optionLabel="name" value={gender} optionValue="code" options={genders}
                    onChange={(e) => setGender(e.target.value)} placeholder="Gender" editable/>
              </div>
                  </div>
                  <div className="form-control col-12">
                  <label>Complete Address</label>
                  <span className="p-input-icon-left">
                      <i className="pi pi-home" style={{color:'#1967D2'}} />
                      <InputText value={address}  style={{ height: "53px"}}  onChange={(e) => setAddress(e.target.value)} placeholder="6061 Lone Tree Way, CA" />
                  </span>
                  </div>
                  <div className="form-control col-11">
                  <label>Description</label>
                    <InputTextarea rows={3} cols={50} value={description} onChange={(e) => setDescription(e.target.value)} />
                  </div>
                  <div class="flex card-container gap-6 calender">
                  <div className="form-control col-3">
                  <label>Start Date</label>           
                    <Calendar placeholder='mm/dd/yyyy' value={startdate} onChange={(e) => setStartdate(e.target.value)}  />
                  </div>
                  <div className="form-control col-3">
                  <label>End Date</label>           
                    <Calendar className='calender' placeholder='mm/dd/yyyy'  value={enddate} onChange={(e) => setEnddate(e.target.value)}   />
                  </div>
                  </div>
                  <div class="flex card-container gap-6  col-12">
                  <Button className='butt' label="Publish Job" style={{backgroundColor: "#1967d2"}} onClick={onSubmit} />
                  <Button label="Save Draft" style={{marginLeft: "-40px",color: "#1967d2",border: "1px solid #1967d2" }} className="p-button-outlined butt" />
                  </div>
                  </form>
          </div>

        </div>
        <div className='foter col-12'>
            <div class="grid justify-content-center"style={{marginLeft: '200px', marginRight: '200px'}}>
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
            <img src={carr} alt="this is car" style={{width: "70%", height: "1px", marginLeft: "200px"}}/>
            <div class="grid justify-content-between"style={{marginLeft: '200px'}}>
              <div class="col-5" style={{marginTop: "30px", marginRight: "100px"}}>
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
    </div>
    )
}
 
export default Jobpost