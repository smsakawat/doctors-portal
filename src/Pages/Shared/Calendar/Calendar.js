import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import TextField from "@mui/material/TextField";

// i have to use in different pages so i kept this compenent in shared section and i also have to install mui lab and mui material (you will find it in doc) and also date-fns to make this work
const Calendar = ({ date, setDate }) => {
  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          //   openTo="year"
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
