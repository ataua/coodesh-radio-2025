"use client";

import { useContext } from 'react';
import { RadioContext, RadioProvider } from "@/context/RadioContext";

import Menu from "@/Menu";
import Content from "@/Content";
import Button from "@/Button";

export default function Home() {


  return (<>

    <main className="flex flex-row gap-6">
      <Menu />
      <Content />
    </main>


    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    </footer>

  </>);
}
