  const tooltip = document.getElementById("tooltip");
  const target = document.getElementById("tooltiptext");
  tooltip.addEventListener(
    "mouseover",
    () => {
        target.classList.add("visibleTooltiptext")
        target.classList.remove("tooltiptext")
    },
    false
  );
  tooltip.addEventListener(
    "mouseleave",
    () => {
        target.classList.remove("visibleTooltiptext")
        target.classList.add("tooltiptext")
    },
    false
  );