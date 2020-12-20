import React,{useEffect} from 'react'
import XLSX from 'xlsx'
import '../css/download.css'



export default function Download(props) {

    
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    

    function  downloadhandeler(e)
    
    {  var data=[state];
          const worksheet=XLSX.utils.json_to_sheet(data);
          const workbook={
              Sheets:{
                  "data":worksheet
              },
              SheetNames:['data']
          };
          const exelBuffer=XLSX.write(workbook,{bookType:"xlsx",type:'array'});
          console.log(exelBuffer);

            var filename='firstone'
            var blob = new Blob([exelBuffer], {type: EXCEL_TYPE});
            if(window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveBlob(blob, filename);
            }
            else{
                var elem = window.document.createElement('a');
                elem.href = window.URL.createObjectURL(blob);
                elem.download = state.firstname;        
                document.body.appendChild(elem);
                elem.click();        
                document.body.removeChild(elem);
            
        }
    }
     const {state}=props.location.state;
    useEffect(() => {
        if(!state)
        props.history.push('/');
       

    }) 

    return (

        <>
        <h1> Your Details</h1>
        <div className="tabel-parent">
            <div className="tabel-row">
                <p className="tabel-key">
                  First Name
                </p>


                <p className="tabel-val">
                   {state.firstname}
                </p>
            </div>
            <div className="tabel-row">
                <p className="tabel-key">
                  Last Name
                </p>


                <p className="tabel-val">
                   {state.lastname}
                </p>
            </div>
            <div className="tabel-row">
                <p className="tabel-key">
                  Objective
                </p>


                <p className="tabel-val">
                   {state.objective}
                </p>
            </div>
            <div className="tabel-row">
                <p className="tabel-key">
                  email
                </p>


                <p className="tabel-val">
                   {state.email}
                </p>
            </div>
            <div className="tabel-row">
                <p className="tabel-key">
                  phone Number
                </p>


                <p className="tabel-val">
                  {state.phoneNumber}
                </p>
            </div>
            <div className="tabel-row">
                <p className="tabel-key">
                  country
                </p>


                <p className="tabel-val">
                   {state.country}
                </p>
            </div>
            <div className="tabel-row">
                <p className="tabel-key">
                  collage
                </p>


                <p className="tabel-val">
                   {state.collage}
                </p>
            </div>
            <div className="tabel-row">
                <p className="tabel-key">
                  Date of birth
                </p>


                <p className="tabel-val">
                   {state.dob}
                </p>
            </div>
            <div className="tabel-row">
                <p className="tabel-key">
                  Hobbies
                </p>


                <p className="tabel-val">
                {state.hobbey}
                </p>
            </div>
            <div className="tabel-row">
                <p className="tabel-key">
                  skills
                </p>


                <p className="tabel-val">
                {state.skills}
                </p>
            </div>
             <button className="d-btn"  onClick={downloadhandeler}> Download</button>
    
        </div>
     

        <button  onClick={downloadhandeler}> Download</button>
        </>
    )
}
