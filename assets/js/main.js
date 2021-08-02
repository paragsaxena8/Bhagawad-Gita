(() => {
  loadApp = () => {
    var flipbook = $(".flipbook");

    // Check if the CSS was already loaded

    if (flipbook.width() == 0 || flipbook.height() == 0) {
      setTimeout(loadApp, 10);
      return;
    }

    $(".flipbook .double").scissor();
    var selectDouble = document.querySelectorAll(".flipbook .double");
    console.log("🚀 ~ loadApp ~ selectDouble", selectDouble);
    // $(".flipbook .double").css("background-color", "#F7BD2F");
    fetch("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "64343befcamshfa38b0963e1fd48p17f11bjsnb7039c985186",
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        for (i = 0; i < selectDouble.length; i++) {
          var heading_en = document.createElement("h3");
          var heading = document.createElement("span");
          var summary = document.createElement("p");
          heading_en.innerHTML = data[i]["name_meaning"];
          heading.innerHTML = ` (${data[i].name})`;
          summary.innerHTML = data[i]["chapter_summary"];
          heading_en.appendChild(heading);
          selectDouble[i].appendChild(heading_en);
          selectDouble[i].appendChild(summary);
          selectDouble[i].style.marginLeft = "5px";
          selectDouble[i].style.padding = "15px 10px 10px 10px";
        }
      })
      .catch((err) => {
        console.error(err);
      });

    // fetch(`${url}/chapters`, {
    //   headers: {
    //     "x-api-key": "cef9682dd8aa66f24",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     for (i = 0; i < selectDouble.length; i++) {
    //       selectDouble[i].innerHTML = data[i]["summary"]["en"];
    //       // console.log("🚀 ~ .then ~ selectDouble[i].html", selectDouble[i]);
    //     }
    //   });
    // $(".flipbook .double").css("background-color", "yellow");
    // Create the flipbook

    $(".flipbook").turn({
      // Elevation

      elevation: 50,

      // Enable gradients

      gradients: true,

      // Auto center this flipbook

      autoCenter: true,
    });
  };

  loadApp();
})();
