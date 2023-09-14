export const rules = {
  email: {
    required: { value: true, message: "Please enter your email address" },
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "Invalid email",
    },
  },
  password: {
    required: { value: true, message: "Please enter your password" },
  },
  agree: {
    required: {
      value: true,
      message: "You must agree with the policy",
    },
  },
  name: {
    required: { value: true, message: "Please enter your name" },
  },
  firstName: {
    required: { value: true, message: "Please enter your name" },
  },
  birthday: {
    required: { value: true, message: "Please enter your birthday" },
  },
  phone: {
    required: { value: true, message: "Please enter your phone" },
    pattern: {
      value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
      message: "Invalid phone",
    },
  },
  subject: {
    required: { value: true, message: "Please enter subject" },
  },
  message: {
    required: { value: true, message: "Please type message to our" },
  },
  date: {
    required: { value: true, message: "Please enter your birthday" },
  },
  title: {
    required: { value: true, message: "Please enter title" },
  },
  description: {
    required: { value: true, message: "Please enter description" },
  },
};
