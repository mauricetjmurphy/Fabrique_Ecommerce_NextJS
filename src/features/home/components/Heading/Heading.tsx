import React from "react";

type HeadingProps = {
  subtitle: string;
  title: string;
};

const Heading = ({ subtitle, title }: HeadingProps) => {
  return (
    <div className="flex flex-col items-center pt-16">
      <p className="text-sm text-center pb-6">{subtitle}</p>
      <h1 className="text-3xl text-center font-bold pb-6">{title}</h1>
      <div className="h-2 border-b-2 border-slate-600 w-20"></div>
    </div>
  );
};

export default Heading;
