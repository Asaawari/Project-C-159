// AFRAME.registerComponent("comics-posters", {
//   init: function() {
//     this.postersContainer = this.el;
//     this.posters();
//   },

//   posters: function() {
//     const postersRef = [
//       {
//         id:"doctor-strange",
//         title : "Doctor Strange",
//         url : "./assets/thumbnails/doctorstrange.jpg",
//       },
//       {
//         id:"wonder-woman",
//         title : "Wonder Woman",
//         url : "./assets/thumbnails/wonderwoman.jpg",
//       },
//       {
//         id:"black-panther",
//         title : "Black Panther",
//         url : "./assets/thumbnails/blackpanther.jpg",
//       },
//       {
//         id:"avengers",
//         title : "Avengers",
//         url : "./assets/thumbnails/avengers.jpeg",
//       }
//     ];
//     let previousXPosition = -60;

//     for (var item of postersRef) {
//       const posX = previousXPosition + 25;
//       const posY = 10;
//       const posZ = -40;
//       const position = { x: posX, y: posY, z: posZ };
//       previousXPosition = posX;

//       // Border Element
//       const borderEl = this.createBorder(position, item.id);

//       // Poster Element
//       const poster = this.createPoster(item);
//       borderEl.appendChild(poster);

//       this.postersContainer.appendChild(borderEl);
//     }
//   },
//   createBorder: function(position, id) {
//     const entityEl = document.createElement("a-entity");
//     entityEl.setAttribute("id", id);
//     entityEl.setAttribute("visible", true);
//     entityEl.setAttribute("geometry", {
//       primitive: "plane",
//       width: 22,
//       height: 40
//     });

//     entityEl.setAttribute("position", position);
//     entityEl.setAttribute("material", { color: "#fff" });
//     entityEl.setAttribute("cursor-listener", {});
//     return entityEl;
//   },
//   createPoster: function(item) {
//     const entityEl = document.createElement("a-entity");
//     entityEl.setAttribute("visible", true);
//     entityEl.setAttribute("geometry", {
//       primitive: "plane",
//       width: 20,
//       height: 28
//     });

//     entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
//     entityEl.setAttribute("material", { src: item.url });

//     return entityEl;
//   }
// });

AFRAME.registerComponent("book",{
  init:function(){
    this.booksContainer = this.el;
    this.createCards();
  },

  createCards:function(){
    const thumbNailsRef=[
      {
        id:"doctor-strange",
        title : "Doctor Strange",
        url : "./assets/thumbnails/doctorstrange.jpg",
      },
      {
        id:"wonder-woman",
        title : "Wonder Woman",
        url : "./assets/thumbnails/wonderwoman.jpg",
      },
      {
        id:"black-panther",
        title : "Black Panther",
        url : "./assets/thumbnails/blackpanther.jpg",
      },
      {
        id:"avengers",
        title : "Avengers",
        url : "./assets/thumbnails/avengers.jpeg",
      },
    ];

    let previousXPos = -60;

    for(var item of thumbNailsRef){
      const posX = previousXPos + 25;
      const posY = 10;
      const posZ = -40;
      const position = {x:posX,y:posY,z:posZ};
      previousXPos = posX;

      const borderEl = this.createBorder(position, item.id);

      const thumbnail = this.createThumbNail(item);
      borderEl.appendChild(thumbnail)

      const titleEl = this.createTitle(position,item);
      borderEl.appendChild(titleEl)

      this.booksContainer.appendChild(borderEl)
    }
  }, 

  createBorder:function(position, id){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id)
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {
      primitive:"plane", width: 22, height: 30
    })
    entityEl.setAttribute("position", position)
    entityEl.setAttribute("material", {color: "purple", opacity: 1});

    entityEl.setAttribute("cursor-listener",{})
    return entityEl
  },

  createThumbNail:function(item){
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {primitive: "plane", height: 28, width:20})
      entityEl.setAttribute("position", {x: 0, y:0, z:0.1})
      entityEl.setAttribute("material", {src:item.url})
      return entityEl
  }, 

  createTitle:function(position, item){
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", 
      {font:"exo2bold", 
       align: "center",
       width: 60,
       color: "green", 
       value: item.title});
       const elpos = position;
       elpos.y = -20
       entityEl.setAttribute("position", elpos)
       entityEl.setAttribute("visible", true)
       return entityEl
  }
}

)