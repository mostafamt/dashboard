import React from "react";
import Card from "./Card";
import Drawer from "./Drawer";
import Header from "./Header";

const Dashboard2 = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <main className="">
      <Header setIsOpen={setIsOpen} />
      <section className="flex space-x-6 m-4">
        <div className="text-6xl">{"🦙"}</div>
        <div className="text-6xl">{"🐝"}</div>
        <div className="text-6xl">{"🦄"}</div>
        <div className="text-6xl">{"🐌"}</div>
      </section>
      <p className="m-4">
        This is an implementation of a drawer using tailwindcss.
      </p>
      <p className="m-4 bg-yellow-100 p-6 text-yellow-900 border border-dashed border-yellow-400">
        Follow me at Twitter{" "}
        <a className="text-blue-600" href="https://twitter.com/@Cuadraman">
          @Cuadraman
        </a>{" "}
        for more tips
      </p>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Drawer>
    </main>
  );
};

export default Dashboard2;
