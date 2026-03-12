import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import PhoneMockup from "../../components/PhoneMockup";
import CodeSnippetMini from "../../components/CodeSnippetMini";

const TrustRails = () => {
  return (
    <Layout>
      <div className="mt-20 ml-5 mr-5 sm:ml-20 sm:mr-20 lg:ml-60 lg:mr-60 mb-28">
        <h1 className="font-bold text-3xl 2xl:text-5xl">TrustRails</h1>
        <div className="flex w-full sm:w-1/2 justify-start mt-5">
          <p className="2xl:text-2xl mt-3">
            TrustRails is an AI-commerce infrastructure platform I built that
            standardises messy electronics retailer product feeds into one
            predictable API for AI shopping agents. It sits between retailers
            like AO.com and AI assistants like ChatGPT, Claude and Perplexity,
            normalising chaotic product data into clean, structured results with
            accurate live pricing and direct purchase links.
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
                  <li>Next.js</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>MCP</li>
                  <li>Node</li>
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
                  href="https://github.com/james-webdev/trustrails-mcp-server"
                >
                  MCP Server
                </a>
                <a
                  className="textSiteGreen mt-1"
                  href="https://www.npmjs.com/package/@trustrails/mcp-server"
                >
                  @trustrails/mcp-server
                </a>
                <a
                  className="textSiteGreen mt-1"
                  href="https://www.npmjs.com/package/@trustrails/sdk"
                >
                  @trustrails/sdk
                </a>
                <a
                  className="textSiteGreen mt-1"
                  href="https://registry.modelcontextprotocol.io/?q=trustrails"
                >
                  MCP Registry
                </a>
              </div>
            </div>
            <div className="m-1 sm:m-4">
              <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                LIVE
              </h2>
              <p className="p-1 text-sm font-bold 2xl:text-2xl">
                <a
                  className="textSiteGreen"
                  href="https://www.trustrails.app/"
                >
                  View Site
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <PhoneMockup />
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
                AI shopping agents are becoming the new search engines but they
                struggle to recommend products because retailer data is
                inconsistent, scraped and unreliable. TrustRails transforms retailer
                feeds into one API and one schema with live
                structured data. The goal was to make it trivial for AI
                applications to search and surface real product recommendations
                with accurate, live pricing.
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
            <Image className="w-14 sm:w-24 m-6" src="/images/react.png" alt="" width={96} height={96} />
            <Image className="w-14 sm:w-24 m-6" src="/images/ts-logo-128.png" alt="" width={96} height={96} />
            <Image className="w-14 sm:w-24 m-6" src="/images/nextjs-logo.svg" alt="" width={96} height={96} />

          </div>
          <div className="w-full sm:w-1/2 mt-5 m-3">
            <div>
              <h2 className="font-bold md:text-xl 2xl:text-3xl">
                Webstack and explanation
              </h2>
            </div>
            <p className="max-w-4xl 2xl:text-2xl mt-3">
              The platform is built with Next.js and React with TypeScript
              throughout. The data ingestion pipeline integrates with affiliate
              networks including Awin, CJ Affiliate and Google Merchant feeds.
              I published two npm packages: a TypeScript SDK for developers to
              search and retrieve products, and an MCP server that lets AI
              assistants like Claude natively search the product catalogue as a
              tool during conversations.
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
            This project taught me a huge amount about building developer tools
            and publishing npm packages. I learnt how to build an MCP server
            from scratch and integrate it with Claude and other AI assistants.
            Working with multiple affiliate network APIs and normalising
            inconsistent data formats into a single schema was a significant
            challenge.
          </p>
        </div>

        <div>
          <h2 className="font-bold mt-10 sm:mt-20 md:text-2xl 2xl:text-3xl">
            Other Projects
          </h2>
        </div>
        <div className="p-4 mb-40 projectsGrid mt-5 md:mt-10 ">
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
                An npm package for writing React with intuitive shorthand props instead of Tailwind class strings.
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

export default TrustRails;
