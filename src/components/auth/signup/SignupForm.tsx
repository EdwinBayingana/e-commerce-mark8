import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, ConfigProvider, Flex, Form } from "antd";
import Input from "@components/shared/input";
import Button from "@components/shared/button";
import { BiLogInCircle } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { HiOutlineLockClosed } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlinePhone } from "react-icons/md";
import Typography from "@components/shared/typography";
import { CheckboxChangeEvent } from "antd/es/checkbox";

type FieldType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  confirmPassword: string;
};

const SignupForm: React.FC = () => {
  const formLabelClassName = "text-[9.5px] text-secondary mb-0.5 font-semibold";
  const inputIconSize = 17;

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FieldType>();
  const [isCheckBoxChecked, setIsCheckBoxChecked] =
    React.useState<boolean>(false);

  const onSubmit = (data: FieldType) => {
    // console.log("Form values: ✅", data);
  };

  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsCheckBoxChecked(e.target.checked);
  };

  const password = watch("password");

  return (
    <Form onFinish={handleSubmit(onSubmit)} className="h-full">
      <Flex vertical justify="space-between" gap={20} className="h-full w-full">
        <Typography variant="subTitle" className="mb-2 md:mb-0">
          Register
        </Typography>

        <Flex className="gap-4 flex-col md:flex-row">
          <Flex vertical className="w-full gap-3">
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={{ required: "Please input the First Name!" }}
              render={({ field }) => (
                <div>
                  <Typography variant="body" className={formLabelClassName}>
                    First Name
                  </Typography>
                  <Input
                    {...field}
                    addonBefore={
                      <HiOutlineUser
                        className="text-primary"
                        size={inputIconSize}
                      />
                    }
                    placeholder="Enter First Name"
                  />
                  {errors.firstName && (
                    <span className="error-message">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Please input the Email!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address!",
                },
              }}
              render={({ field }) => (
                <div>
                  <Typography variant="body" className={formLabelClassName}>
                    Email
                  </Typography>
                  <Input
                    {...field}
                    addonBefore={
                      <CgMail className="text-primary" size={inputIconSize} />
                    }
                    placeholder="Enter email"
                  />
                  {errors.email && (
                    <span className="error-message">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: "Please input the Password!",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long!",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "Password must contain at least one letter, one number, and a special character!",
                },
              }}
              render={({ field }) => (
                <div>
                  <Typography variant="body" className={formLabelClassName}>
                    Password
                  </Typography>
                  <Input
                    {...field}
                    inputType="password"
                    addonBefore={
                      <HiOutlineLockClosed
                        className="text-primary"
                        size={inputIconSize}
                      />
                    }
                    placeholder="Enter password"
                  />
                  {errors.password && (
                    <span className="error-message">
                      {errors.password.message}
                    </span>
                  )}
                </div>
              )}
            />
          </Flex>

          {/* Right side */}

          <Flex vertical className="w-full gap-3">
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              rules={{ required: "Please input the Last Name!" }}
              render={({ field }) => (
                <div>
                  <Typography variant="body" className={formLabelClassName}>
                    Last Name
                  </Typography>
                  <Input
                    {...field}
                    addonBefore={
                      <HiOutlineUser
                        className="text-primary"
                        size={inputIconSize}
                      />
                    }
                    placeholder="Enter Last Name"
                  />
                  {errors.lastName && (
                    <span className="error-message">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              )}
            />
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              rules={{
                required: "Please input the Phone Number!",
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: "Phone number must be 9 digits!",
                },
              }}
              render={({ field }) => (
                <div>
                  <Typography variant="body" className={formLabelClassName}>
                    Phone Number
                  </Typography>
                  <Input
                    {...field}
                    addonBefore={
                      <Flex justify="space-between" gap={10}>
                        <MdOutlinePhone
                          className="text-primary"
                          size={inputIconSize}
                        />
                        <Typography variant="body">250</Typography>
                      </Flex>
                    }
                    maxLength={9}
                    placeholder="--- --- ---"
                  />
                  {errors.phoneNumber && (
                    <span className="error-message">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{
                required: "Please input the Confirm Password!",
                validate: (value) =>
                  value === password || "The passwords do not match!",
              }}
              render={({ field }) => (
                <div>
                  <Typography variant="body" className={formLabelClassName}>
                    Confirm Password
                  </Typography>
                  <Input
                    {...field}
                    inputType="password"
                    addonBefore={
                      <HiOutlineLockClosed
                        className="text-primary"
                        size={inputIconSize}
                      />
                    }
                    placeholder="Enter password"
                  />
                  {errors.confirmPassword && (
                    <span className="error-message">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
              )}
            />
          </Flex>
        </Flex>

        <Flex className="flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 mt-3 md:mt-0">
          <ConfigProvider
            theme={{
              token: {
                colorBgContainer: "#FFFFFF",
                colorBorder: isCheckBoxChecked ? "#c1cf16" : "#242e3970",
                borderRadius: 5,
              },
            }}
          >
            <Checkbox onChange={onCheckboxChange} className="custom-checkbox">
              <Typography variant="caption" className="cursor-pointer">
                I agree to the&nbsp;
                <span className="underline font-bold text-secondary">
                  Terms and Conditions
                </span>
              </Typography>
            </Checkbox>
          </ConfigProvider>

          <div className="my-auto">
            <Button type="primary" htmlType="submit" className="w-full">
              Register
              <BiLogInCircle className="text-secondary" size={15} />
            </Button>
          </div>
        </Flex>
      </Flex>
    </Form>
  );
};

export default SignupForm;

// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import { Checkbox, ConfigProvider, Flex, Form } from "antd";
// import Input from "@components/shared/input";
// import Button from "@components/shared/button";
// import { BiLogInCircle } from "react-icons/bi";
// import { CgMail } from "react-icons/cg";
// import { HiOutlineLockClosed } from "react-icons/hi";
// import { HiOutlineUser } from "react-icons/hi2";
// import { MdOutlinePhone } from "react-icons/md";
// import Typography from "@components/shared/typography";
// import { CheckboxChangeEvent } from "antd/es/checkbox";

// type FieldType = {
//   email: string;
//   password: string;
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   confirmPassword: string;
// };

// const SignupForm: React.FC = () => {
//   const formLabelClassName = "text-[9.5px] text-secondary mb-0.5 font-semibold";
//   const inputIconSize = 17;

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FieldType>();
//   const [isCheckBoxChecked, setIsCheckBoxChecked] =
//     React.useState<boolean>(false);

//   const onSubmit = (data: FieldType) => {
//     console.log("Form values: ✅", data);
//   };

//   const onCheckboxChange = (e: CheckboxChangeEvent) => {
//     setIsCheckBoxChecked(e.target.checked);
//   };

//   return (
//     <Form onFinish={handleSubmit(onSubmit)} className="h-full">
//       <Flex vertical justify="space-between" gap={20} className="h-full w-full">
//         <Typography variant="subTitle" className="mb-2 md:mb-0">
//           Register
//         </Typography>

//         <Flex className="gap-4 flex-col md:flex-row">
//           <Flex vertical className="w-full gap-3">
//             <Controller
//               name="firstName"
//               control={control}
//               defaultValue=""
//               rules={{ required: "Please input the First Name!" }}
//               render={({ field }) => (
//                 <div>
//                   <Typography variant="body" className={formLabelClassName}>
//                     First Name
//                   </Typography>
//                   <Input
//                     {...field}
//                     addonBefore={
//                       <HiOutlineUser
//                         className="text-primary"
//                         size={inputIconSize}
//                       />
//                     }
//                     placeholder="Enter First Name"
//                   />
//                   {errors.firstName && (
//                     <span className="error-message">
//                       {errors.firstName.message}
//                     </span>
//                   )}
//                 </div>
//               )}
//             />
//             <Controller
//               name="email"
//               control={control}
//               defaultValue=""
//               rules={{ required: "Please input the Email!" }}
//               render={({ field }) => (
//                 <div>
//                   <Typography variant="body" className={formLabelClassName}>
//                     Email
//                   </Typography>
//                   <Input
//                     {...field}
//                     addonBefore={
//                       <CgMail className="text-primary" size={inputIconSize} />
//                     }
//                     placeholder="Enter email"
//                   />
//                   {errors.email && (
//                     <span className="error-message">
//                       {errors.email.message}
//                     </span>
//                   )}
//                 </div>
//               )}
//             />
//             <Controller
//               name="password"
//               control={control}
//               defaultValue=""
//               rules={{ required: "Please input the Password!" }}
//               render={({ field }) => (
//                 <div>
//                   <Typography variant="body" className={formLabelClassName}>
//                     Password
//                   </Typography>
//                   <Input
//                     {...field}
//                     inputType="password"
//                     addonBefore={
//                       <HiOutlineLockClosed
//                         className="text-primary"
//                         size={inputIconSize}
//                       />
//                     }
//                     placeholder="Enter password"
//                   />
//                   {errors.password && (
//                     <span className="error-message">
//                       {errors.password.message}
//                     </span>
//                   )}
//                 </div>
//               )}
//             />
//           </Flex>

//           {/* Right side */}

//           <Flex vertical className="w-full gap-3">
//             <Controller
//               name="lastName"
//               control={control}
//               defaultValue=""
//               rules={{ required: "Please input the Last Name!" }}
//               render={({ field }) => (
//                 <div>
//                   <Typography variant="body" className={formLabelClassName}>
//                     Last Name
//                   </Typography>
//                   <Input
//                     {...field}
//                     addonBefore={
//                       <HiOutlineUser
//                         className="text-primary"
//                         size={inputIconSize}
//                       />
//                     }
//                     placeholder="Enter Last Name"
//                   />
//                   {errors.lastName && (
//                     <span className="error-message">
//                       {errors.lastName.message}
//                     </span>
//                   )}
//                 </div>
//               )}
//             />
//             <Controller
//               name="phoneNumber"
//               control={control}
//               defaultValue=""
//               rules={{ required: "Please input the Phone Number!" }}
//               render={({ field }) => (
//                 <div>
//                   <Typography variant="body" className={formLabelClassName}>
//                     Phone Number
//                   </Typography>
//                   <Input
//                     {...field}
//                     addonBefore={
//                       <Flex justify="space-between" gap={10}>
//                         <MdOutlinePhone
//                           className="text-primary"
//                           size={inputIconSize}
//                         />
//                         <Typography variant="body">250</Typography>
//                       </Flex>
//                     }
//                     maxLength={9}
//                     placeholder="--- --- ---"
//                   />
//                   {errors.phoneNumber && (
//                     <span className="error-message">
//                       {errors.phoneNumber.message}
//                     </span>
//                   )}
//                 </div>
//               )}
//             />
//             <Controller
//               name="confirmPassword"
//               control={control}
//               defaultValue=""
//               rules={{ required: "Please input the Confirm Password!" }}
//               render={({ field }) => (
//                 <div>
//                   <Typography variant="body" className={formLabelClassName}>
//                     Confirm Password
//                   </Typography>
//                   <Input
//                     {...field}
//                     inputType="password"
//                     addonBefore={
//                       <HiOutlineLockClosed
//                         className="text-primary"
//                         size={inputIconSize}
//                       />
//                     }
//                     placeholder="Enter password"
//                   />
//                   {errors.confirmPassword && (
//                     <span className="error-message">
//                       {errors.confirmPassword.message}
//                     </span>
//                   )}
//                 </div>
//               )}
//             />
//           </Flex>
//         </Flex>

//         <Flex className="flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 mt-3 md:mt-0">
//           <ConfigProvider
//             theme={{
//               token: {
//                 colorBgContainer: "#FFFFFF",
//                 colorBorder: isCheckBoxChecked ? "#c1cf16" : "#242e3970",
//                 borderRadius: 5,
//               },
//             }}
//           >
//             <Checkbox onChange={onCheckboxChange} className="custom-checkbox">
//               <Typography variant="caption" className="cursor-pointer">
//                 I agree to the&nbsp;
//                 <span className="underline font-bold text-secondary">
//                   Terms and Conditions
//                 </span>
//               </Typography>
//             </Checkbox>
//           </ConfigProvider>

//           <div className="my-auto">
//             <Button type="primary" htmlType="submit" className="w-full">
//               Register
//               <BiLogInCircle className="text-secondary" size={15} />
//             </Button>
//           </div>
//         </Flex>
//       </Flex>
//     </Form>
//   );
// };

// export default SignupForm;
