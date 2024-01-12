const box = document.getElementById("outerbox");
const display = document.getElementById("select-me");

function checkScrolledBottom() {
  // scrollHeight is the height of an element, including content that is not visible because of overflow
  const scrollHeight = box.scrollHeight;

  // clientHeight is the height of an element, including padding and execluding margin and border
  const clientHeight = box.clientHeight;

  // scrollTop is the distance between an element's top and its top most *visible* content
  // returns the number of pixel that have been scrolled vertically
  const scrollTop = box.scrollTop;

  // scrollTop might return fraction so we should not compare it to 0
  const isReachedBottom = scrollHeight - clientHeight - scrollTop < 1;

  display.innerHTML = `
  <p>
    scrollHeight: ${scrollHeight}
  </p>

  <p>
    clientHeight: ${clientHeight}
  </p>

  <p>
    scrollTop: ${scrollTop}
  </p>

  <p>
  ${isReachedBottom ? "Reached bottom!" : "Not there yet..."}
  </p>
`;
}

checkScrolledBottom();

box.onscroll = () => checkScrolledBottom();
