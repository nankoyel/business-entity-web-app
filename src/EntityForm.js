import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, DatePicker, Space } from 'antd';
import { metaData } from './metaData';
import useForm from "./useForm";



const EntityForm = (data) => {
    const [fieldValues, setFieldValues] = useState(data);


    const register = () => {
        
    }
    
    const [values, handleChange, handleSubmit] = useForm(register);
  

 const {Search} = Input;

  console.log("FormValues ==> ",data.data.label)
  return (
    <>
      <Form
        layout="inline"
        onFinish={handleSubmit}
      >
       {metaData.field.map((field, key) => ( 
           field.system === false || field.system === undefined && 
            
           <Row key={key}>
           <Form.Item label={field.label} >
               {
                field.dataType === "String" || 
                field.dataType === "Decimal" || 
                field.dataType === "Integer"? 
                 <Input style={{ width: 400 }} maxLength={field.length} name={field.name} defaultValue={data.data[field.name]}/> : null
                 }
                {
                     field.dataType === "Date"? 
                    <Space>
                    <DatePicker name={field.name} onChange={handleChange} />  </Space>: null 
                   
                }
                {
                    field.dataType === "lookup"? 
                    <Search name={field.name} style={{ width: 400 }} /> : null
                }
               
           </Form.Item>
            </Row>
           
         ))
        }

        <Row>
            <Col>
                <Form.Item>
                    <Button type="primary" width="120px">Submit</Button>
                </Form.Item>
            </Col>
        </Row>
      </Form>
    </>
  );
};

export default EntityForm;