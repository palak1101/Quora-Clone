import React, { useState } from 'react'
import { Avatar } from "@mui/material";
import { Modal } from "react-responsive-modal";
import './CSS/Post.css';
import {
    ArrowUpwardOutlined,
    ArrowDownwardOutlined,
    ChatBubbleOutlined,
    MoreHorizOutlined,
    RepeatOneOutlined,
    ShareOutlined
} from '@mui/icons-material';
import "react-responsive-modal/styles.css";
import CloseIcon from "@mui/icons-material/Close";
import ReactTimeAgo from 'react-time-ago';
import { useDispatch } from 'react-redux';
import { addAnswer } from '../actions/answer';
import ReactHtmlParser from 'html-react-parser';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";



const Post = ({ question }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [answer, setAnswer] = useState("")
    const dispatch = useDispatch()

    const handleClose = () => setIsModalOpen(false);
    const handleOpen = () => setIsModalOpen(true)

    const Close = (<CloseIcon />)

    //console.log(question)


    function LastSeen({ date }) {
        return (
            <div>
                <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
            </div>
        )
    }


    const handleAnswer = (value) => {
        //console.log(value)
        setAnswer(value)
    }


    const handleSubmit = () => {
        if (question?._id && answer !== "") {
            dispatch(addAnswer(answer, question?._id))
            handleClose()
        }
    }


    return (
        <div className="post">
            <div className="post__info">
                <Avatar />
                <h4>User Name</h4>
                <small><LastSeen date={question?.date} /></small>
            </div>

            <div className="post__body">
                <p>{question?.questionContent}</p>

                <button onClick={() => { setIsModalOpen(true) }} className="post__btnAnswer">Answer</button>

                <Modal
                    open={isModalOpen}
                    closeIcon={Close}
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

                    <div className="modal__question">
                        <h1>{question?.questionContent}</h1>
                        <p>
                            asked by {" "}
                            <span className="name">
                                Username
                            </span> on {" "}
                            <span className="name">
                                {new Date(question?.date).toLocaleString()}
                            </span>
                        </p>
                    </div>

                    <div className="modal__answer">
                        <ReactQuill placeholder='Enter your answer'
                            value={answer}
                            onChange={handleAnswer} />
                    </div>

                    <div className="modal__button">
                        <button className="cancle" onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </button>
                        <button type="submit" onClick={handleSubmit} className="add">
                            Add Answer
                        </button>
                    </div>

                </Modal>

                {
                    question.questionUrl !== "" && <img src={question?.questionUrl} alt="question url" />
                }

            </div>

            <div className="post__footer">

                <div className="post__footerAction">
                    <ArrowUpwardOutlined />
                    <ArrowDownwardOutlined style={{
                        marginLeft: "30px"
                    }} />
                </div>

                <RepeatOneOutlined />
                <ChatBubbleOutlined />

                <div className="post__footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>

            </div>

            <p style={{
                color: "rgba(0, 0, 0, 0.5)",
                fontSize: "12px",
                fontWeight: "bold",
                margin: "10px 0"
            }}>{question?.allAnswers.length} Answers</p>

            <div style={{
                margin: "5px 0px 0px 0px",
                padding: "5px 0px 0px 20px",
                borderTop: "1px solid lightgray"
            }} className="post__answer">

                {
                    question?.allAnswers?.map(answer =>
                        <>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                padding: "8px 5px",
                                borderTop: "1px solid lightgray"
                            }} className="post-answerContainer">
                                <div style={{

                                    display: "flex",
                                    alignItems: "center",
                                    // marginBottom: "0px",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    color: "#888"
                                }} className="post-answered">
                                    <Avatar />
                                    <div className="post-info">
                                        <p style={{
                                            marginLeft: "10px"
                                        }}>Username</p>
                                        <p style={{
                                            marginLeft: "10px"
                                        }}><LastSeen date={answer?.date} /></p>
                                    </div>
                                </div>
                                <div className="post-answer">
                                    {ReactHtmlParser(answer?.answerContent)}
                                </div>
                            </div>
                        </>)
                }


            </div>
        </div>
    )
}

export default Post;