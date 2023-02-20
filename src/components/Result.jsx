export default function Result() {
  return (
    <div className="result">
      <h1>Your Result</h1>
      <div className="result-circle"><span className="result-score">76</span><br /> of 100</div>
      <div className="result-details">
        <p><span className="result-subtitle">Great</span> <br/>
        You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  )
}