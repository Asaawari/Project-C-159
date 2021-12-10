AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      "doctor-strange": {
        banner_url: "./assets/thumbnails/doctorstrange.jpg",
        title: "Doctor Strange",
        released_year: "1967",
        description:
          "Doctor Stephen Strange is a fictional character appearing in American comic books published by Marvel Comics. dated July 1963). He serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats. Inspired by stories of black magic and based on Chandu the Magician by Harry A. Earnshaw and Raymond R. Morgan, Strange was created during the Silver Age of Comic Books to bring a different kind of character and themes of mysticism to Marvel Comics.",
      },
      "wonder-woman": {
        banner_url: "./assets/thumbnails/wonderwoman.jpg",
        title: "Wonder Woman",
        released_year: "1964",
        description:
          "Wonder Woman is a superhero appearing in American comic books published by DC Comics. The character is a founding member of the Justice League. Her official title is Princess Diana of Themyscira. When blending into the society outside of her homeland, she sometimes adopts her civilian identity Diana Prince.",
      },
      "black-panther": {
        banner_url: "./assets/thumbnails/blackpanther.jpg",
        title: "Black Panther",
        released_year: "2017",
        description:
          "Black Panther is a fictional character and superhero appearing in American comic books published by Marvel Comics. His real name is T'Challa, and he is depicted as the king and protector of the fictional African nation of Wakanda. ",
      },
      "avengers": {
        banner_url: "./assets/thumbnails/avengers.jpeg",
        title: "Avengers",
        released_year: "1968",
        description:
          "The Avengers are a fictional team of superheroes that appears in American comic books published by Marvel Comics. Labeled Earth's Mightiest Heroes, the Avengers originally consisted of Iron Man, Ant-Man, Hulk, Thor and the Wasp.",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      anchor: "left",
      width: 1,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      anchor: "left",
      width: 0.8,
      height: 1,
      color: "#fff",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});
