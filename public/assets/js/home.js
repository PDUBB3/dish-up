const handleSubmit = async (event) => {
  event.preventDefault();
  const searchInput = $("#search-input").val();
  const diet = $("#diet-input")
    .find(":checked")
    .map((i, each) => {
      return $(each).attr("id");
    })
    .get();
  const intolerance = $("#intolerance-input")
    .find(":checked")
    .map((i, each) => {
      return $(each).attr("id");
    })
    .get();

  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   redirect: "follow",
  //   body: JSON.stringify({
  //     searchInput,
  //     diet,
  //     intolerance,
  //   }),
  // };

  // const response = await fetch("/api/meals", options);
  // const meals = await response.json();

  // if (response.status !== 200) {
  //   console.error("Failed to render search results");
  // } else {
  //   window.location.replace(
  //     `/mealplan/${id}/add/results?day=${day}&meal=${meal}`
};

const handleCarouselClick = async (event) => {
  const mealId = event.currentTarget.id;

  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   redirect: "follow",
  //   body: JSON.stringify({
  //     imageId,
  //   }),
  // };

  // const response = await fetch("/api/meals/recipe", options);
  // const carouselMeal = await response.json();
  window.location.replace(`/recipe?id=${mealId}`);
};

$(".carousel-item").click(handleCarouselClick);
$("#meal-search").submit(handleSubmit);
