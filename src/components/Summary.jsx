import data from "../data"

export default function Summary() {
  const elements = data.map(({category, score, Icon}, ind) => (
    <div key={ind} id={category.toLowerCase()} className="category">
      <span><Icon className="icon" />{category}</span> <span className="score">{score} <span className="total">/ 100</span></span>
    </div>
  ))

  return (
    <div className="summary">
      <h2>Summary</h2>
      {elements}
      <button>Continue</button>
    </div>
  )
}