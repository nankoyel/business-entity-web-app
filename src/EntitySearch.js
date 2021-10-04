import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, DatePicker, Space } from 'antd';
import { metaData } from './metaData';
import { entityData } from './entityData';
import EntityForm from './EntityForm';
//import "./EntityFormStyles.css";
import useForm from "./useForm";


const EntitySearch = () => {
    const [showEditForm, setShowEditForm]= useState(false);
    const [formValues, setFormValues]= useState({})

    const register = () => {
        if(entityData.label ===(values[metaData.name])){
            console.log("EntityData ", entityData)
            setFormValues(entityData);
        }
        setShowEditForm(true);
    }
    
    const [values, handleChange, handleSubmit] = useForm(register);

    console.log("First form ",formValues)

    return (
        <>
          <Form
            onFinish={handleSubmit}
          >
            <Row>
                <Form.Item label={metaData.label} rules={[{ required: true, message: 'Please input entity name!' }]}>
                    <Input onChange={handleChange} name={metaData.name}/>
                </Form.Item>
            </Row>
            <Row>
                <Col>
                    <Form.Item>
                        <Button htmlType="submit" type="primary" width="120px">Search</Button>
                    </Form.Item>
                </Col>
            </Row>
          </Form>
          {showEditForm && <EntityForm data={formValues}/>}
        </>
      );
    };

export default EntitySearch;