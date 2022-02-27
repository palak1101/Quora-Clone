import React, { useState } from 'react';
import './CSS/QuoraHeader.css';
import { Modal } from "react-responsive-modal";
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlined from '@mui/icons-material/AssignmentTurnedInOutlined';
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined';
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined';
import Search from '@mui/icons-material/Search';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Button, Input } from '@mui/material';
import "react-responsive-modal/styles.css";
import { useDispatch } from 'react-redux';
import { addQuestion } from '../actions/questions';




const QuoraHeader = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const Close = (<CloseIcon />)
  const dispatch = useDispatch()


  const handleClose = () => setIsModalOpen(false);
    const handleOpen = () => setIsModalOpen(true);


  const handleSubmit = () => {
    dispatch(addQuestion(question, inputUrl))
    handleClose()
  }


  return (
    <div className="qHeader">
      <div className="qHeader-content">

        <div className="qHeader__logo">
          <img src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif" alt="logo" />
        </div>

        <div className="qHeader__icons">
          <div className="qHeader__icon"><HomeIcon /></div>
          <div className="qHeader__icon"><FeaturedPlayListOutlinedIcon /></div>
          <div className="qHeader__icon"><AssignmentTurnedInOutlined /></div>
          <div className="qHeader__icon"><PeopleAltOutlined /></div>
          <div className="qHeader__icon"><NotificationsOutlined /></div>
        </div>

        <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search questions" />
        </div>

        <div className="qHeader__Rem">
          <Avatar />
        </div>

        <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>

        <Modal
          open={isModalOpen}
          CloseIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>

          <div className="modal__info">
            <Avatar src="" className="avatar" />
            <div className="modal__scope">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>

          <div className="modal__Field">
            <Input type=" text" placeholder="Write Your Question Here"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                style={{
                  margin: "5px 0",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "2px solid #000",
                }}
                placeholder="Optional: inclue a link that gives context"
              />

              {inputUrl !== "" && (
                <img
                  style={{
                    height: "40vh",
                    objectFit: "contain",
                  }}
                  src={inputUrl}
                  alt="displayimage"
                />
              )}

            </div>

          </div>

          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            
            <button onClick={handleSubmit} style={{
              backgroundColor: "black",
              borderRadius: "20px"
            }} size='large' variant="contained" type="submit" className="add">
              Add Question
            </button>
          </div>

        </Modal>

      </div>
    </div>
  )
}

export default QuoraHeader;