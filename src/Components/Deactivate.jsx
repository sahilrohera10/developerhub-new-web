import React from 'react'
import './Deactivate.css'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Deactivate = () => {
    const [selected1, setSelected1] = React.useState(false);
    const [selected2, setSelected2] = React.useState(false);
    const [selected3, setSelected3] = React.useState(false);
    const [selected4, setSelected4] = React.useState(false);
    const [selected5, setSelected5] = React.useState(false);
    const [selected6, setSelected6] = React.useState(false);

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="DContainer">
            <div className="main1">
                <div className="deact_Container">
                    <div className="deact_Title">
                        <h3>Deactivation form</h3>
                    </div>
                    <div className="upperpart">
                        <div className="subU">
                            <p>Sad to see you go</p>
                            <div className="deact_msg">
                                < SentimentVeryDissatisfiedIcon className='icon' />
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam et itaque molestias, esse est, debitis unde harum consequuntur corrupti voluptatum blanditiis corporis perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor, ducimus unde doloribus delectus quas beatae quos autem iure magnam.
                                </span>
                            </div>
                        </div>
                        <div className="deact_subHead">
                            <p>Reason for leaving?</p>
                            <div className="boxes">
                                <ToggleButton
                                    style={{ margin: '5px' }}
                                    value="check"
                                    selected={selected1}
                                    onChange={() => {
                                        setSelected1(!selected1);
                                    }}
                                >
                                    <div className="boxselection">Not sure why</div>
                                </ToggleButton>
                                <ToggleButton
                                    style={{ margin: '5px' }}
                                    value="check"
                                    selected={selected2}
                                    onChange={() => {
                                        setSelected2(!selected2);
                                    }}
                                >
                                    <div className="boxselection">Bug issue</div>
                                </ToggleButton>
                                <ToggleButton
                                    style={{ margin: '5px' }}
                                    value="check"
                                    selected={selected3}
                                    onChange={() => {
                                        setSelected3(!selected3);
                                    }}
                                >
                                    <div className="boxselection">Course completed </div>

                                </ToggleButton>

                            </div>
                            <div className="boxes">
                                <ToggleButton
                                    style={{ margin: '5px' }}
                                    value="check"
                                    selected={selected4}
                                    onChange={() => {
                                        setSelected4(!selected4);
                                    }}
                                >
                                    <div className="boxselection">Was not good enough</div>
                                </ToggleButton>
                                <ToggleButton
                                    style={{ margin: '5px' }}
                                    value="check"
                                    selected={selected5}
                                    onChange={() => {
                                        setSelected5(!selected5);
                                    }}
                                >
                                    <div className="boxselection">Problem not solved</div>

                                </ToggleButton>
                                <ToggleButton
                                    style={{ margin: '5px' }}
                                    value="check"
                                    selected={selected6}
                                    onChange={() => {
                                        setSelected6(!selected6);
                                    }}
                                >
                                    <div className="boxselection">Confused</div>

                                </ToggleButton>

                            </div>
                            <p>
                                <b>Give us your feedback.</b>
                            </p>
                            <p> Tell us why you're leaving</p>
                            <textarea
                                className="textarea"
                                rows="6"
                                id="TITLE"
                                placeholder="I'm leaving because..."
                            ></textarea>
                            <div className="button_clss">
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {"Are you sure ?"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laboriosam odio eum 
                                           tempora nesciunt dolorum ullam dignissimos? Quos corrupti voluptatibus numquam 
                                           architecto ut!
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={()=>navigate('/')}>No</Button>
                                        <Button onClick={()=>navigate('/success')} autoFocus>
                                            Yes
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                <Button variant="contained" style={{ marginRight: '25px' }} onClick={handleClickOpen}>Deactivate</Button>
                                <Button variant="outlined" style={{ marginRight: '12px' }} onClick={() => navigate('/')}>Cancel</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deactivate;
