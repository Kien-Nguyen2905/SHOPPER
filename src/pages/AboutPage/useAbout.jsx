import { useMainContext } from "@/components/Maincontext/MainContext";

export const useAbout = () => {
  const { category } = useMainContext();
  return { category };
};
