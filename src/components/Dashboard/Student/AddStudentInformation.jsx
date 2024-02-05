import { Button, Input, Option, Select } from "@material-tailwind/react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { useForm, Controller } from "react-hook-form";
import { FaCamera } from "react-icons/fa";
import Container from "../../shared/Container";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AddStudentInformation = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    const image = data.image[0];

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_APIKEY
    }`;
    const formData = new FormData();
    formData.append("image", image);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        const photo = result.data.url;
        const saveStudentInfo = { ...data, image: photo };
        fetch(`http://localhost:5000/studentInfo/${data.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveStudentInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (!data.data.matchedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Save Student Information",
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Already Save this student information",
              });
            }
          });
      });

    console.log(data);
  };



  return (
    <div className="w-full">
      <SectionTitle
        heading="Add Student"
        subHeading="fill the add student information"
      />
      <Container>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-4 items-center justify-center justify-items-center">
              <label
                title="Click to upload a photo"
                className="w-full flex items-center justify-center px-4 py-6 bg-gray-300 rounded-md cursor-pointer "
              >
                <FaCamera size={26} />
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
                size="lg"
                label="Full Name"
                type="text"
                placeholder="Student Name"
                {...register("fullName", { required: true })}
                color="light-blue"
              />
              <Input
                size="lg"
                label="Father's Name"
                type="text"
                placeholder="Father's Name"
                {...register("fatherName", { required: true })}
                color="light-blue"
              />
              <Input
                size="lg"
                label="Mother's Name"
                type="text"
                placeholder="Mother's Name"
                {...register("motherName", { required: true })}
                color="light-blue"
              />

              <Input
                size="lg"
                type="text"
                label="Nationality"
                placeholder="Bangladeshi"
                {...register("nationality", { required: true })}
                color="light-blue"
              />
              <Input
                size="lg"
                type="date"
                label="Date of Birth"
                {...register("dob", { required: true })}
                color="light-blue"
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
                name="blodGroup"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    variant="outlined"
                    color="light-blue"
                    size="lg"
                    label="Blod Group"
                    {...field}
                  >
                    <Option value="A+">A+</Option>
                    <Option value="A-">A-</Option>
                    <Option value="B+">B+</Option>
                    <Option value="B-">B-</Option>
                    <Option value="B-">B-</Option>
                    <Option value="AB+">AB+</Option>
                    <Option value="AB-">AB-</Option>
                    <Option value="O+">O+</Option>
                    <Option value="O-">O-</Option>
                  </Select>
                )}
              />
              <Input
                size="lg"
                type="number"
                placeholder="+88016*****"
                label="Student Number"
                {...register("studentNumber", { required: true })}
                color="light-blue"
              />
              <Input
                size="lg"
                type="text"
                placeholder="Mirpur, Dhaka, Bangladesh"
                label="Address"
                {...register("address", { required: true })}
                color="light-blue"
              />
              <Input
                size="lg"
                type="email"
                placeholder="example@gmail.com"
                label="Email"
                {...register("email", { required: true })}
                color="light-blue"
              />
              <Input
                size="lg"
                type="number"
                placeholder="+88016*****"
                label="Father's or Mother's Number"
                {...register("studentNumber", { required: true })}
                color="light-blue"
              />
              <Controller
                name="class"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    variant="outlined"
                    color="light-blue"
                    size="lg"
                    label="Class"
                    {...field}
                  >
                    <Option value="nine">9</Option>
                    <Option value="ten">10</Option>
                    <Option value="interFirstYear">Inter 1st Year</Option>
                    <Option value="interSecondYear">Inter 2nd Year</Option>
                  </Select>
                )}
              />
              <Controller
                name="department"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    variant="outlined"
                    color="light-blue"
                    size="lg"
                    label="Department"
                    {...field}
                  >
                    <Option value="commerce">Commerce</Option>
                    <Option value="science">Science</Option>
                    <Option value="arts">Arts</Option>
                  </Select>
                )}
              />
              <Input
                size="lg"
                type="date"
                label="Admission Date"
                {...register("admissionDate", { required: true })}
                color="light-blue"
              />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddStudentInformation;
