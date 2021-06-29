import './Job.css'

const Job = (props) =>
    <div className={`Job ${props.color}`}>
        <div>{props.title}</div>
        <div>{[props.contractType, props.country, props.city].join(' - ')}</div>
    </div>

export default Job