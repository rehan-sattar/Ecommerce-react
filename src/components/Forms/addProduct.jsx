import React from "react";
import { Form, Icon, Input, Button, Select, Upload, Modal, message,Row, Col, Card  } from 'antd';
const styles = {
    login_card: {
        marginTop: '5em',
        textAlign: 'center'
    }
}

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const props = {

}
class AddProductForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                <Col span={8} offset={8}>
                    <Card style={styles.login_card} title={`Add Product`}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('title', {
                                    rules: [{ required: true, message: 'Please input the title!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Add title"
                                    />
                                )}
                            </FormItem>

                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="Select a catagory"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="Properties for sales"> Properties for sales</Option>
                                <Option value="property for Rent">property for Rent</Option>
                                <Option value="vehicles">Vehicles</Option>
                                <Option value="bikes">Bikes</Option>
                                <Option value="Electronics &  home Appliances">Electronics &  home Appliances</Option>
                                <Option value="Mobiles">Mobiles</Option>
                                <Option value="Jobs">Jobs</Option>
                                <Option value="Services">Services</Option>
                                <Option value="Business Industrial & Agriculture">Business Industrial & Agriculture"</Option>
                                <Option value="furniture">furniture</Option>
                                <Option value="Animals">Animals</Option>
                                <Option value="books & Sports">books & Sports</Option>
                                <Option value="Fashion">Fashion</Option>
                                <Option value="Kids">Kids</Option>
                            </Select>

                            <TextArea style={{ margin: '1em 0em' }} placeholder="Description" rows={4} />
                            Upload Images: &nbsp;
                            <Upload {...props}
                                onChange={(info) => {
                                    console.log(info.file.status)
                                    if (info.file.status !== 'uploading') {
                                        console.log(info.file, info.fileList);
                                    }
                                    if (info.file.status === 'done') {
                                        message.success(`${info.file.name} file uploaded successfully`);
                                    } else if (info.file.status === 'error') {
                                        message.error(`${info.file.name} file upload failed.`);
                                    }
                                }
                                }
                            >
                                <Button>
                                        <Icon type="image" /> Click to Upload
                                </Button>
                            </Upload>

                            <FormItem>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    style={{ width: '100%' }}
                                >
                                 <Icon type="plus" />  Add 
                                </Button>
                            </FormItem>
                        </Form>
                    </Card>
                </Col>
            </Row>
        );
    }
}

const WrappedAddProductForm = Form.create()(AddProductForm);
export default WrappedAddProductForm;