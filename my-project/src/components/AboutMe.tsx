import { useEffect, useState } from "react";

interface TimelineItem {
  year: string;
  description: string;
  image: string;
  text: string;
}

const AboutMe = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);

  useEffect(() => {
    async function fetchTimelineData() {
      try {
        const response = await fetch("/aboutMe.json"); // Fetch from public folder
        const jsonData = await response.json();
        setTimelineData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchTimelineData();
  }, []);

  return (
    <>
      <section id="aboutMe">
        <div className="container">
          <h1 className="title">About Me</h1>

          {timelineData.map((item) => (
            <div key={item.year} className="event">
              <div className="left">
                <h2>{item.year}</h2>
                <img src={item.image} alt={item.description} />
              </div>
              <div className="right">
                <h4>{item.description}</h4>
                <p className="text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default AboutMe;
