import React, { useState} from 'react';
import { Form, Input, Button, Row, Col, DatePicker, Space } from 'antd';
import { metaData } from './metaData';
import useForm from "./useForm";



const EntityForm = (data) => {
    const [output, setOutput] = useState({});
    const [isUpdated, setIsUpdated] = useState(false);


    const register = () => {
        let originalJSON = {};
        setIsUpdated(true);
        Object.entries(values).forEach(
            ([key]) => {
                let originalValue = data.data[key] ? data.data[key] : null;
                originalJSON = {...originalJSON,[key]: originalValue};
            }
        );
        setOutput({...values, $Original: originalJSON })

    }


    
    const [values, handleChange, handleSubmit] = useForm(register);
    
    const {Search} = Input;

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
                    <Input style={{ width: 400 }} onChange={handleChange} maxLength={field.length} name={field.name} value={values[field.name]} defaultValue={data.data[field.name]}/> : null
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
                        <Button htmlType="submit" type="primary" width="120px">Save</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
        {isUpdated && 
            <div> 
                <Space/>
                {JSON.stringify(output)} 
            </div>}
        </>
        );
    };

export default EntityForm;