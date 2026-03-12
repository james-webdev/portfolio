import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div style={{ background: '#01bbae' }} className="flex rounded-md justify-center items-center mt-40 sm:mt-28 mb-8 mb-20 sm:mb-10">
          <Image className="w-72 rounded-lg shadow-lg" src="/images/James-nobg.png" alt="" width={288} height={288} />
        </div>

        <div className="h-96 ml-8 mr-8 mt-12 sm:mt-3 flex flex-col mb-80 md:mt-5 max-w-3xl text-center justify-center items-center">
          <p className="text-md sm:text-xl">
            At the beginning of 2019, after 9 years teaching business English in
            Paris and facing the closure of a
            <a
              className="textSiteGreen"
              href="https://www.instagram.com/refresh.coldpress/"
            >
              &nbsp;cold-pressed juice company&nbsp;
            </a>
            I&apos;d set up, I was looking for a new direction.{" "}
          </p>
          <p className="text-md sm:text-xl mt-5">
            A succession of serendipitous events led me to development. I was able
            to apply for and get on a course in PHP focused web and mobile web
            development. I followed this up with a course in Full Stack
            JavaScript development.
          </p>
          <p className="text-md sm:text-xl mt-5">
            I have been coding nearly every day for 7 years now and have worked on a range of <Link
              className="textSiteGreen"
              href="/projects"
            >
              projects&nbsp;
            </Link>
            in different stacks. The past 3 years I have been working full-time at <a
              className="textSiteGreen"
              href="https://www.goldbroker.com"
            >
              GoldBroker
            </a> as a Frontend developer. I&apos;m currently helping them build a design system and redo the frontend in React, Next and TypeScript.
          </p>

          <p className="text-md sm:text-xl mt-5">
            Outside of work I enjoy road biking, swimming and reading.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
