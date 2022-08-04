import React, { useState } from "react";
import { Input, FormConatiner, Button } from "./CostApp.Styles";

const CostApp = (props) => {
  const [curentValue, setCurentValue] = useState("");

  const onSubmit =(data)=>{
    console.log("user has submited the data", data);

  };
      const  handelSubmit = ()=>{


       }
  const enterdValue = (event) =>{
    setCurentValue((event)=>{
       event.target.value

    })
   
    console.log(enterdValue)
  }


  return (
    <>
      <FormConatiner action="" className="">
        <Input placeholder="Enter item name " onchange ={enterdValue} type="text"  />
        <Input placeholder="Enter item amount "type="text" />
        <Input placeholder="Enter date " type="text" />

        <Button
          padding="12px 12px 13px 13px"
          margin="10px 10px"
          w="80px"
          type="submit"
        >
          {" "}
          Submit
        </Button>
      </FormConatiner>
    </>
  );
};

export default CostApp;
