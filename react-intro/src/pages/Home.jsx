import React from "react";
import MyNavBar from "../components/MyNavBar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <MyNavBar />
      <h1>Home</h1>
      <section>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        provident quis nihil quo voluptatem, illo enim assumenda. Tempore
        dolores, dignissimos ab veritatis quam velit qui aperiam earum deleniti
        labore aliquid!
      </section>
      <Footer />
    </div>
  );
}

export default Home;
