import React,{useState} from 'react';
import { Form, Input, Button, PageHeader } from 'antd';
import { useHistory} from 'react-router-dom'



const SignUp = () => {
    let history = useHistory();
    const [goto, setgoto] = useState(false)
    const [form] = Form.useForm();

    function gotoPage(){
        if(goto) return history.push('/login')
    }


    const onFinish = (values) => {
        // console.log(values)
        fetch('http://localhost:8500/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        }).then(response => {
            if(response.status==200){
                history.push("./login")

            }else if(response.status==403){
                alert("users already exist")
            }
            console.log(response.status)
            })
    };


    return (
        <div style={{ height: '100vh', backgroundColor: '#F4F5F7', display: 'flex', justifyContent: 'center' }}>
            <div>
                <PageHeader style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', marginTop: '30px' }}>Sign Up </PageHeader>
                <Form form={form} name="SignUp" onFinish={onFinish} className="form" layout="vertical">
                    <Form.Item
                        name="name"
                        label="Fullname"
                        rules={[
                            {
                                required: true,
                                message: "Please input your fullname",
                            },
                        ]}
                    >
                        <Input type='text' placeholder='Fullname' />
                    </Form.Item>
                    <Form.Item
                        name="emailID"
                        label="Email-ID"
                        rules={[
                            {
                                required: true,
                                message: "Please input your E-mail",
                            },
                        ]}
                    >
                        <Input type='email' placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please input your password",
                            },
                        ]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your password",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Confirm Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button onclick={gotoPage} type="primary" htmlType="submit" block style={{ fontWeight: 'bold', height: 'auto', padding: '6px 15px' }} >
                            Sign Up
                        </Button>
                        {/* <Button type="primary" danger block htmlType="button" onClick={onReset}> 
                        Reset
                        </Button> */}
                    </Form.Item>
                </Form>
                already a User?
                <br/>
                <Button type="primary" onClick={()=>history.push("./login")} htmlType="submit" block style={{ fontWeight: 'bold', height: 'auto', marginTop: '10px',height:"30px" ,width:"100px" }}>login</Button>
            </div>
        </div>
    );
};

export default SignUp;