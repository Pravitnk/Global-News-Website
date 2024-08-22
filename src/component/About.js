import React from "react";

function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 20px",
        maxWidth: "1300px",
        margin: "0 auto",
        color: "#333",
        fontFamily: "'Helvetica Neue', sans-serif",
        lineHeight: "1.8",
        position: "relative",
        top: "50px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          padding: "20px 40px",
          boxShadow: "0px 20px 30px rgba(0, 0, 0, 1)",
          borderRadius: "50px",
        }}
      >
        <header
          style={{
            textAlign: "center",
            marginBottom: "20px",
            paddingBottom: "10px",
            borderBottom: "2px solid #eee",
          }}
        >
          <h1
            style={{
              fontSize: "3em",
              color: "#0056b3",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            About Global News
          </h1>
          <p
            style={{
              fontSize: "1.4em",
              color: "#666",
            }}
          >
            Your Gateway to the World’s Latest News
          </p>
        </header>

        <section
          style={{
            marginBottom: "50px",
          }}
        >
          <h2
            style={{
              fontSize: "2.2em",
              color: "#0056b3",
              marginBottom: "25px",
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              marginBottom: "30px",
              fontSize: "1.1em",
              color: "#555",
            }}
          >
            At Global News, our mission is to provide timely, accurate, and
            comprehensive news coverage from around the world. We believe in the
            power of information and strive to keep our audience informed about
            the most important global events, trends, and stories. Our dedicated
            team of journalists works around the clock to bring you breaking
            news as it happens, along with in-depth analysis and commentary.
          </p>
        </section>

        <section>
          <h2
            style={{
              fontSize: "2.2em",
              color: "#0056b3",
              marginBottom: "25px",
            }}
          >
            Our Team
          </h2>
          <p
            style={{
              marginBottom: "30px",
              fontSize: "1.1em",
              color: "#555",
            }}
          >
            The Global News team is made up of seasoned journalists, editors,
            and analysts with decades of experience in the industry. We are
            committed to journalistic integrity and work tirelessly to ensure
            that the news we deliver is accurate, fair, and unbiased.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                flexBasis: "45%",
                marginBottom: "30px",
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                transition: "transform 0.3s ease",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8em",
                  color: "#0056b3",
                  marginBottom: "10px",
                }}
              >
                Pravit Naik
              </h3>
              <p
                style={{
                  color: "#777",
                  marginBottom: "0",
                }}
              >
                Editor-in-Chief
              </p>
            </div>
            <div
              style={{
                flexBasis: "48%",
                marginBottom: "30px",
                padding: "20px",
                paddingLeft: "350px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                transition: "transform 0.3s ease",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8em",
                  color: "#0056b3",
                  marginBottom: "10px",
                }}
              >
                Jane Doe
              </h3>
              <p
                style={{
                  color: "#777",
                  marginBottom: "0",
                }}
              >
                Senior Reporter
              </p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>

        <footer
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#777",
            paddingTop: "20px",
            borderTop: "2px solid #eee",
          }}
        >
          <p>&copy; 2024 Global News. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default About;
