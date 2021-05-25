import React from "react"
import "../District/style.css"


interface propsUpa{
    NumberOfAttendance: number,
    DistrictTitle: string,
}


const DistrictUpa: React.FC<propsUpa> = (props: propsUpa) => {
    const {
        NumberOfAttendance,
        DistrictTitle 
    } = props;
  
    return (
        
        <div className="item">
            <h4 className="titleDistrict">
                  {DistrictTitle}
            </h4>
            <p>
              <span className="attendanceDistrict">         
                  {NumberOfAttendance}
              </span>
            </p>
        </div>
        
    );
  };

  export default DistrictUpa;
