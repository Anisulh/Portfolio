import { Iexperience } from "../../types";

function WorkExperienceCard({ experience }: { experience: Iexperience }) {
  return (
    <div className="h-full flex-1">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-medium">{experience.name}</h3>
          <p className="pb-8 text-gray-300 ">{experience.title}</p>
        </div>
        <p className="text-sm md:text-base text-right">{experience.date}</p>
      </div>

      <h4 className="font-medium md:text-lg">Achievements</h4>
      <ul className="list-disc pl-10 ">
        {experience?.achievements.map((feature, index) => {
          return (
            <li
              key={index}
              className=" text-gray-300 pb-2 text-sm md:text-base"
            >
              {feature}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WorkExperienceCard;
