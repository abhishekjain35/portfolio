import HomeComponent from "../components/home";
import Head from "next/head";

export default function Home({ data }) {
  return <HomeComponent blogs={data} />;
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://dev.to/api/articles?username=abhishekjain35`
  );
  const data = await res.json();
  data.length = 4;
  return { props: { data } };
};
