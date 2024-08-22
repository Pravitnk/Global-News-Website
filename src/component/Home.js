import React from "react";

function Home() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('https://www.therapydepotonline.com/wp-content/uploads/2015/01/news-globe.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1, // Set this behind the content
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
          width: "50%",
          color: "white",
          textAlign: "center",
          padding: "20px",
          position: "relative",
          top: "26%",
          left: "23%",
          backdropFilter: "blur(10px)", // Apply the blur effect to the container
          backgroundColor: "rgba(0, 0, 0, 0.1)", // Increased opacity for better readability
          borderRadius: "50px",
          boxShadow: "8px 8px 20px rgba(0, 0, 0, 0.8)", // Enhanced shadow for better depth
          zIndex: 1, // Ensure this is above the background
        }}
      >
        <header>
          <h1
            style={{
              fontSize: "3em",
              marginBottom: "20px",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Welcome to Global News
          </h1>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "40px",
              maxWidth: "600px",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
            }}
          >
            Stay updated with the latest headlines from around the world.
          </p>
        </header>
        <div
          style={{
            position: "relative",
            zIndex: 2, // Ensure the button is on top
          }}
        >
          <button
            style={{
              padding: "10px 20px",
              fontSize: "1.2em",
              color: "white",
              backgroundColor: "#007BFF",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              zIndex: 2,
              transition: "background-color 0.3s, box-shadow 0.3s", // Add transition for smooth hover effect
            }}
            onClick={() => {
              console.log("clicked");
              window.location.href = "/category/general";
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
