import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import Heart from "../../components/Heart";
import CodeSnippetMini from "../../components/CodeSnippetMini";
import Shield from "../../components/Shield";
import Target from "../../components/Target";

const Guardian = () => {
  return (
    <Layout>
      <div className="mt-20 ml-5 mr-5 sm:ml-20 sm:mr-20 lg:ml-60 lg:mr-60 mb-28">
        <h1 className="font-bold text-3xl 2xl:text-5xl">Guardian</h1>
        <div className="flex w-full sm:w-1/2 justify-start mt-5">
          <p className="2xl:text-2xl mt-3">
            I built this site from scratch in React with GatsbyJS for
            Worktools, a cyber-security start-up based in London. I worked
            with a graphic designer for the designs. The site includes
            connection to the Google maps API an email notification back-end
            with GetForm.io and custom CSS animations.
          </p>
        </div>
        <div className="mt-5">
          <div className="flex w-full justify-start">
            <div className="m-1 sm:m-4">
              <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">WHERE</h2>
              <div className="flex justify-center items-center">
                <a href="https://www.linkedin.com/company/work-tools">
                  <Image className="w-14 rounded transform transition duration-500 hover:scale-105" src="/images/worktools.png" alt="Guardian logo" width={56} height={56} />
                </a>
              </div>
            </div>
            <div className="m-1 sm:m-4">
              <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">STACK</h2>
              <div className="p-1 text-sm font-semibold 2xl:text-2xl">
                <ul><li>React</li><li>Gatsby</li><li>Tailwind CSS</li><li>Styled Components</li><li>AWS</li></ul>
              </div>
            </div>
            <div className="m-1 sm:m-4">
              <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">CODE</h2>
              <div className="flex flex-col p-1 text-sm font-bold 2xl:text-2xl">
                <a className="textSiteGreen" href="https://github.com/james-webdev/worktools-lander">Repository</a>
              </div>
            </div>
            <div className="m-1 sm:m-4">
              <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">LIVE</h2>
              <p className="p-1 text-xs font-bold 2xl:text-2xl">
                <a className="textSiteGreen" href="https://worktools-website.netlify.app/">View Site</a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Image className="w-full" src="/images/GuardianDesktop.png" alt="" width={1200} height={675} />
        </div>
        <div className="flex flex-col md:flex md:flex-row justify-between mt-10">
          <div className="">
            <div><h2 className="font-bold md:text-xl 2xl:text-3xl">Project Purpose and Goal</h2></div>
            <div className="">
              <p className="max-w-4xl 2xl:text-2xl mt-3">
                Worktools has built a web app and desktop app in React and so
                wanted a modern website in React to help with their VC funding
                round. They wanted it to be in React so as to be able to
                possibly reutilise some of the components across their other apps.
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
            <Image className="w-14 m-3" src="/images/gatsby.png" alt="" width={56} height={56} />
            <Image className="w-40 m-3" src="/images/tailwind.png" alt="" width={160} height={40} />
          </div>
          <div className="w-full sm:w-1/2 mt-5 m-3">
            <div><h2 className="font-bold md:text-xl 2xl:text-3xl">Webstack and explanation</h2></div>
            <p className="max-w-4xl 2xl:text-2xl mt-3">
              I used React with GatsbyJS, a React-based, GraphQL powered,
              static site generator. I used Tailwind CSS, a utility first CSS
              framework, for styling. It was deployed on AWS.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col md:mt-10 justify-center items-center sm:flex sm:flex-row">
            <Image className="w-56 sm:w-1/3 m-3" src="/images/guardianmob1.png" alt="" width={400} height={700} />
            <Image className="hidden lg:block w-56 sm:w-1/3 m-3" src="/images/guardianmob3.png" alt="" width={400} height={700} />
            <Image className="w-56 sm:w-1/3 m-3" src="/images/guardianmob2.png" alt="" width={400} height={700} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-8 mt-10 w-full sm:w-1/2">
          <div><h2 className="font-bold md:text-xl 2xl:text-3xl">Lessons Learned</h2></div>
          <p className="max-w-4xl 2xl:text-2xl mt-3">
            I really honed my responsive website skills in this project. It
            was the first time I'd used CSS grid in addition to FlexBox which
            I am more familiar with. I also learnt a lot about CSS animations
            I am quite proud of the shield, target and heart animations which
            I built using SVGs provided by the graphic designer (see below). I
            also was able to improve my skills in using Tailwind CSS and Git
            version control and of course React.
          </p>
        </div>
        <section className="w-full flex justify-center">
          <div className="flex-col lg:flex lg:flex-row" style={{ maxWidth: 1200 }}>
            <div className="lg:w-1/3 mx-12 my-4 xl:ml-0"><Heart /></div>
            <div className="lg:w-1/3 mx-12 my-4"><Shield /></div>
            <div className="lg:w-1/3 mx-12 my-4 xl:mr-0"><Target /></div>
          </div>
        </section>
        <div><h2 className="font-bold mt-10 sm:mt-20 md:text-2xl 2xl:text-3xl">Other Projects</h2></div>
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
          <Link href="/projects/rtc">
            <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
              <div className="smallprojects">
                <CodeSnippetMini />
              </div>
            </div>
            <div className="text-left ">
              <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">React Tailwind Converter</p>
              <p className="smallprojectstext mt-5 text-md">An npm package for writing React with intuitive shorthand props instead of Tailwind class strings.</p>
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

export default Guardian;
