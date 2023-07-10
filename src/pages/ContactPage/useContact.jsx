import { useMainContext } from "@/components/Maincontext/MainContext";
import { subscribeService } from "@/services/subscribeService";
import { message } from "antd";

export const useContact = () => {
  const { content } = useMainContext();
  const submitQuestions = async (data) => {
    try {
      const payload = {
        name: data.name,
        title: data.subject,
        email: data.email,
        description: data.message,
        phone: data.phone,
      };
      console.log(payload);
      const res = await subscribeService.subscribe(payload);
      if (res?.id) {
        message.success("Successfully");
      }
    } catch (error) {
      message.error("Failed");
      console.log(error);
    }
  };
  return { content, submitQuestions };
};
