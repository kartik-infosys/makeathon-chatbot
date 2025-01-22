import QuestionList from "./QuestionList";

import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";

const SelectChatPlan = ({ handleRouteChange }) => {
    return (
        <div className="select-plan">
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">Choose Version</InputLabel>
                <NativeSelect
                    defaultValue={10}
                    inputProps={{
                        name: "age",
                        id: "uncontrolled-native"
                    }}>
                    <option value={10}>Alpha</option>
                    <option value={20}>Beta</option>
                </NativeSelect>
            </FormControl>
            <QuestionList handleRouteChange={handleRouteChange} />
        </div>
    )
}

export default SelectChatPlan;