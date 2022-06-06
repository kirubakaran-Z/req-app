import "./Candidates.css";
// import images
import addUser from "./assets/add-user.png";
import expirence from "./assets/expirence.png";
import normal from "./assets/normal-user.png";
import settings from "./assets/settings.png";
import Sucitase from "./assets/Sucitase.png";
import user from "./assets/user-image.jpg";
import web from "./assets/web.png";

function Candidates() {
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
      name: "Kiruba",
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
      <div className="Candiate-body">
        <div className="UserIcon">
          <img src={user} alt="profile" />
        </div>
        <div className="user-details">
          <div className="eashField">
            <img src={normal} alt="profile" />
            <h3>{d.name}</h3>
            <span>({d.location})</span>
          </div>
          <div className="eashField">
            <div className="simpleContent">
              <div className="eashField">
                <img src={Sucitase} alt="profile" />
                <span>{d.field}</span>
              </div>
              <div className="eashField">
                <img src={expirence} alt="profile" />
                <span>{d.experience}+ Years</span>
              </div>
            </div>
            <div className="simpleContent">
              <div className="eashField">
                <img src={web} alt="profile" />
                <span>{d.company}</span>
              </div>
              <div className="eashField">
                <img src={settings} alt="profile" />
                <span>{d.skills.length}+ Skills</span>
              </div>
            </div>
          </div>
        </div>
        <button className="shortlist">Shortlist</button>
      </div>
    );
  });
  return (
    <div className="CandiateMain">
      <div className="Top-Bar">
        <span className="ACTIVE">List of Candidates</span>
        <span>List of Candidates</span>
      </div>
      <div className="borderd">
        <span>Create Candiate Profile</span>
      </div>
      {listItems}
    </div>
  );
}

export default Candidates;
