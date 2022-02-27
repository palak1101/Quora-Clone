import React from "react";
import "./CSS/Feed.css";
import Post from "./Post";
import QuoraBox from "./QuoraBox";
import axios from "axios";
import { useEffect, useState } from "react";

const Feed = () => {

  const [questions, setQuestions] = useState([])

  const getQuestions = async () => {
    const res = await axios.get('https://palak-quora-api.herokuapp.com/api/v1/question/all')

    const { question } = res.data
    setQuestions(question.reverse())
  }

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <div className="feed">
      <QuoraBox />
      {/* <Post /> */}
      {
        questions.map((question) => <Post question={question} />)
      }

    </div>
  );
}

export default Feed;