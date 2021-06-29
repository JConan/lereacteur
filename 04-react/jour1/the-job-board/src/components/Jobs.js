import Job from "./Job";
import './Jobs.css'

const Jobs = (props) =>
    <div className="Jobs">
        {
            props.jobDatas.map((jobData, index) =>
                <Job key={index} title={jobData.title} contractType={jobData.contractType}
                    country={jobData.country} city={jobData.city} color={jobData.color} />)
        }
    </div>

export default Jobs;