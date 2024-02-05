import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePickerInput = ({ name }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={["DatePicker"]}>
        <DatePicker label="Date of Birth" name={name} />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePickerInput;
