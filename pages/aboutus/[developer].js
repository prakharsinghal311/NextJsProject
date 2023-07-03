import { useRouter } from "next/router";

// our-domain.com/aboutus/developer

function AboutUsPage() {
  const router = useRouter();

  const developerId = router.query.developer;

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  let developerName;
  let developerRole;
  let flag = 0;

  details.forEach((person) => {
    if (developerId == person.id) {
      developerName = person.name;
      developerRole = person.role;
      flag = 1;
    }
  });

  if (flag === 0) {
    developerName = "developer";
    developerRole = "doesn't exist";
  }

  return (
    <>
      <h4>{developerName}</h4>&nbsp;<h4>{developerRole}</h4>
    </>
  );
}

export default AboutUsPage;
