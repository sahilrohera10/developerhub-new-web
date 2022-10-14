import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import "./adminForm.css";
import { Container, Row, Col } from "react-bootstrap";


//chip for access right selection
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

const access = [
  'Modify',
  'Add',
  'Change',
  'Delete'
];

function getStyles(access, accessGiven, theme) {
  return {
    fontWeight:
      accessGiven.indexOf(access) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const AdminForm = () => {
  //chip for access right selection
  const theme = useTheme();
  const [accessGiven, setaccessGiven] = React.useState([]);

  const handleChangeaccess = (event) => {
    const {
      target: { value },
    } = event;
    setaccessGiven(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



  const [admin, setAdmin] = React.useState("");
  const [department, setdepartment] = React.useState("");
  const [networking, setNetworking] = React.useState("");
  const [feedback, setfeedback] = React.useState("");
  const [deactivate, setdeactivate] = React.useState("");
  const [courses, setcourses] = React.useState("");
  const [listpartner, setlistpartner] = React.useState("");

  const handleChange = (event) => {
    setAdmin(event.target.value);
  };
  const handleChange1 = (event) => {
    setdepartment(event.target.value);
  };
  const handleChange2 = (event) => {
    setNetworking(event.target.value);
  };
  const handleChange3 = (event) => {
    setfeedback(event.target.value);
  };
  const handleChange4 = (event) => {
    setdeactivate(event.target.value);
  };

  const handleChange5 = (event) => {
    setcourses(event.target.value);
  };

  const handleChange6 = (event) => {
    setlistpartner(event.target.value);
  };

  //department show hide as per selection
  const [type, settype] = useState("");
  const [type1, settype1] = useState("");
  const [departmentVisible1, setdepartmentVisible] = useState(false);
  const [departmentVisible2, setdepartmentVisible2] = useState(false);
  const [restContentVisible, setrestContentVisible] = useState(false);
  const [CoursesVisible, setcoursesVisible] = useState(false);
  const [CoursesVisible1, setcoursesVisible1] = useState(false);
  const [CoursesVisible2, setcoursesVisible2] = useState(false);
  const [partnerVisible, setpartnerVisible] = useState(false);
  useEffect(() => {
    type === "sub" ? setdepartmentVisible(true) : setdepartmentVisible(false);
    type === "sub1"
      ? setdepartmentVisible2(true)
      : setdepartmentVisible2(false);
    type === "superadmin"
      ? setrestContentVisible(true)
      : setrestContentVisible(false);
  }, [type]);

  useEffect(() => {
    
    type1 === "courses" ? setcoursesVisible(true) : setcoursesVisible(false);
    type1 === "courses1" ? setcoursesVisible1(true) : setcoursesVisible1(false);
    type1 === "courses2" ? setcoursesVisible2(true) : setcoursesVisible2(false);
    type1 === "partners" ? setpartnerVisible(true) : setpartnerVisible(false);
  }, [type1]);

  const handleOnChange = (e) => {
    settype(e.target.value);
  };
  const handleOnChange1 = (e) => {
    settype1(e.target.value);
  };
  return (
    <Container className="Container">
      <h1>Admin Registration Form</h1>
      <Row>
        <Col md={6}>
          <Row>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Moblie No."
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Organization"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Reporting Manager"
                variant="outlined"
              />
            </Box>
          </Row>
     <Row>
      <div className="access_control">
      <FormControl sx={{ m: 1, width: 218 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Admin
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={type}
                onChange={handleOnChange}
                label="Admin"
              >
                <MenuItem value="superadmin">Super Admin</MenuItem>
                <MenuItem value="sub">Sub-Super Admin </MenuItem>
                <MenuItem value="sub1">Sub Sub-Super Admin</MenuItem>
              </Select>
            </FormControl>
     
        <FormControl sx={{ m: 1, width: 220 }}>
        <InputLabel id="demo-multiple-chip-label">Access Rights</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={accessGiven}
          onChange={handleChangeaccess}
          input={<OutlinedInput id="select-multiple-chip" label="Access Right" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {access.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, accessGiven, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      </div>
          </Row>
          <Row style={{ marginLeft: "1px" }}>
           
          </Row>
          {/* if user select as sub or sub super admin */}
          <Row>
            <Col md={6}>
              {departmentVisible1 && (
                <div>
                  <FormControl sx={{ m: 1, minWidth: 218 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Department
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={type1}
                      onChange={handleOnChange1}
                      label="Department"
                    >
                      <MenuItem value="courses">Training</MenuItem>
                      <MenuItem value="Billing">Billing</MenuItem>
                      <MenuItem value="courses1">Certification</MenuItem>
                      <MenuItem value="courses2">Content</MenuItem>
                      <MenuItem value="Registration">Registration</MenuItem>
                      <MenuItem value="Verification">Verification</MenuItem>
                      <MenuItem value="partners">Channel-Partner</MenuItem>
                      <MenuItem value="Social-Media">Social-Media</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}
              {departmentVisible2 && (
                <div>
                  <FormControl sx={{ m: 1, minWidth: 218 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Department
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={type1}
                      onChange={handleOnChange1}
                      label="Department"
                    >
                      <MenuItem value="courses">Training</MenuItem>
                      <MenuItem value="Billing">Billing</MenuItem>
                      <MenuItem value="courses1">Certification</MenuItem>
                      <MenuItem value="Content">Content</MenuItem>
                      <MenuItem value="Registration">Registration</MenuItem>
                      <MenuItem value="Verification">Verification</MenuItem>
                      <MenuItem value="partners">Channel-Partner</MenuItem>
                      <MenuItem value="Social-Media">Social-Media</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}
            </Col>

            <Col md={6}>
              {CoursesVisible && (
                <div className="dep_courses">
                  <FormControl sx={{ m: 1, minWidth: 218 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      List of Courses
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={courses}
                      onChange={handleChange5}
                      label="List of Courses"
                    >
                      <MenuItem value="Billing">Blockchain</MenuItem>
                      <MenuItem value="Certification">Metaverse</MenuItem>
                      <MenuItem value="Content">AR/VR</MenuItem>
                      <MenuItem value="Registration">AI/ML</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}

              {CoursesVisible1 && (
                <div className="dep_courses">
                  <FormControl sx={{ m: 1, minWidth: 218 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      List of Courses
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={courses}
                      onChange={handleChange5}
                      label="List of Courses"
                    >
                      <MenuItem value="Billing">Blockchain</MenuItem>
                      <MenuItem value="Certification">Metaverse</MenuItem>
                      <MenuItem value="Content">AR/VR</MenuItem>
                      <MenuItem value="Registration">AI/ML</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}
                {CoursesVisible2 && (
                <div className="dep_courses">
                  <FormControl sx={{ m: 1, minWidth: 218 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      List of Courses
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={courses}
                      onChange={handleChange5}
                      label="List of Courses"
                    >
                      <MenuItem value="Billing">Blockchain</MenuItem>
                      <MenuItem value="Certification">Metaverse</MenuItem>
                      <MenuItem value="Content">AR/VR</MenuItem>
                      <MenuItem value="Registration">AI/ML</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}

              {partnerVisible && (
                <div className="dep_partner">
                  <FormControl sx={{ m: 1, minWidth: 218 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      List of Partner
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={listpartner}
                      onChange={handleChange6}
                      label="List of Partner"
                    >
                      <MenuItem value="Jobs">Jobs</MenuItem>
                      <MenuItem value="Projects">Projects</MenuItem>
                      <MenuItem value="Internship">Internship</MenuItem>
                      <MenuItem value="R&D">R&D</MenuItem>
                      <MenuItem value="Incubation">Incubation</MenuItem>
                      <MenuItem value="Accelerator">Accelerator</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}
            </Col>
          </Row>
          {/* if user select superadmin */}
          {restContentVisible && <div className="rest_content"></div>}
          <FormControl sx={{ m: 1, width: 218 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Networking Zone
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={networking}
              onChange={handleChange2}
              label="Networking Zone"
            >
              <MenuItem value="Groups">Groups</MenuItem>
              <MenuItem value="Forum">Forum </MenuItem>
              <MenuItem value="Community">Community</MenuItem>
              <MenuItem value="D.Board">D.Board</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 218 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Feedback Approval
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={feedback}
              onChange={handleChange3}
              label="Feedback Approval"
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>{" "}
          <FormControl sx={{ m: 1, minWidth: 218 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Deactivate
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={deactivate}
              onChange={handleChange4}
              label="Deactivate"
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>
          <div>
            <Button
              style={{ width: "100px", margin: "8px" }}
              variant="contained"
              //   onClick={}
            >
              Ok
            </Button>

            <Button
              style={{ width: "100px" }}
              variant="contained"
              //   onClick={}
            >
              Cancel
            </Button>
          </div>
        </Col>
        <Col md={6}>
          <img className="img" src="img.jpg" alt="image" />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminForm;
