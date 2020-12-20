import React,{useState} from 'react'
import '../css/home.css'
import Chip from '@material-ui/core/Chip';
export default function Home(props) {
     
     const [skills, setSkills] = useState(['React.js']);
     const [hobbey, setHobbey] = useState(['Singing']);
     const [state, setState] = useState({
        
        objective:"",
        firstname:"",
        lastname:"",
        email:"",
        phoneNumber:"",
        country:"",
        dob:"",
        collage:"",


     })
     
       
     function handleDeleteHobbeyChip(e,skil){
         setHobbey((pre)=>{
            return pre.filter((skill)=>skill!==skil)
        })
     }
     function handleDeleteSkillChip(e,skil){
         
          setSkills((pre)=>{
              return pre.filter((skill)=>skill!==skil)
          })
     }

     function handelAddHobbey(e){
        if (e.key === 'Enter') {
            // code for enter
            e.preventDefault();
            console.log(e.target.value);
            var val=e.target.value;
             console.log()
           
            val.toString()
            val=val.trim();
            
            if(val!=="" && hobbey.indexOf(val)===-1 )
            {
                setHobbey((prev)=>{
                    return [...prev,val]
                })
            }
            e.target.value='';
            
          }
     }
     function handelAddSkill(e){
        if (e.key === 'Enter') {
            // code for enter
            e.preventDefault();
            console.log(e.target.value);
            var val=e.target.value;
             console.log()
           
            val.toString()
            val=val.trim();
            
            if(val!=="" && skills.indexOf(val)===-1 )
            {
                setSkills((prev)=>{
                    return [...prev,val]
                })
            }
            e.target.value='';
            
            
          }
     }
      
     function handleChange(evt) {
        const value = evt.target.value;
        console.log(value);
        setState({
          ...state,
          [evt.target.name]: value
        });
      }

    const  handleSubmit = (e) => {
        e.preventDefault();
       // const navigate = useNavigate();
        console.log('Event: Form Submit');
        var str1='';
        var str2='';
        skills.forEach(element => {
            str1+= element+", ";
        });
        hobbey.forEach(ele=>{
            str2+=ele+", ";
        })
       

        console.log(state);
      
        state.hobbey=str1;
        state.skills=str2;
        props.history.push('/download', { state});
    };
    return (
        <div className="form-box card">
            
            
         <p className="form-head">Please fill it</p>
         <form  onSubmit={handleSubmit}>
           <label htmlFor="objective">Objective</label>
           <input type="text" id="objective" name="objective" value={state.objective} required onChange={handleChange} placeholder="Your objective.." />
           <label htmlFor="fname">First Name</label>
           <input type="text" id="fname" name="firstname" value={state.firstname} required onChange={handleChange} placeholder="Your name.." />
           <label htmlFor="lname">Last Name</label>
           <input type="text" id="lname" name="lastname" required value={state.lastname} onChange={handleChange} placeholder="Your last name.." />
           <label htmlFor="email">Email</label>
           <input type="email" id="email" name="email" required value={state.email} onChange={handleChange}  />
           <label htmlFor="phoneNumber">Phone Number</label>
           <input type="tel" id="phoneNumber" name="phoneNumber" value={state.phoneNumber} onChange={handleChange} required  />
           <label htmlFor="countery">Country</label>
           <input type="text" id="countery" name="country" value={state.country} onChange={handleChange} required  />
           <label htmlFor="college">Collage</label>
           <input type="text" id="college" name="collage" value={state.collage} onChange={handleChange} required />
           <label htmlFor="dob">Date of birth</label>
           <input type="date" id="dob" name="dob" onChange={handleChange}  max="2019-12-31"  value={state.dob} required />
           
           <div className="skills-chip-box">
           <label htmlFor="skills">Skills</label>
           <br></br>
           { skills.map((skill)=>
                  <Chip key={skill}
               size="small"
               label={skill}
               onDelete={(e)=>handleDeleteSkillChip(e,skill)}
              />
             )}
             <input type="text" id="skills" name="skill" onKeyPress={handelAddSkill}  placeholder="Pess ' Enter ' to add Skills" />
          
           </div>
           <div className="skills-chip-box">
             <label htmlFor="hobbies">Hobbies</label>
              <br></br>
             { hobbey.map((skill)=>
                  <Chip key={skill}
               size="small"
               label={skill}
               onDelete={(e)=>handleDeleteHobbeyChip(e,skill)}
              />
             )}
                
             <input type="text" id="hobbies" onKeyPress={handelAddHobbey}  placeholder="Pess ' Enter ' to add hobbies" />
             
           </div>
           
           <button  className="submit-btn" type="submit">
                        Create
            </button>
           
         </form>
        </div>
    )
}
