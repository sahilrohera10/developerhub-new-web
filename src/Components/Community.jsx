import React from "react";
import "./community.css";
import community from "./../assets/community.jpg";
import community1 from "./../assets/cas.jpg";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import DialogActions from '@mui/material/DialogActions';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Developer",
  "Expert",
  "R&D",
  "Innovation",
  "Architect",
  "RCA",
  "Implementation",
  "Support",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Community = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="C_Community">
      <div className="C_Grp">
        <div className="C_headline">
         
          <h1 className="C_title">Community</h1>
          <h1 className="join">Join Us </h1>
        </div>
        <img className="C_img" src={community} alt="" />
      </div>

      <div className="C_Grp1">
        <div className="C_headline">
         
        <div className="Cform">
        <h1 className="join_title">Join Us as </h1>
        <div className="c_formFiled">
          <div className="C_filed">
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">Contributor</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={
                  <OutlinedInput
                    id="select-multiple-chip"
                    label="Contributor"
                  />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="another_filed">
            <FormControl>
              {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Learner"
                  control={<Radio />}
                  label="Learner"
                />
                <FormControlLabel
                  value="Advocate"
                  control={<Radio />}
                  label="Advocate"
                />
                <FormControlLabel
                  value="Buddies"
                  control={<Radio />}
                  label="Buddies"
                />
              </RadioGroup>
              <div className="com_button">
              <DialogActions >
              <Button variant="outlined">CANCEL</Button>
              <Button variant="contained">OK</Button>
              </DialogActions>
              </div>
             
            </FormControl>
          </div>
        </div>
      </div>
        </div>
        <img className="C_img1" src={community1} alt="" />
      </div>
     
    </div>
  );
};

export default Community;
