import React from "react";
import { Form, Icon, Input, Button,Row, Col, Card  } from 'antd';


const FormItem = Form.Item;
const styles = {
    login_card: {
      marginTop: '5em',
      textAlign: 'center'
    }
  }
  
class NormalLoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            userEmail: '',
            userPass: ''
        };
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({
                    userEmail: values['Email'],
                    userPass: values['password']
                })

            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                <Col span={8} offset={8}>
                    <Card style={styles.login_card} title="login form" >
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('Email', {
                                    rules: [{ required: true, message: 'Please input your Email!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Email"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password" placeholder="Password"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    style={{ width: '100%' }}
                                >
                                    Log in
                    </Button>
                                Or <a href="">register now!</a>
                            </FormItem>
                        </Form>
                    </Card>
                </Col>
            </Row>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;