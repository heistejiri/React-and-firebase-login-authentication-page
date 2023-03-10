import React from "react";

const Hero = (handleLogout) => {

  return(
      <section className="Hero">
        <nav>
          <h2>Welcome to Tejiri's Page</h2>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </section>
  );
};

export default Hero;