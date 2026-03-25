const NETFLIX_SEINFELD_URL = "https://www.netflix.com/title/70153373";
const TVMAZE_SHOW_SEARCH = "https://api.tvmaze.com/singlesearch/shows?q=seinfeld";
const TVMAZE_EPISODE_BY_NUMBER = (showId, season, number) =>
  `https://api.tvmaze.com/shows/${showId}/episodebynumber?season=${season}&number=${number}`;

const episodes = [
  [1, 1, "The Seinfeld Chronicles"],
  [1, 2, "The Stake Out"],
  [1, 3, "The Robbery"],
  [1, 4, "Male Unbonding"],
  [1, 5, "The Stock Tip"],

  [2, 1, "The Ex-Girlfriend"],
  [2, 2, "The Pony Remark"],
  [2, 3, "The Jacket"],
  [2, 4, "The Phone Message"],
  [2, 5, "The Apartment"],
  [2, 6, "The Statue"],
  [2, 7, "The Revenge"],
  [2, 8, "The Heart Attack"],
  [2, 9, "The Deal"],
  [2, 10, "The Baby Shower"],
  [2, 11, "The Chinese Restaurant"],
  [2, 12, "The Busboy"],

  [3, 1, "The Note"],
  [3, 2, "The Truth"],
  [3, 3, "The Pen"],
  [3, 4, "The Dog"],
  [3, 5, "The Library"],
  [3, 6, "The Parking Garage"],
  [3, 7, "The Cafe"],
  [3, 8, "The Tape"],
  [3, 9, "The Nose Job"],
  [3, 10, "The Stranded"],
  [3, 11, "The Alternate Side"],
  [3, 12, "The Red Dot"],
  [3, 13, "The Subway"],
  [3, 14, "The Pez Dispenser"],
  [3, 15, "The Suicide"],
  [3, 16, "The Fix-Up"],
  [3, 17, "The Boyfriend (Part 1)"],
  [3, 18, "The Boyfriend (Part 2)"],
  [3, 19, "The Limo"],
  [3, 20, "The Good Samaritan"],
  [3, 21, "The Letter"],
  [3, 22, "The Parking Space"],
  [3, 23, "The Keys"],

  [4, 1, "The Trip (Part 1)"],
  [4, 2, "The Trip (Part 2)"],
  [4, 3, "The Pitch"],
  [4, 4, "The Ticket"],
  [4, 5, "The Wallet"],
  [4, 6, "The Watch"],
  [4, 7, "The Bubble Boy"],
  [4, 8, "The Cheever Letters"],
  [4, 9, "The Opera"],
  [4, 10, "The Virgin"],
  [4, 11, "The Contest"],
  [4, 12, "The Airport"],
  [4, 13, "The Pick"],
  [4, 14, "The Movie"],
  [4, 15, "The Visa"],
  [4, 16, "The Shoes"],
  [4, 17, "The Outing"],
  [4, 18, "The Old Man"],
  [4, 19, "The Implant"],
  [4, 20, "The Junior Mint"],
  [4, 21, "The Smelly Car"],
  [4, 22, "The Handicap Spot"],
  [4, 23, "The Pilot (Part 1)"],
  [4, 24, "The Pilot (Part 2)"],

  [5, 1, "The Mango"],
  [5, 2, "The Puffy Shirt"],
  [5, 3, "The Glasses"],
  [5, 4, "The Sniffing Accountant"],
  [5, 5, "The Bris"],
  [5, 6, "The Lip Reader"],
  [5, 7, "The Non-Fat Yogurt"],
  [5, 8, "The Barber"],
  [5, 9, "The Masseuse"],
  [5, 10, "The Cigar Store Indian"],
  [5, 11, "The Conversion"],
  [5, 12, "The Stall"],
  [5, 13, "The Dinner Party"],
  [5, 14, "The Marine Biologist"],
  [5, 15, "The Pie"],
  [5, 16, "The Stand-In"],
  [5, 17, "The Wife"],
  [5, 18, "The Raincoats (Part 1)"],
  [5, 19, "The Raincoats (Part 2)"],
  [5, 20, "The Fire"],
  [5, 21, "The Hamptons"],
  [5, 22, "The Opposite"],

  [6, 1, "The Chaperone"],
  [6, 2, "The Big Salad"],
  [6, 3, "The Pledge Drive"],
  [6, 4, "The Chinese Woman"],
  [6, 5, "The Couch"],
  [6, 6, "The Gymnast"],
  [6, 7, "The Soup"],
  [6, 8, "The Mom & Pop Store"],
  [6, 9, "The Secretary"],
  [6, 10, "The Race"],
  [6, 11, "The Switch"],
  [6, 12, "The Label Maker"],
  [6, 13, "The Scofflaw"],
  [6, 14, "The Highlights of 100 (Part 1)"],
  [6, 15, "The Highlights of 100 (Part 2)"],
  [6, 16, "The Beard"],
  [6, 17, "The Kiss Hello"],
  [6, 18, "The Doorman"],
  [6, 19, "The Jimmy"],
  [6, 20, "The Doodle"],
  [6, 21, "The Fusilli Jerry"],
  [6, 22, "The Diplomat's Club"],
  [6, 23, "The Face Painter"],
  [6, 24, "The Understudy"],

  [7, 1, "The Engagement"],
  [7, 2, "The Postponement"],
  [7, 3, "The Maestro"],
  [7, 4, "The Wink"],
  [7, 5, "The Hot Tub"],
  [7, 6, "The Soup Nazi"],
  [7, 7, "The Secret Code"],
  [7, 8, "The Pool Guy"],
  [7, 9, "The Sponge"],
  [7, 10, "The Gum"],
  [7, 11, "The Rye"],
  [7, 12, "The Caddy"],
  [7, 13, "The Seven"],
  [7, 14, "The Cadillac (Part 1)"],
  [7, 15, "The Cadillac (Part 2)"],
  [7, 16, "The Shower Head"],
  [7, 17, "The Doll"],
  [7, 18, "The Friars Club"],
  [7, 19, "The Wig Master"],
  [7, 20, "The Calzone"],
  [7, 21, "The Bottle Deposit (Part 1)"],
  [7, 22, "The Bottle Deposit (Part 2)"],
  [7, 23, "The Wait Out"],
  [7, 24, "The Invitations"],

  [8, 1, "The Foundation"],
  [8, 2, "The Soul Mate"],
  [8, 3, "The Bizarro Jerry"],
  [8, 4, "The Little Kicks"],
  [8, 5, "The Package"],
  [8, 6, "The Fatigues"],
  [8, 7, "The Checks"],
  [8, 8, "The Chicken Roaster"],
  [8, 9, "The Abstinence"],
  [8, 10, "The Andrea Doria"],
  [8, 11, "The Little Jerry"],
  [8, 12, "The Comeback"],
  [8, 13, "The Van Buren Boys"],
  [8, 14, "The Susie"],
  [8, 15, "The Pothole"],
  [8, 16, "The English Patient"],
  [8, 17, "The Nap"],
  [8, 18, "The Millennium"],
  [8, 19, "The Yada Yada"],
  [8, 20, "The Muffin Tops"],
  [8, 21, "The Summer of George"],
  [8, 22, "The Serenity Now"],

  [9, 1, "The Butter Shave"],
  [9, 2, "The Voice"],
  [9, 3, "The Serenity Now"],
  [9, 4, "The Blood"],
  [9, 5, "The Junk Mail"],
  [9, 6, "The Merv Griffin Show"],
  [9, 7, "The Slicer"],
  [9, 8, "The Betrayal"],
  [9, 9, "The Apology"],
  [9, 10, "The Strike"],
  [9, 11, "The Dealership"],
  [9, 12, "The Reverse Peephole"],
  [9, 13, "The Cartoon"],
  [9, 14, "The Strongbox"],
  [9, 15, "The Wizard"],
  [9, 16, "The Burning"],
  [9, 17, "The Bookstore"],
  [9, 18, "The Frogger"],
  [9, 19, "The Maid"],
  [9, 20, "The Puerto Rican Day"],
  [9, 21, "The Clip Show (Part 1)"],
  [9, 22, "The Clip Show (Part 2)"],
  [9, 23, "The Finale (Part 1)"],
  [9, 24, "The Finale (Part 2)"],
];

