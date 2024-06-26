import React, { useState, useEffect } from "react";
import pic from ".//images/library2.jpg";
import anotherPic from ".//images/study.jpg";
import outside from ".//images/outside.jpg";
import inside from ".//images/inside.jpg";

function Home() {
  const images = [anotherPic, outside, inside];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <img
          src={pic}
          alt="Library"
          style={{ width: "100%", height: "300px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        >
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h1>Welcome to Danny's Elibrary</h1>
            <h4><i>Where creativity blooms, possibilities flourish</i></h4>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column", 
        }}
      >
        <div style={{ maxWidth: "600px", textAlign: "center", marginBottom: "20px" }}>
          <h1>How can we help you ?</h1>
          <p>
            If the options above aren't what you're looking for, try <a href = "mailto:dannyelibrary@gmail.com">emailing us</a>
          </p>
        </div>
        <div style={{ maxWidth: "600px", width: "100%", maxHeight: "400px", height: "100%",overflow: "hidden" }}>
          <img
            src={images[currentImageIndex]}
            alt="Building"
            style={{ width: "100%", height: "400px" }}
          />
          </div>
        <br/>
        <div style={{ maxWidth: "600px", width: "100%", maxHeight: "400px", height: "100%",overflow: "hidden" }}>
          <p>"Danny's Elibrary is my go-to destination for discovering new reads. The vast collection never fails to surprise me, and the user-friendly interface makes browsing a breeze. Thanks to Danny's Elibrary, I've expanded my literary horizons and found some hidden gems!"</p>
          <b>Emily R. - Book Enthusiast</b>
          <p>"I've been a loyal user of Danny's Elibrary for years, and it never disappoints. From bestselling novels to classic literature, there's something for every mood and taste. The ability to download books for offline reading is a game-changer for me. Thank you for enriching my reading experience!"</p>
          <b>Sophie L. - Fiction Lover</b>
        </div>
        <br/>
        <h2><u>In-Person Operating Hours:</u></h2>
        <div className = "center" id ="operatingHours">
                <table>
                    <tr>
                        <td><b>Mon</b> 8:00 am to 9:00 pm</td>
                    </tr>
                    <tr>
                        <td><b>Tues</b> 8:00 am to 9:00 pm</td>
                    </tr>
                    <tr>
                        <td><b>Wed</b> 8:00 am to 9:00 pm</td>
                    </tr>
                    <tr>
                        <td><b>Thur</b> 8:00 am to 9:00 pm</td>
                    </tr>
                    <tr>
                        <td><b>Fri</b> 8:00 am to 9:00 pm</td>
                    </tr>
                    <tr>
                        <td><b>Sat</b> 12:00 pm to 5:00 pm</td>
                    </tr>
                    <tr>
                        <td><b>Sun</b> <b>CLOSED</b></td>
                    </tr>
                </table>
            </div>
      </div>
    </div>
  );
}

export default Home;
