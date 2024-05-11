function scrollToSegment(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href")?.substring(1);
  const targetElement = document.getElementById(targetId || "");

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    });
  } else if (targetId === "") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

export default scrollToSegment;