const sampleBtn = document.getElementById("sampleBtn");
const result = document.getElementById("result");
const seasonEl = document.getElementById("season");
const episodeEl = document.getElementById("episode");
const titleEl = document.getElementById("title");
const summaryEl = document.getElementById("summary");
const episodeImage = document.getElementById("episodeImage");
const imageFallback = document.getElementById("imageFallback");
const netflixLink = document.getElementById("netflixLink");
const swipeArea = document.getElementById("swipeArea");
const themeToggle = document.getElementById("themeToggle");
const installBtn = document.getElementById("installBtn");

let cachedShowId = null;
let deferredPrompt = null;

function sampleEpisode() {
  const index = Math.floor(Math.random() * episodes.length);
  return episodes[index];
}

async function getSeinfeldShowId() {
  if (cachedShowId !== null) return cachedShowId;

  const res = await fetch(TVMAZE_SHOW_SEARCH);
  if (!res.ok) throw new Error("Failed to fetch show data.");

  const show = await res.json();
  cachedShowId = show.id;
  return cachedShowId;
}

function stripHtml(html) {
  if (!html) return "";
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return (tmp.textContent || tmp.innerText || "").trim();
}

async function getEpisodeDetails(season, episodeNumber) {
  const showId = await getSeinfeldShowId();
  const res = await fetch(TVMAZE_EPISODE_BY_NUMBER(showId, season, episodeNumber));
  if (!res.ok) throw new Error("Failed to fetch episode data.");

  const data = await res.json();
  return {
    imageUrl: data?.image?.original || data?.image?.medium || null,
    summary: stripHtml(data?.summary) || "No summary available."
  };
}


