import { Button, DatePicker, Form, InputNumber, Modal, Radio } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment/moment";

const Addcompo = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [form] = Form.useForm();

  const showModal = () => {
    setOpen(true);
  };
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };
  const handleOk = (values) => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    console.log(values);
    form.resetFields();
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <div className="mt-6 ">
      <Button icon={<PlusOutlined />} block size="large" onClick={showModal}>
        Add Expense
      </Button>
      <Modal
        footer={[]}
        title="Title"
        open={open}
        // onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okButtonProps={{ style: { background: "blue" } }}
      >
        <Form
          {...formItemLayout}
          variant="filled"
          form={form}
          onFinish={handleOk}
        >
          <Form.Item
            label="InputNumber"
            name="InputNumber"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item name="radio-group" label="Radio.Group">
            <Radio.Group>
              <Radio value="a">item 1</Radio>
              <Radio value="b">item 2</Radio>
              <Radio value="c">item 3</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="DatePicker"
            name="DatePicker"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker initialValues={moment()} format={"YYYY/MM/DD"} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: "blue" }}
              //   onClick={(e) => handleOk(e)}
              loading={confirmLoading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Addcompo;
