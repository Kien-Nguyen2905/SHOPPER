import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import React from "react";
import { useForm } from "react-hook-form";

const FormQuestions = ({ submitForm }) => {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
  });
  const handleQuestions = (values) => {
    submitForm?.(values);
  };
  return (
    <form
      onSubmit={handleSubmit(handleQuestions)}
      className="contact-form mb-3"
    >
      <div className="row">
        <div className="col-sm-6">
          <Input
            className="sr-only"
            placeholder="Name *"
            name="name"
            control={control}
          />
        </div>
        <div className="col-sm-6">
          <Input
            className="sr-only"
            placeholder="Email *"
            name="email"
            control={control}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <Input
            className="sr-only"
            placeholder="Phone"
            name="phone"
            control={control}
          />
        </div>
        <div className="col-sm-6">
          <Input
            className="sr-only"
            placeholder="Subject"
            name="subject"
            control={control}
          />
        </div>
      </div>
      <Input
        className="sr-only"
        placeholder="Message *"
        name="message"
        control={control}
        renderProp={(props, invalid, field) => (
          <textarea
            className={`form-control ${invalid ? "input-error" : ""}`}
            cols={30}
            rows={4}
            {...props}
            {...field}
          />
        )}
      />
      <Button className="btn-outline-primary-2 btn-minwidth-sm">
        <span>SUBMIT</span>
        <i className="icon-long-arrow-right" />
      </Button>
    </form>
  );
};

export default FormQuestions;
