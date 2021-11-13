import React from "react";

import "./About.css"

const About = () => {
  return (
    <div className="container my-5">
      <div className="container1 my-5">
        <h1 className="text-center fw-bold p-4 text-dark bg-dark text-white">Our Gallery</h1>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://www.markhamblin.com/graphics/siteimages/home-slideshow-4.jpg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>Click : Canon 800D</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://www.markhamblin.com/graphics/siteimages/home-slideshow-2.jpg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>Click : Canon 650D</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://i2-prod.dailyrecord.co.uk/incoming/article13496796.ece/ALTERNATES/s615/0_SWNS_EAGLE_DEER_05.jpg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>Click : Canon 65D</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://c4.wallpaperflare.com/wallpaper/675/250/518/photography-flowers-wallpaper-preview.jpg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>Click : Nikon DoubleS</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://cutewallpaper.org/21/flowers-hd-wallpapers/Bright-Flower-Wallpaper-43+-images-.jpg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>Click : Canon Digital Camera</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://images.ctfassets.net/u0haasspfa6q/5anrKPrBjFkQOGIowyYEFu/0af93dd82909934bf5938002ebf80858/best_landscape_photography_apps" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>Click : Nikon Master V</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>


      </div>




    </div>





  );
};

export default About;
