document
  .querySelectorAll('a[href^="#"]:not([data-anchor-link])')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

const customCursor = document.querySelector(".custom-cursor");
const customCursorInner = document.querySelector(".custom-cursor__inner");

const moveCursor = (e) => {
  const tagName = e.target.tagName;
  const mouseY = e.clientY - 11;
  const mouseX = e.clientX - 11;

  customCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

  if (
    tagName === "A" ||
    (tagName === "A" && e.target.classList.contains("btn")) ||
    tagName === "BUTTON" ||
    e.target.classList.contains("header-link") ||
    e.target.classList.contains("link")
  ) {
    customCursorInner.style.transform = "scale(2.34) translateZ(0px)";
    customCursorInner.style.background = "rgba(255, 255, 255, 0)";
    customCursorInner.style.border = "1px solid rgba(255, 255, 255)";
    customCursorInner.style.borderRadius = "12px";
  } else {
    customCursorInner.style.background = "rgba(255, 255, 255, 1)";
    customCursorInner.style.transform = "scale(1) translateZ(0px)";
    customCursorInner.style.border = "2px solid rgba(255, 255, 255, 0)";
  }
};

window.addEventListener("mousemove", moveCursor);

export const handleize = (str) => {
  return str
    .toLowerCase()
    .replace(/[^\w\u00C0-\u024f]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const projectsList = [
  {
    title: "Parantaga",
    stack:
      "Shopify 2.0, AlpineJs, TailwindCss, Recharge, Custom logic for shipment, Custom checkout, Script editor, StampedIo, W3C",
    description:
      "Food supplements – Parantaga 💊 Vitamins for your skin 💊 Vitamins for your nails and hair",
    url: "https://parantaga.com/",
    img: "https://i.imgur.com/2xwFNF7.jpg",
  },
  {
    title: "Eastern Standard Provisions",
    stack:
      "Shopify 2.0, AlpineJs, React cart, TailwindCss, Recharge, Script editor, W3C",
    description:
      "Eastern Standard Provisions delivers expertly crafted, one-of-a-kind artisanal soft pretzels, Liège Belgian waffles..",
    url: "https://esprovisions.com/",
    img: "https://i.imgur.com/UgII3JJ.jpg",
  },
  {
    title: "Pia Baroncini",
    stack: "Shopify 2.0, AlpineJs, TailwindCss, W3C",
    description: "Ciao to all things Pia. Aperol spritz not included.",
    url: "https://piabaroncini.com",
    img: "https://i.imgur.com/WXCymtV.jpg",
  },
  {
    title: "Hydroslife",
    stack: "Shopify 2.0, AlpineJs, TailwindCss, Recharge, Script editor, W3C",
    description:
      "Filter your water, not your lifestyle. Each Hydros filter can keep 300 single use plastic bottles out of our oceans!",
    url: "https://hydroslife.com/",
    img: "https://i.imgur.com/eZfqC8p.jpg",
  },
  {
    title: "Lets Disco",
    stack:
      "Shopify 2.0, AlpineJs, TailwindCss, Custom Recharge logic and customer portal, Custom cart and checkout logic, Script editor, W3C",
    description:
      "Science backed skincare for men. Clean ingredients, effective regimens, ethical practices.",
    url: "https://letsdisco.com/",
    img: "https://i.imgur.com/918qAER.jpg",
  },
  {
    title: "The Cornet by Claire Holt",
    stack: "Shopify 2.0, AlpineJs, TailwindCss, W3C",
    description:
      "The Corner by Claire Holt is a place for me to write about workouts, being a mom, fashion, beauty, and more.",
    url: "https://thecornerbyclaire.com/",
    img: "https://i.imgur.com/YbD7SFI.jpg",
  },
  {
    title: "Goodnest",
    stack: "Shopify 2.0, AlpineJs, TailwindCss, Bundles, W3C",
    description:
      "Every goodnest product ships water free! this means a lighter package, and less carbon emissions associated with the shipment.",
    url: "https://goodnest.com/",
    img: "https://i.imgur.com/ntUrOUw.jpg",
  },
  {
    title: "Archive by DAN MAZZARINI",
    stack: "Shopify 2.0, AlpineJs, TailwindCss, W3C",
    description:
      "Archive is the editorial arm of BHDM, an interior design firm founded by Dan Mazzarini.",
    url: "https://archivebydm.com/",
    img: "https://i.imgur.com/GbgoERa.jpg",
  },
  {
    title: "Spritz Society",
    stack: "",
    description: "Meet Spritz Society, your new favorite sparkling cocktail.",
    url: "https://www.spritzsociety.com/",
    img: "https://i.imgur.com/zcK2lyj.jpg",
  },
];
