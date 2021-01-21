function toggleState() {
  let button = document.getElementById("span-2");

  /* Checking if button id exists */
  if (button) {
    /* Button State */
    editAttributes(
      button,
      "span-2-toggled",
      "bg-white w-10 h-1 border border-white opacity-0"
    );

    /* Span 1 State */
    editClassName(
      document.getElementById("span-1"),
      "bg-white w-10 h-1 border border-white transition duration-200 transform rotate-45 ease-linear relative top-3"
    );

    /* Span 3 State */
    editClassName(
      document.getElementById("span-3"),
      "bg-white w-10 h-1 border border-white transition duration-200 transform -rotate-45 ease-linear relative bottom-3"
    );

    /* Nav Items State */
    editClassName(
      document.getElementById("nav-items"),
      "space-y-8 visible md:space-y-0 md:visible md:flex md:space-x-8 xl:space-x-14 text-lg leading-5 nav-links-font"
    );

    /* Heading State */
    editClassName(document.getElementById("heading"), "invisible");

    /* Content State */
    editClassName(document.getElementById("content"), "hidden");

    /* Footer State */
    editClassName(document.getElementById("footer"), "hidden");
  } else {
    /* Button State */
    editAttributes(
      document.getElementById("span-2-toggled"),
      "span-2",
      "bg-white w-10 h-1 border border-white opacity-200"
    );

    /* Span 1 State */
    editClassName(
      document.getElementById("span-1"),
      "bg-white w-10 h-1 border border-white transition transform duration-200 ease-linear"
    );

    /* Span 3 State */
    editClassName(
      document.getElementById("span-3"),
      "bg-white w-10 h-1 border border-white transition transform duration-200 ease-linear"
    );

    /* Nav Items State */
    editClassName(
      document.getElementById("nav-items"),
      "space-y-8 invisible md:space-y-0 md:visible md:flex md:space-x-8 xl:space-x-14 text-lg leading-5 nav-links-font "
    );

    /* Heading State */
    editClassName(
      document.getElementById("heading"),
      "p-2 uppercase text-sm leading-4 border border-white visible"
    );

    /* Content State */
    editClassName(document.getElementById("content"), "inline");

    /* Footer State */
    editClassName(document.getElementById("footer"), "inline");
  }
}

function editAttributes(element, tagId, tagClassName) {
  element.className = tagClassName;
  element.id = tagId;
}

function editClassName(element, className) {
  element.className = className;
}
