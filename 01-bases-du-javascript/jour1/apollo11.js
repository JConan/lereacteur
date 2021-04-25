for (let i = 12; i >= 0; i--) {
  if (!(i === 8 || i == 7)) console.log(i);
  if (i === 8) console.log("Ignition sequence start");
  if (i === 0) {
    console.log("All engines running");
    console.log("Liftoff! 🚀");
  }
}
