import { Footer } from "./footer";
import { Header } from "./header";
import { PropsWithChildren } from "react";

export default function LayoutBase(props: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
