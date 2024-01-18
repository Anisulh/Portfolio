import { Iexperience } from "../../types";



function WorkExperienceCard({ experience }: { experience: Iexperience }) {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-medium">{experience.name}</h3>
          <p className="pb-8 text-gray-300 ">{experience.title}</p>
        </div>
        <p>{experience.date}</p>
      </div>

      <h4 className="font-medium text-lg">Achievements</h4>
      <ul className="list-disc pl-10 ">
        {experience?.achievements.map((feature, index) => {
          return (
            <li key={index} className=" text-gray-300 pb-2">
              {feature}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WorkExperienceCard;
