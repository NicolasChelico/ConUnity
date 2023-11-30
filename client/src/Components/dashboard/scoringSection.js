import{ React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import './scoringSection.css';
import ScoreRow from "./scoreRow";
import axios from 'axios'

const ScoringSection = props => {

    const [averages, setAverages] = useState([]);
    const {id, courseID} = useParams();
    console.log(courseID)

    useEffect(() =>{
        const fetchAverages = async () => {
            try{
                const res = await axios.get(`http://localhost:8801/Averages/${id}/${courseID}`)
                setAverages(res.data)
            }catch(err){
                console.error(err)
            }
        }
        fetchAverages()
    },[])
    console.log(averages)
    return(
        <div className="row">
            <div className="ratings__parent">
                <h1 className="rating__title">RATINGS</h1>
                <p>out of five</p>
            </div>
            {averages.map((o) => {
                return(
                    <>
                        <ScoreRow title={'Exams: '} score={o.examRating}/>
                        <ScoreRow title={'Assignments: '} score={o.assRating}/>
                        <ScoreRow title={'Overall: '} score={o.contentRating}/>
                    </>
                )
            })}           
            <div className="number__reviews"><p># of reviews: {props.totalReviews}</p></div>
        </div>
    )
}


export default ScoringSection;