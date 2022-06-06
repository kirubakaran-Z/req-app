import "./Scheduled.css";
import Sucitase from "./assets/Sucitase.png";
import user from "./assets/user-image.jpg";
import expirence from "./assets/expirence.png";
function Scheduled() {
  const items = [
    {
      name: "John Doe",
      skills: ["talk", "walk", "speak"],
      experience: 2,
      company: "Accenture",
      field: "Java Developer",
      location: "Pune",
    },
    {
      name: "John Doe",
      skills: ["talk", "walk", "speak"],
      experience: 2,
      company: "Accenture",
      field: "Java Developer",
      location: "Pune",
    },
  ];
  const listItems = items.map((d, key) => {
    return (
      <div className="ScheduledCandiates">
        <div className="can-profile">
          <img src={user} alt="profile" className="profile-pic" />
          <div className="namedetails">
            <h3>{d.name}</h3>
            <span>{d.field}</span>
          </div>
        </div>
        <div className="sud-details">
          <div className="field">
            <img src={Sucitase} alt="profile" />
            <span>Sr. {d.field}</span>
          </div>
          <div className="field">
            <img src={expirence} alt="profile" />
            <span>15-04-2022</span>
          </div>
        </div>
        <button>Cancel Interview</button>
      </div>
    );
  });
  return (
    <div className="Scheduled">
      <div className="Scheduled-Top-Bar">
        <span>Interview Schedules</span>
      </div>
      <div className="Scheduled-body">{listItems}</div>
    </div>
  );
}

export default Scheduled;
