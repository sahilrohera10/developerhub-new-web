import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Typography from "@mui/material/Typography";
import "./forum.css";
import { InputLabel, TextField } from "@mui/material";
import { FormControl } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const Forum = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //for tabs
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [value1, setValue1] = React.useState("");

  const handleChange1 = (event, newvalue) => {
    setValue1(newvalue);
  };

  return (
    <div className="DContainer">
      <div className="main">
        <div className="headline">
          <h1>Disscusion Forum</h1>
        </div>
        <div className="buttn">
          <div className="search">
            <Paper
              component="form"
              className="searchbar"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 200,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Here"
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton sx={{ p: "2px" }} aria-label="search here">
                <SearchIcon />
              </IconButton>
            </Paper>
            {/* button  */}
          </div>
          <div className="clickbtn">
            <div>
              <Button
                style={{ border: "4px solid #004aad" }}
                onClick={handleOpen}
              >
                Create Post
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <div className="form_heading"> Create a new post </div>
                  </Typography>

                  <div className="forumfo">
                    <div className="title_description">
                      <span>Title:</span>
                      <input
                        className="textarea"
                        type="text"
                        style={{ width: "32.1rem" }}
                        placeholder="Enter your query title"
                      />
                    </div>
                    <div className="description">
                      <span>Descriptions:</span>
                      <textarea
                        className="textarea"
                        rows="6"
                        cols="63"
                        id="TITLE"
                        placeholder="Provide extra details..."
                      ></textarea>
                    </div>
                    <div className="forum_active_time">
                      <span>start Time:</span>
                      <input className="textarea" type="date" />
                      <span>End Time:</span>
                      <input className="textarea" type="date" />
                    </div>
                    <div className="forum_type">
                      <span>Forum:</span>
                      <select
                        className="textarea"
                        name="cars"
                        id="cars"
                        style={{ width: "32.4rem" }}
                      >
                        <option value="">Select your forum type</option>
                        <option value="Blockchain">Blockchain</option>
                        <option value="Metaverse">Metaverse</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="AR/VR">AR/VR</option>
                      </select>  

                    </div>
                    <div className="buttons">
                        <Button className="okay_btn" variant="contained">Okay</Button>
                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                      </div>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
        <div className="sliderBox">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Post for you" value="1" />
                  <Tab label="All forums" value="2" />
                  <Tab label="Your activity" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="post_u">
                  <p className="timing">week</p>

                  <div className="forum_heading">
                    <CurrencyBitcoinIcon />{" "}
                    <span className="heading_name">Blockchain</span>
                  </div>
                  <div className="heading-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quia illo nulla dignissimos alias accusamus iste,
                    repellendus odio cupiditate. Suscipit aliquid facilis illum
                    soluta ea.
                  </div>
                  <div className="reply_btn">Staff reply</div>
                  <div className="forum_bottom">
                    <div className="forum_responce">
                      <span>
                        <ThumbUpIcon />
                        Like
                      </span>
                      <span>
                        <ChatBubbleIcon />
                        Reply
                      </span>
                    </div>

                    <div className="user_details">
                      <div className="user_img">
                        <AccountCircleIcon />
                      </div>
                      <div className="user_name">name .</div>
                      <div className="reply_time">replied 3 day ago</div>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="post_u">
                  <p className="timing">week</p>

                  <div className="forum_heading">
                    <CurrencyBitcoinIcon />{" "}
                    <span className="heading_name">Blockchain</span>
                  </div>
                  <div className="heading-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quia illo nulla dignissimos alias accusamus iste,
                    repellendus odio cupiditate. Suscipit aliquid facilis illum
                    soluta ea.
                  </div>
                  <div className="reply_btn">Staff reply</div>
                  <div className="forum_bottom">
                    <div className="forum_responce">
                      <span>
                        <ThumbUpIcon />
                        Like
                      </span>
                      <span>
                        <ChatBubbleIcon />
                        Reply
                      </span>
                    </div>

                    <div className="user_details">
                      <div className="user_img">
                        <AccountCircleIcon />
                      </div>
                      <div className="user_name">name .</div>
                      <div className="reply_time">replied 3 day ago</div>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="post_u">
                  <p className="timing">week</p>

                  <div className="forum_heading">
                    <CurrencyBitcoinIcon />{" "}
                    <span className="heading_name">Blockchain</span>
                  </div>
                  <div className="heading-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quia illo nulla dignissimos alias accusamus iste,
                    repellendus odio cupiditate. Suscipit aliquid facilis illum
                    soluta ea.
                  </div>
                  <div className="reply_btn">Staff reply</div>
                  <div className="forum_bottom">
                    <div className="forum_responce">
                      <span>
                        <ThumbUpIcon />
                        Like
                      </span>
                      <span>
                        <ChatBubbleIcon />
                        Reply
                      </span>
                    </div>

                    <div className="user_details">
                      <div className="user_img">
                        <AccountCircleIcon />
                      </div>
                      <div className="user_name">name .</div>
                      <div className="reply_time">replied 3 day ago</div>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="post_u">
                  <p className="timing">week</p>

                  <div className="forum_heading">
                    <CurrencyBitcoinIcon />{" "}
                    <span className="heading_name">Blockchain</span>
                  </div>
                  <div className="heading-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quia illo nulla dignissimos alias accusamus iste,
                    repellendus odio cupiditate. Suscipit aliquid facilis illum
                    soluta ea.
                  </div>
                  <div className="reply_btn">Staff reply</div>
                  <div className="forum_bottom">
                    <div className="forum_responce">
                      <span>
                        <ThumbUpIcon />
                        Like
                      </span>
                      <span>
                        <ChatBubbleIcon />
                        Reply
                      </span>
                    </div>

                    <div className="user_details">
                      <div className="user_img">
                        <AccountCircleIcon />
                      </div>
                      <div className="user_name">name .</div>
                      <div className="reply_time">replied 3 day ago</div>
                    </div>
                  </div>
                </div>
                <hr />
              </TabPanel>
              <TabPanel value="2">All forums</TabPanel>
              <TabPanel value="3">Your activity</TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Forum;
