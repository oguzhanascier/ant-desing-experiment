import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { useState, useEffect } from "react";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [users, setUsers] = useState()
  const data = [
    {
      id: 1,
      name: "John Doe",
      occupation: "Software Developer",
    },
    {
      id: 2,
      name: "Jane Smith",
      occupation: "Data Analyst",
    },
    {
      id: 3,
      name: "Bob Johnson",
      occupation: "Graphic Designer",
    },
    {
      id: 4,
      name: "Mary Lee",
      occupation: "Project Manager",
    },
    {
      id: 5,
      name: "David Brown",
      occupation: "Web Designer",
    },
    {
      id: 6,
      name: "Sara Johnson",
      occupation: "Marketing Specialist",
    },
    {
      id: 7,
      name: "Michael Davis",
      occupation: "Financial Analyst",
    },
    {
      id: 8,
      name: "Emily Miller",
      occupation: "Human Resources Manager",
    },
    {
      id: 9,
      name: "Tom Smith",
      occupation: "Business Development Manager",
    },
    {
      id: 10,
      name: "Laura Williams",
      occupation: "Sales Representative",
    },
  ];
 
  useEffect(() => {
setTimeout(() => {
  setUsers(data)
}, 2000);

}, []);


const [selectedUserId, setSelectedUserId] = useState(null);

useEffect(() => {
  const timer = setTimeout(() => {
    setSelectedUserId(8);
  }, 4000);

  return () => clearTimeout(timer);
}, []);

const handleSubmit=(d)=>{
  console.log(selectedUserId)
}

  return (
    <>
      <Checkbox onChange={(e) => setComponentDisabled(e.target.checked)}>
        Form disabled
      </Checkbox>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
        <Select value={selectedUserId} onChange={(value) => setSelectedUserId(value)}>
  {users?.map((u) => (
    <Select.Option value={u.id} key={u.id}>
      {u.name}
    </Select.Option>
  ))}
</Select>
      </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",

                children: [
                  {
                    title: "Bamboo",
                    value: "bamboo",
                  },
                ],
              },
            ]}
          />
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",

                children: [
                  {
                    title: "Bamboo",
                    value: "bamboo",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: "zhejiang",
                label: "Zhejiang",
                children: [
                  {
                    value: "hangzhou",
                    label: "Hangzhou",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button type="submit" onClick={()=> handleSubmit()}>Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;
