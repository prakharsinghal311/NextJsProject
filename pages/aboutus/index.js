// our-domain.com/aboutus
import Link from "next/link";

function AboutUsPage() {
  return (
    <>
      <ul>
        <li>
          <Link href="/aboutus/1">Yash</Link>
        </li>
        <li>
          <Link href="/aboutus/2">Vaibhav</Link>
        </li>
        <li>
          <Link href="/aboutus/3">Suresh</Link>
        </li>
      </ul>
    </>
  );
}

export default AboutUsPage;
