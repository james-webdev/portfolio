import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const NavWrapper = styled.div`
  grid-template-columns: 1fr;
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
  align-items: center;
  position: fixed;
  left: 0px;
  top: 0px;
`;

const Nav = () => {
  return (
    <nav>
      <NavWrapper className="bg-white h-20 w-full z-10 bg-opacity-75">
        <Link href="/">
          <h1 className="text-4xl ml-5 p-1 sm:p-3 font-bold">JR</h1>
        </Link>
        <div className="mr-5">
          <Link
            href="/about"
            className="p-1 sm:p-2 m-1 sm:m-2 hover:border-green-500 rounded-sm border border-green-400 bg-opacity-100"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="p-1 sm:p-2 m-1 sm:m-2 hover:border-green-500 rounded-sm border border-green-400 bg-opacity-100"
          >
            Projects
          </Link>
        </div>
      </NavWrapper>
    </nav>
  );
};

export default Nav;
