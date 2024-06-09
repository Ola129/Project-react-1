import Expert from "../Expert/Expert";
import experts from "../../data/experts";
import "./Experts.css";

const Experts = () => {
  return (
    <div className="experts_background">
      <div className="container">
        <section id="middle_container">
          <h1 className="experts_heading padding_title">Nasi specjaliści</h1>
          <div className="expert_container">
            {experts.map((expert, index) => (
              <Expert
                key={index}
                name={expert.name}
                bio={expert.bio}
                image={expert.image}
                gender={expert.gender}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experts;
