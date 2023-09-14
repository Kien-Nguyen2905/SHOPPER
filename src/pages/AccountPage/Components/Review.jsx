import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { orderService } from "@/services/orderService";
import { authActions } from "@/store/reducers/authReducer";
import { message, Modal, Rate } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Review = ({
  isModalOpen,
  setIsModalOpen,
  productIdReview,
  orderIdReview,
}) => {
  const dispitch = useDispatch();
  const { control, handleSubmit } = useForm();
  const [rate, setRate] = useState(0);
  const handReview = async (value) => {
    const payload = {
      ...value,
      order: orderIdReview,
      product: productIdReview,
      rate: rate,
    };
    console.log(payload);
    try {
      const res = await orderService.postReview(payload);
      if (res?.id) {
        message.success("Reviewed success");
        const res = await orderService.getOrders();
        console.log(res);
        if (res?.orders) {
          dispitch(authActions.setOrder(res));
        }
        setIsModalOpen(false);
      }
    } catch (error) {
      message.error("Failed success");
      setIsModalOpen(false);
    }
  };
  return (
    <div className="modalReview">
      <Modal
        title="Review Product"
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(!isModalOpen)}
      >
        <div className="rating">
          <Rate onChange={(valueRate) => setRate(valueRate)} />
        </div>
        <form onSubmit={handleSubmit(handReview)}>
          <Input label="Title review" name="title" required control={control} />
          <Input
            label="Description review"
            name="description"
            required
            control={control}
          />
          <div className="flexBtn">
            <Button type="normal" className="btn btn-outline-primary-2">
              Send
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Review;
