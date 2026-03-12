import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import CodeSnippetMini from "../components/CodeSnippetMini";

const Projects = () => {
  return (
    <Layout>
      <div className="ml-5 mr-5 md:ml-60 md:mr-60 ">
        <div className="text-xl sm:text-3xl font-semibold mt-32 ">
          What I've been working on
        </div>
        <div>
          <p className="smallprojectstext text-md mt-3">
            Take a look at some of the applications and websites I've
            dedicated my time to:
          </p>
        </div>

        <div className="p-4 mb-40 projectsGrid mt-5 md:mt-10 ">
          <Link href="/projects/trustrails">
            <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
              <Image className="smallprojects" src="/images/TrustRails_Desktop.png" alt="" width={400} height={250} />
            </div>
            <div className="text-left ">
              <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">
                TrustRails
              </p>
              <p className="smallprojectstext mt-5 text-md">
                An AI-commerce platform with an MCP server, SDK and REST API for AI shopping agents.
              </p>
              <div className="mt-5 hidden sm:block">
                <span className="hover:underline font-semibold text-sm sm:text-md">
                  VIEW PROJECT
                </span>
              </div>
            </div>
          </Link>

          <Link href="/projects/rtc">
            <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
              <div className="smallprojects">
                <CodeSnippetMini />
              </div>
            </div>
            <div className="text-left ">
              <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">
                React Tailwind Converter
              </p>
              <p className="smallprojectstext mt-5 text-md">
                An npm package for writing React components with intuitive shorthand props instead of Tailwind class strings.
              </p>
              <div className="mt-5 hidden sm:block">
                <span className="hover:underline font-semibold text-sm sm:text-md">
                  VIEW PROJECT
                </span>
              </div>
            </div>
          </Link>

          <Link href="/projects/guardian">
            <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
              <Image className="smallprojects" src="/images/Guardian_Desktop.png" alt="" width={400} height={250} />
            </div>
            <div className="text-left ">
              <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">
                Worktools Website
              </p>
              <p className="smallprojectstext mt-5 text-md">
                A website in React with Gatsby and custom CSS animations.
              </p>
              <div className="mt-5 hidden sm:block">
                <span className="hover:underline font-semibold text-sm sm:text-md">
                  VIEW PROJECT
                </span>
              </div>
            </div>
          </Link>

          <Link href="/projects/pictionary">
            <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
              <Image className="smallprojects" src="/images/WebSockets.png" alt="" width={400} height={250} />
            </div>
            <div className="text-left ">
              <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">
                Websockets Pictionary
              </p>
              <p className="smallprojectstext mt-5 text-md">
                A pictionary game using P5.js and websockets with a MongoDB
                database.
              </p>
              <div className="mt-5 hidden sm:block">
                <span className="hover:underline font-semibold text-sm sm:text-md">
                  VIEW PROJECT
                </span>
              </div>
            </div>
          </Link>

          <Link href="/projects/artbook">
            <div className="smallprojects rounded transform transition duration-500 hover:scale-105 ">
              <Image className="smallprojects" src="/images/JSnow2.png" alt="" width={400} height={250} />
            </div>
            <div className="text-left ">
              <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">
                ArtBook Social Network
              </p>
              <p className="smallprojectstext mt-5 text-md">
                A MERN social network allowing you to share art with your
                friends.
              </p>
              <div className="hidden sm:block mt-5">
                <span className="hover:underline font-semibold text-sm sm:text-md">
                  VIEW PROJECT
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
