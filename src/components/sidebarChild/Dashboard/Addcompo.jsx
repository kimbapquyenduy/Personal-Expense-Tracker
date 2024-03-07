import {
  Button,
  DatePicker,
  Form,
  InputNumber,
  Modal,
  Radio,
  Select,
} from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment/moment";
import TextArea from "antd/es/input/TextArea";
import { UserAuth } from "../../../context/AuthConext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { v1 as uuidv1 } from "uuid";
import { db } from "../../../firebase";

const Addcompo = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [form] = Form.useForm();
  const { user } = UserAuth();

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

  const saveMovies = async () => {
    if (user?.email) {
      await updateDoc(expenseID, {
        Expense: arrayUnion({
          id: item?.id,
          title: item?.title ? item?.title : item.name,
          backdrop_path: item.backdrop_path,
          genre_ids: item.genre_ids,
          overview: item.overview,
          release_date: item.release_date
            ? item.release_date
            : item.first_air_date,
          vote_average: item.vote_average,
          tOS: tOS,
        }),
      });
      setSave(true);
    } else {
      alert("Log In To Save Movies!");
    }
  };
  const expenseID = doc(db, "users", `${user?.email}`);
  const exid = uuidv1();

  const handleOk = async (values) => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);

    if (user?.email) {
      await updateDoc(expenseID, {
        Expense: arrayUnion({
          id: exid,
          Money: values["Money"],
          Type: values["Type"],
          Datevalue: values["DatePicker"].format("DD/MM/YYYY"),
          TOE: values["TypeofExpense"],
          Note: values["Note"] ? values["Note"] : " ",
        }),
      });
      setOpen(false);
      setConfirmLoading(false);
    } else {
      alert("Log In To Save Movies!");
    }

    form.resetFields();
    // setTimeout(() => {
    //   setOpen(false);
    //   setConfirmLoading(false);
    // }, 2000);
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
            label="Money"
            name="Money"
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

          <Form.Item
            label="Date"
            name="DatePicker"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker type={"object"} format={"YYYY / MM / DD"} />
          </Form.Item>

          <Form.Item
            name="Type"
            label="Type"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={"expense"} defaultChecked>
                Expense
              </Radio>
              <Radio defaultChecked={false} value={"income"}>
                Income
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Type of Expense"
            name="TypeofExpense"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Select>
              <Select.Option value="Food">Food</Select.Option>
              <Select.Option value="Gas">Gas</Select.Option>
              <Select.Option value="Rent">Rent</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Note" name="Note">
            <TextArea rows={4} />
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
