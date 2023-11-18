import { useMutation } from "@/hooks/useMutation";
import { subscribeService } from "@/services/subscribeService";
import { message } from "antd";

export const useContact = () => {
  const { execute } = useMutation(subscribeService.subscribe, {
    onSuccess: (data) => {
      console.log(data);
      message.success("Successfully");
    },
    onFail: (error) => {
      console.log(error);
      message.error("Failed");
    },
  });
  const submitQuestions = async (data) => {
    try {
      const payload = {
        name: data.name,
        title: data.subject,
        email: data.email,
        description: data.message,
        phone: data.phone,
      };
      execute(payload);
    } catch (error) {
      message.error("Failed");
      console.log(error);
    }
  };
  return { submitQuestions };
};
