import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import CodeSnippetMini from "../../components/CodeSnippetMini";

const Pictionary = () => {
  return (
    <Layout>
      <div className="mt-20 ml-5 mr-5 sm:ml-20 sm:mr-20 lg:ml-60 lg:mr-60 mb-28">
        <h1 className="font-bold text-3xl 2xl:text-5xl">Websockets Pictionary</h1>
        <div className="flex w-full sm:w-1/2 justify-start mt-5">
          <p className="2xl:text-2xl mt-3">
            This was a project I did at IFOCOP for my Full Stack JavaScript
            qualification (equivalent to a Bachelor's Degree in the{" "}
            <a className="textSiteGreen" href="https://en.wikipedia.org/wiki/European_Qualifications_Framework">EQF</a>
            ). We had to code from scratch a multi-player game that used the
            Websockets protocol.
          </p>
        </div>
        <div className="mt-5">
          <div className="flex w-full justify-start">
            <div className="m-1 sm:m-4">
              <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">WHERE</h2>
              <div className="flex justify-center items-center">
                <a href="https://www.ifocop.fr/formations-metiers/web-digital/formation-developpeur-full-stack-js/">
                  <Image className="shadow-md w-14 rounded transform transition duration-300 hover:scale-105" src="/images/ifocop.png" alt="Ifocop logo" width={56} height={56} />
                </a>
              </div>
            </div>
            <div className="m-1 sm:m-4">
              <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">STACK</h2>
              <div className="p-1 text-sm font-semibold 2xl:text-2xl">
                <ul><li>Socket.io</li><li>P5.js</li><li>Pug.js</li><li>MongoDB</li><li>Express</li><li>Node</li><li>Heroku</li></ul>
              </div>
            </div>
            <div className="m-1 sm:m-4">
              <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">CODE</h2>
              <div className="flex flex-col p-1 text-sm font-bold 2xl:text-2xl">
                <a className="textSiteGreen" href="https://github.com/james-webdev/websockets-pictionary">Repository</a>
              </div>
            </div>
            <div className="m-1 sm:m-4">
              <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">LIVE</h2>
              <p className="p-1 text-sm font-bold 2xl:text-2xl">
                <a className="textSiteGreen" href="https://pictionary-websockets.herokuapp.com/">View Site</a>
              </p>
              <div className="hidden sm:block">
                <p className="p-1 text-xs font-semibold 2xl:text-2xl">First name: Guest</p>
                <p className="p-1 text-xs font-semibold 2xl:text-2xl">Email: guest@example.com</p>
                <p className="p-1 text-xs font-semibold 2xl:text-2xl">Password: 5678</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Image className="w-full" src="/images/WebsocketsDesktop.png" alt="" width={1200} height={675} />
        </div>
        <div className="flex flex-col md:flex md:flex-row justify-between mt-10">
          <div className="">
            <div><h2 className="font-bold md:text-xl 2xl:text-3xl">Project Purpose and Goal</h2></div>
            <div className="">
              <p className="max-w-4xl 2xl:text-2xl mt-3">
                The aim was that a users drawing would be seen by the other
                playing across a live websockets connection using{" "}
                <a className="textSiteGreen" href="https://socket.io/">Socket.io.</a>{" "}
                This would permit them to guess the drawing! I also coded a
                Websockets chat so that users could send their guesses.
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
            <Image className="rounded-lg w-24 2xl:w-40 m-3" src="/images/p5js.png" alt="" width={96} height={96} />
            <Image className="w-40 2xl:w-60 m-2" src="/images/socket.png" alt="" width={160} height={80} />
            <Image className="w-32 2xl:w-48 m-3" src="/images/nem.png" alt="" width={128} height={64} />
          </div>
          <div className="w-full sm:w-1/2 mt-5">
            <div><h2 className="font-bold md:text-xl 2xl:text-3xl">Webstack and explanation</h2></div>
            <p className="max-w-4xl 2xl:text-2xl mt-3">
              I chose to use{" "}
              <a className="textSiteGreen" href="https://p5js.org/">P5.js</a>{" "}
              a JavaScript library for creative coding as I am interested in
              Code Art. The front-end I used the templating language Pug.js.
              The back-end was in Express and Node with a MongoDB database
              which I used for user login and sign up and to put the users
              points in a database. I coded a basic API which I connected to
              to get the new words. The app is deployed on Heroku.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-20">
          <div><h2 className="font-bold md:text-xl 2xl:text-3xl">Problems and thought processes</h2></div>
          <p className="max-w-4xl 2xl:text-2xl mt-3">
            One of the most tricky things was getting the users drawing to
            send across the Websockets connection. Then getting the logged in
            users name to show up before the game started.
          </p>
        </div>
        <div className="mt-10">
          <Image className="w-full" src="/images/PictionaryPic2.png" alt="" width={1200} height={675} />
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <div><h2 className="font-bold md:text-xl 2xl:text-3xl">Lessons learnt</h2></div>
          <p className="max-w-4xl 2xl:text-2xl mt-3">
            I learnt a lot about Websockets and also improved my skills with
            Node, Express and MongoDB. It was interesting to to learn more
            about P5.js and Code Art. I think it is useful for coming up with
            creative ideas for user interfaces and improving my CSS animation
            skills.
          </p>
        </div>
        <div><h2 className="font-bold mt-10 sm:mt-20 md:text-xl 2xl:text-3xl">Other Projects</h2></div>
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
            <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 "><Image className="smallprojects" src="/images/JSnow2.png" alt="" width={400} height={250} /></div>
            <div className="text-left"><p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">Artbook</p><p className="smallprojectstext mt-5 text-md">A MERN social network allowing you to share art with your friends.</p></div>
          </Link>
          <Link href="/projects/guardian">
            <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 "><Image className="smallprojects" src="/images/Guardian_Desktop.png" alt="" width={400} height={250} /></div>
            <div className="text-left "><p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">Worktools Website</p><p className="smallprojectstext mt-5 text-md">A website in React with Gatsby and custom CSS animations.</p></div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Pictionary;
