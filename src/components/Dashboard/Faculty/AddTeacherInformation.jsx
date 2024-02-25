import { useState } from "react";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import Container from "../../shared/Container";
import { useForm, Controller } from "react-hook-form";
import { FaCamera } from "react-icons/fa";
import Swal from "sweetalert2";

const AddTeacherInformation = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const image = data.image[0];

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_APIKEY
    }`;
    const formData = new FormData();
    formData.append("image", image);
    fetch(url, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((result) => {
        const photo = result.data.url;
        const saveTeacherInfo = { ...data, image: photo };
        fetch(`http://localhost:5000/teacherInfo/${data.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveTeacherInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (!data.data.matchedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Save Teacher Information",
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Already Save this Teacher information",
              });
            }
          });
      });
  };

  return (
    <div className="w-full">
      <SectionTitle
        heading="Add Teacher"
        subHeading="Fill in the teacher information"
      />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-4 items-end justify-items-center">
            <label
              title="Click to upload a photo"
              className="w-full flex items-center justify-center px-4 py-6 bg-gray-300 rounded-md cursor-pointer "
            >
              <FaCamera size={26} />
              {errors.image && (
                <span className="text-red-500 ml-2">
                  {errors.image.message}
                </span>
              )}
              <input
                type="file"
                className="hidden"
                accept=".jpg, .jpeg, .png"
                {...register("image", {
                  required: "image field is requerd",
                })}
              />
            </label>

            <Input
              label="Full Name"
              type="text"
              size="lg"
              placeholder="Teacher Name"
              {...register("fullName", { required: true })}
              color="light-blue"
            />
            <Input
              label="Email"
              type="email"
              size="lg"
              placeholder="example@gmail.com"
              {...register("email", { required: true })}
              color="light-blue"
            />
            <Input
              label="Phone Number"
              type="text"
              size="lg"
              placeholder="+1234567890"
              {...register("phoneNumber", { required: true })}
              color="light-blue"
            />
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <Select
                  variant="outlined"
                  color="light-blue"
                  size="lg"
                  label="Subject(s) Taught"
                  {...field}
                >
                  <Option value="Accounting">Accounting</Option>
                  <Option value="Economics">Economics</Option>
                  <Option value="Physics">Physics</Option>
                  <Option value="English">English</Option>
                  <Option value="Bangla">Bangla</Option>
                  <Option value="Match">Match</Option>
                  <Option value="Finance">Finance</Option>
                  <Option value="History">History</Option>
                  <Option value="Islamic Studies">Islamic Studies</Option>
                </Select>
              )}
            />
            <Controller
              name="religion"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  variant="outlined"
                  color="light-blue"
                  size="lg"
                  label="Religion"
                  {...field}
                >
                  <Option value="Islam">Islam</Option>
                  <Option value="Christianity">Christianity</Option>
                  <Option value="Hinduism">Hinduism</Option>
                  <Option value="Buddhism">Buddhism</Option>
                </Select>
              )}
            />
            <Controller
              name="yearsOfExperience"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  variant="outlined"
                  color="light-blue"
                  size="lg"
                  label="Years of Experience"
                  {...field}
                >
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                </Select>
              )}
            />
            <Controller
              name="gender"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  variant="outlined"
                  color="light-blue"
                  size="lg"
                  label="Gender"
                  {...field}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              )}
            />
            <Controller
              name="maritalStatus"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  variant="outlined"
                  color="light-blue"
                  size="lg"
                  label="Marital Status"
                  {...field}
                >
                  <Option value="Single">Single</Option>
                  <Option value="Married">Married</Option>
                  <Option value="Divorced">Divorced</Option>
                  <Option value="Widowed">Widowed</Option>
                  <Option value="Engaged">Engaged</Option>
                  <Option value="It's complicated">It`s complicated</Option>
                </Select>
              )}
            />

            <Input
              label="Nationality"
              type="text"
              size="lg"
              placeholder="Bangladeshi"
              {...register("nationality", { required: true })}
              color="light-blue"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <Textarea
              label="Present Address"
              size="lg"
              {...register("presentAddress", { required: true })}
              color="light-blue"
            />
            <Textarea
              label="Permanent Address"
              size="lg"
              {...register("permanentAddress", { required: true })}
              color="light-blue"
            />
          </div>

          <div className="flex justify-end mt-4">
            <Button color="blue" type="submit">
              Add Teacher
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddTeacherInformation;
