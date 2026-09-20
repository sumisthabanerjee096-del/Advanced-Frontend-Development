import './Badge.css'

function Badge({ type, value }) {
  return (
    <span className={`badge badge--${type}-${value.toLowerCase()}`}>
      {value}
    </span>
  )
}

export default Badge
