import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, DatePicker, Space } from 'antd';
import { metaData } from './metaData';

const EntityForm = () => {
  const [form] = Form.useForm();
  let [formFields, setFormFields]= useState([]);
  let [entityName, setEntityName]= useState(null);
  let [entityLabel, setEntityLabel]= useState(null);

 const {Search} = Input;
    
    useEffect(() => {
      console.log("metadata => ", metaData)
      setEntityName(metaData?.name)
       setEntityLabel(metaData?.label)
       setFormFields(metaData?.field);
    });


    const dateChangeHandle = (date, dateString) => {

    }

    const onSearchHandle = (value) => {

    }
  
  return (
    <>
      <Form
        form={form}
      >
        <Row>
            <Form.Item label={metaData.label} >
                <Input name={metaData.name} />
            </Form.Item>
        </Row>
        <Row>
            <Col>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Col>
        </Row>
       {metaData.field.map((field, key) => ( 
           field.system && 
            
           <Row>
           <Form.Item index={key} label={field.label} >
               {
                field.dataType === "String" || 
                field.dataType === "Decimal" || 
                field.dataType === "Integer"? 
                 <Input name={field.name} /> : null
                 }
                {
                     field.dataType === "Date"? 
                    <Space>
                    <DatePicker name={field.name} onChange={dateChangeHandle} />  </Space>: null 
                   
                }
                {
                    field.dataType === "lookup"? 
                    <Search name={field.name} onSearch={onSearchHandle} style={{ width: 200 }} /> : null
                }
               
           </Form.Item>
            </Row>
           
         ))
        }

        <Row>
            <Col>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Col>
        </Row>
      </Form>
    </>
  );
};

export default EntityForm;