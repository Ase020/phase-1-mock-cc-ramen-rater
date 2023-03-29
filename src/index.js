document.addEventListener("DOMContentLoaded", () => {
   const ramenMenu = document.getElementById("ramen-menu");
   const ramenDetail = document.getElementById("ramen-detail");
   const rating = document.getElementById("rating-display");
   const comment = document.getElementById("comment-display");
   fetch("http://localhost:3000/ramens")
      .then((res) => res.json())
      .then((res) => {
         res.forEach((ramen) => {
            const img = document.createElement("img");
            img.src = ramen.image;
            img.alt = ramen.name;
            ramenMenu.append(img);

            img.addEventListener("click", () => {
               ramenDetail.innerHTML = `
                <img class="detail-image" src=${ramen.image} alt="Insert Name Here" />
    <h2 class="name">${ramen.name}</h2>
    <h3 class="restaurant">${ramen.restaurant}</h3>
                `;
               comment.textContent = ramen.comment;
               rating.textContent = ramen.rating;
            });
         });
      });
});
