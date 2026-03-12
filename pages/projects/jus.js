import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";

const Jus = () => {
  return (
    <Layout>
      <div className="mt-20 ml-5 mr-5 sm:ml-20 sm:mr-20 lg:ml-60 lg:mr-60 mb-28">
        <h1 className="font-bold text-3xl 2xl:text-5xl">
          Juice e-commerce app
        </h1>
        <div className="flex w-full sm:w-1/2 justify-start mt-5">
          <p className="2xl:text-2xl mt-3">
            This was my final course project I did at AFPA in 2019 for my web
            and mobile web developer qualification (equivalent to a Foundation
            Degree in the{" "}
            <a
              className="textSiteGreen"
              href="https://en.wikipedia.org/wiki/European_Qualifications_Framework"
            >
              EQF
            </a>
            ).&nbsp; We had to code from scratch an e-commerce site using MVC
            and Object Oriented Programming.
          </p>
        </div>
        <div className="mt-5">
          <div className="flex w-full justify-start">
            <div className="m-1 sm:m-4">
              <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                WHERE
              </h2>
              <div className="flex justify-center items-center">
                <a href="https://www.afpa.fr/">
                  <Image
                    className="w-20 rounded transform transition duration-300 hover:scale-105"
                    src="/images/afpa.png"
                    alt="AFPA logo"
                    width={80}
                    height={80}
                  />
                </a>
              </div>
            </div>
            <div className="m-1 sm:m-4">
              <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                STACK
              </h2>
              <div className="p-1 text-sm font-semibold 2xl:text-2xl">
                <ul>
                  <li>Bootstrap</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>SQL</li>
                </ul>
              </div>
            </div>
            <div className="m-1 sm:m-4">
              <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                CODE
              </h2>
              <div className="flex flex-col p-1 text-sm font-bold 2xl:text-2xl">
                <a
                  className="textSiteGreen"
                  href="https://github.com/james-webdev/Boutique_jus"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 shadow-lg">
          <Image className="w-full" src="/images/Jus3.png" alt="" width={1200} height={675} />
        </div>
        <div className="flex flex-col md:flex md:flex-row justify-between mt-10">
          <div className="">
            <div>
              <h2 className="font-bold md:text-xl 2xl:text-3xl">
                Project Purpose and Goal
              </h2>
            </div>
            <div className="">
              <p className="max-w-4xl 2xl:text-2xl mt-3">
                I decided to do a Juice e-commerce app as I had just closed my
                own Juice company and thus had all the marketing images.
              </p>
            </div>
          </div>
          <div className="">
            <p className="hidden md:block md:invisible max-w-4xl 2xl:text-2xl mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              asperiores vitae consequatur unde consectetur ducimus eos, quam
              doloremque repellat tenetur eaque numquam nesciunt nobis ipsum
              alias quo illo, et aliquid.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex sm:flex-row justify-content items-center mt-5 gap-8">
          <div className="w-1/2 flex flex-col xl:flex xl:flex-row mt-4 sm:mt-10 justify-center items-center m-3">
            <Image className="rounded-lg w-24 2xl:w-40 m-3" src="/images/bootstrap.png" alt="" width={96} height={96} />
            <Image className="w-40 2xl:w-60 m-2" src="/images/MySQL.png" alt="" width={160} height={80} />
            <Image className="w-32 2xl:w-48 m-3" src="/images/php.png" alt="" width={128} height={64} />
          </div>
          <div className="w-full sm:w-1/2 mt-5">
            <div>
              <h2 className="font-bold md:text-xl 2xl:text-3xl">
                Webstack and explanation
              </h2>
            </div>
            <p className="max-w-4xl 2xl:text-2xl mt-3">
              The e-commerce site was coded using in part the code from a blog
              we had written in class in PHP with a Bootstrap template for the
              front-end and a MySQL database. The PHP was linked to the
              database using SQL and I used PHPMyAdmin and WAMP.
            </p>
          </div>
        </div>

        <div className="mt-10 shadow-lg">
          <Image className="w-2/3" src="/images/charbon.png" alt="" width={800} height={500} />
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
          <div>
            <h2 className="font-bold md:text-xl 2xl:text-3xl">
              Lessons learnt
            </h2>
          </div>
          <p className="max-w-4xl 2xl:text-2xl mt-3">
            I learnt a lot about the MVC way of building apps in this project.
            I also learnt a great deal about PHP and how to get a front end to
            interact with a database. It gave me a good overview of how apps
            used to be built before the advent of PHP frameworks like Laravel
            (which I got to use for 4 months for my OKOS Partners internship)
            or Symfony as our teacher was a bit old school.
          </p>
        </div>

        <div>
          <h2 className="font-bold mt-10 sm:mt-20 md:text-xl 2xl:text-3xl">
            Other Projects
          </h2>
        </div>
        <div className="p-4 mb-40 projectsGrid mt-5 md:mt-10 ">
          <Link href="/projects/trustrails">
            <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
              <Image className="smallprojects" src="/images/TrustRails_Desktop.png" alt="" width={400} height={250} />
            </div>
            <div className="text-left ">
              <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">TrustRails</p>
              <p className="smallprojectstext mt-5 text-md">An AI-commerce platform with an MCP server, SDK and REST API for AI shopping agents.</p>
            </div>
          </Link>
          <Link href="/projects/artbook">
            <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
              <Image className="smallprojects" src="/images/JSnow2.png" alt="" width={400} height={250} />
            </div>
            <div className="text-left">
              <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">Artbook</p>
              <p className="smallprojectstext mt-5 text-md">A MERN social network allowing you to share art with your friends.</p>
            </div>
          </Link>
          <Link href="/projects/guardian">
            <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
              <Image className="smallprojects" src="/images/Guardian_Desktop.png" alt="" width={400} height={250} />
            </div>
            <div className="text-left ">
              <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">Worktools Website</p>
              <p className="smallprojectstext mt-5 text-md">A website in React with Gatsby and custom CSS animations.</p>
            </div>
          </Link>
          <Link href="/projects/pictionary">
            <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
              <Image className="smallprojects" src="/images/WebSockets.png" alt="" width={400} height={250} />
            </div>
            <div className="text-left ">
              <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">Websockets Pictionary</p>
              <p className="smallprojectstext mt-5 text-md">A pictionary game using P5.js and websockets with a MongoDB database.</p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Jus;
