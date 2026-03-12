import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import CodeSnippet from "../../components/CodeSnippet";

const RTC = () => {
  return (
    <Layout>
      <div className="mt-20 ml-5 mr-5 sm:ml-20 sm:mr-20 lg:ml-60 lg:mr-60 mb-28">
        <h1 className="font-bold text-3xl 2xl:text-5xl">
          React Tailwind Converter
        </h1>
        <div className="flex w-full sm:w-1/2 justify-start mt-5">
          <p className="2xl:text-2xl mt-3">
            React Tailwind Converter is an npm package I built that lets you
            write React components using intuitive shorthand props instead of
            long Tailwind class strings. It converts props like{" "}
            <code className="bg-gray-200 px-1 rounded text-sm">mt="16"</code>{" "}
            and{" "}
            <code className="bg-gray-200 px-1 rounded text-sm">
              bgc="warning-500"
            </code>{" "}
            into their Tailwind CSS equivalents at build time, with full
            responsive breakpoint support.
          </p>
        </div>
        <div className="mt-5">
          <div className="flex w-full justify-start">
            <div className="m-1 sm:m-4">
              <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                STACK
              </h2>
              <div className="p-1 text-sm font-semibold 2xl:text-2xl">
                <ul>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>npm</li>
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
                  href="https://github.com/james-webdev/rtc"
                >
                  Repository
                </a>
                <a
                  className="textSiteGreen mt-1"
                  href="https://www.npmjs.com/package/react-tailwind-converter"
                >
                  npm Package
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <CodeSnippet />
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
                Writing long Tailwind class strings in React components can
                become hard to read and maintain. I wanted to create a cleaner
                developer experience where styling props are explicit, readable
                and colocated with the component. The package converts shorthand
                props into Tailwind classes, supports responsive breakpoints via
                object syntax, and works as a drop-in replacement for standard
                HTML elements.
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
        <div className="flex flex-col sm:flex sm:flex-row justify-center items-center mt-5">
          <div className="w-1/2 flex flex-col xl:flex xl:flex-row mt-4 sm:mt-10 justify-center items-center m-3">
            <Image className="w-14 sm:w-24 m-3" src="/images/react.png" alt="" width={96} height={96} />
            <Image className="w-40 m-3" src="/images/tailwind.png" alt="" width={160} height={40} />
          </div>
          <div className="w-full sm:w-1/2 mt-5 m-3">
            <div>
              <h2 className="font-bold md:text-xl 2xl:text-3xl">
                Webstack and explanation
              </h2>
            </div>
            <p className="max-w-4xl 2xl:text-2xl mt-3">
              The package is written in TypeScript and published on npm. It
              provides a set of React components (Box, Flex, Grid, Text) that
              accept styling props and convert them into Tailwind utility
              classes. It supports responsive breakpoints through object prop
              syntax, allowing developers to write{" "}
              <code className="bg-gray-200 px-1 rounded text-sm">
                {'ml={{ xs: "80", lg: "32" }}'}
              </code>{" "}
              instead of{" "}
              <code className="bg-gray-200 px-1 rounded text-sm">
                className="ml-80 lg:ml-32"
              </code>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-8 mt-10 w-full sm:w-1/2">
          <div>
            <h2 className="font-bold md:text-xl 2xl:text-3xl">
              Lessons Learned
            </h2>
          </div>
          <p className="max-w-4xl 2xl:text-2xl mt-3">
            Building and publishing an npm package taught me a lot about the
            open-source ecosystem, package versioning, and writing good
            documentation. I gained experience with TypeScript generics for
            building flexible component APIs and learnt how to structure a
            library for tree-shaking and minimal bundle size.
          </p>
        </div>

        <div>
          <h2 className="font-bold mt-10 sm:mt-20 md:text-2xl 2xl:text-3xl">
            Other Projects
          </h2>
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
            </div>
          </Link>
          <Link href="/projects/artbook">
            <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
              <Image className="smallprojects" src="/images/JSnow2.png" alt="" width={400} height={250} />
            </div>
            <div className="text-left">
              <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">
                Artbook
              </p>
              <p className="smallprojectstext mt-5 text-md">
                A MERN social network allowing you to share art with your friends.
              </p>
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
                A pictionary game using P5.js and websockets with a MongoDB database.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default RTC;
