import React from 'react';
import { Form, Input, Modal, Upload } from 'antd';
import { useApi } from '@/hooks';
import { PlusOutlined } from '@ant-design/icons';

const useEditAddFormDialog = () => {
  const [form] = Form.useForm();
  const { pdf } = useApi();
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleOk = async () => {
    try {
      await form.validateFields();
      const formData = form.getFieldsValue();
      console.log(formData);
      pdf.createPdp(formData);
    } catch (e) {
      if (e instanceof Error) console.warn(e.message);
    }
  };

  const modal = (
    <Modal
      title='创建PDF'
      open={visible}
      onCancel={handleClose}
      onOk={handleOk}
    >
      <Form className='pl-5 pr-5' form={form}>
        <Form.Item label='pdf名称' name='name' rules={[{ required: true }]}>
          <Input placeholder='请输入Pdf名称' />
        </Form.Item>

        <Form.Item label='pdf链接' name='url' rules={[{ required: true }]}>
          <Input placeholder='请输入Pdf链接' />
        </Form.Item>

        <Form.Item label='上传图片'>
          <Upload listType='picture-card'>
            <button style={{ border: 0, background: 'none' }} type='button'>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );

  return [modal, toggleVisible] as const;
};

export { useEditAddFormDialog };
