import Link from "next/link";
import Layout from "../components/Layout/Layout";

const Home = () => (
  <Layout>
    <main>
      <h1>Welcome to LearnSVG</h1>
      <Link href="/guide/1">Guide</Link>
    </main>
  </Layout>
);

export default Home;
