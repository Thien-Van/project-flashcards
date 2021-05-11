import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import AllDecks from "./AllDecks";

function Layout() {
  return (
    <div className="container">
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <AllDecks />
        <NotFound />
      </div>
    </div>
  );
}

export default Layout;
