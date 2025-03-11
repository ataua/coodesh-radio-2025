"use client";

import { useContext } from 'react';
import { RadioContext, RadioProvider } from "@/context/RadioContext";

import Menu from "@/Menu";
import Content from "@/Content";
import Button from "@/Button";

export default function Home() {
  const { radio, setRadio } = useContext(RadioContext);

  const changeRadio = () => {
    setRadio('Radio 1');
    console.log(radio);
  }

  return (<>

      <main className="flex flex-row gap-6">
        <Menu />

        <Content>
          <Button
            onClick={changeRadio}
            text='Radio 1'
          />
        </Content>
      </main>

      <p className='text-2xl text-white'>{radio}</p>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>

  </>);
}
