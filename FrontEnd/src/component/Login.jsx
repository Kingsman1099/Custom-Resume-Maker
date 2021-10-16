import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, PageHeader } from 'antd';
import { useHistory } from 'react-router-dom'

const Login = () => {
    let history = useHistory();

    const onFinish = (values) => {
        fetch('http://localhost:8500/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        }).then(response => {
                if(response.status==202){
                    history.push("./resume")

                }else if(response.status==204){
                    alert("user does not exist")
                }
                console.log(response.status)
            })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ height: '100vh', backgroundColor: '#F4F5F7', display: 'flex', justifyContent: 'center' }}>
            <div>
                <PageHeader style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', marginTop: '80px' }}>Login to Create Your Resume</PageHeader>
                <Form name='basic' layout='vertical' className='form'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item label="Username" name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}>
                        <Input type='text' placeholder="Username" />
                    </Form.Item>
                    <Form.Item label="Password" name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}>
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                    <hr />
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block style={{ fontWeight: 'bold', height: 'auto', padding: '6px 15px', marginTop: '10px' }}>Login</Button>
                    </Form.Item>
                </Form>
                Not a User?
                <br/>
                <Button type="primary" onClick={()=>history.push("./signup")} htmlType="submit" block style={{ fontWeight: 'bold', height: 'auto', marginTop: '10px',height:"30px" ,width:"100px" }}>SignUp</Button>
            </div>
        </div>
    )
}

export default Login