function showImage(url) {
  episodeImage.classList.remove("loaded");
  episodeImage.src = "";
  imageFallback.classList.add("hidden");

  if (!url) {
    episodeImage.classList.add("hidden");
    imageFallback.classList.remove("hidden");
    return;
  }

  episodeImage.classList.remove("hidden");
  episodeImage.onload = () => episodeImage.classList.add("loaded");
  episodeImage.onerror = () => {
    episodeImage.classList.add("hidden");
    imageFallback.classList.remove("hidden");
  };
  episodeImage.src = url;
}

async function renderSample() {
  const [season, episodeNumber, title] = sampleEpisode();

  seasonEl.textContent = season;
  episodeEl.textContent = episodeNumber;
  titleEl.textContent = title;
  summaryEl.textContent = "Loading summary...";
  netflixLink.href = NETFLIX_SEINFELD_URL;

  result.classList.remove("hidden");
  result.style.animation = "none";
  void result.offsetHeight;
  result.style.animation = "fadeIn 0.45s ease";

  imageFallback.textContent = "Loading image...";
  imageFallback.classList.remove("hidden");
  episodeImage.classList.add("hidden");

  try {
    const { imageUrl, summary } = await getEpisodeDetails(season, episodeNumber);
    summaryEl.textContent = summary;
    showImage(imageUrl);
  } catch {
    imageFallback.textContent = "Could not load episode image";
    summaryEl.textContent = "Could not load episode summary.";
    episodeImage.classList.add("hidden");
    imageFallback.classList.remove("hidden");
  }
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-mode", isLight);
  themeToggle.textContent = isLight ? "☀️ Light mode" : "🌙 Dark mode";
  localStorage.setItem("theme", theme);

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  metaTheme.setAttribute("content", isLight ? "#f4f7fb" : "#0f2027");
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    applyTheme(savedTheme);
    return;
  }

  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(prefersLight ? "light" : "dark");
}

themeToggle.addEventListener("click", () => {
  const isCurrentlyLight = document.body.classList.contains("light-mode");
  applyTheme(isCurrentlyLight ? "dark" : "light");
});

sampleBtn.addEventListener("click", renderSample);

let startX = 0;
let endX = 0;

swipeArea.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].clientX;
}, { passive: true });

swipeArea.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  const delta = endX - startX;

  if (Math.abs(delta) > 50) {
    renderSample();
  }
}, { passive: true });

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove("hidden");
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.classList.add("hidden");
});

window.addEventListener("appinstalled", () => {
  installBtn.classList.add("hidden");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

initTheme();
