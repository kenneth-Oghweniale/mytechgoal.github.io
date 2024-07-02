document.addEventListener("DOMContentLoaded", () => {
    const currentTimeUTC = document.getElementById("current-time-utc");
    const currentDay = document.getElementById("current-day");

    function updateTime() {
      const now = new Date();
      const utcTime = now.toUTCString().split(" ")[4];
      const day = now.toLocaleDateString("en-US", { weekday: "long" });

      currentTimeUTC.textContent = utcTime;
      currentDay.textContent = day;
    }

    updateTime();
    setInterval(updateTime, 1000);
  });