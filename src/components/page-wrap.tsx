import { PropsWithChildren } from "react";

const PageWrap = ({ children }: PropsWithChildren) => {
  return (
    <section className="mt-10 container max-w-5xl mx-auto">{children}</section>
  );
};

export default PageWrap;
