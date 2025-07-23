import "./Timeline.css"

function TimelineEvent({ year, text }) {
  return (
    <div className="timeline-event">
      <div className="timeline-circle" />
      <h3>{year}</h3>
      <p>{text}</p>
    </div>
  );
}

export default TimelineEvent;
