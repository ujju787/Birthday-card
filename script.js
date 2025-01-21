// // Display Name in the Heading
// const name = "John"; // Customize name
// document.getElementById('birthday-name').textContent = `🎉 Happy Birthday, ${name}! 🎉`;

function startCelebration() {
  // Play Music
  document.getElementById("birthdayMusic").play();
  document.getElementById("wish-message").textContent =
    "Wishing you an amazing year ahead! 🎉🎶";

  // Show balloons and flowers sequentially
  const balloons = document.querySelectorAll(".balloon");
  const flowers = document.querySelectorAll(".blush-flower");

  balloons.forEach((balloon, index) => {
    setTimeout(() => {
      balloon.style.display = "block"; // Show balloons
    }, index * 300); // Staggered appearance
  });

  flowers.forEach((flower, index) => {
    setTimeout(() => {
      flower.style.display = "block"; // Show flowers after balloons
    }, (balloons.length + index) * 300);
  });
}
