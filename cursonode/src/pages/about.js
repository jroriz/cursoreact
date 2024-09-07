import Menu from "@/components/Menu";
import Footer from "@/components/footer";
import Author from "@/components/Author";

function About() {
  return (
      <main>
        <Menu />
        <h2>sobre</h2>
        <Author name={"John Doe"} courses={{ price: 10, workload: "10 horas"  }}/>
        <Footer />
      </main>
  );
}

export default About;