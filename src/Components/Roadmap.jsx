import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./roadmap.css";
import roadmapImg from "../assets/roadmap.jpg";

const steps = [
  {
    label: "Register for free",
    description: `Confused about which technology to target next? Register for FREE and explore our platform.
.`,
  },
  {
    label: "Select a course",
    description:
      "Pick a technology that fascinates you and find the best courses to MASTER it.",
  },
  {
    label: "Get Trained",
    description:
      "Experience learning from the best of the mentors in the industry.",
  },
  {
    label: "Build Projects",
    description:
      "Master the technology by trying hands on and creating some AWESOME stuff",
  },
  {
    label: "Get Certified",
    description:
      "Master the technology by trying hands on, create some AWESOME stuff and get certified",
  },
  {
    label: "Get Placement Support",
    description: `After boosting your career, get into your DREAM companies with your DREAM offers. `,
  },
];

export default function Roadmap() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="roadmap_body">
      <p className="roadmap_heading">
        How To <span className="gradient__text">START</span>
      </p>
      <div className="roadmap_container">
        <div className="left_roadmap">
          <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 5 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )}
          </Box>
        </div>
        <div className="right_roadmap">
          <div className="right_image">
            <img className="right_image" src={roadmapImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
