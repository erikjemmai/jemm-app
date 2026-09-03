const KEY = "jemm-companion";
const APP_LOOKS = ["v1", "v2", "v3"];
const DEVICE_OPENS = [
  { id: "sheet", label: "Bottom sheet" },
  { id: "page", label: "New page" },
  { id: "side", label: "Right sheet" },
];
const PREVIEW_DOCKS = [
  { id: "sheet", label: "Bottom" },
  { id: "side", label: "Right" },
];
const HOME_BACKGROUNDS = [
  { id: "fill", label: "Fill" },
  { id: "photo", label: "Photo" },
  { id: "frost", label: "Frost" },
];
const CARD_TONES = [
  { id: "steel", label: "Dark Steel" },
  { id: "charcoal", label: "Charcoal Ink" },
  { id: "black", label: "Black" },
];
const HOME_PANES = [
  { id: "home", label: "Home" },
  { id: "devices", label: "Devices" },
];
const HOME_LAYOUTS = [
  { id: "v1", label: "V1" },
  { id: "v2", label: "V2" },
];
const HOME_TILES = [
  { id: "row", label: "Horizontal" },
  { id: "square", label: "Square" },
];
const HOME_INTROS = [
  { id: "none", label: "Weather" },
  { id: "property", label: "Property" },
];
const BOTTOM_NAVS = [
  { id: "v1", label: "V1" },
  { id: "v2", label: "V2" },
  { id: "v3", label: "V3" },
  { id: "v4", label: "V4" },
];
const SURFACE_STYLES = [
  { id: "matte", label: "Matte" },
  { id: "glass", label: "Glass" },
];
const SPACINGS = [
  { id: "12", label: "12" },
  { id: "16", label: "16" },
  { id: "20", label: "20" },
  { id: "24", label: "24" },
];
const SUMMARY_TITLES = {
  status: "Home status",
  people: "People present",
  lights: "Lights",
  playing: "Now playing",
  security: "Security",
  climate: "Climate",
  shades: "Shades",
  fans: "Fans",
  cameras: "Cameras",
};
const AVATARS = [
  { id: "1", src: "assets/avatars/1.png", label: "Bright" },
  { id: "2", src: "assets/avatars/2.png", label: "Warm" },
  { id: "3", src: "assets/avatars/3.png", label: "Calm" },
  { id: "4", src: "assets/avatars/4.png", label: "Quiet" },
];

const ROOMS = [
  {
    id: "living",
    name: "Living room",
    photo: "assets/rooms/scene-living.jpg",
    weather: "84° · Sunny",
    climate: "72°",
    summary: [
      { k: "Climate", v: "72°" },
      { k: "Lights on", v: "4" },
      { k: "Playing", v: "Jazz" },
      { k: "Shades", v: "Open" },
    ],
    devices: [
      { id: "lr-ceiling", name: "Ceiling", kind: "light", intensity: 60, kelvin: 2700 },
      { id: "lr-lamp", name: "Floor lamp", kind: "light", intensity: 42, kelvin: 2200 },
      { id: "lr-sconce", name: "Sconces", kind: "light", intensity: 35, kelvin: 2700 },
      { id: "lr-accent", name: "Accent", kind: "light", intensity: 22, kelvin: 3000 },
      { id: "lr-art", name: "Art lights", kind: "light", on: false, intensity: 50, kelvin: 4000 },
      { id: "lr-climate", name: "Climate", kind: "climate", detail: "72° · Auto" },
      { id: "lr-audio", name: "Audio", kind: "audio", detail: "Jazz · 18%" },
      { id: "lr-shade", name: "Shades", kind: "shade", detail: "Open" },
      { id: "lr-fan", name: "Ceiling fan", kind: "fan", detail: "Low" },
      { id: "lr-mic", name: "Jemm Mic", kind: "mic", detail: "Listening" },
      { id: "lr-front", name: "Front door", kind: "camera", detail: "Live" },
      { id: "lr-drive", name: "Driveway", kind: "camera", detail: "Live" },
    ],
    quick: [
      { id: "sleep", label: "Good night" },
      { id: "movie", label: "Movie night" },
      { id: "evening", label: "Relax" },
    ],
  },
  {
    id: "kitchen",
    name: "Kitchen",
    photo: "assets/rooms/scene-kitchen.jpg",
    weather: "84° · Sunny",
    climate: "70°",
    summary: [
      { k: "Climate", v: "70°" },
      { k: "Lights on", v: "3" },
      { k: "Playing", v: "Off" },
      { k: "Fan", v: "Low" },
    ],
    devices: [
      { id: "k-light", name: "Pendants", kind: "light", intensity: 80, kelvin: 4000 },
      { id: "k-under", name: "Under cabinet", kind: "light", intensity: 70, kelvin: 3500 },
      { id: "k-island", name: "Island", kind: "light", intensity: 55, kelvin: 3000 },
      { id: "k-climate", name: "Climate", kind: "climate", detail: "70°" },
      { id: "k-fan", name: "Fan", kind: "fan", detail: "Low" },
      { id: "k-mic", name: "Jemm Mic", kind: "mic", detail: "Ready" },
    ],
    quick: [
      { id: "cook", label: "Cook" },
      { id: "lights-off", label: "Lights off" },
      { id: "fan", label: "Fan" },
      { id: "quiet", label: "Quiet" },
    ],
  },
  {
    id: "backyard",
    name: "Backyard",
    photo: "assets/rooms/scene-outdoor.jpg",
    weather: "84° · Sunny",
    climate: "84°",
    summary: [
      { k: "Outside", v: "84°" },
      { k: "Lights on", v: "2" },
      { k: "Playing", v: "Patio" },
      { k: "Camera", v: "On" },
    ],
    devices: [
      { id: "yd-light", name: "Path lights", kind: "light", intensity: 40, kelvin: 2700 },
      { id: "yd-spot", name: "Spotlights", kind: "light", intensity: 55, kelvin: 3000 },
      { id: "yd-string", name: "String lights", kind: "light", on: false, intensity: 35, kelvin: 2200 },
      { id: "yd-audio", name: "Audio", kind: "audio", detail: "Patio mix" },
      { id: "yd-cam", name: "Patio", kind: "camera", detail: "Armed" },
      { id: "yd-mic", name: "Jemm Mic", kind: "mic", detail: "Outdoor" },
    ],
    quick: [
      { id: "evening", label: "Evening" },
      { id: "lights-off", label: "Lights off" },
      { id: "play", label: "Play" },
      { id: "away", label: "Lock up" },
    ],
  },
  {
    id: "bedroom",
    name: "Bedroom",
    photo: "assets/rooms/scene-bedroom.jpg",
    weather: "84° · Sunny",
    climate: "68°",
    summary: [
      { k: "Climate", v: "68°" },
      { k: "Lights on", v: "1" },
      { k: "Playing", v: "Off" },
      { k: "Shades", v: "Half" },
    ],
    devices: [
      { id: "br-light", name: "Ceiling", kind: "light", intensity: 18, kelvin: 2700 },
      { id: "br-bed", name: "Bedside", kind: "light", on: false, intensity: 12, kelvin: 2200 },
      { id: "br-closet", name: "Closet", kind: "light", on: false, intensity: 90, kelvin: 4000 },
      { id: "br-climate", name: "Climate", kind: "climate", detail: "68°" },
      { id: "br-shade", name: "Shades", kind: "shade", detail: "Half" },
      { id: "br-audio", name: "Audio", kind: "audio", detail: "Off" },
    ],
    quick: [
      { id: "sleep", label: "Sleep" },
      { id: "lights-off", label: "Lights off" },
      { id: "shades", label: "Shades" },
      { id: "climate", label: "Climate" },
    ],
  },
];

const LAKE_ROOMS = [
  {
    id: "great",
    name: "Great room",
    photo: "assets/rooms/scene-living.jpg",
    weather: "72° · Clear",
    climate: "70°",
    summary: [
      { k: "Climate", v: "70°" },
      { k: "Lights on", v: "2" },
      { k: "Playing", v: "Off" },
      { k: "Shades", v: "Open" },
    ],
    devices: [
      { id: "gr-light", name: "Ceiling", kind: "light", intensity: 50, kelvin: 2700 },
      { id: "gr-lamp", name: "Floor lamp", kind: "light", intensity: 40, kelvin: 2200 },
      { id: "gr-sconce", name: "Sconces", kind: "light", on: false, intensity: 30, kelvin: 2700 },
      { id: "gr-climate", name: "Climate", kind: "climate", detail: "70° · Auto" },
      { id: "gr-audio", name: "Audio", kind: "audio", detail: "Off" },
      { id: "gr-mic", name: "Jemm Mic", kind: "mic", detail: "Ready" },
    ],
    quick: [
      { id: "arrive", label: "Arrive" },
      { id: "movie", label: "Movie" },
      { id: "lights-off", label: "Lights off" },
      { id: "quiet", label: "Quiet" },
    ],
  },
  {
    id: "deck",
    name: "Deck",
    photo: "assets/rooms/scene-outdoor.jpg",
    weather: "72° · Clear",
    climate: "72°",
    summary: [
      { k: "Outside", v: "72°" },
      { k: "Lights on", v: "1" },
      { k: "Playing", v: "Off" },
      { k: "Camera", v: "On" },
    ],
    devices: [
      { id: "dk-light", name: "String lights", kind: "light", intensity: 40, kelvin: 2200 },
      { id: "dk-path", name: "Path lights", kind: "light", on: false, intensity: 50, kelvin: 2700 },
      { id: "dk-audio", name: "Audio", kind: "audio", detail: "Off" },
      { id: "dk-cam", name: "Camera", kind: "camera", detail: "Armed" },
    ],
    quick: [
      { id: "evening", label: "Evening" },
      { id: "lights-off", label: "Lights off" },
      { id: "play", label: "Play" },
      { id: "lock", label: "Lock up" },
    ],
  },
];

const SCENE_INFO = {
  evening: {
    blurb: "Warms the lights, eases intensity, and starts a quiet mix so this room feels settled after dark.",
    photo: "assets/rooms/scene-living.jpg",
    pos: "center 52%",
  },
  "lights-off": {
    blurb: "Turns the lights in this room off. Climate, audio, and the rest of the house stay as they are.",
    photo: "assets/rooms/scene-outdoor.jpg",
    pos: "center 8%",
  },
  play: {
    blurb: "Starts audio in this room at a comfortable volume without changing lights or climate.",
    photo: "assets/rooms/scene-media.jpg",
    pos: "center 40%",
  },
  climate: {
    blurb: "Holds a comfortable climate in this room. Lights and audio are left alone.",
    photo: "assets/rooms/scene-living.jpg",
    pos: "78% 62%",
  },
  cook: {
    blurb: "Bright task lighting and a low fan so the kitchen is ready to cook without heating the whole house.",
    photo: "assets/rooms/scene-kitchen.jpg",
    pos: "70% 40%",
  },
  fan: {
    blurb: "Runs the fan on low for air movement. Lights stay as you left them.",
    photo: "assets/rooms/scene-kitchen.jpg",
    pos: "center 18%",
  },
  quiet: {
    blurb: "Stops audio and drops the lights so this room can stay in the background.",
    photo: "assets/rooms/scene-bedroom.jpg",
    pos: "80% 40%",
  },
  away: {
    blurb: "Locks the outdoor area down: path lights off, camera armed, audio stopped.",
    photo: "assets/rooms/scene-outdoor.jpg",
    pos: "center 60%",
  },
  lock: {
    blurb: "Turns the deck down for the night and arms the camera so you can leave it.",
    photo: "assets/rooms/scene-outdoor.jpg",
    pos: "70% 50%",
  },
  sleep: {
    blurb: "Low warm light, cooler climate, and shades down so the bedroom is ready for sleep.",
    photo: "assets/rooms/scene-bedroom.jpg",
    pos: "center 30%",
  },
  shades: {
    blurb: "Sets the shades to a restful half-down position. Lights and climate stay put.",
    photo: "assets/rooms/scene-living.jpg",
    pos: "center 88%",
  },
  arrive: {
    blurb: "Warms the great room as you walk in: lights on, climate auto, audio ready if you want it.",
    photo: "assets/rooms/scene-living.jpg",
    pos: "40% 30%",
  },
  movie: {
    blurb: "Dims the lights, drops the shades, and routes audio for watching in this room.",
    photo: "assets/rooms/scene-media.jpg",
    pos: "center 50%",
  },
};

const HOMES = [
  {
    id: "john",
    name: "John Residence",
    city: "Miami, Florida",
    weather: "84° F • Sunny",
    plan: "assets/rooms/floorplan-1.png",
    rooms: ROOMS,
    spots: {
      living: { t: 10, l: 8, w: 40, h: 38, label: "Living" },
      kitchen: { t: 10, l: 52, w: 40, h: 38, label: "Kitchen" },
      bedroom: { t: 54, l: 8, w: 40, h: 36, label: "Bedroom" },
      backyard: { t: 54, l: 52, w: 40, h: 36, label: "Backyard" },
    },
  },
  {
    id: "lake",
    name: "Lake House",
    city: "Tahoe City, CA",
    weather: "72° F • Clear",
    plan: "assets/rooms/floorplan-2.png",
    rooms: LAKE_ROOMS,
    spots: {
      great: { t: 12, l: 10, w: 80, h: 44, label: "Great room" },
      deck: { t: 62, l: 18, w: 64, h: 28, label: "Deck" },
    },
  },
];

const TONES = {
  Warm: { rate: 0.92, pitch: 1.12 },
  Calm: { rate: 0.84, pitch: 0.94 },
  Neutral: { rate: 1, pitch: 1 },
  Serious: { rate: 0.9, pitch: 0.78 },
};

const PEOPLE = [
  {
    id: "john",
    nameKey: true,
    role: "Admin",
    emailKey: true,
    avatarKey: true,
    listen: true,
    personality: "Host",
    tone: "Warm",
    language: "English",
    wake: "Hey Jemm",
    sample: "Hi John. You’re in the living room. Evening scene is ready whenever you are.",
  },
  {
    id: "alex",
    name: "Alex Rivera",
    role: "Household",
    email: "alex@home",
    avatar: "1",
    listen: true,
    personality: "Helpful",
    tone: "Calm",
    language: "English",
    wake: "Hey Jemm",
    sample: "Kitchen’s set. Task lights are on. Want me to start a quiet playlist?",
  },
  {
    id: "sam",
    name: "Sam Chen",
    role: "Guest",
    email: "sam@home",
    avatar: "2",
    listen: false,
    personality: "Quiet guest",
    tone: "Neutral",
    language: "English",
    wake: "Hey Jemm",
    sample: "Welcome, Sam. Guest access is on. I won’t wake unless you ask.",
  },
  {
    id: "mia",
    name: "Mia Doe",
    role: "Child",
    email: "mia@home",
    avatar: "4",
    listen: true,
    personality: "Playful",
    tone: "Warm",
    language: "English",
    wake: "Hey Jemm",
    sample: "Hey there — what’s going on? Kitchen lights are already on if you want a snack.",
  },
];

const ACCENTS = ["American", "British", "Neutral"];
const PERSONALITIES = ["Host", "Helpful", "Playful", "Serious"];
const TONE_SAMPLES = {
  Serious: "Good afternoon. The living room is ready, and the evening scene is available when you wish.",
  Warm: "Hey there — what’s going on? Evening scene is ready whenever you are.",
  Calm: "Kitchen’s set. Task lights are on. Want a quiet playlist?",
  Neutral: "You’re in the living room. Say a scene name when you want a change.",
};
const PERSON_HISTORY = {
  john: [
    { t: "Evening scene in the living room", d: "Jemm warmed lights to 40% and started Jazz." },
    { t: "Asked for patio volume", d: "Jemm set backyard audio to 30%." },
  ],
  alex: [
    { t: "Kitchen lights on", d: "Jemm set task lights to 90%." },
    { t: "Cook scene", d: "Jemm ran Cook in the kitchen." },
  ],
  sam: [
    { t: "Guest Wi-Fi", d: "Jemm shared the guest network. No door control." },
  ],
  mia: [
    { t: "Story lights", d: "Jemm dimmed the bedroom to 20%." },
    { t: "Unlock the secret vault", d: "Jemm held the request for an admin." },
  ],
};
const HOME_DOORS = [
  { id: "front", label: "Front", t: 6, l: 42, w: 16, h: 10 },
  { id: "patio", label: "Patio", t: 78, l: 38, w: 22, h: 12 },
  { id: "garage", label: "Garage", t: 36, l: 6, w: 12, h: 16 },
];
const SONGS = [
  { id: "jazz", title: "Evening Jazz — Late Night Set", artist: "Jemm Radio" },
  { id: "patio", title: "Patio mix — Warm air and strings", artist: "Outdoor" },
  { id: "radio", title: "Morning radio — Sunrise hour", artist: "Local" },
  { id: "tv", title: "Living room TV — HDMI", artist: "Television" },
];

const ICONS = {
  light: "assets/devices/icon-light.svg",
  climate: "assets/devices/icon-climate.svg",
  audio: "assets/devices/icon-audio.svg",
  shade: "assets/devices/icon-shade.svg",
  mic: "assets/devices/icon-mic.svg",
  fan: "assets/devices/icon-fan.svg",
  camera: "assets/devices/icon-camera.svg",
  arc: "assets/devices/icon-arc.svg",
};
const KIND_LABEL = {
  light: "Lights",
  climate: "Climate",
  audio: "Sound",
  shade: "Shades",
  fan: "Fans",
  camera: "Cameras",
  mic: "Jemm mics",
};
const KIND_ORDER = ["light", "climate", "audio", "shade", "fan", "camera", "mic"];

const APP_SCREENS = new Set(["home", "rooms", "profiles", "more", "devices", "insights", "settings", "jemm", "help", "notify", "profile", "room", "scene", "history", "device", "camera", "summary"]);
const ONBOARD = new Set(["splash", "welcome", "login", "pair", "found", "wifi", "connecting", "avatar", "account", "done"]);

function blank() {
  return {
    screen: "splash",
    theme: "dark",
    loggedIn: false,
    presence: "living",
    viewingRoom: null,
    viewingPerson: "john",
    viewingScene: null,
    avatar: "3",
    email: "user@email.com",
    name: "John Doe",
    homeId: "john",
    home: "John Residence",
    keepIn: true,
    faceId: true,
    showPass: false,
    password: "",
    scene: {},
    ctl: {},
    personTone: {},
    personAccent: {},
    personPersonality: {},
    personVisible: {},
    personGone: {},
    sceneNames: {},
    sceneWakes: {},
    scenePeople: {},
    sceneTriggers: {},
    doors: { front: "locked", patio: "locked", garage: "locked" },
    adminRequest: null,
    jemmMood: "ok",
    homePeek: null,
    spotifyLinked: true,
    playingSong: "jazz",
    deviceView: "list",
    appLook: "v2",
    deviceOpen: "sheet",
    previewMenu: false,
    previewDock: "sheet",
    homeBg: "fill",
    cardTone: "steel",
    surfaceStyle: "matte",
    spacing: "16",
    homeLayout: "v1",
    homeTile: "row",
    homeIntro: "none",
    bottomNav: "v3",
    homePage: 0,
    viewingDevice: null,
    deviceBack: "home",
    viewingSummary: null,
    summaryBack: "home",
    sceneBack: "room",
    camReply: "",
    peekDeviceId: null,
    deviceDetailStyle: "slider",
    sceneDetailStyle: "sheet",
    deviceNameEdits: {},
    roomTab: "scenes",
    roomPhotoSheet: null,
    deviceKind: "all",
    roomsView: "grid",
    peopleView: "list",
    followMe: true,
    coach: false,
    voice: false,
    jemmExpanded: false,
    jemmMuted: false,
    voiceHistory: [],
    wakeWord: "Hey Jemm",
    wakeWordSheet: false,
    nightCardDismissed: false,
    nightCardDemo: true,
    walkAuto: false,
    viewAs: "admin",
    sheetDevice: null,
    sheetSize: "half",
    sheetTab: "controls",
    sheet: null,
    toast: "",
    connectStep: 0,
    walkTo: null,
    jemmPlace: "bottom",
    jemmVisible: true,
    jemmMenu: false,
    homeMenu: false,
    helpSheet: false,
    helpChat: false,
    accountSheet: false,
    sheetScene: null,
    sideScene: null,
    favorites: null,
    favEdit: false,
    favAdd: false,
    favKind: null,
  };
}

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "null");
    if (!saved) return blank();
    const next = { ...blank(), ...saved, sheet: null, sheetDevice: null, sheetSize: "half", sheetTab: "controls", sheetScene: null, sideScene: null, homePeek: null, peekDeviceId: null, voice: false, toast: "", walkTo: null, jemmMenu: false, homeMenu: false, helpSheet: false, helpChat: false, accountSheet: false, previewMenu: false, camReply: "", favEdit: false, favAdd: false, favKind: null, wakeWordSheet: false };
    next.appLook = normalizeLook(next.appLook);
    next.deviceOpen = normalizeDeviceOpen(next.deviceOpen);
    next.previewDock = normalizePreviewDock(next.previewDock);
    next.homeBg = normalizeHomeBg(next.homeBg);
    next.cardTone = normalizeCardTone(next.cardTone);
    next.surfaceStyle = normalizeSurface(next.surfaceStyle);
    next.spacing = normalizeSpacing(next.spacing);
    next.homeLayout = normalizeHomeLayout(next.homeLayout);
    next.homeTile = normalizeHomeTile(next.homeTile);
    next.homeIntro = normalizeHomeIntro(next.homeIntro);
    next.bottomNav = normalizeBottomNav(next.bottomNav);
    next.homePage = normalizeHomePage(next.homePage, next.homeLayout);
    if (saved.roomsView === "list" && saved.peopleView == null) next.roomsView = "grid";
    return next;
  } catch {
    return blank();
  }
}

let state = load();
let toastTimer;
let connectTimer;
let liveSheetId = null;
let learnTimer;
let sliderLearnTimer;
let sliderLearn = false;
let jemmCue = null;
let walkAutoTimer = null;

function startWalkAuto() {
  if (walkAutoTimer) clearInterval(walkAutoTimer);
  walkAutoTimer = setInterval(() => {
    if (!state.walkAuto) { stopWalkAuto(); return; }
    transitionRoom(() => {
      walkNext();
      const newRoom = hereRoom();
      if (newRoom) flash(`Now in ${newRoom.name}`);
    });
  }, 20000);
}

function stopWalkAuto() {
  if (walkAutoTimer) { clearInterval(walkAutoTimer); walkAutoTimer = null; }
}

const LEARN_KEYS = new Set([
  "ctl", "scene", "presence", "personTone", "personAccent", "personPersonality",
  "personVisible", "personGone", "sceneNames", "sceneWakes", "scenePeople", "sceneTriggers",
  "doors", "adminRequest", "theme", "followMe", "faceId", "homeId", "name",
  "email", "avatar", "password",
  "surfaceStyle", "spacing", "homeBackground", "bottomNavStyle", "deviceDetailStyle", "sceneDetailStyle",
  "jemmMuted", "wakeWord", "nightCardDismissed",
]);

function shouldLearn(next) {
  return Object.keys(next).some((k) => LEARN_KEYS.has(k));
}

function noticeJemm(cue) {
  jemmCue = cue || "I’ll remember that.";
  queueMicrotask(startLearnPulse);
}

function startLearnPulse() {
  document.querySelectorAll(".nav-jemm, .jemm-orb, .jemm-strip").forEach((el) => {
    el.classList.remove("is-learn");
    void el.offsetWidth;
    el.classList.add("is-learn");
  });
  const line = document.querySelector(".jemm-strip__line");
  if (line && jemmCue) line.textContent = jemmCue;
  clearTimeout(learnTimer);
  learnTimer = setTimeout(() => {
    document.querySelectorAll(".is-learn").forEach((el) => el.classList.remove("is-learn"));
    const strip = document.querySelector(".jemm-strip__line");
    jemmCue = null;
    if (strip) strip.textContent = jemmLine();
  }, 1700);
}

function persist() {
  const { sheet, sheetDevice, sheetSize, sheetTab, sheetScene, homePeek, deviceKind, voice, toast, walkTo, jemmMenu, homeMenu, helpSheet, helpChat, accountSheet, previewMenu, camReply, favEdit, favAdd, favKind, ...rest } = state;
  localStorage.setItem(KEY, JSON.stringify(rest));
}

function normalizeLook(value) {
  return APP_LOOKS.includes(value) ? value : "v2";
}

function normalizeDeviceOpen(value) {
  return value === "page" || value === "side" ? value : "sheet";
}

function normalizePreviewDock(value) {
  return value === "side" ? "side" : "sheet";
}

function normalizeHomeBg(value) {
  return value === "photo" ? "photo" : value === "frost" ? "frost" : "fill";
}

function normalizeCardTone(value) {
  return value === "charcoal" || value === "black" ? value : "steel";
}

function normalizeSurface(value) {
  return value === "glass" ? "glass" : "matte";
}

function normalizeSpacing(value) {
  return ["12", "16", "20", "24"].includes(String(value)) ? String(value) : "16";
}

function normalizeHomeLayout(value) {
  return value === "v2" ? "v2" : "v1";
}

function normalizeHomeTile(value) {
  return value === "square" ? "square" : "row";
}

function normalizeHomeIntro(value) {
  return value === "property" ? "property" : "none";
}

function normalizeBottomNav(value) {
  if (value === "v1" || value === "v2" || value === "v3" || value === "v4") return value;
  if (value === "bar") return "v2";
  if (value === "pill") return "v3";
  return "v2";
}

function homePaneCount(layout) {
  return normalizeHomeLayout(layout ?? state?.homeLayout) === "v2" ? 1 : HOME_PANES.length;
}

function homeDevicesPage() {
  return homePaneCount() > 1 ? 1 : 0;
}

function normalizeHomePage(value, layout) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(homePaneCount(layout) - 1, Math.round(n)));
}

function homePhoto() {
  return (hereRoom() || rooms()[0] || {}).photo || "";
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme === "light" ? "light" : "dark";
  document.documentElement.dataset.look = normalizeLook(state.appLook);
  document.documentElement.dataset.cardTone = normalizeCardTone(state.cardTone);
  document.documentElement.dataset.surface = normalizeSurface(state.surfaceStyle);
  document.documentElement.dataset.spacing = normalizeSpacing(state.spacing);
}

function patch(next, redraw = true) {
  const learn = shouldLearn(next);
  state = { ...state, ...next };
  persist();
  applyTheme();
  if (redraw === "live") refreshLive();
  else if (redraw) render();
  if (learn) noticeJemm();
}

function patchLive(next) {
  patch({ ...next, previewMenu: true }, "live");
}

function updateShellChrome(shell) {
  if (!shell) return;
  shell.dataset.look = normalizeLook(state.appLook);
  shell.dataset.deviceOpen = normalizeDeviceOpen(state.deviceOpen);
  shell.dataset.bottomNav = normalizeBottomNav(state.bottomNav);
  const bg = normalizeHomeBg(state.homeBg);
  const needsPhoto = (bg === "photo" || bg === "frost");
  const photo = state.loggedIn && needsPhoto && homePhoto();
  shell.classList.toggle("has-photo", Boolean(photo));
  shell.dataset.homeBg = bg;
  if (photo) shell.style.setProperty("--home-photo", `url('${photo}')`);
  else shell.style.removeProperty("--home-photo");
  if (bg !== "frost") document.documentElement.style.removeProperty("--frost-opacity");
}

function liveStageHtml() {
  if (state.screen === "home") {
    const room = hereRoom();
    return room ? renderHomeHere(room) : renderHomeAway();
  }
  return null;
}

function liveNavActive() {
  const screen = state.screen;
  if (screen === "rooms" || screen === "room" || screen === "scene") return "rooms";
  if (screen === "profiles" || screen === "profile" || screen === "history") return "profiles";
  if (screen === "insights") return "insights";
  if (screen === "more" || screen === "settings" || screen === "jemm" || screen === "help") return "more";
  if (screen === "devices") return state.deviceBack === "more" ? "more" : "home";
  return "home";
}

function refreshLive() {
  const shell = document.querySelector(".shell");
  const stage = shell && shell.querySelector(".stage");
  if (!shell || !stage) {
    render();
    return;
  }
  const scroll = stage.scrollTop;
  const sheetBody = document.querySelector(".preview-sheet__body");
  const sheetScroll = sheetBody ? sheetBody.scrollTop : 0;
  updateShellChrome(shell);
  const body = liveStageHtml();
  if (body) {
    stage.innerHTML = body;
    stage.scrollTop = scroll;
  }
  const nav = shell.querySelector(".bottom-nav");
  if (nav) nav.outerHTML = bottomNav(liveNavActive());
  const chip = shell.querySelector(".preview-menu__btn");
  if (chip) chip.outerHTML = previewMenuBtn();
  if (sheetBody) {
    sheetBody.innerHTML = previewSheetBody();
    sheetBody.scrollTop = sheetScroll;
  }
  const fav = document.querySelector(".sheet--fav");
  if (state.favAdd) {
    const favBody = document.querySelector(".fav-picker__body");
    if (favBody) favBody.innerHTML = favPickerBody();
  } else if (fav) fav.remove();
  bindTopnavScroll();
  playJemmVideos();
}

function go(screen, extra = {}) {
  patch({
    screen,
    sheet: null,
    sheetDevice: null,
    sheetSize: "half",
    sheetTab: "controls",
    sheetScene: null,
    homePeek: null,
    voice: false,
    jemmMenu: false,
    homeMenu: false,
    helpSheet: false,
    helpChat: false,
    accountSheet: false,
    previewMenu: false,
    favEdit: false,
    favAdd: false,
    favKind: null,
    viewingDevice: (screen === "device" || screen === "camera") ? extra.viewingDevice || state.viewingDevice : null,
    ...extra,
  });
}

function openMode() {
  return normalizeDeviceOpen(state.deviceOpen);
}

function openDevice(id, extra = {}) {
  const found = findDevice(id);
  if (!id || !found) return;
  const from = state.screen !== "device" && state.screen !== "camera" && APP_SCREENS.has(state.screen) ? state.screen : (state.deviceBack || "home");
  if (found.kind === "camera") {
    go("camera", { viewingDevice: id, deviceBack: from, sheetDevice: null, camReply: "" });
    return;
  }
  // When on the summary page, always open as bottom sheet (device list stays visible behind)
  const forceSheet = state.screen === "summary";
  if (!forceSheet && openMode() === "page") {
    go("device", { viewingDevice: id, deviceBack: from, sheetTab: extra.sheetTab || "controls" });
    return;
  }
  patch({
    sheetDevice: id,
    viewingDevice: id,
    deviceBack: from,
    sheetSize: "half",
    sheetTab: extra.sheetTab || "controls",
    sheetScene: null,
    homeMenu: false,
    jemmMenu: false,
    previewMenu: false,
    homePeek: extra.keepPeek ? state.homePeek : null,
  });
}

function openSummary(kind) {
  if (!kind) return;
  const from = state.screen !== "summary" && APP_SCREENS.has(state.screen) ? state.screen : (state.summaryBack || "home");
  // Always navigate to the summary page — device list is a full page, detail opens as a sheet on top
  go("summary", { viewingSummary: kind, summaryBack: from, homePeek: null, sheetDevice: null });
}

function currentHome() {
  return HOMES.find((h) => h.id === state.homeId) || HOMES[0];
}

function rooms() {
  return currentHome().rooms;
}

function roomById(id) {
  return rooms().find((r) => r.id === id) || rooms()[0];
}

function hereRoom() {
  return state.presence === "away" ? null : roomById(state.presence);
}

function defaultCtl(d) {
  if (d.kind === "light") {
    return {
      on: d.on !== false,
      intensity: d.intensity ?? 60,
      kelvin: d.kelvin ?? 2700,
    };
  }
  if (d.kind === "audio") return { on: true, volume: 18, source: currentSong().title };
  if (d.kind === "climate") return { on: true, temp: 72, mode: "auto" };
  if (d.kind === "shade") return { on: true, pos: 80 };
  if (d.kind === "fan") return { on: true, speed: "low" };
  if (d.kind === "camera") return { on: true, armed: true };
  if (d.kind === "mic") return { on: true, volume: 40 };
  return { on: true };
}

function ctl(d) {
  return { ...defaultCtl(d), ...(state.ctl[d.id] || {}) };
}

function setCtl(id, patchCtl) {
  patch({ ctl: { ...state.ctl, [id]: { ...(state.ctl[id] || {}), ...patchCtl } } });
}

function setCtlMany(ids, patchCtl) {
  const next = { ...state.ctl };
  ids.forEach((id) => {
    next[id] = { ...(next[id] || {}), ...patchCtl };
  });
  patch({ ctl: next });
}

function currentSong() {
  return SONGS.find((s) => s.id === state.playingSong) || SONGS[0];
}

function songBySource(source) {
  const key = String(source || "").toLowerCase();
  return SONGS.find((s) => s.id === key || s.title.toLowerCase() === key) || currentSong();
}

function devicesOfKind(kind, room) {
  const list = room
    ? room.devices.filter((d) => d.kind === kind).map((d) => ({ ...d, room: room.name, roomId: room.id }))
    : rooms().flatMap((r) => r.devices.filter((d) => d.kind === kind).map((d) => ({ ...d, room: r.name, roomId: r.id })));
  return list;
}

function findDevice(id) {
  for (const r of rooms()) {
    const d = r.devices.find((x) => x.id === id);
    if (d) return { ...d, room: r.name, roomId: r.id };
  }
  return null;
}

function sceneLook(room, q) {
  const info = SCENE_INFO[q.id] || {};
  return {
    ...q,
    blurb: info.blurb || `Runs ${q.label} in the ${room.name.toLowerCase()}. Devices in other rooms stay as they are.`,
    photo: info.photo || room.photo,
    pos: info.pos || "center",
  };
}

function scenePatchFor(sceneId, d) {
  if (sceneId === "lights-off" && d.kind === "light") return { on: false, detail: "Off" };
  if (sceneId === "evening") {
    if (d.kind === "light") return { on: true, intensity: 40, kelvin: 2700, detail: "Warm · 40%" };
    if (d.kind === "audio") return { on: true, volume: 16, source: "Evening", detail: "Evening mix · 16%" };
    if (d.kind === "shade") return { on: true, pos: 40, detail: "Partly down" };
    if (d.kind === "camera") return { on: true, armed: true, detail: "Armed" };
  }
  if (sceneId === "play" && d.kind === "audio") return { on: true, volume: 22, source: "Patio", detail: "Playing · 22%" };
  if (sceneId === "climate" && d.kind === "climate") return { on: true, temp: 72, mode: "auto", detail: "72° · Auto" };
  if (sceneId === "cook") {
    if (d.kind === "light") return { on: true, intensity: 90, kelvin: 4000, detail: "Task · 90%" };
    if (d.kind === "fan") return { on: true, speed: "low", detail: "Low" };
  }
  if (sceneId === "fan" && d.kind === "fan") return { on: true, speed: "low", detail: "Low" };
  if (sceneId === "quiet") {
    if (d.kind === "light") return { on: true, intensity: 20, kelvin: 2700, detail: "Low · 20%" };
    if (d.kind === "audio") return { on: false, volume: 0, detail: "Off" };
    if (d.kind === "fan") return { on: false, speed: "low", detail: "Off" };
  }
  if (sceneId === "away" || sceneId === "lock") {
    if (d.kind === "light") return { on: false, intensity: 0, detail: "Off" };
    if (d.kind === "audio") return { on: false, volume: 0, detail: "Off" };
    if (d.kind === "camera") return { on: true, armed: true, detail: "Armed" };
  }
  if (sceneId === "sleep") {
    if (d.kind === "light") return { on: true, intensity: 8, kelvin: 2200, detail: "Night · 8%" };
    if (d.kind === "climate") return { on: true, temp: 66, mode: "cool", detail: "66° · Cool" };
    if (d.kind === "shade") return { on: true, pos: 5, detail: "Closed" };
    if (d.kind === "audio") return { on: false, volume: 0, detail: "Off" };
  }
  if (sceneId === "shades" && d.kind === "shade") return { on: true, pos: 45, detail: "Half" };
  if (sceneId === "arrive") {
    if (d.kind === "light") return { on: true, intensity: 55, kelvin: 3000, detail: "Warm · 55%" };
    if (d.kind === "climate") return { on: true, temp: 70, mode: "auto", detail: "70° · Auto" };
  }
  if (sceneId === "movie") {
    if (d.kind === "light") return { on: true, intensity: 15, kelvin: 2700, detail: "Dim · 15%" };
    if (d.kind === "shade") return { on: true, pos: 5, detail: "Closed" };
    if (d.kind === "audio") return { on: true, volume: 35, source: "TV", detail: "TV · 35%" };
  }
  return null;
}

function sceneLine(d, patch) {
  if (!patch) return `Unchanged · ${deviceDetail(d)}`;
  if (patch.detail) return patch.detail;
  if (patch.on === false) return "Off";
  if (d.kind === "light") return `Intensity ${patch.intensity ?? 0}% · ${patch.on === false ? "Off" : "On"}`;
  if (d.kind === "audio") return `${patch.source || "Audio"} · ${patch.volume ?? 0}%`;
  if (d.kind === "climate") return `${patch.temp}° · ${patch.mode || "auto"}`;
  if (d.kind === "shade") return patch.pos >= 90 ? "Open" : patch.pos <= 10 ? "Closed" : `${patch.pos}%`;
  if (d.kind === "fan") return patch.on === false ? "Off" : (patch.speed || "On");
  if (d.kind === "camera") return patch.armed ? "Armed · Live" : "Idle";
  return "On";
}

function sceneSets(room, sceneId) {
  return room.devices.map((d) => {
    const p = scenePatchFor(sceneId, d);
    return {
      id: d.id,
      name: d.name,
      kind: d.kind,
      set: Boolean(p),
      on: p ? p.on !== false : ctl(d).on,
      detail: sceneLine(d, p),
    };
  });
}

function sceneSetGroups(rows) {
  return KIND_ORDER
    .map((kind) => ({ kind, items: rows.filter((r) => r.kind === kind) }))
    .filter((g) => g.items.length);
}

function findScene(roomId, sceneId) {
  const room = rooms().find((r) => r.id === roomId);
  if (!room) return null;
  const q = room.quick.find((s) => s.id === sceneId);
  if (!q) return null;
  return { room, ...sceneLook(room, q), sets: sceneSets(room, sceneId) };
}

function runScene(roomId, sceneId, { keepSheet = false } = {}) {
  const found = findScene(roomId, sceneId);
  if (!found) return;
  const nextCtl = { ...state.ctl };
  for (const d of found.room.devices) {
    const p = scenePatchFor(sceneId, d);
    if (!p) continue;
    const { detail, ...ctlPatch } = p;
    nextCtl[d.id] = { ...ctl(d), ...ctlPatch };
  }
  patch({
    ctl: nextCtl,
    scene: { ...state.scene, [roomId]: sceneId },
    sheetScene: keepSheet ? state.sheetScene : null,
  });
  flash(`${found.room.name}: ${found.label} is running.`);
}

function deviceDetail(d) {
  const c = ctl(d);
  if (!c.on) return "Off";
  if (d.kind === "light") return `Intensity ${c.intensity}% • On`;
  if (d.kind === "audio") return `${c.source || currentSong().title} · ${c.volume}%`;
  if (d.kind === "climate") return `${c.temp}° · ${c.mode}`;
  if (d.kind === "shade") return c.pos >= 90 ? "Open" : c.pos <= 10 ? "Closed" : `${c.pos}%`;
  if (d.kind === "fan") return c.speed;
  if (d.kind === "camera") return c.armed ? "Live" : "Idle";
  if (d.kind === "mic") return `Volume ${c.volume}% • On`;
  return d.detail;
}

function scenesForDevice(d) {
  const room = roomById(d.roomId);
  if (!room) return [];
  return room.quick.map((q) => {
    const p = scenePatchFor(q.id, d);
    if (!p) return null;
    const look = sceneLook(room, q);
    return {
      id: q.id,
      label: q.label,
      blurb: look.blurb,
      photo: look.photo,
      pos: look.pos,
      detail: p.detail,
      live: state.scene[room.id] === q.id,
      roomId: room.id,
      roomName: room.name,
    };
  }).filter(Boolean);
}

function liveFmt(field, value) {
  if (field === "kelvin") return `${value}K`;
  if (field === "temp") return `${value}°`;
  if (field === "speed") return value;
  return `${value}%`;
}

function setHome(id) {
  const home = HOMES.find((h) => h.id === id) || HOMES[0];
  const keep = home.rooms.some((r) => r.id === state.presence);
  patch({
    homeId: home.id,
    home: home.name,
    presence: keep ? state.presence : home.rooms[0].id,
    viewingRoom: null,
    homeMenu: false,
    sheetDevice: null,
  });
  flash(`Switched to ${home.name}`);
}

function walkNext() {
  const ids = [...rooms().map((r) => r.id), "away"];
  const i = Math.max(0, ids.indexOf(state.presence));
  setPresence(ids[(i + 1) % ids.length]);
}

function transitionRoom(changeFn) {
  const app = document.getElementById("app");
  if (!app) { changeFn(); return; }
  app.classList.add("is-walk-blur");
  setTimeout(() => {
    changeFn();
    requestAnimationFrame(() => requestAnimationFrame(() => {
      app.classList.remove("is-walk-blur");
    }));
  }, 280);
}

function speakAs(person, text) {
  const sample = text || person.sample;
  const tone = TONES[person.tone] || TONES.Neutral;
  if (!window.speechSynthesis) {
    flash("Audio isn’t available in this browser.");
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(sample);
  u.rate = tone.rate;
  u.pitch = tone.pitch;
  window.speechSynthesis.speak(u);
  flash(`${person.tone} · playing sample`);
}

function icon(src, extra = "") {
  return `<img src="${src}" alt="" class="${extra}" />`;
}

function powerIcon(size = 16) {
  const src = size >= 20 ? "assets/icons/power-24.svg" : "assets/icons/power-16.svg";
  return `<img src="${src}" alt="" class="power-icon" width="${size}" height="${size}" aria-hidden="true" />`;
}

function chevron(dir = "right") {
  return `<img src="assets/nav/chevron.svg" alt="" class="chev chev--${dir}" />`;
}

function jemmGlow() {
  return `<span class="jemm-glow" aria-hidden="true"></span>`;
}

function jemmFace(extra = "") {
  return `<video class="jemm-vid ${extra}" muted loop playsinline autoplay poster="assets/jemm-face.png"><source src="assets/hi-jemm.mp4" type="video/mp4" /></video>`;
}

function playJemmVideos() {
  document.querySelectorAll(".jemm-vid").forEach((v) => {
    v.muted = true;
    const play = v.play();
    if (play && play.catch) play.catch(() => {});
  });
}

function previewMenuBtn() {
  return `
    <button type="button" class="preview-menu__btn ${state.previewMenu ? "is-open" : ""}" data-act="toggle-preview-menu" aria-pressed="${state.previewMenu ? "true" : "false"}" aria-expanded="${state.previewMenu ? "true" : "false"}" aria-haspopup="dialog" aria-label="Config">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
        <circle cx="5" cy="4" r="1.5" fill="currentColor"/>
        <circle cx="10" cy="8" r="1.5" fill="currentColor"/>
        <circle cx="6" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    </button>`;
}

function previewSheetBody() {
  const look = normalizeLook(state.appLook);
  const open = normalizeDeviceOpen(state.deviceOpen);
  const dock = normalizePreviewDock(state.previewDock);
  const bg = normalizeHomeBg(state.homeBg);
  const tone = normalizeCardTone(state.cardTone);
  const surface = normalizeSurface(state.surfaceStyle);
  const spacing = normalizeSpacing(state.spacing);
  const home = normalizeHomeLayout(state.homeLayout);
  const tile = normalizeHomeTile(state.homeTile);
  const intro = normalizeHomeIntro(state.homeIntro);
  const nav = normalizeBottomNav(state.bottomNav);
  return `
          <p class="preview-sheet__hint">Temporary. Switch Home pages, the bottom nav, tiles, and how a device or summary opens.</p>
          <div class="preview-sheet__block">
            <span>Home</span>
            <div class="preview-sheet__seg" role="group" aria-label="Home layout">
              ${HOME_LAYOUTS.map((item) => `
                <button type="button" class="${home === item.id ? "is-on" : ""}" data-act="set-home-layout" data-value="${item.id}" aria-pressed="${home === item.id ? "true" : "false"}">${item.label}</button>
              `).join("")}
            </div>
            <p class="preview-sheet__note">${home === "v2" ? "One Home page: dark steel status tiles, then scenes and cameras. No device list underneath. Tap a category to see those devices." : "One Home page with status tiles, scenes, and favorites. View all devices opens a separate page."}</p>
          </div>
          <div class="preview-sheet__block">
            <span>Bottom nav</span>
            <div class="preview-sheet__seg" role="group" aria-label="Bottom nav">
              ${BOTTOM_NAVS.map((item) => `
                <button type="button" class="${nav === item.id ? "is-on" : ""}" data-act="set-bottom-nav" data-value="${item.id}" aria-pressed="${nav === item.id ? "true" : "false"}">${item.label}</button>
              `).join("")}
            </div>
            <p class="preview-sheet__note">${nav === "v1" ? "Labeled pill: Home, Rooms, Jemm center, Profiles, Menu." : nav === "v2" ? "Labeled pill: Home, Rooms, Jemm center, Profiles, More." : nav === "v3" ? "Josh: Jemm left, 4-icon pill, bars right." : "Icon-only pill with Jemm center — no labels."}</p>
          </div>
          <div class="preview-sheet__block">
            <span>First-view tiles</span>
            <div class="preview-sheet__seg" role="group" aria-label="First-view tile shape">
              ${HOME_TILES.map((item) => `
                <button type="button" class="${tile === item.id ? "is-on" : ""}" data-act="set-home-tile" data-value="${item.id}" aria-pressed="${tile === item.id ? "true" : "false"}">${item.label}</button>
              `).join("")}
            </div>
            <p class="preview-sheet__note">${tile === "square" ? "Category tiles are square and use the extra width." : "Category tiles stay horizontal rows, two across."}</p>
          </div>
          <div class="preview-sheet__block">
            <span>Home title</span>
            <div class="preview-sheet__seg" role="group" aria-label="Home title">
              ${HOME_INTROS.map((item) => `
                <button type="button" class="${intro === item.id ? "is-on" : ""}" data-act="set-home-intro" data-value="${item.id}" aria-pressed="${intro === item.id ? "true" : "false"}">${item.label}</button>
              `).join("")}
            </div>
            <p class="preview-sheet__note">${intro === "property" ? "Property dropdown sits above the weather." : "City and weather only. No greeting."}</p>
          </div>
          <div class="preview-sheet__block">
            <span>App look</span>
            <div class="preview-sheet__seg" role="group" aria-label="App look">
              ${APP_LOOKS.map((id) => `
                <button type="button" class="${look === id ? "is-on" : ""}" data-act="set-app-look" data-value="${id}" aria-pressed="${look === id ? "true" : "false"}">${id.toUpperCase()}</button>
              `).join("")}
            </div>
            <p class="preview-sheet__note">${look === "v1" ? "Original companion: square buttons, tighter type, neon here-state." : look === "v3" ? "Chunky test: larger tap targets, bigger tiles, more page pad." : "Current companion: pill buttons, 16px icons, quieter chrome."}</p>
          </div>
          <div class="preview-sheet__block">
            <span>Home background</span>
            <div class="preview-sheet__seg" role="group" aria-label="Home background">
              ${HOME_BACKGROUNDS.map((item) => `
                <button type="button" class="${bg === item.id ? "is-on" : ""}" data-act="set-home-bg" data-value="${item.id}" aria-pressed="${bg === item.id ? "true" : "false"}">${item.label}</button>
              `).join("")}
            </div>
            <p class="preview-sheet__note">${bg === "photo" ? "Uses this room’s photo under a dark wash." : bg === "frost" ? "Photo clear at top — blurs as you scroll so UI elements pop from the frosted layer." : "Brand wash and ink fill. No photo."}</p>
          </div>
          <div class="preview-sheet__block">
            <span>Card color</span>
            <div class="preview-sheet__seg preview-sheet__seg--wrap" role="group" aria-label="Card color">
              ${CARD_TONES.map((item) => `
                <button type="button" class="${tone === item.id ? "is-on" : ""}" data-act="set-card-tone" data-value="${item.id}" aria-pressed="${tone === item.id ? "true" : "false"}">${item.label}</button>
              `).join("")}
            </div>
            <p class="preview-sheet__note">${tone === "black" ? "Black cards sit flush with the ink background." : tone === "charcoal" ? "Charcoal ink #202020 — darker than steel, still a surface." : "Dark Steel #283239 — the brand card fill."}</p>
          </div>
          <div class="preview-sheet__block">
            <span>Surface style</span>
            <div class="preview-sheet__seg" role="group" aria-label="Surface style">
              ${SURFACE_STYLES.map((item) => `
                <button type="button" class="${surface === item.id ? "is-on" : ""}" data-act="set-surface" data-value="${item.id}" aria-pressed="${surface === item.id ? "true" : "false"}">${item.label}</button>
              `).join("")}
            </div>
            <p class="preview-sheet__note">${surface === "glass" ? "Cards, tiles, sheets, and nav get a frosted backdrop blur. Needs photo or gradient behind." : "Solid fill surfaces — no blur. Consistent on any background."}</p>
          </div>
          <div class="preview-sheet__block">
            <span>Device detail</span>
            <div class="preview-sheet__seg" role="group" aria-label="Device detail style">
              <button type="button" class="${state.deviceDetailStyle === "slider" ? "is-on" : ""}" data-act="set-device-detail-style" data-value="slider" aria-pressed="${state.deviceDetailStyle === "slider"}">Slider</button>
              <button type="button" class="${state.deviceDetailStyle === "graphic" ? "is-on" : ""}" data-act="set-device-detail-style" data-value="graphic" aria-pressed="${state.deviceDetailStyle === "graphic"}">Graphic</button>
            </div>
            <p class="preview-sheet__note">Slider: Jemm vertical bar. Graphic: bigger Josh-style visual with fill.</p>
          </div>
          <div class="preview-sheet__block">
            <span>Scene detail</span>
            <div class="preview-sheet__seg" role="group" aria-label="Scene detail style">
              <button type="button" class="${state.sceneDetailStyle === "page" ? "is-on" : ""}" data-act="set-scene-detail-style" data-value="page" aria-pressed="${state.sceneDetailStyle === "page"}">Page</button>
              <button type="button" class="${state.sceneDetailStyle === "sheet" ? "is-on" : ""}" data-act="set-scene-detail-style" data-value="sheet" aria-pressed="${state.sceneDetailStyle === "sheet"}">Sheet</button>
              <button type="button" class="${state.sceneDetailStyle === "side" ? "is-on" : ""}" data-act="set-scene-detail-style" data-value="side" aria-pressed="${state.sceneDetailStyle === "side"}">Side</button>
            </div>
            <p class="preview-sheet__note">How scene details open: full page, bottom sheet, or side panel.</p>
          </div>
          <div class="preview-sheet__block">
            <span>Spacing</span>
            <div class="preview-sheet__seg" role="group" aria-label="Vertical spacing">
              ${SPACINGS.map((item) => `
                <button type="button" class="${spacing === item.id ? "is-on" : ""}" data-act="set-spacing" data-value="${item.id}" aria-pressed="${spacing === item.id ? "true" : "false"}">${item.label}</button>
              `).join("")}
            </div>
            <p class="preview-sheet__note">Base vertical gap in px — applied to stacks, card padding, and stage gutters.</p>
          </div>
          <div class="preview-sheet__block">
            <span>Presence</span>
            <div class="cfg-toggle-group">
              <div class="cfg-toggle-row">
                <span>Room walk</span>
                <button class="toggle ${state.walkAuto ? "is-on" : ""}" data-act="toggle-walk-auto" role="switch" aria-checked="${state.walkAuto ? "true" : "false"}" aria-label="Room walk"></button>
              </div>
              <div class="cfg-toggle-row">
                <span>Away mode</span>
                <button class="toggle ${state.presence === "away" ? "is-on" : ""}" data-act="toggle-away" role="switch" aria-checked="${state.presence === "away" ? "true" : "false"}" aria-label="Away mode"></button>
              </div>
            </div>
            <p class="preview-sheet__note">${state.walkAuto ? "Cycling rooms every 20s. Screen blurs on each move and Jemm notifies you." : state.presence === "away" ? "Whole-home view active — no room context." : "Tap Room walk to cycle rooms, or Away to test the away view."}</p>
          </div>
          <div class="preview-sheet__block">
            <span>View as</span>
            <div class="preview-sheet__seg preview-sheet__seg--wrap" role="group" aria-label="View as user">
              <button type="button" class="${state.viewAs === "admin" ? "is-on" : ""}" data-act="set-view-as" data-value="admin" aria-pressed="${state.viewAs === "admin"}">Admin</button>
              ${visiblePeople().filter((p) => p.id !== "john").map((p) => `
                <button type="button" class="${state.viewAs === p.id ? "is-on" : ""}" data-act="set-view-as" data-value="${p.id}" aria-pressed="${state.viewAs === p.id}">${p.name.split(" ")[0]}</button>
              `).join("")}
              <button type="button" class="${state.viewAs === "user" ? "is-on" : ""}" data-act="set-view-as" data-value="user" aria-pressed="${state.viewAs === "user"}">Everyday</button>
            </div>
            <p class="preview-sheet__note">${state.viewAs === "admin" ? "Admin view — Danger Zone in Settings, full Config access." : state.viewAs === "user" ? "Everyday user — restricted settings, no system controls." : `Viewing as ${viewAsLabel()} — ${viewAsPerson()?.role || "Household"} perspective.`}</p>
          </div>
          <div class="preview-sheet__block">
            <span>This panel</span>
            <div class="preview-sheet__seg" role="group" aria-label="Layout test panel">
              ${PREVIEW_DOCKS.map((item) => `
                <button type="button" class="${dock === item.id ? "is-on" : ""}" data-act="set-preview-dock" data-value="${item.id}" aria-pressed="${dock === item.id ? "true" : "false"}">${item.label}</button>
              `).join("")}
            </div>
            <p class="preview-sheet__note">${dock === "side" ? "Full-height sheet from the right." : "Bottom sheet over Home."}</p>
          </div>
          <div class="preview-sheet__block">
            <span>Device & summary</span>
            <div class="preview-sheet__seg preview-sheet__seg--wrap" role="group" aria-label="How a device or summary opens">
              ${DEVICE_OPENS.map((item) => `
                <button type="button" class="${open === item.id ? "is-on" : ""}" data-act="set-device-open" data-value="${item.id}" aria-pressed="${open === item.id ? "true" : "false"}">${item.label}</button>
              `).join("")}
            </div>
            <p class="preview-sheet__note">${open === "page" ? "Any device or summary group opens as a full page with a back chevron." : open === "side" ? "Any device or summary group opens as a right sidesheet." : "Any device or summary group opens as a bottom sheet."}</p>
          </div>`;
}

function previewSheet() {
  if (!state.previewMenu) return "";
  const dock = normalizePreviewDock(state.previewDock);
  return `
    <div class="sheet sheet--preview ${dock === "side" ? "is-side" : "is-sheet"}" data-act="close-preview">
      <aside class="sheet__panel preview-sheet" data-stop role="dialog" aria-modal="true" aria-labelledby="preview-sheet-title">
        ${dock === "sheet" ? `
          <button type="button" class="sheet-grab" data-act="close-preview" aria-label="Dismiss sheet">
            <span class="handle"></span>
          </button>` : ""}
        <header class="preview-sheet__head">
          <h2 id="preview-sheet-title">Layout test</h2>
          <button type="button" class="icon-btn" data-act="close-preview" aria-label="Close layout test">${icon("assets/icons/24/close.svg")}</button>
        </header>
        <div class="preview-sheet__body">
          ${previewSheetBody()}
        </div>
      </aside>
    </div>`;
}

function firstName() {
  return String(state.name || "John").trim().split(/\s+/)[0] || "John";
}

function dayGreeting() {
  const hour = new Date().getHours();
  const part = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  return `${part}, ${firstName()}`;
}

function accountPhoto() {
  return "assets/nav/avatar.png";
}

function topnav({ back, mark = true } = {}) {
  const appChrome = state.loggedIn;
  const roleChip = appChrome && !isAdmin()
    ? `<div class="view-as-banner" role="status" aria-live="polite">
        <span class="view-as-banner__dot"></span>
        Viewing as <strong>${viewAsLabel()}</strong>
        <button type="button" class="view-as-banner__reset" data-act="set-view-as" data-value="admin" aria-label="Switch back to Admin">Admin</button>
      </div>`
    : "";
  const historyBtn = `<button type="button" class="icon-btn" data-go="history" aria-label="Activity">
    <svg viewBox="0 0 20 20" fill="none" width="20" height="20" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M10 6.5V10l2.5 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>`;
  const bellBtn = `<button type="button" class="icon-btn topnav-bell" data-go="notify" aria-label="Notifications">
    <svg viewBox="0 0 20 20" fill="none" width="20" height="20" aria-hidden="true">
      <path d="M10 2.5a5.5 5.5 0 0 1 5.5 5.5v3l1.5 2.5H3L4.5 11V8A5.5 5.5 0 0 1 10 2.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M8 15.5a2 2 0 0 0 4 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </button>`;
  return `
    <header class="topnav${appChrome ? " topnav--app" : ""}">
      ${roleChip}
      <div class="topnav__side">
        ${back
          ? `<button class="icon-btn" data-go="${back}" aria-label="Back">${chevron("left")}</button>`
          : appChrome
            ? `<button type="button" class="topnav__avatar" data-act="toggle-account" aria-expanded="${state.accountSheet ? "true" : "false"}" aria-haspopup="dialog" aria-label="Account"><img src="${accountPhoto()}" alt="" /></button>${previewMenuBtn()}`
            : previewMenuBtn()}
      </div>
      <span></span>
      <div class="topnav__side topnav__side--end">
        ${appChrome
          ? `${historyBtn}${bellBtn}`
          : `<button class="icon-btn" data-go="notify" aria-label="Notifications">${bellBtn}</button>
             <button class="icon-btn" data-act="help" aria-label="Help">${icon("assets/nav/help.svg")}</button>`}
      </div>
    </header>`;
}

function homeSwitcher({ large = false } = {}) {
  const home = currentHome();
  return `
    <div class="prop-switch${large ? " prop-switch--hello" : ""}" data-stop>
      <button type="button" class="chip${large ? " chip--hello" : ""}" data-act="toggle-home-menu" aria-expanded="${state.homeMenu ? "true" : "false"}">
        ${icon("assets/icons/16/property.svg")} ${home.name}
        ${chevron(state.homeMenu ? "up" : "down")}
      </button>
      ${state.homeMenu ? `
        <div class="prop-menu" role="listbox">
          ${HOMES.map((h) => `
            <button type="button" class="${state.homeId === h.id ? "is-on" : ""}" data-act="set-home" data-home="${h.id}">${h.name}</button>
          `).join("")}
        </div>` : ""}
    </div>`;
}

function legal() {
  return `<p class="legal">2026 Jemm Tec LLC. v 0.1</p>`;
}

function stepper(step, total = 3) {
  return `
    <div class="stepper" aria-label="Step ${step} of ${total}">
      <div class="stepper__bars">
        ${[1, 2, 3].slice(0, total).map((n) => `<span class="${n <= step ? "is-on" : ""}"></span>`).join("")}
      </div>
      <div class="stepper__label">(${step}/${total})</div>
    </div>`;
}

function isAudioPlaying(room = hereRoom()) {
  return devicesOfKind("audio", room).some((d) => ctl(d).on);
}

function bottomNav(active) {
  const mood = state.jemmMood === "alert" ? "alert" : state.jemmMood === "amber" ? "amber" : "ok";
  const nav = normalizeBottomNav(state.bottomNav);

  // Nav item with label (v1 / v2)
  const item = (id, src, label) => `
    <button class="nav-item ${active === id ? "is-on" : ""}" data-go="${id}" aria-label="${label}">
      <span class="nav-item__icon"><img src="${src}" alt="" /></span>
      <span class="nav-item__label">${label}</span>
    </button>`;

  // Icon-only item (v3 / v4)
  const iconItem = (id, src, label) => `
    <button class="nav-item nav-item--icon ${active === id ? "is-on" : ""}" data-go="${id}" aria-label="${label}">
      <span class="nav-item__icon"><img src="${src}" alt="" /></span>
    </button>`;

  const jemmBtn = (cls = "") => `
    <button class="nav-jemm ${cls} ${state.voice ? "is-live" : ""} is-${mood}" data-act="voice" aria-label="Talk to Jemm">
      ${jemmGlow()}
      ${jemmFace()}
    </button>`;

  // V1: labeled pill — Home | Rooms | Jemm | Profiles | Menu
  if (nav === "v1") {
    return `
    <nav class="bottom-nav is-v1" aria-label="App">
      ${item("home",     "assets/nav/icon-home-figma.svg",     "Home")}
      ${item("rooms",    "assets/nav/icon-rooms-figma.svg",    "Rooms")}
      ${jemmBtn()}
      ${item("profiles", "assets/nav/icon-profiles-figma.svg", "Profiles")}
      ${item("more",     "assets/nav/icon-more-dots.svg",      "Menu")}
    </nav>`;
  }

  // V2: labeled pill — Home | Rooms | Jemm | Profiles | More
  if (nav === "v2") {
    return `
    <nav class="bottom-nav is-v2" aria-label="App">
      ${item("home",     "assets/nav/icon-home-figma.svg",     "Home")}
      ${item("rooms",    "assets/nav/icon-rooms-figma.svg",    "Rooms")}
      ${jemmBtn()}
      ${item("profiles", "assets/nav/icon-profiles-figma.svg", "Profiles")}
      ${item("more",     "assets/nav/icon-more-dots.svg",      "More")}
    </nav>`;
  }

  // V3: Josh style — [Jemm left] [icon pill] [bars right]
  if (nav === "v3") {
    const live = isAudioPlaying();
    return `
    <nav class="bottom-nav is-v3" aria-label="App">
      ${jemmBtn("nav-jemm--orb")}
      <div class="bottom-nav__pill">
        ${iconItem("home",     "assets/nav/icon-home-figma.svg",     "Home")}
        ${iconItem("rooms",    "assets/nav/icon-rooms-figma.svg",    "Rooms")}
        ${iconItem("profiles", "assets/nav/icon-profiles-figma.svg", "Profiles")}
        ${iconItem("more",     "assets/nav/icon-more-dots.svg",      "More")}
      </div>
      <button type="button" class="nav-orb ${live ? "is-live" : ""}" data-act="home-peek" data-peek-kind="playing" aria-label="Now playing">
        <img src="assets/nav/icon-bars.svg" alt="" />
      </button>
    </nav>`;
  }

  // V4: icon-only single pill — Home | Rooms | Jemm | Profiles | More
  return `
    <nav class="bottom-nav is-v4" aria-label="App">
      ${iconItem("home",     "assets/nav/icon-home-figma.svg",     "Home")}
      ${iconItem("rooms",    "assets/nav/icon-rooms-figma.svg",    "Rooms")}
      ${jemmBtn()}
      ${iconItem("profiles", "assets/nav/icon-profiles-figma.svg", "Profiles")}
      ${iconItem("more",     "assets/nav/icon-more-dots.svg",      "More")}
    </nav>`;
}

function toastHtml() {
  return state.toast ? `<div class="toast" role="status">${state.toast}</div>` : "";
}

function flash(text) {
  clearTimeout(toastTimer);
  patch({ toast: text });
  noticeJemm(text.length < 56 ? text : "I’ll remember that.");
  toastTimer = setTimeout(() => patch({ toast: "" }), 2200);
}

function setPresence(id) {
  const prev = state.presence;
  if (prev === id) return;
  const walking = prev !== "away" && id !== "away";
  const next = { presence: id, viewingRoom: id === "away" ? null : id, walkTo: walking ? id : null };
  if (walking) {
    patch(next);
    setTimeout(() => {
      if (state.presence !== id) return;
      patch({ walkTo: null });
      flash(`Now in the ${roomById(id).name.toLowerCase()}.`);
    }, 900);
    return;
  }
  patch({ ...next, walkTo: null });
  if (id === "away") {
    patch({
      jemmMood: "amber",
      doors: { front: "locked", patio: "unlocked", garage: "locked" },
      adminRequest: {
        from: "mia",
        name: "Mia Doe",
        ask: "Unlock the secret vault",
        status: "pending",
      },
    });
    flash("Patio door just unlocked.");
  } else {
    if (state.adminRequest?.status !== "pending") patch({ jemmMood: "ok", doors: { front: "locked", patio: "locked", garage: "locked" } });
    flash(`Jemm knows you’re home — ${roomById(id).name}.`);
  }
}

function presenceBar() {
  const chips = [
    ...rooms().map((r) => ({ id: r.id, label: r.name })),
    { id: "away", label: "Away" },
  ];
  return `
    <div class="walk-card">
      <div class="hero-row">
        <div>
          <p class="kicker">Demo</p>
          <strong>Simulate a walk</strong>
        </div>
        <button type="button" class="btn btn--primary walk-next" data-act="walk-next">Next room</button>
      </div>
      <p class="muted">Jemm follows you. Home, scenes, and devices switch with the room.</p>
      <div class="presence-bar" aria-label="Simulate presence">
        ${chips.map((c) => `
          <button type="button" class="${state.presence === c.id ? "is-on" : ""} ${c.id === "away" ? "is-away" : ""}" data-presence="${c.id}">${c.label}</button>
        `).join("")}
      </div>
    </div>`;
}

function deviceIcon(kind) {
  return ICONS[kind] || ICONS.light;
}

// ── Device hero helpers ───────────────────────────────────────
const HERO_IMAGES = {
  arc: "assets/devices/hero-arc.svg",
  mic: "assets/devices/hero-mic.svg",
};

function deviceHeroImage(d) {
  return HERO_IMAGES[d.kind] || null;
}

function deviceHeroColor(d, c) {
  if (!c.on) return "rgba(100,100,100,0.22)";
  switch (d.kind) {
    case "light": return c.kelvin < 3500
      ? "rgba(255, 175, 55, 0.55)"
      : c.kelvin > 5000 ? "rgba(160, 210, 255, 0.50)" : "rgba(255, 220, 100, 0.50)";
    case "audio":   return "rgba(110, 80, 255, 0.55)";
    case "climate": return c.mode === "cool" ? "rgba(59, 158, 255, 0.55)" : c.mode === "heat" ? "rgba(255, 112, 67, 0.55)" : "rgba(0, 255, 136, 0.45)";
    case "fan":     return "rgba(90, 200, 255, 0.48)";
    case "camera":  return c.armed ? "rgba(255, 55, 95, 0.50)" : "rgba(100,100,100,0.22)";
    case "lock":    return !c.locked ? "rgba(255, 95, 80, 0.45)" : "rgba(255, 210, 40, 0.45)";
    case "shade":   return "rgba(200, 180, 140, 0.40)";
    case "mic": case "arc": return "rgba(0, 255, 136, 0.52)";
    default:        return "rgba(0, 255, 136, 0.38)";
  }
}

function deviceHero(d, c, { compact = false } = {}) {
  const heroImg = deviceHeroImage(d);
  const glowColor = deviceHeroColor(d, c);
  const isOn = c.on;
  const statusLabel = isOn ? deviceDetail(d) : "Off";
  const here = state.presence === d.roomId;
  return `
    <div class="device-hero${compact ? " device-hero--compact" : ""}${isOn ? " is-on" : ""}" style="--hero-glow:${glowColor}">
      <div class="device-hero__ambient" aria-hidden="true"></div>
      <div class="device-hero__img-wrap">
        ${heroImg
          ? `<img class="device-hero__img device-hero__img--hero" src="${heroImg}" alt="" />`
          : `<div class="device-hero__icon-wrap"><img class="device-hero__icon" src="${deviceIcon(d.kind)}" alt="" /></div>`}
      </div>
      <div class="device-hero__meta">
        <p class="device-hero__room">${d.room}${here ? " · Here" : ""}</p>
        <h2 class="device-hero__name">${d.name}</h2>
        <div class="device-hero__status${isOn ? " is-on" : ""}">
          <span class="device-hero__dot"></span>
          ${statusLabel}
        </div>
      </div>
    </div>`;
}

function kindLabel(kind) {
  return KIND_LABEL[kind] || kind;
}

function kindsIn(room) {
  const have = new Set(room.devices.map((d) => d.kind));
  return KIND_ORDER.filter((k) => have.has(k));
}

function kindsInHome() {
  const have = new Set(rooms().flatMap((r) => r.devices.map((d) => d.kind)));
  return KIND_ORDER.filter((k) => have.has(k));
}

function activeKind(kinds) {
  return kinds.includes(state.deviceKind) ? state.deviceKind : "all";
}

function kindWell(kind, extra = "") {
  return `<span class="card-icon ${extra}">${icon(deviceIcon(kind))}</span>`;
}

function dashIcon(src, motion = "") {
  return `<span class="dash-tile__icon${motion === "audio" ? " dash-tile__icon--live" : ""}${motion === "fan" ? " is-spin" : ""}">${icon(src)}${motion === "audio" ? eqBars() : ""}</span>`;
}

function dashTile({ title, meta, src, attrs = "", extra = "", ok = false, selected = false, motion = "" }) {
  return `
    <button type="button" class="dash-tile ${extra}${selected ? " is-on" : ""}" ${attrs} data-name="${title.toLowerCase()}">
      ${src ? dashIcon(src, motion) : ""}
      <span class="dash-tile__text">
        <span class="dash-tile__title">${title}</span>
        <span class="dash-tile__meta${ok ? " is-ok" : ""}${motion === "audio" ? " dash-tile__meta--scroll" : ""}">${motion === "audio" ? peekMarquee(meta) : meta}</span>
      </span>
    </button>`;
}

const TOGGLEABLE_KINDS = new Set(["light", "audio", "climate", "fan", "shade", "lock"]);

function deviceCard(d, list) {
  const selected = state.sheetDevice === d.id || state.viewingDevice === d.id;
  const c = ctl(d);
  const canToggle = TOGGLEABLE_KINDS.has(d.kind);
  const inner = `
    ${dashIcon(deviceIcon(d.kind))}
    <span class="dash-tile__text">
      <span class="dash-tile__title">${d.name}</span>
      <span class="dash-tile__meta">${deviceDetail(d)}</span>
    </span>`;
  const powerBtn = canToggle
    ? `<button type="button" class="dash-tile__power${c.on ? " is-on" : ""}" data-act="quick-power-toggle" data-device="${d.id}" aria-label="Toggle ${d.name}" aria-pressed="${c.on ? "true" : "false"}">${powerIcon(14)}</button>`
    : "";
  const tileClass = `dash-tile ${list ? "dash-tile--row" : "dash-tile--vert"}${selected ? " is-on" : ""}`;
  return `
    <div class="${tileClass}" data-name="${d.name.toLowerCase()}">
      <button type="button" class="dash-tile__area" data-device="${d.id}" aria-label="Open ${d.name}"></button>
      ${inner}
      ${powerBtn}
    </div>`;
}

function kindFilters(kinds, { icons = false } = {}) {
  if (!kinds.length) return "";
  const cur = activeKind(kinds);
  return `
    <div class="kind-filters" role="tablist" aria-label="Device category">
      <button type="button" class="${cur === "all" ? "is-on" : ""}" data-act="set-kind" data-kind="all" aria-selected="${cur === "all"}">All</button>
      ${kinds.map((k) => `
        <button type="button" class="${cur === k ? "is-on" : ""}" data-act="set-kind" data-kind="${k}" aria-selected="${cur === k}">
          ${icons ? `${icon(deviceIcon(k))} ` : ""}${kindLabel(k)}
        </button>`).join("")}
    </div>`;
}

function deviceGroups(room, kind) {
  return kindsIn(room)
    .filter((k) => kind === "all" || k === kind)
    .map((k) => ({ kind: k, items: room.devices.filter((d) => d.kind === k) }))
    .filter((g) => g.items.length);
}

function deviceStrip(room, { filters = true } = {}) {
  const list = state.deviceView === "list";
  const kinds = kindsIn(room);
  const cur = filters ? activeKind(kinds) : (state.deviceKind || "all");
  const groups = deviceGroups(room, cur);
  if (!groups.length) {
    if (!filters) return "";
    return `${kindFilters(kinds)}<p class="muted">No devices in this category.</p>`;
  }
  return `
    ${filters ? kindFilters(kinds) : ""}
    <div class="device-cats">
      ${groups.map((g) => `
        <section class="device-cat">
          <h3 class="device-cat__title">${kindLabel(g.kind)}</h3>
          <div class="${list ? "card-stack dash-stack" : "card-rail dash-rail"}">
            ${g.items.map((d) => deviceCard(d, list)).join("")}
          </div>
        </section>`).join("")}
    </div>`;
}

function devicesByRoomHtml() {
  const sections = rooms().map((r) => {
    const body = deviceStrip(r, { filters: false });
    if (!body) return "";
    return `
      <section class="stack-sm">
        <div class="hero-row">
          <h2 class="h2">${r.name}</h2>
          ${state.presence === r.id ? `<span class="here-flag">Here</span>` : ""}
        </div>
        ${body}
      </section>`;
  }).join("");
  return (sections || `<p class="muted">No devices in this category.</p>`) +
    `<p class="device-search-empty muted" hidden>No devices match your search.</p>`;
}

function renderSplash() {
  setTimeout(() => {
    if (state.screen === "splash") go(state.loggedIn ? "home" : "welcome");
  }, 1200);
  return `
    ${topnav({ mark: true })}
    <div class="stage">
      <div class="splash">${jemmFace("jemm-vid--splash")}</div>
    </div>`;
}

function renderWelcome() {
  return `
    ${topnav()}
    <div class="stage stack-lg">
      <div class="choice-row">
        <article class="choice">
          <img src="assets/icons/ill-house.svg" alt="" />
          <h2 class="h2">Are you new here?</h2>
          <p>Start pairing your Jemm Arc and do a quick setup.</p>
          <button class="btn btn--primary" data-go="pair">Get started</button>
        </article>
        <article class="choice">
          <img src="assets/icons/icon-fingerprint.svg" alt="" />
          <h2 class="h2">Existing user login</h2>
          <p>Use this if you already have a Jemm account.</p>
          <button class="btn btn--secondary" data-go="login">Log in</button>
        </article>
      </div>
      ${legal()}
    </div>`;
}

function renderLogin() {
  return `
    ${topnav({ back: "welcome" })}
    <div class="stage stack-lg">
      <h1 class="eyebrow">Welcome back</h1>
      <p class="lede">Log in to pick up where you left off. Any email and password works in this demo.</p>
      <form class="stack" data-form="login">
        <div class="field">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" value="${state.email}" autocomplete="username" />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input id="password" name="password" type="${state.showPass ? "text" : "password"}" value="${state.password}" placeholder="••••••••••••" autocomplete="current-password" />
        </div>
        <label class="check"><input type="checkbox" data-field="keepIn" ${state.keepIn ? "checked" : ""} /> Keep me logged in</label>
        <label class="check"><input type="checkbox" data-field="faceId" ${state.faceId ? "checked" : ""} /> Use Face ID</label>
        <button class="btn btn--primary" type="submit">Confirm</button>
      </form>
      ${legal()}
    </div>`;
}

function renderPair() {
  setTimeout(() => {
    if (state.screen === "pair") go("found");
  }, 1800);
  return `
    ${topnav({ back: "welcome" })}
    <div class="stage stack-lg">
      <h1 class="eyebrow">Pair your device</h1>
      <div class="hero-row"><h2 class="h2">Devices found (0)</h2></div>
      <div class="card card--hero">
        <div class="scan" aria-hidden="true">
          <span class="scan__wave"></span>
          <span class="scan__wave"></span>
          <span class="scan__wave"></span>
          <img src="assets/devices/hero-arc.svg" alt="" />
        </div>
        <h2 class="h2">Searching for Jemm devices</h2>
        <p class="muted">Keep your Arc plugged in and close to this phone.</p>
      </div>
      ${legal()}
    </div>`;
}

function renderFound() {
  return `
    ${topnav({ back: "welcome" })}
    <div class="stage stack-lg">
      <h1 class="eyebrow">Pair your device</h1>
      <div class="hero-row">
        <h2 class="h2">Devices found (1)</h2>
        <button class="icon-btn" data-go="pair" aria-label="Search again">${icon("assets/icons/16/scan.svg")}</button>
      </div>
      <div class="card card--hero">
        <span class="chip chip--soft">Never paired</span>
        <div>
          <h2 class="h3">Jemm Arc</h2>
          <p class="muted">ID124I50</p>
        </div>
        <img src="assets/devices/hero-arc.svg" alt="" width="49" height="96" />
        <p class="muted">About 4 feet away</p>
        <button class="btn btn--primary" data-go="wifi">Connect</button>
      </div>
      ${legal()}
    </div>`;
}

function renderWifi() {
  return `
    ${topnav({ back: "found" })}
    <div class="stage stack-lg">
      <h1 class="eyebrow">Share your network</h1>
      <p class="lede">One tap sends this phone’s Wi-Fi to your Arc. No typing.</p>
      <div class="card stack">
        <p class="kicker">This phone</p>
        <h2 class="h2">Home-5G</h2>
        <p class="muted">Jemm stays local. The password never leaves this house.</p>
        <button class="btn btn--primary" data-act="share-wifi">Share Wi-Fi</button>
        <button class="btn btn--ghost" data-go="connecting">Use another network</button>
      </div>
      ${legal()}
    </div>`;
}

const CONNECT_COPY = [
  { title: "Setting everything up…", body: "1 device connected" },
  { title: "Configuring devices…", body: "4 devices connected" },
  { title: "Checking rooms…", body: "4 rooms found · passwords migrated" },
];

function renderConnecting() {
  const step = Math.min(state.connectStep, CONNECT_COPY.length - 1);
  const copy = CONNECT_COPY[step];
  if (!connectTimer) {
    connectTimer = setTimeout(() => {
      connectTimer = null;
      if (state.screen !== "connecting") return;
      if (state.connectStep >= CONNECT_COPY.length - 1) {
        go("avatar", { connectStep: 0 });
      } else {
        patch({ connectStep: state.connectStep + 1 });
      }
    }, 1100);
  }
  return `
    ${topnav({ back: "wifi" })}
    <div class="stage stack-lg">
      <h1 class="eyebrow">Connect to network</h1>
      <div class="card card--hero">
        <div class="connect-visual">
          <img src="assets/devices/hero-arc.svg" alt="" width="32" height="62" />
          <div class="dots" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
          ${icon("assets/icons/16/home.svg")}
        </div>
        <h2 class="h2">${copy.title}</h2>
        <p class="muted">${copy.body}</p>
      </div>
      ${legal()}
    </div>`;
}

function renderAvatar() {
  return `
    ${topnav({ back: state.loggedIn ? "profile" : "welcome" })}
    <div class="stage stack-lg">
            <h1 class="eyebrow">Jemm’s visual identity</h1>
      <p class="lede">You can always adjust this later in the app.</p>
      <h2 class="h3 center">Choose avatar style</h2>
      <div class="avatar-grid">
        ${AVATARS.map((a) => `
          <button class="avatar ${state.avatar === a.id ? "is-on" : ""}" data-avatar="${a.id}">
            <img src="${a.src}" alt="${a.label}" />
            <span>${a.id}</span>
          </button>`).join("")}
      </div>
      <div class="btn-row">
        <button class="btn btn--primary" data-go="${state.loggedIn ? "profile" : "account"}">Continue</button>
        <button class="btn btn--ghost" data-go="${state.loggedIn ? "profile" : "account"}">Skip</button>
      </div>
      ${legal()}
    </div>`;
}

function renderAccount() {
  return `
    ${topnav({ back: "avatar" })}
    <div class="stage stack-lg">
      <h1 class="eyebrow">Set up your login details</h1>
      <p class="lede">Add an email and password so you can use Jemm on the Arc and in the app.</p>
      <form class="stack" data-form="account">
        <div class="field">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" value="${state.email}" />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input id="password" name="password" type="${state.showPass ? "text" : "password"}" value="${state.password}" placeholder="••••••••••••" />
        </div>
        <label class="check"><input type="checkbox" data-field="keepIn" ${state.keepIn ? "checked" : ""} /> Keep me logged in</label>
        <label class="check"><input type="checkbox" data-field="faceId" ${state.faceId ? "checked" : ""} /> Use Face ID</label>
        <button class="btn btn--primary" type="submit">Confirm</button>
      </form>
      ${legal()}
    </div>`;
}

function renderDone() {
  return `
    ${topnav()}
    <div class="stage stack-lg">
      <div class="card card--hero">
        <div class="done-mark">${jemmFace("jemm-vid--done")}</div>
        <div class="done-copy">
          <h1 class="h1">You’re all set!</h1>
          <p>You can keep exploring and set preferences in the app.</p>
          <p style="margin-top:16px;color:var(--neon)">From now on, Jemm will take care of the rest.</p>
        </div>
        <button class="btn btn--primary" data-act="enter">Okay</button>
      </div>
      ${legal()}
    </div>`;
}

function homeStats() {
  const people = visiblePeople().filter((p) => p.here);
  const lights = lightsOnList();
  const playing = playingNow();
  const unlocked = Object.values(state.doors || {}).filter((v) => v === "unlocked").length;
  return [
    { k: "People home", v: String(people.length), peek: "people", icon: "assets/icons/16/property.svg" },
    { k: "Lights on", v: String(lights.length), peek: "lights", icon: "assets/devices/icon-light.svg" },
    { k: "Rooms playing", v: String(new Set(playing.map((d) => d.roomId)).size), peek: "playing", icon: "assets/devices/icon-audio.svg" },
    { k: "Security", v: unlocked ? `${unlocked} open` : "Secure", peek: "security", alert: unlocked > 0, icon: "assets/icons/16/notifications.svg" },
  ];
}

function statsFor(room) {
  const items = room ? room.summary.map((s) => ({ ...s, peek: null })) : homeStats();
  return `
    <div class="stat-grid">
      ${items.map((s) => `
        <button class="stat ${s.alert ? "is-alert" : ""}" ${s.peek ? `data-act="home-peek" data-peek-kind="${s.peek}"` : `data-go="${room ? "room" : "rooms"}" data-room="${room ? room.id : ""}"`}>
          <span>${s.icon ? icon(s.icon) : ""}${s.k}</span>
          <strong>${s.v}</strong>
        </button>`).join("")}
    </div>`;
}

function viewToggle(key, value) {
  return `
    <div class="view-toggle" role="group" aria-label="Layout">
      <button type="button" class="${value === "grid" ? "is-on" : ""}" data-act="set-view" data-view-key="${key}" data-view="grid" aria-label="Card view">
        <img src="assets/icons/icon-grid.png" alt="" />
      </button>
      <button type="button" class="${value === "list" ? "is-on" : ""}" data-act="set-view" data-view-key="${key}" data-view="list" aria-label="List view">
        <img src="assets/icons/icon-list.png" alt="" />
      </button>
    </div>`;
}

function roomsAreList() {
  return state.roomsView === "list";
}

function roomCard(r, { list = false, selected = false, peek = false } = {}) {
  const here = state.presence === r.id;
  const attrs = peek ? `data-peek="${r.id}"` : `data-go="room" data-room="${r.id}"`;
  const meta = peek
    ? `${r.climate} · ${r.devices.length} devices`
    : `${r.climate} · ${r.quick.length} scenes · ${r.devices.length} devices`;
  const on = selected || here;
  if (list) {
    return `
      <button type="button" class="card-row card-row--media ${on ? "is-on" : ""}" ${attrs}>
        <img class="card-row__photo" src="${r.photo}" alt="" />
        <span class="grow">
          <span class="name">${r.name}</span>
          <span class="meta">${meta}</span>
        </span>
        ${here ? `<span class="here-flag">Here</span>` : ""}
        ${chevron("right")}
      </button>`;
  }
  return `
    <button type="button" class="card-tile card-tile--media ${on ? "is-on" : ""}" ${attrs}>
      <img class="card-tile__photo" src="${r.photo}" alt="" />
      <span class="card-tile__body">
        <span class="card-tile__headline">
          <span class="name">${r.name}</span>
          ${here ? `<span class="here-flag">Here</span>` : ""}
        </span>
        <span class="meta">${meta}</span>
      </span>
    </button>`;
}

function roomStrip({ peekId = null, peek = false } = {}) {
  const list = roomsAreList();
  return `
    <div class="${list ? "card-stack" : "card-rail"}">
      ${rooms().map((r) => roomCard(r, { list, selected: peekId === r.id, peek })).join("")}
    </div>`;
}

function personCard(p, list) {
  const status = p.here ? p.room : "Away";
  if (list) {
    return `
      <button type="button" class="card-row ${p.here ? "is-on" : ""}" data-go="profile" data-person="${p.id}">
        <img class="card-row__avatar" src="assets/avatars/${p.avatar}.png" alt="" />
        <span class="grow">
          <span class="name">${p.name}</span>
          <span class="meta">${p.role} · ${p.personality}</span>
          <span class="${p.here ? "here-flag" : "away-banner"}">${status}</span>
        </span>
        <span class="pill">${p.tone}</span>
        ${chevron("right")}
      </button>`;
  }
  return `
    <button type="button" class="card-tile card-tile--person ${p.here ? "is-on" : ""}" data-go="profile" data-person="${p.id}">
      <img class="card-tile__avatar" src="assets/avatars/${p.avatar}.png" alt="" />
      <span class="name">${p.name}</span>
      <span class="meta">${p.role} · ${p.personality}</span>
      <span class="${p.here ? "here-flag" : "away-banner"}">${status}</span>
      <span class="pill">${p.tone}</span>
    </button>`;
}

function quickStrip(room) {
  return `
    <div class="scene-grid">
      ${room.quick.map((q) => {
        const look = sceneLook(room, q);
        const on = state.scene[room.id] === q.id;
        return `
          <button type="button" class="scene-tile ${on ? "is-on" : ""}" data-go="scene" data-room="${room.id}" data-scene-id="${q.id}" aria-pressed="${on ? "true" : "false"}">
            <img src="${look.photo}" alt="" style="object-position:${look.pos}" />
            <span>${q.label}${on ? " · Live" : ""}</span>
          </button>`;
      }).join("")}
    </div>`;
}

function sceneRail(room) {
  return `
    <div class="scene-rail">
      ${room.quick.map((q) => {
        const look = sceneLook(room, q);
        const on = state.scene[room.id] === q.id;
        return `
          <button type="button" class="scene-btn ${on ? "is-on" : ""}" data-go="scene" data-room="${room.id}" data-scene-id="${q.id}" aria-pressed="${on ? "true" : "false"}">
            <img src="${look.photo}" alt="" style="object-position:${look.pos}" />
            <span>${q.label}</span>
          </button>`;
      }).join("")}
    </div>`;
}

function camerasIn(room) {
  const list = room
    ? room.devices.filter((d) => d.kind === "camera").map((d) => ({ ...d, room: room.name, roomId: room.id, photo: room.photo }))
    : rooms().flatMap((r) => r.devices.filter((d) => d.kind === "camera").map((d) => ({ ...d, room: r.name, roomId: r.id, photo: r.photo })));
  return list;
}

function cameraRail(room) {
  const cams = camerasIn(room);
  if (!cams.length) return "";
  return `
    <section class="home-block">
      <div class="home-block__head">
        <h2 class="h2">Cameras</h2>
        <button type="button" class="btn btn--link" ${normalizeHomeLayout(state.homeLayout) === "v2" ? `data-act="home-peek" data-peek-kind="cameras"` : `data-act="set-kind" data-kind="camera"`}>View all</button>
      </div>
      <div class="scene-rail">
        ${cams.map((d) => `
          <button type="button" class="dash-tile dash-tile--vert dash-tile--cam" data-device="${d.id}">
            <img class="dash-tile__photo" src="${d.photo}" alt="" />
            ${dashIcon(deviceIcon("camera"))}
            <span class="dash-tile__text">
              <span class="dash-tile__title">${d.name}</span>
              <span class="dash-tile__meta">${deviceDetail(d)}</span>
            </span>
          </button>`).join("")}
      </div>
    </section>`;
}

function outsideDegrees(home, room) {
  const raw = home?.weather || room?.weather || "";
  const match = String(raw).match(/(\d+)/);
  return match ? match[1] : "84";
}

function homeSummaryKpis(room) {
  const home = currentHome();
  const lights = devicesOfKind("light", room);
  const lightsOn = lights.filter((d) => ctl(d).on);
  const playing = devicesOfKind("audio", room).map((d) => ({ d, c: ctl(d) })).find((x) => x.c.on);
  const climates = devicesOfKind("climate", room);
  const inside = climates[0] ? ctl(climates[0]).temp : Number.parseInt(String(room?.climate || "72"), 10) || 72;
  const shades = devicesOfKind("shade", room);
  const shadesOpen = shades.filter((d) => ctl(d).pos >= 50).length;
  const fans = devicesOfKind("fan", room);
  const fansOn = fans.filter((d) => ctl(d).on);
  const unlocked = Object.values(state.doors || {}).filter((v) => v === "unlocked").length;
  return [
    {
      title: lights.length ? `${lights.length} ${lights.length === 1 ? "Light" : "Lights"}` : "Lights",
      meta: lightsOn.length ? "On" : "Off",
      src: ICONS.light,
      attrs: `data-act="home-peek" data-peek-kind="lights"`,
    },
    {
      title: playing ? "Now playing" : "Not playing",
      meta: playing
        ? `${state.spotifyLinked !== false ? "Spotify" : "Jemm"} · ${songBySource(playing.c.source).title} — ${songBySource(playing.c.source).artist}`
        : "Off",
      src: ICONS.audio,
      attrs: `data-act="home-peek" data-peek-kind="playing"`,
      motion: playing ? "audio" : "",
    },
    {
      title: unlocked ? `${unlocked} open` : "All secured",
      meta: unlocked ? "Doors unlocked" : "Doors locked",
      src: "assets/icons/16/home.svg",
      attrs: `data-act="home-peek" data-peek-kind="security"`,
      alert: unlocked > 0,
    },
    {
      title: `${inside}° Inside`,
      meta: `${outsideDegrees(home, room)}° outside`,
      src: ICONS.climate,
      attrs: `data-act="home-peek" data-peek-kind="climate"`,
    },
    {
      title: shades.length ? `${shades.length} ${shades.length === 1 ? "Shade" : "Shades"}` : "Shades",
      meta: !shades.length ? "None here" : shadesOpen === shades.length ? "Open" : shadesOpen === 0 ? "Closed" : "Mixed",
      src: ICONS.shade,
      attrs: `data-act="home-peek" data-peek-kind="shades"`,
    },
    {
      title: fans.length ? `${fans.length} ${fans.length === 1 ? "Fan" : "Fans"}` : "Fans",
      meta: fans.length ? (fansOn.length ? "On" : "Off") : "None here",
      src: ICONS.fan,
      attrs: `data-act="home-peek" data-peek-kind="fans"`,
      motion: fansOn.length ? "fan" : "",
    },
  ];
}

function homeSummaryTiles(room, { cameras = true, viewAll = true } = {}) {
  const away = state.presence === "away";
  const square = normalizeHomeTile(state.homeTile) === "square";
  const items = [
    {
      title: "Home status",
      meta: away ? "Away" : "Online",
      src: ICONS.arc,
      attrs: `data-act="home-peek" data-peek-kind="status"`,
      ok: !away,
    },
    ...homeSummaryKpis(room),
  ];
  const tiles = items.map((k) => dashTile({
    title: k.title,
    meta: k.meta,
    src: k.src,
    extra: `dash-tile--kpi${square ? " dash-tile--vert dash-tile--square" : k.ok != null ? " dash-tile--status" : ""}${k.alert ? " is-alert" : ""}`,
    attrs: k.attrs,
    ok: k.ok,
    motion: k.motion,
  }));
  return `
    <section class="home-block">
      <div class="home-block__head">
        <h2 class="h2">Summary</h2>
        ${viewAll ? `<button type="button" class="btn btn--link" data-go="devices">View all devices</button>` : ""}
      </div>
      ${square ? "" : tiles[0]}
      <div class="dash-kpi${square ? " is-square" : ""}">
        ${(square ? tiles : tiles.slice(1)).join("")}
      </div>
    </section>
    ${cameras ? cameraRail(room) : ""}`;
}

function homeHero(room, { title, chip = "dot" } = {}) {
  const home = currentHome();
  const away = !room;
  const intro = title || normalizeHomeIntro(state.homeIntro);
  const isPropDropdown = intro === "property";
  const mark = chip === "pin"
    ? `<svg class="here-chip__pin" viewBox="0 -960 960 960" aria-hidden="true"><path fill="currentColor" d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Z"/></svg>`
    : `<span class="here-chip__dot" aria-hidden="true"></span>`;
  if (away && isPropDropdown) {
    return `
      <div class="home-hello">
        <span class="away-banner" style="margin-bottom:4px">You’re away</span>
        ${homeSwitcher({ large: true })}
        <div class="home-hello__meta">
          <span>${home.city || "Miami, Florida"}</span>
          <span>${home.weather || "84° F · Sunny"}</span>
        </div>
      </div>`;
  }
  const heading = isPropDropdown ? homeSwitcher({ large: true }) : "";
  return `
    <div class="home-hello">
      ${heading}
      <div class="home-hello__meta">
        <span>${home.city || "Miami, Florida"}</span>
        <span>${home.weather || room?.weather || "84° F · Sunny"}</span>
      </div>
    </div>
    <div class="home-place">
      ${away
        ? `<span class="away-banner">You’re away</span>`
        : `<span class="here-chip">${mark}Current location</span>`}
      <h2 class="home-place__title">${away ? home.name : room.name}</h2>
    </div>`;
}

function homeDots(count) {
  const cur = normalizeHomePage(state.homePage);
  return `
    <div class="home-dots" role="tablist" aria-label="Home pages">
      ${Array.from({ length: count }, (_, i) => `
        <button type="button" class="${i === cur ? "is-on" : ""}" data-act="home-page" data-page="${i}" data-home-dot role="tab" aria-label="${HOME_PANES[i] ? HOME_PANES[i].label : `Page ${i + 1}`}"${i === cur ? ` aria-selected="true"` : ` aria-selected="false"`}></button>
      `).join("")}
    </div>`;
}

function homeDeck(panes) {
  return `
    <div class="home-pager" data-home-pager>
      ${panes.map((html, i) => `<section class="home-page home-pane" aria-label="${HOME_PANES[i] ? HOME_PANES[i].label : `Page ${i + 1}`}">${html}</section>`).join("")}
    </div>
    ${homeDots(panes.length)}`;
}

function homeScenesBlock(room) {
  if (!room) return `<p class="muted">Pick a room to see scenes.</p>`;
  return `
    <section class="home-block">
      <div class="home-block__head">
        <h2 class="h2">Scenes</h2>
        <button type="button" class="btn btn--link" data-go="room" data-room="${room.id}">View all</button>
      </div>
      ${sceneRail(room)}
    </section>`;
}

function seedFavorites() {
  const cams = rooms().flatMap((r) => r.devices.filter((d) => d.kind === "camera")).slice(0, 3).map((d) => ({ type: "device", id: d.id }));
  const doors = HOME_DOORS.map((door) => ({ type: "door", id: door.id }));
  return [...cams, ...doors].slice(0, 6);
}

function favoriteList() {
  return Array.isArray(state.favorites) && state.favorites.length ? state.favorites : seedFavorites();
}

function favKey(item) {
  return `${item.type}:${item.id}`;
}

function isFavorite(item) {
  return favoriteList().some((f) => favKey(f) === favKey(item));
}

function resolveFavorite(item) {
  if (item.type === "door") {
    const door = HOME_DOORS.find((d) => d.id === item.id);
    if (!door) return null;
    return {
      title: `${door.label} door`,
      meta: (state.doors || {})[door.id] === "unlocked" ? "Unlocked" : "Locked",
      src: "assets/icons/16/home.svg",
      photo: "",
      attrs: state.favEdit ? `data-act="toggle-fav" data-fav-type="door" data-fav-id="${door.id}"` : `data-act="home-peek" data-peek-kind="security"`,
    };
  }
  if (item.type === "scene") {
    const [roomId, sceneId] = item.id.split(":");
    const room = roomById(roomId);
    if (!room) return null;
    const q = room.quick?.find((s) => s.id === sceneId);
    if (!q) return null;
    const name = state.sceneNames[item.id] || q.label;
    const live = state.scene[roomId] === sceneId;
    const info = SCENE_INFO[sceneId] || {};
    return {
      title: name,
      meta: live ? "Active" : room.name,
      src: "assets/icons/16/scenes.svg",
      photo: info.photo || room.photo || "",
      attrs: state.favEdit
        ? `data-act="toggle-fav" data-fav-type="scene" data-fav-id="${item.id}"`
        : `data-act="go-scene" data-room="${roomId}" data-scene="${sceneId}"`,
    };
  }
  if (item.type === "profile") {
    const p = PEOPLE.find((p) => p.id === item.id) || (item.id === "john" ? { id: "john", nameKey: true, role: "Admin" } : null);
    if (!p) return null;
    const name = p.nameKey ? (state.userName || "You") : p.name;
    const avatar = p.avatarKey ? state.userAvatar : p.avatar;
    return {
      title: name,
      meta: p.role || "Household",
      src: avatar ? `assets/avatars/${avatar}.jpg` : "assets/icons/16/profile.svg",
      photo: "",
      isAvatar: true,
      attrs: state.favEdit
        ? `data-act="toggle-fav" data-fav-type="profile" data-fav-id="${item.id}"`
        : `data-go="profiles"`,
    };
  }
  const d = findDevice(item.id);
  if (!d) return null;
  return {
    title: d.name,
    meta: deviceDetail(d),
    src: deviceIcon(d.kind),
    photo: d.photo || "",
    attrs: state.favEdit ? `data-act="toggle-fav" data-fav-type="device" data-fav-id="${d.id}"` : `data-device="${d.id}"`,
  };
}

function favPickerKinds() {
  const kinds = KIND_ORDER.filter((kind) => devicesOfKind(kind).length);
  const items = kinds.map((kind) => ({ id: kind, type: "kind", label: KIND_LABEL[kind] || kind, src: deviceIcon(kind) }));
  items.push({ id: "doors", type: "doors", label: "Doors & locks", src: "assets/icons/16/home.svg" });
  items.push({ id: "scenes", type: "scenes", label: "Scenes", src: "assets/icons/16/scenes.svg" });
  items.push({ id: "profiles", type: "profiles", label: "People", src: "assets/icons/16/profile.svg" });
  return items;
}

function favPickerBody() {
  const kind = state.favKind;
  if (!kind) {
    return `
      <p class="muted">Pick a type. Tap an item to pin it — saves as you go.</p>
      <div class="card list-card">
        ${favPickerKinds().map((item) => `
          <button type="button" class="row" data-act="set-fav-kind" data-value="${item.id}">
            ${icon(item.src, "glyph")}
            <span class="grow">${item.label}</span>
            ${chevron("right")}
          </button>`).join("")}
      </div>`;
  }
  const backBtn = `<button type="button" class="btn btn--link" data-act="set-fav-kind" data-value="">← All types</button>`;
  if (kind === "doors") {
    return `
      ${backBtn}
      <div class="card list-card">
        ${HOME_DOORS.map((door) => {
          const on = isFavorite({ type: "door", id: door.id });
          return `
          <button type="button" class="row ${on ? "is-on" : ""}" data-act="toggle-fav" data-fav-type="door" data-fav-id="${door.id}" aria-pressed="${on ? "true" : "false"}">
            ${icon("assets/icons/16/home.svg", "glyph")}
            <span class="grow">${door.label} door</span>
            <span class="muted">${on ? "Pinned ✓" : "Add"}</span>
          </button>`;
        }).join("")}
      </div>`;
  }
  if (kind === "scenes") {
    const allScenes = rooms().flatMap((room) =>
      room.quick.map((q) => {
        const key = sceneKey(room.id, q.id);
        const name = state.sceneNames[key] || q.label;
        const id = key;
        const on = isFavorite({ type: "scene", id });
        return { id, name, room, on };
      })
    );
    return `
      ${backBtn}
      <div class="card list-card">
        ${allScenes.map(({ id, name, room, on }) => `
          <button type="button" class="row ${on ? "is-on" : ""}" data-act="toggle-fav" data-fav-type="scene" data-fav-id="${id}" aria-pressed="${on ? "true" : "false"}">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="glyph" aria-hidden="true"><path d="M8 2l1.5 3 3.5.5-2.5 2.5.5 3.5L8 10l-3 1.5.5-3.5L3 5.5l3.5-.5z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>
            <span class="grow">
              <strong>${name}</strong>
              <span class="muted" style="display:block;font-size:12px">${room.name}</span>
            </span>
            <span class="muted">${on ? "Pinned ✓" : "Add"}</span>
          </button>`).join("") || `<p class="muted">No scenes yet.</p>`}
      </div>`;
  }
  if (kind === "profiles") {
    const people = PEOPLE.filter((p) => p.id !== "john");
    const me = { id: "john", name: state.userName || "You", role: "Admin" };
    const all = [me, ...people];
    return `
      ${backBtn}
      <div class="card list-card">
        ${all.map((p) => {
          const on = isFavorite({ type: "profile", id: p.id });
          const name = p.nameKey ? state.userName || "You" : p.name;
          const avatar = p.avatarKey ? (state.userAvatar || "") : (p.avatar || "");
          return `
          <button type="button" class="row ${on ? "is-on" : ""}" data-act="toggle-fav" data-fav-type="profile" data-fav-id="${p.id}" aria-pressed="${on ? "true" : "false"}">
            <span class="avatar-xs">${avatar ? `<img src="assets/avatars/${avatar}.jpg" alt="" />` : `<span>${name[0] || "?"}</span>`}</span>
            <span class="grow">
              <strong>${name}</strong>
              <span class="muted" style="display:block;font-size:12px">${p.role}</span>
            </span>
            <span class="muted">${on ? "Pinned ✓" : "Add"}</span>
          </button>`;
        }).join("")}
      </div>`;
  }
  const list = devicesOfKind(kind);
  return `
    ${backBtn}
    <div class="card list-card">
      ${list.map((d) => {
        const on = isFavorite({ type: "device", id: d.id });
        return `
        <button type="button" class="row ${on ? "is-on" : ""}" data-act="toggle-fav" data-fav-type="device" data-fav-id="${d.id}" aria-pressed="${on ? "true" : "false"}">
          ${icon(deviceIcon(d.kind), "glyph")}
          <span class="grow">
            <strong>${d.name}</strong>
            <span class="muted" style="display:block;font-size:12px">${d.room}</span>
          </span>
          <span class="muted">${on ? "Pinned ✓" : "Add"}</span>
        </button>`;
      }).join("") || `<p class="muted">Nothing in this type yet.</p>`}
    </div>`;
}

function favPicker() {
  if (!state.favAdd) return "";
  return `
    <div class="sheet sheet--fav is-sheet" data-act="close-fav-add">
      <aside class="sheet__panel fav-picker" data-stop role="dialog" aria-modal="true" aria-labelledby="fav-picker-title">
        <button type="button" class="sheet-grab" data-act="close-fav-add" aria-label="Dismiss sheet">
          <span class="handle"></span>
        </button>
        <header class="preview-sheet__head">
          <h2 id="fav-picker-title">Add to Home</h2>
          <button type="button" class="icon-btn" data-act="close-fav-add" aria-label="Close">${icon("assets/icons/24/close.svg")}</button>
        </header>
        <div class="fav-picker__body preview-sheet__body">
          ${favPickerBody()}
        </div>
      </aside>
    </div>`;
}

function homeFavorites(room) {
  const items = favoriteList().map(resolveFavorite).filter(Boolean);
  const editing = state.favEdit;
  return `
    <section class="home-block">
      <div class="home-block__head">
        <h2 class="h2">Favorites</h2>
        <div class="home-block__actions">
          <button type="button" class="icon-btn" data-act="open-fav-add" aria-label="Add favorite">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M9 5v8M5 9h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
          <button type="button" class="icon-btn${editing ? " is-on" : ""}" data-act="toggle-fav-edit" aria-label="${editing ? "Done editing" : "Edit favorites"}" aria-pressed="${editing}">
            ${editing
              ? `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M4 9l4 4 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
              : `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M10.5 3.5l4 4-8 8H2.5v-4l8-8z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`}
          </button>
        </div>
      </div>
      ${items.length ? `
      <div class="dash-favs${editing ? " is-editing" : ""}" id="fav-grid">
        ${items.map((item, i) => `
          <div class="dash-tile dash-tile--vert dash-tile--fav${item.photo ? " dash-tile--cam" : ""}${editing ? " is-edit" : ""}"${editing ? ` draggable="true" data-fav-idx="${i}"` : ` ${item.attrs}`} style="${editing ? `animation-delay:${(i % 4) * 0.07}s` : ""}">
            ${item.photo ? `<img class="dash-tile__photo" src="${item.photo}" alt="" />` : ""}
            ${dashIcon(item.src)}
            <span class="dash-tile__text">
              <span class="dash-tile__title">${item.title}</span>
              <span class="dash-tile__meta">${editing ? "" : item.meta}</span>
            </span>
            ${editing ? `<button type="button" class="fav-remove" data-act="toggle-fav" data-fav-type="${favoriteList()[i]?.type}" data-fav-id="${favoriteList()[i]?.id}" aria-label="Remove ${item.title}">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M1 1l8 8M9 1L1 9" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>` : ""}
          </div>`).join("")}
      </div>` : `<p class="muted">Pin cameras, doors, or devices you use every day. Nothing extra.</p>`}
    </section>`;
}

function jemmNightCard() {
  if (state.nightCardDismissed) return "";
  const h = new Date().getHours();
  const isNight = h >= 21 || h < 6 || state.nightCardDemo;
  if (!isNight) return "";
  const room = hereRoom();
  const hint1 = room ? `Evening scene in ${room.name.split(" ")[0]}` : "Good night scene";
  const hint2 = "Lock all doors";
  const msg = room
    ? `You're in the ${room.name.toLowerCase()}. Lights dimmed · Doors locked · Cameras on.`
    : `You're away. Everything's secure — locks, cameras, and climate on overnight mode.`;
  return `
    <div class="jemm-night" role="status">
      <div class="jemm-night__head">
        ${jemmFace("jemm-night__face")}
        <span class="jemm-night__label">Good night.</span>
        <button class="jemm-night__close" data-act="dismiss-night-card" aria-label="Dismiss">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </button>
      </div>
      <p class="jemm-night__msg">${msg}</p>
      <div class="jemm-night__chips">
        <button class="chip" data-act="voice-hint" data-hint="${hint1}">${hint1}</button>
        <button class="chip" data-act="voice-hint" data-hint="${hint2}">${hint2}</button>
      </div>
    </div>`;
}

function homeFirstPane(room, extra = "") {
  const intro = normalizeHomeIntro(state.homeIntro);
  return `
    ${homeHero(room, { title: intro === "property" ? "property" : "none", chip: "dot" })}
    ${jemmNightCard()}
    ${homeSummaryTiles(room, { cameras: false, viewAll: normalizeHomeLayout(state.homeLayout) !== "v2" })}
    ${homeScenesBlock(room)}
    ${homeFavorites(room)}
    ${extra}`;
}

function homeSimple(room, extra = "") {
  return `
    <div class="home-simple">
      ${homeFirstPane(room, extra)}
    </div>`;
}

function homeDevicesPane(room) {
  return `
    ${homeHero(room, { title: "none", chip: "pin" })}
    <section class="home-block">
      <div class="home-block__head">
        <h2 class="h2">Devices</h2>
        ${viewToggle("deviceView", state.deviceView)}
      </div>
      ${room ? deviceStrip(room) : `<p class="muted">Pick a room to see devices.</p>`}
    </section>`;
}

function renderHomeHere(room) {
  return homeSimple(room);
}

function awayJemmCard() {
  const home = currentHome();
  return `
    <div class="away-jemm-card">
      <img src="assets/nav/jemm-face.png" class="away-jemm__face" alt="Jemm" />
      <div class="away-jemm__text">
        <p class="kicker">Jemm is watching</p>
        <p>${home.name} is secure. Cameras and sensors active.</p>
      </div>
    </div>`;
}

function awaySecurityStatus() {
  const allDoors = HOME_DOORS;
  const allCams = rooms().flatMap((r) => r.devices.filter((d) => d.kind === "camera").map((d) => ({...d, roomId: r.id})));
  const lockedCount = allDoors.filter((d) => d.locked !== false).length;
  const armedCount = allCams.filter((d) => ctl(d).armed && ctl(d).on).length;
  const allLocked = lockedCount === allDoors.length;
  const allArmed = armedCount === allCams.length;
  return `
    <section class="away-security">
      <button type="button" class="away-sec-item ${allLocked ? "is-ok" : "is-warn"}" data-go="devices" aria-label="Door locks">
        <svg class="away-sec-item__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5" y="11" width="14" height="11" rx="2" stroke="currentColor" stroke-width="1.8"/>
          <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        <span class="away-sec-item__label">Locks</span>
        <span class="away-sec-item__value">${allLocked ? "All locked" : `${lockedCount}/${allDoors.length}`}</span>
      </button>
      <button type="button" class="away-sec-item ${allArmed ? "is-ok" : "is-warn"}" data-go="devices" aria-label="Cameras">
        <svg class="away-sec-item__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 10l5-3v10l-5-3V10z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
          <rect x="3" y="7" width="12" height="10" rx="2" stroke="currentColor" stroke-width="1.8"/>
        </svg>
        <span class="away-sec-item__label">Cameras</span>
        <span class="away-sec-item__value">${allArmed ? "Armed" : `${armedCount}/${allCams.length} on`}</span>
      </button>
      <button type="button" class="away-sec-item" data-go="devices" aria-label="Climate">
        <svg class="away-sec-item__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/>
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        <span class="away-sec-item__label">Climate</span>
        <span class="away-sec-item__value">${rooms()[0]?.climate || "72°"}</span>
      </button>
    </section>`;
}

function awaySceneBlock() {
  const allRooms = rooms();
  const awayItems = [];
  allRooms.forEach((r) => {
    r.quick.filter((q) => ["away", "lock", "sleep", "quiet", "lights-off"].includes(q.id)).forEach((q) => {
      if (!awayItems.find((x) => x.id === q.id)) {
        awayItems.push({ ...q, room: r, roomId: r.id });
      }
    });
  });
  if (!awayItems.length) return "";
  return `
    <section class="home-block">
      <div class="home-block__head">
        <h2 class="h2">Manage remotely</h2>
      </div>
      <div class="scene-rail">
        ${awayItems.map((q) => {
          const look = sceneLook(q.room, q);
          const on = state.scene[q.roomId] === q.id;
          return `
            <button type="button" class="scene-btn ${on ? "is-on" : ""}" data-go="scene" data-room="${q.roomId}" data-scene-id="${q.id}" aria-pressed="${on}">
              <img src="${look.photo}" alt="" style="object-position:${look.pos}" />
              <span>${q.label}</span>
            </button>`;
        }).join("")}
      </div>
    </section>`;
}

function awayRoomsBlock() {
  const rs = rooms();
  return `
    <section class="home-block">
      <div class="home-block__head">
        <h2 class="h2">Check a room</h2>
      </div>
      <div class="away-rooms-list">
        ${rs.map((r) => `
          <button type="button" class="card-row card-row--media" data-go="room" data-room="${r.id}">
            <img class="card-row__photo" src="${r.photo}" alt="" />
            <span class="grow">
              <span class="name">${r.name}</span>
              <span class="meta">${r.climate} · ${r.devices.length} devices</span>
            </span>
            ${chevron("right")}
          </button>`).join("")}
      </div>
    </section>`;
}

function renderHomeAway() {
  return `
    <div class="home-simple">
      ${homeHero(null)}
      ${awayJemmCard()}
      ${awaySecurityStatus()}
      ${awaySceneBlock()}
      ${awayRoomsBlock()}
      ${adminRequestCard()}
    </div>`;
}

function coachHtml() {
  if (!state.coach) return "";
  return `
    <aside class="coach" style="right:16px;top:72px">
      <p class="kicker">Support</p>
      <p><strong>Help is one tap away.</strong></p>
      <p class="muted">Use the question mark for support from inside the app.</p>
      <button class="btn btn--primary" style="margin-top:12px" data-act="dismiss-coach">Got it</button>
    </aside>`;
}

function walkFlash() {
  if (!state.walkTo) return "";
  const room = roomById(state.walkTo);
  return `
    <div class="walk-flash" role="status">
      <div>
        <p class="here-flag">You're here</p>
        <h2 class="h2">Walking to ${room.name}</h2>
        <p>Home will show this room’s summary, devices, and quick options.</p>
      </div>
    </div>`;
}

function renderHome() {
  const room = hereRoom();
  return `
    ${topnav()}
    ${coachHtml()}
    <div class="stage stage--home is-simple">${room ? renderHomeHere(room) : renderHomeAway()}</div>
    ${bottomNav("home")}`;
}

function roomMasters(room) {
  const lights = devicesOfKind("light", room);
  const shades = devicesOfKind("shade", room);
  if (!lights.length && !shades.length) return "";
  const lightVal = lights.length ? Math.round(lights.reduce((sum, d) => sum + Number(ctl(d).intensity || 0), 0) / lights.length) : 0;
  const shadeVal = shades.length ? Math.round(shades.reduce((sum, d) => sum + Number(ctl(d).pos || 0), 0) / shades.length) : 0;
  return `
    <section class="room-masters">
      ${lights.length ? `
        <label class="sheet-slider">
          <span class="sheet-slider__top"><span>Lights</span><em data-live="intensity">${liveFmt("intensity", lightVal)}</em></span>
          <input type="range" min="0" max="100" value="${lightVal}" data-ctl="intensity" data-ctl-kind="light" data-ctl-room="${room.id}" />
        </label>` : ""}
      ${shades.length ? `
        <label class="sheet-slider">
          <span class="sheet-slider__top"><span>Shades</span><em data-live="pos">${liveFmt("pos", shadeVal)}</em></span>
          <input type="range" min="0" max="100" value="${shadeVal}" data-ctl="pos" data-ctl-kind="shade" data-ctl-room="${room.id}" />
        </label>` : ""}
    </section>`;
}

function roomTabControl() {
  const t = state.roomTab || "scenes";
  return `
    <div class="view-toggle" role="tablist" aria-label="Room sections">
      <button type="button" class="${t === "scenes" ? "is-on" : ""}" data-act="set-room-tab" data-tab="scenes" aria-label="Scenes" aria-selected="${t === "scenes"}">
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="16" height="16">
          <rect x="3" y="4" width="14" height="3" rx="1" fill="currentColor" opacity=".9"/>
          <rect x="3" y="9" width="9" height="2" rx="1" fill="currentColor" opacity=".6"/>
          <rect x="3" y="13" width="6" height="2" rx="1" fill="currentColor" opacity=".4"/>
          <circle cx="16" cy="14" r="3" stroke="currentColor" stroke-width="1.4"/>
          <path d="M14.8 14l.9.9 1.7-1.7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button type="button" class="${t === "devices" ? "is-on" : ""}" data-act="set-room-tab" data-tab="devices" aria-label="Devices" aria-selected="${t === "devices"}">
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="16" height="16">
          <rect x="2.5" y="2.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" stroke-width="1.4"/>
          <rect x="11" y="2.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" stroke-width="1.4"/>
          <rect x="2.5" y="11" width="6.5" height="6.5" rx="1.5" stroke="currentColor" stroke-width="1.4"/>
          <rect x="11" y="11" width="6.5" height="6.5" rx="1.5" stroke="currentColor" stroke-width="1.4"/>
        </svg>
      </button>
    </div>`;
}

function renderRoom() {
  const room = roomById(state.viewingRoom || state.presence);
  const inHere = state.presence === room.id;
  const away = state.presence === "away";
  const here = hereRoom();
  const tab = state.roomTab || "scenes";
  return `
    ${topnav({ back: "rooms" })}
    ${jemmStripIf("top")}
    <div class="stage stack-lg">
      <div class="home-head">
        <div class="room-head-row">
          <div>
            ${inHere ? `<p class="here-flag">You're here</p>` : away ? `<span class="away-banner">Remote view</span>` : `<p class="kicker">You’re in ${here.name}</p>`}
            <h1 class="h1">${room.name}</h1>
          </div>
          <button type="button" class="icon-btn room-photo-btn" data-act="room-photo-sheet" data-room="${room.id}" aria-label="Update room photo">
            <svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true"><path d="M14.5 3.5l2 2L7 15l-3 1 1-3L14.5 3.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <p class="muted">${inHere
          ? ""
          : away
            ? "You’re away. Running a scene still applies to this room."
            : `Viewing from ${here.name.toLowerCase()}.`}</p>
      </div>
      ${roomMasters(room)}
      <div class="room-tab-bar">
        ${roomTabControl()}
      </div>
      ${tab === "scenes" ? `
        <section class="stack-sm">
          ${quickStrip(room)}
        </section>
        ${statsFor(room)}
        ${cameraRail(room)}
      ` : `
        <section class="stack-sm">
          <div class="hero-row">
            <span></span>
            ${viewToggle("deviceView", state.deviceView)}
          </div>
          ${deviceStrip(room)}
        </section>
      `}
    </div>
    ${jemmStripIf("bottom")}
    ${state.roomPhotoSheet === room.id ? roomPhotoSheet(room) : ""}
    ${bottomNav("rooms")}`;
}

function roomPhotoSheet(room) {
  return `
    <div class="sheet-backdrop" data-act="close-room-photo" role="presentation"></div>
    <div class="bottom-sheet bottom-sheet--sm" role="dialog" aria-label="Update room photo">
      <div class="sheet-handle"></div>
      <div class="sheet-body stack-sm">
        <p class="kicker">Room photo · ${room.name}</p>
        <button type="button" class="card-row" data-act="room-photo-upload" data-room="${room.id}">
          <svg viewBox="0 0 20 20" fill="none" width="18" height="18" class="card-icon--row" aria-hidden="true"><path d="M10 3v10M6 7l4-4 4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 14v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          <span class="grow"><span class="name">Choose from library</span><span class="meta">Pick a photo from your device</span></span>
          ${chevron("right")}
        </button>
        <button type="button" class="card-row" data-act="room-photo-ai" data-room="${room.id}">
          <svg viewBox="0 0 20 20" fill="none" width="18" height="18" class="card-icon--row" aria-hidden="true"><path d="M10 2l1.8 5.4H17l-4.3 3.1 1.6 5-4.3-3.1-4.3 3.1 1.6-5L3 7.4h5.2L10 2z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
          <span class="grow"><span class="name">Generate with AI</span><span class="meta">Jemm creates a photo for this room</span></span>
          ${chevron("right")}
        </button>
      </div>
    </div>`;
}

/* ── Shared scene detail content ─────────────────────────────── */
function sceneDetailData(roomId, sceneId) {
  const s = findScene(roomId, sceneId);
  if (!s) return null;
  const key = sceneKey(s.room.id, s.id);
  const name = state.sceneNames[key] || s.label;
  const live = state.scene[s.room.id] === s.id;
  const setRows = s.sets.filter((r) => r.set);
  const unchangedRows = s.sets.filter((r) => !r.set);
  // Build trigger phrases
  const baseWake = state.sceneWakes[key] || `hey Jemm, ${String(s.label).toLowerCase()}`;
  const triggers = state.sceneTriggers?.[key] || [
    baseWake,
    `run ${String(s.label).toLowerCase()}`,
  ];
  return { s, key, name, live, setRows, unchangedRows, triggers };
}

function sceneActionRow(row, sceneId) {
  const kindIcons = {
    light: `<svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true"><circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M10 2v1M10 17v1M2 10h1M17 10h1M4.2 4.2l.7.7M15.1 15.1l.7.7M15.1 4.9l-.7.7M4.9 15.1l-.7.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    audio: `<svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true"><path d="M3 7.5h3l3-4v13l-3-4H3V7.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14 6.5a5 5 0 0 1 0 7M16.5 4a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    shade: `<svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true"><rect x="3" y="3" width="14" height="2" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M5 5v9m10-9v9M5 14h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    climate: `<svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true"><circle cx="10" cy="10" r="5" stroke="currentColor" stroke-width="1.5"/><path d="M10 5v2M10 13v2M5 10h2M13 10h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    camera: `<svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true"><rect x="2" y="5" width="13" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M15 8l3-2v8l-3-2V8z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
    fan: `<svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true"><circle cx="10" cy="10" r="1.5" fill="currentColor"/><path d="M10 8.5C10 6 11.5 4 13.5 4s3 2 1.5 4c-1.5 0-3-1-5 .5zM11.5 10c2.5 0 4.5 1.5 4.5 3.5s-2 3-4-1.5c0-1.5 1-3-.5-2zM8.5 10C6 10 4 8.5 4 6.5S6 3.5 7.5 8c.5 1.5-.5 3 1 2zM8 11.5c-2 0-4 1.5-4 3.5s2 3 4-1.5C8.5 12 8 10 9 11.5z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
    lock: `<svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true"><rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M7 9V6a3 3 0 0 1 6 0v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    mic: `<svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true"><rect x="7" y="2" width="6" height="9" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M4 10a6 6 0 0 0 12 0M10 16v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  };
  const iconSvg = kindIcons[row.kind] || `<svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.5"/></svg>`;
  const isOff = row.on === false || row.detail === "Off";
  return `
    <div class="scene-action-row ${isOff ? "is-off" : "is-on"}">
      <span class="scene-action-row__icon">${iconSvg}</span>
      <span class="scene-action-row__body">
        <span class="scene-action-row__name">${row.name}</span>
        <span class="scene-action-row__detail">${row.detail}</span>
      </span>
      <button type="button" class="scene-action-row__edit icon-btn" data-act="edit-scene-action" data-device="${row.id}" data-scene="${sceneId}" aria-label="Edit ${row.name}">
        <svg viewBox="0 0 20 20" fill="none" width="15" height="15" aria-hidden="true"><path d="M14.5 3.5a2.12 2.12 0 0 1 3 3l-10 10-4 1 1-4 10-10z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
      </button>
    </div>`;
}

function sceneTriggerChips(triggers, key) {
  return `
    <div class="scene-triggers">
      ${triggers.map((phrase, i) => `
        <span class="scene-trigger-chip" contenteditable="false" data-trigger-idx="${i}" data-key="${key}">"${phrase}"</span>
      `).join("")}
      <button type="button" class="scene-trigger-add" data-act="add-scene-trigger" data-key="${key}" aria-label="Add trigger phrase">
        <svg viewBox="0 0 20 20" fill="none" width="13" height="13" aria-hidden="true"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        Add phrase
      </button>
      <button type="button" class="scene-trigger-jemm" data-act="jemm-suggest-triggers" data-key="${key}" aria-label="Ask Jemm to suggest phrases">
        <img src="assets/jemm-mark.svg" width="13" height="11" alt="" aria-hidden="true" />
        Ask Jemm
      </button>
    </div>`;
}

function sceneDetailBody(roomId, sceneId, { compact = false } = {}) {
  const d = sceneDetailData(roomId, sceneId);
  if (!d) return "";
  const { s, key, name, live, setRows, unchangedRows, triggers } = d;
  const people = visiblePeople();
  const involved = state.scenePeople[key] || ["john"];
  return `
    <div class="scene-detail-body ${compact ? "is-compact" : ""}">
      <div class="scene-detail-hero">
        <img src="${s.photo}" alt="" style="object-position:${s.pos}" class="scene-detail-hero__img" />
        <div class="scene-detail-hero__overlay">
          <p class="scene-detail-hero__room">${s.room.name}</p>
          <h2 class="scene-detail-hero__name">${name}</h2>
          ${live ? `<span class="scene-detail-hero__live">running now</span>` : ""}
        </div>
      </div>

      <div class="scene-detail-section">
        <button type="button" class="btn ${live ? "btn--secondary btn--sm" : "btn--primary btn--sm"}" data-act="run-scene" data-room="${roomId}" data-scene="${sceneId}" style="width:100%">${live ? "Run again" : "Run scene"}</button>
      </div>

      <div class="scene-detail-section">
        <p class="scene-detail-label">What will happen</p>
        ${setRows.length
          ? setRows.map((r) => sceneActionRow(r, sceneId)).join("")
          : `<p class="scene-detail-empty">No devices are set by this scene.</p>`}
        ${unchangedRows.length ? `
          <details class="scene-unchanged">
            <summary>${unchangedRows.length} device${unchangedRows.length > 1 ? "s" : ""} unchanged</summary>
            ${unchangedRows.map((r) => sceneActionRow(r, sceneId)).join("")}
          </details>` : ""}
      </div>

      <div class="scene-detail-section">
        <p class="scene-detail-label">Trigger phrases
          <span class="scene-detail-label__hint">say to Jemm</span>
        </p>
        ${sceneTriggerChips(triggers, key)}
      </div>

      <div class="scene-jemm-suggest">
        <img src="assets/jemm-mark.svg" width="18" height="15" alt="Jemm" aria-hidden="true" />
        <span class="scene-jemm-suggest__text">Ask Jemm to improve this scene or suggest new ones based on your habits.</span>
        <button type="button" class="scene-jemm-suggest__btn" data-act="jemm-suggest-scene" data-room="${roomId}" data-scene="${sceneId}">Suggest</button>
      </div>

      <div class="scene-detail-section">
        <p class="scene-detail-label">People</p>
        <div class="quick">
          ${people.map((p) => `
            <button type="button" class="${involved.includes(p.id) ? "is-on" : ""}" data-act="toggle-scene-person" data-person="${p.id}" data-room="${roomId}" data-scene="${sceneId}">${p.name.split(" ")[0]}</button>
          `).join("")}
        </div>
      </div>

      <div class="scene-detail-section">
        <p class="scene-detail-label">Name</p>
        <input class="scene-detail-name-input" type="text" value="${name}" data-act="edit-scene-name" data-key="${key}" aria-label="Scene name" />
        <p class="scene-detail-blurb">${s.blurb}</p>
      </div>
    </div>`;
}

/* ── Wake word picker ─────────────────────────────────────────── */
const WAKE_WORDS = [
  { id: "hey-jemm",   label: "Hey Jemm",    desc: "Default — natural and clear" },
  { id: "jemm",       label: "Jemm",        desc: "Short and snappy" },
  { id: "yo-jemm",    label: "Yo Jemm",     desc: "Casual" },
  { id: "ok-jemm",    label: "OK Jemm",     desc: "Familiar feel" },
  { id: "hi-jemm",    label: "Hi Jemm",     desc: "Friendly" },
  { id: "custom",     label: "Custom…",     desc: "Type your own wake phrase" },
];

function wakeWordSheet() {
  if (!state.wakeWordSheet) return "";
  const current = state.wakeWord || "Hey Jemm";
  return `
    <div class="overlay wake-word-overlay" data-act="close-wake-word" role="dialog" aria-modal="true" aria-label="Choose wake word">
      <div class="sheet wake-word-sheet" data-stop>
        <div class="sheet-close-row">
          <p class="sheet-title">Wake word</p>
          <button type="button" class="icon-btn" data-act="close-wake-word" aria-label="Close">
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true"><path d="M5 15L15 5M5 5l10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
        </div>
        <p class="wake-word-hint">Choose what you say to get Jemm's attention. Works with Arc and any Jemm mic.</p>
        <div class="card list-card wake-word-list">
          ${WAKE_WORDS.map((w) => {
            const active = (w.id === "custom" ? !WAKE_WORDS.slice(0,-1).some(x => x.label === current) : w.label === current);
            return `
              <button type="button" class="wake-word-row ${active ? "is-on" : ""}" data-act="set-wake-word" data-value="${w.label}" data-id="${w.id}" aria-pressed="${active}">
                <span class="wake-word-row__body">
                  <span class="wake-word-row__label">${w.id === "custom" && !WAKE_WORDS.slice(0,-1).some(x => x.label === current) ? `"${current}"` : w.label}</span>
                  <span class="wake-word-row__desc">${w.desc}</span>
                </span>
                <span class="wake-word-row__check" aria-hidden="true">
                  ${active ? `<svg viewBox="0 0 20 20" fill="none" width="18" height="18"><path d="M4 10l5 5L16 6" stroke="var(--neon)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` : ""}
                </span>
              </button>`;
          }).join("")}
        </div>
        <p class="wake-word-note">Changes take effect immediately on all Arc devices in this home.</p>
      </div>
    </div>`;
}

function sceneBottomSheet() {
  const ref = state.sheetScene;
  if (!ref) return "";
  return `
    <div class="overlay scene-sheet-overlay" data-act="close-scene" role="dialog" aria-modal="true" aria-label="Scene detail">
      <div class="sheet scene-sheet" data-stop>
        <div class="sheet-close-row">
          <button type="button" class="icon-btn" data-act="close-scene" aria-label="Close">
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true"><path d="M5 15L15 5M5 5l10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
        </div>
        ${sceneDetailBody(ref.roomId, ref.id, { compact: true })}
      </div>
    </div>`;
}

function sceneSideSheet() {
  const ref = state.sideScene;
  if (!ref) return "";
  return `
    <div class="overlay scene-side-overlay" data-act="close-scene" role="dialog" aria-modal="true" aria-label="Scene detail">
      <aside class="scene-side-panel" data-stop>
        <div class="sheet-close-row">
          <button type="button" class="icon-btn" data-act="close-scene" aria-label="Close">
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true"><path d="M5 15L15 5M5 5l10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
        </div>
        ${sceneDetailBody(ref.roomId, ref.id)}
      </aside>
    </div>`;
}

function renderScene() {
  const s = findScene(state.viewingRoom, state.viewingScene);
  if (!s) return renderRoom();
  const back = state.sceneBack === "home" ? "home" : state.sceneBack === "scenes" ? "scenes" : "room";
  return `
    ${topnav({ back })}
    <div class="stage">
      ${sceneDetailBody(state.viewingRoom, state.viewingScene)}
    </div>
    ${bottomNav(back === "home" ? "home" : "rooms")}`;
}

function renderCamera() {
  const d = findDevice(state.viewingDevice);
  if (!d || d.kind !== "camera") return renderHome();
  const c = ctl(d);
  const live = c.on && c.armed;
  const here = state.presence === d.roomId;
  const back = state.deviceBack && APP_SCREENS.has(state.deviceBack) && state.deviceBack !== "camera" && state.deviceBack !== "device" ? state.deviceBack : "home";
  const room = roomById(d.roomId);
  const feed = room?.photo || "assets/rooms/scene-living.jpg";
  return `
    ${topnav({ back })}
    <div class="stage stage--camera">
      <div class="cam-live ${live ? "is-live" : ""}">
        <img src="${feed}" alt="" />
        <span class="cam-live__badge">${live ? "Live" : "Idle"}</span>
        <div class="cam-live__copy">
          <h1 class="h1">${d.name}</h1>
          <p class="muted">${d.room}${here ? " · You’re here" : ""} · ${live ? "Recording locally" : "Camera is idle"}</p>
        </div>
      </div>
      <div class="cam-talk">
        ${sheetPower(c, d.id)}
        ${state.camReply ? `<p class="cam-talk__reply">${state.camReply}</p>` : `<p class="muted">Ask Jemm about what you see, or hold the mic.</p>`}
        <form class="cam-talk__bar" data-form="cam-talk">
          <input name="ask" type="text" placeholder="Ask Jemm…" autocomplete="off" />
          <button type="button" class="icon-btn" data-act="voice" aria-label="Talk to Jemm">${icon("assets/nav/mic.svg")}</button>
          <button type="submit" class="btn btn--primary">Send</button>
        </form>
      </div>
    </div>
    ${bottomNav(back === "rooms" || back === "room" ? "rooms" : back === "more" || back === "devices" ? "more" : "home")}`;
}

function renderHistory() {
  const raw = PEOPLE.find((p) => p.id === state.viewingPerson) || PEOPLE[0];
  const p = personRecord(raw);
  const rows = PERSON_HISTORY[p.id] || [];
  return `
    ${topnav({ back: "profile" })}
    ${jemmStripIf("top")}
    <div class="stage stack-lg">
      <h1 class="h1">${p.name.split(" ")[0]}’s history</h1>
      <p class="muted">What they asked and what Jemm did. Stays on this device.</p>
      <div class="stack-sm">
        ${rows.map((n) => `
          <article class="card">
            <strong>${n.t}</strong>
            <p class="muted" style="margin-top:8px">${n.d}</p>
          </article>`).join("")}
      </div>
    </div>
    ${jemmStripIf("bottom")}
    ${bottomNav("profiles")}`;
}

function floorplanView() {
  const home = currentHome();
  const here = hereRoom();
  return `
    <div class="plan-wrap">
      <img src="${home.plan}" alt="Floorplan of ${home.name}" />
      ${Object.entries(home.spots).map(([id, s]) => `
        <button type="button" class="plan-hot ${state.presence === id ? "is-here" : ""}" style="top:${s.t}%;left:${s.l}%;width:${s.w}%;height:${s.h}%" data-go="room" data-room="${id}">
          <span>${s.label}</span>
          ${state.presence === id ? `<em>Here</em>` : ""}
        </button>`).join("")}
    </div>
    <p class="muted">${here ? `You’re in ${here.name}. Tap a room on the plan to open it.` : "You’re away. Tap a room to view it remotely."}</p>`;
}

function roomsViewToggle() {
  const mode = state.roomsView;
  return `
    <div class="view-toggle" role="group" aria-label="Rooms layout">
      <button type="button" class="${mode === "grid" ? "is-on" : ""}" data-act="set-view" data-view-key="roomsView" data-view="grid" aria-label="Card view">
        <img src="assets/icons/icon-grid.png" alt="" />
      </button>
      <button type="button" class="${mode === "list" ? "is-on" : ""}" data-act="set-view" data-view-key="roomsView" data-view="list" aria-label="List view">
        <img src="assets/icons/icon-list.png" alt="" />
      </button>
      <button type="button" class="${mode === "plan" ? "is-on" : ""}" data-act="set-view" data-view-key="roomsView" data-view="plan">Plan</button>
    </div>`;
}

function renderRooms() {
  const here = hereRoom();
  const plan = state.roomsView === "plan";
  return `
    ${topnav()}
    ${jemmStripIf("top")}
    <div class="stage stack-lg">
      <div class="hero-row">
        <div>
          ${here ? `<p class="here-flag">In ${here.name}</p>` : `<span class="away-banner">You’re away</span>`}
          <h1 class="h1">Rooms</h1>
        </div>
        ${roomsViewToggle()}
      </div>
      ${homeSwitcher()}
      <p class="muted">${plan
        ? "Tap a room on the floorplan."
        : here
          ? "The room you’re in is marked. Open another room to look around without leaving."
          : "Pick a room to view remotely. Home won’t treat it as ‘here’."}</p>
      ${plan ? floorplanView() : roomStrip()}
    </div>
    ${jemmStripIf("bottom")}
    ${bottomNav("rooms")}`;
}

function personRecord(p) {
  const tones = state.personTone || {};
  const accents = state.personAccent || {};
  const personalities = state.personPersonality || {};
  const listens = state.personListen || {};
  return {
    ...p,
    name: p.nameKey ? state.name : p.name,
    email: p.emailKey ? state.email : p.email,
    avatar: p.avatarKey ? state.avatar : p.avatar,
    tone: tones[p.id] || p.tone,
    accent: accents[p.id] || "American",
    personality: personalities[p.id] || p.personality,
    listen: p.id in listens ? listens[p.id] : p.listen,
    visible: state.personVisible?.[p.id] !== false,
    here: p.id === "john" ? state.presence !== "away" : p.id === "alex" || p.id === "mia",
    room: p.id === "john" ? (hereRoom()?.name || "Away") : p.id === "alex" ? "Kitchen" : p.id === "mia" ? "Bedroom" : "Away",
    roomId: p.id === "john" ? (hereRoom()?.id || null) : p.id === "alex" ? (currentHome().id === "lake" ? "great" : "kitchen") : p.id === "mia" ? (currentHome().id === "lake" ? "deck" : "bedroom") : null,
    sample: TONE_SAMPLES[tones[p.id] || p.tone] || p.sample,
  };
}

function visiblePeople() {
  return PEOPLE.filter((p) => !state.personGone?.[p.id]).map(personRecord).filter((p) => p.visible || p.role === "Admin");
}

function isAdmin() {
  return state.viewAs === "admin";
}

function viewAsPerson() {
  if (state.viewAs === "admin" || state.viewAs === "user") return null;
  return visiblePeople().find((p) => p.id === state.viewAs) || null;
}

function viewAsLabel() {
  if (state.viewAs === "admin") return "Admin";
  if (state.viewAs === "user") return "Everyday user";
  const p = viewAsPerson();
  return p ? p.name.split(" ")[0] : "Admin";
}

function lightsOnList() {
  return rooms().flatMap((r) => r.devices.filter((d) => d.kind === "light").map((d) => ({ ...d, room: r.name, roomId: r.id }))).filter((d) => ctl(d).on);
}

function playingNow() {
  return rooms().flatMap((r) => r.devices.filter((d) => d.kind === "audio").map((d) => ({ ...d, room: r.name, roomId: r.id }))).filter((d) => ctl(d).on);
}

function personRoomId(p) {
  if (!p.here) return null;
  if (p.id === "john") return hereRoom()?.id || null;
  if (currentHome().id === "lake") return p.id === "alex" ? "great" : p.id === "mia" ? "deck" : null;
  if (p.id === "alex") return "kitchen";
  if (p.id === "mia") return "bedroom";
  return null;
}

function sceneKey(roomId, id) {
  return `${roomId}:${id}`;
}

function renderProfiles() {
  const people = visiblePeople();
  const list = state.peopleView === "list";
  return `
    ${topnav()}
    ${jemmStripIf("top")}
    <div class="stage stack-lg">
      <div class="hero-row">
        <h1 class="h1">Profiles</h1>
        ${viewToggle("peopleView", state.peopleView)}
      </div>
      <p class="muted">Who’s in this home, how Jemm talks to them, and who gets a voice.</p>
      <div class="${list ? "card-stack" : "card-grid"}">
        ${people.map((p) => personCard(p, list)).join("")}
      </div>
      <p class="muted">Tap a person to hear Jemm’s voice for them. Guests marked Silent are not answered.</p>
    </div>
    ${jemmStripIf("bottom")}
    ${bottomNav("profiles")}`;
}

function renderScenes() {
  const allScenes = rooms().flatMap((room) =>
    room.quick.map((q) => {
      const key = sceneKey(room.id, q.id);
      const name = state.sceneNames[key] || q.label;
      const info = SCENE_INFO[q.id] || {};
      const photo = info.photo || room.photo;
      const pos = info.pos || "center";
      const live = state.scene[room.id] === q.id;
      return { room, q, name, photo, pos, live, key };
    })
  );
  return `
    ${topnav({ back: "more" })}
    <div class="stage stage--scenes">
      <div class="home-head">
        <h1 class="h1">Scenes</h1>
        <p class="muted">All scenes across every room. Tap to run or edit.</p>
      </div>
      <div class="scenes-list">
        ${allScenes.map(({ room, q, name, photo, pos, live, key }) => `
          <div class="scene-card ${live ? "is-live" : ""}">
            <button type="button" class="scene-card__tap" data-act="go-scene" data-room="${room.id}" data-scene="${q.id}" aria-label="${name}">
              <img class="scene-card__photo" src="${photo}" alt="" style="object-position:${pos}" />
              <div class="scene-card__body">
                <div class="scene-card__info">
                  <span class="scene-card__name">${name}</span>
                  <span class="scene-card__room">${room.name}</span>
                </div>
                ${live ? `<span class="scene-card__live">Running</span>` : ""}
              </div>
            </button>
            <button type="button" class="scene-card__more" data-act="scene-more" data-room="${room.id}" data-scene="${q.id}" aria-label="More options for ${name}">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><circle cx="2.5" cy="8" r="1.5"/><circle cx="8" cy="8" r="1.5"/><circle cx="13.5" cy="8" r="1.5"/></svg>
            </button>
          </div>`).join("")}
      </div>
    </div>
    ${bottomNav("more")}`;
}

function renderMore() {
  const here = hereRoom();
  return `
    ${topnav()}
    ${jemmStripIf("top")}
    <div class="stage stack-lg">
      <button class="card row" data-go="profile" data-person="john" style="padding:16px">
        <img class="avatar-sm" src="assets/avatars/${state.avatar}.png" alt="" />
        <span class="grow">
          <strong>${state.name}</strong>
          <span class="muted" style="display:block;font-size:12px">${state.email}</span>
        </span>
        ${chevron("right")}
      </button>
      <article class="card" style="padding:16px">
        ${here ? `<p class="here-flag">In ${here.name}</p>` : `<span class="away-banner">You’re away</span>`}
        <p class="muted" style="margin-top:8px">${here
          ? "Home follows this room as you walk. Devices and quick options stay scoped to where you are."
          : "Home is showing whole-house status. Open a room to look in remotely."}</p>
      </article>
      <button class="card row" data-go="jemm" style="padding:16px">
        <span class="arc-well">${icon("assets/devices/icon-arc.svg")}</span>
        <span class="grow">
          <strong>Jemm Settings</strong>
          <span class="muted" style="display:block;font-size:12px">Arc · Living room · Online</span>
        </span>
        ${chevron("right")}
      </button>
      <div class="card list-card">
        <button class="row" data-go="scenes">${icon("assets/icons/16/devices.svg", "glyph")} <span class="grow">Scenes</span> <span class="muted">${rooms().reduce((n, r) => n + r.quick.length, 0)}</span> ${chevron("right")}</button>
        <button class="row" data-go="devices">${icon("assets/icons/16/devices.svg", "glyph")} <span class="grow">Devices</span> <span class="muted">${rooms().reduce((n, r) => n + r.devices.length, 0)}</span> ${chevron("right")}</button>
        <button class="row" data-go="insights">${icon("assets/icons/16/dashboard.svg", "glyph")} <span class="grow">Insights</span> ${chevron("right")}</button>
        <button class="row" data-go="settings">${icon("assets/nav/icon-settings.svg", "glyph")} <span class="grow">Settings</span> ${chevron("right")}</button>
        <button class="row" data-act="help">${icon("assets/nav/help.svg", "glyph")} <span class="grow">Help</span> ${chevron("right")}</button>
        <button class="row" data-act="toggle-preview-menu">${icon("assets/nav/icon-settings.svg", "glyph")} <span class="grow">Config</span> ${chevron("right")}</button>
      </div>
      <button class="btn btn--secondary" data-act="logout">Log out</button>
    </div>
    ${jemmStripIf("bottom")}
    ${bottomNav("more")}`;
}

function renderProfile() {
  const raw = PEOPLE.find((p) => p.id === state.viewingPerson) || PEOPLE[0];
  const p = personRecord(raw);
  const admin = p.id === "john";
  const guest = p.role === "Guest" || p.role === "Child";
  return `
    ${topnav({ back: "profiles" })}
    ${jemmStripIf("top")}
    <div class="stage stack-lg">
      <div class="center stack-sm">
        <img src="assets/avatars/${p.avatar}.png" alt="" width="120" height="120" style="margin:0 auto;border-radius:24px;background:#0b0b0b" />
        ${admin ? `<button class="btn btn--ghost" data-go="avatar">Change avatar</button>` : ""}
        <h1 class="h1">${p.name}</h1>
        <p class="muted">${p.role} · ${p.email}</p>
        <span class="${p.here ? "here-flag" : "away-banner"}">${p.here ? p.room : "Away"}</span>
      </div>
      ${guest ? `<p class="muted">${p.role === "Guest" ? "Guest view. Limited access — no locks, no vault, no admin settings." : "Child view. Jemm checks with an admin before anything locked or private."}</p>` : ""}
      <section class="stack-sm">
        <h2 class="h2">How Jemm treats ${p.name.split(" ")[0]}</h2>
        <p class="muted">Accent, personality, and tone change how Jemm sounds and what it says.</p>
        <p class="kicker">Accent</p>
        <div class="seg" role="group">
          ${ACCENTS.map((a) => `
            <button type="button" class="${p.accent === a ? "is-on" : ""}" data-act="set-accent" data-person="${p.id}" data-accent="${a}">${a}</button>
          `).join("")}
        </div>
        <p class="kicker">Personality</p>
        <div class="seg" role="group">
          ${PERSONALITIES.map((n) => `
            <button type="button" class="${p.personality === n ? "is-on" : ""}" data-act="set-personality" data-person="${p.id}" data-personality="${n}">${n}</button>
          `).join("")}
        </div>
      </section>
      <section class="stack-sm">
        <h2 class="h2">Tone of voice</h2>
        <div class="seg" role="group">
          ${Object.keys(TONES).map((tone) => `
            <button type="button" class="${p.tone === tone ? "is-on" : ""}" data-act="set-tone" data-person="${p.id}" data-tone="${tone}">${tone}</button>
          `).join("")}
        </div>
        <article class="card">
          <p class="muted">${p.tone === "Serious" ? "Spoken" : "Casual"} · ${p.accent}</p>
          <p style="margin-top:8px">${p.sample}</p>
        </article>
        <button class="btn btn--primary" data-act="play-voice" data-person="${p.id}">Play Jemm sample</button>
      </section>
      <section class="stack-sm">
        <h2 class="h2">Voice and access</h2>
        <div class="card list-card">
          <div class="row">
            <span class="grow">Voice recognition</span>
            <button class="toggle ${p.listen ? "is-on" : ""}" data-act="toggle-listen" data-person="${p.id}" role="switch" aria-checked="${p.listen}" aria-label="Voice recognition"></button>
          </div>
          <div class="row" role="button" tabindex="0" data-act="open-wake-word"><span class="grow">Wake word</span><span class="muted">${state.wakeWord || p.wake}</span>${chevron("right")}</div>
          <div class="row"><span class="grow">Language</span><span class="muted">${p.language}</span></div>
        </div>
      </section>
      <button class="card row" data-go="history" data-person="${p.id}" style="padding:16px">
        <span class="grow">
          <strong>Ask history</strong>
          <span class="muted" style="display:block;font-size:12px">What they asked and what Jemm did</span>
        </span>
        ${chevron("right")}
      </button>
      ${admin ? `
        <form class="stack" data-form="profile">
          <div class="field">
            <label for="name">Name</label>
            <input id="name" name="name" value="${state.name}" />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" value="${state.email}" />
          </div>
          <button class="btn btn--secondary" type="submit">Save</button>
        </form>` : `
        <section class="stack-sm">
          <h2 class="h2">Admin</h2>
          <div class="card list-card">
            <button class="row" data-act="toggle-visible" data-person="${p.id}">
              <span class="grow">${p.visible ? "Hide from household" : "Show in household"}</span>
            </button>
            <button class="row row--destructive" data-act="remove-person" data-person="${p.id}">
              <span class="grow">Remove profile</span>
            </button>
          </div>
        </section>`}
    </div>
    ${jemmStripIf("bottom")}
    ${bottomNav("profiles")}`;
}

function renderDevices() {
  const here = hereRoom();
  const back = state.deviceBack && APP_SCREENS.has(state.deviceBack) && state.deviceBack !== "devices" ? state.deviceBack : "home";
  const fromHome = back === "home";
  return `
    ${topnav({ back })}
    ${jemmStripIf("top")}
    <div class="stage stack-lg">
      ${fromHome
        ? homeDevicesPane(here)
        : `
      <div class="hero-row">
        <h1 class="h1">Devices</h1>
        ${viewToggle("deviceView", state.deviceView)}
      </div>
      <p class="muted">${here
        ? `You’re in the ${here.name.toLowerCase()}. Tap a device for volume, intensity, and more.`
        : "You’re away. Tap a device to control it remotely."}</p>
      <div class="device-search-wrap">
        <input type="search" class="device-search" placeholder="Search devices…" data-search="devices" aria-label="Search devices" autocomplete="off" />
      </div>
      ${kindFilters(kindsInHome())}
      ${devicesByRoomHtml()}`}
    </div>
    ${jemmStripIf("bottom")}
    ${bottomNav(back === "more" || back === "rooms" ? back : "home")}`;
}

function renderInsights() {
  const here = hereRoom();
  const events = [
    { t: here ? `Home followed you into ${here.name}` : "You left. Home switched to whole house.", d: "Just now" },
    { t: "Evening scene in the living room", d: "7:42 pm" },
    { t: "Backyard path lights on at dusk", d: "7:18 pm" },
    { t: "Alex asked for kitchen lights", d: "6:04 pm" },
    { t: "Arc stayed local — no cloud hop", d: "Today" },
  ];
  return `
    ${topnav({ back: "more" })}
    <div class="stage stack-lg">
      <h1 class="h1">Insights</h1>
      <p class="muted">Local-only snapshots. Nothing leaves the house.</p>
      <div class="stat-grid">
        <div class="stat"><span>Energy today</span><strong>12.4 kWh</strong></div>
        <div class="stat"><span>Voice asks</span><strong>18</strong></div>
        <div class="stat"><span>Scenes run</span><strong>6</strong></div>
        <div class="stat"><span>Away hours</span><strong>4.2</strong></div>
      </div>
      <section class="stack-sm">
        <h2 class="h2">Today</h2>
        <div class="card list-card">
          ${events.map((n) => `
            <article class="row">
              <span class="grow">
                <strong>${n.t}</strong>
                <span class="muted" style="display:block;font-size:12px">${n.d}</span>
              </span>
            </article>`).join("")}
        </div>
      </section>
    </div>
    ${bottomNav("more")}`;
}

function renderSettings() {
  return `
    ${topnav({ back: "more" })}
    <div class="stage stack-lg">
      <h1 class="h1">Settings</h1>
      <div class="card list-card">
        <button class="row" data-act="theme">
          <span class="grow">Appearance</span>
          <span class="muted">${state.theme === "light" ? "Light" : "Dark"}</span>
        </button>
        <div class="row">
          <span class="grow">Face ID</span>
          <button class="toggle ${state.faceId ? "is-on" : ""}" data-field-toggle="faceId" role="switch" aria-checked="${state.faceId}" aria-label="Face ID"></button>
        </div>
        <div class="row">
          <span class="grow">Home follows me</span>
          <button class="toggle ${state.followMe ? "is-on" : ""}" data-field-toggle="followMe" role="switch" aria-checked="${state.followMe}" aria-label="Home follows me"></button>
        </div>
        <button class="row" data-go="notify">
          <span class="grow">Notifications</span>
          ${chevron("right")}
        </button>
      </div>
      <p class="muted">${state.followMe
        ? "When you walk into a room, Home shows that room’s summary, devices, and quick options."
        : "Home will stay on whole-house status until you pick a room."}</p>
      ${isAdmin() ? `
      <section class="stack-sm">
        <h2 class="h2 danger-zone__heading">Danger zone</h2>
        <p class="muted" style="font-size:12px">Admin-only. These actions are permanent.</p>
        <div class="card list-card danger-zone">
          <button class="row row--destructive" data-act="danger-clear-history">
            <span class="grow">Clear activity history</span>
            <span class="danger-zone__badge">Irreversible</span>
          </button>
          <button class="row row--destructive" data-act="danger-reset-scenes">
            <span class="grow">Reset all scenes to defaults</span>
            <span class="danger-zone__badge">Irreversible</span>
          </button>
          <button class="row row--destructive" data-act="danger-remove-all-guests">
            <span class="grow">Remove all guest profiles</span>
          </button>
          <button class="row row--destructive" data-act="danger-factory-reset">
            <span class="grow">Factory reset Jemm</span>
            <span class="danger-zone__badge">Wipes everything</span>
          </button>
        </div>
      </section>` : ""}
    </div>
    ${bottomNav("more")}`;
}

function renderJemm() {
  const here = hereRoom();
  return `
    ${topnav({ back: "more" })}
    <div class="stage stack-lg">
      <h1 class="h1">Jemm Settings</h1>
      <div class="card card--hero">
        <img src="assets/devices/hero-arc.svg" alt="" width="48" height="94" />
        <h2 class="h2">Jemm Arc</h2>
        <p class="muted">Online · ID124I50 · Living room</p>
        ${here ? `<p class="here-flag">You’re in ${here.name}</p>` : `<span class="away-banner">You’re away</span>`}
      </div>
      <div class="card list-card">
        <div class="row"><span class="grow">Halo brightness</span><span class="muted">60%</span></div>
        <div class="row"><span class="grow">Power mode</span><span class="muted">Balanced</span></div>
        <div class="row" role="button" tabindex="0" data-act="open-wake-word"><span class="grow">Wake word</span><span class="muted">${state.wakeWord || "Hey Jemm"}</span>${chevron("right")}</div>
        <div class="row"><span class="grow">Processing</span><span class="muted">On device</span></div>
        <div class="row"><span class="grow">Presence</span><span class="muted">${state.followMe ? "Follows you" : "Whole home"}</span></div>
      </div>
      <section class="stack-sm">
        <h2 class="h2">Mics in this home</h2>
        <div class="card list-card">
          ${rooms().map((r) => `
            <div class="row">
              <span class="grow">${r.name}</span>
              <span class="muted">${r.devices.some((d) => d.kind === "mic") ? "Listening" : "No mic"}</span>
            </div>`).join("")}
        </div>
      </section>
    </div>
    ${bottomNav("more")}`;
}

function renderHelp() {
  const topics = [
    { t: "How Jemm knows which room you’re in", d: "Mics and presence in the house. Home always shows the room you’re standing in — summary, devices, and quick options for that room only." },
    { t: "What happens when you walk", d: "If you leave the living room for the backyard, Home switches with you. You don’t pick a room first." },
    { t: "When you’re away", d: "Home becomes whole-house status. Pick a room to look in remotely. That does not count as being there." },
    { t: "Pairing an Arc", d: "Plug in the Arc, stay close, share this phone’s Wi-Fi. Setup stays on the local network." },
  ];
  return `
    ${topnav({ back: state.loggedIn ? "more" : "welcome" })}
    <div class="stage stack-lg">
      <h1 class="h1">Help</h1>
      <p class="muted">Support from inside the app. Presence, rooms, and pairing.</p>
      <div class="stack-sm">
        ${topics.map((n) => `
          <article class="card">
            <strong>${n.t}</strong>
            <p class="muted" style="margin-top:8px">${n.d}</p>
          </article>`).join("")}
      </div>
    </div>
    ${state.loggedIn ? bottomNav("more") : ""}`;
}

function notifyItems() {
  const here = hereRoom();
  const req = state.adminRequest;
  const lake = state.homeId === "lake";
  const climateId = lake ? "gr-climate" : "br-climate";
  const camId = lake ? "dk-cam" : "yd-cam";
  const jamId = lake ? "dk-path" : "lr-shade";
  const leakRoom = lake ? "great" : "kitchen";
  const items = [];
  if (req?.status === "pending") {
    items.push({
      tone: "alert",
      kicker: "Needs you",
      t: `${req.name} asked Jemm`,
      d: `“${req.ask}” · Kids and guests can’t unlock the vault.`,
      attrs: `data-act="home-peek" data-peek-kind="security"`,
    });
  }
  if (req?.status === "denied") {
    items.push({
      tone: "ok",
      kicker: "Held",
      t: "Vault request denied",
      d: "Request denied. The vault stays locked.",
      attrs: `data-go="profile" data-person="mia"`,
    });
  }
  if (state.doors?.patio === "unlocked") {
    items.push({
      tone: "warn",
      kicker: "Warning",
      t: "Patio door is unlocked",
      d: "Tap to lock it now.",
      attrs: `data-act="home-peek" data-peek-kind="security"`,
    });
  }
  items.push(
    {
      tone: "alert",
      kicker: "Fault",
      t: lake ? "Great room climate is 4° above target" : "Bedroom climate is 4° above target",
      d: "Set point is held. Tap to review or override.",
      attrs: `data-device="${climateId}"`,
    },
    {
      tone: "alert",
      kicker: "Alert",
      t: lake ? "Moisture near the great room" : "Moisture under the kitchen sink",
      d: `Leak sensor tripped. Check the ${lake ? "great room" : "kitchen"}.`,
      attrs: `data-go="room" data-room="${leakRoom}"`,
    },
    {
      tone: "warn",
      kicker: "Warning",
      t: lake ? "Deck camera dropped offline" : "Backyard camera dropped offline",
      d: "Last frame 12 minutes ago. Jemm is retrying the local stream.",
      attrs: `data-device="${camId}"`,
    },
    {
      tone: "warn",
      kicker: "Warning",
      t: lake ? "Deck path lights faulted" : "Living room shade jammed",
      d: lake
        ? "One fixture stopped responding. Jemm paused the evening scene so it wouldn’t force it."
        : "Left panel stopped at 42%. Jemm paused so it wouldn’t force it.",
      attrs: `data-device="${jamId}"`,
    },
    {
      tone: "alert",
      kicker: "Blocked",
      t: "Sam tried a restricted scene",
      d: "Guest profile asked to disarm outdoor cameras. Jemm said no.",
      attrs: `data-go="profile" data-person="sam"`,
    },
    {
      tone: "ok",
      kicker: here ? "Here" : "Away",
      t: here ? `You’re in the ${here.name.toLowerCase()}` : "You’re away",
      d: here
        ? "Home is showing this room's devices and scenes."
        : "Home is showing whole-house status. Pick a room to look in.",
      attrs: `data-go="home"`,
    },
    {
      tone: "ok",
      kicker: "Info",
      t: "Alex is in the kitchen",
      d: "Household profile is home.",
      attrs: `data-go="profile" data-person="alex"`,
    },
    {
      tone: "ok",
      kicker: "Info",
      t: "Arc is online",
      d: "All local. No cloud hop.",
      attrs: `data-go="jemm"`,
    },
  );
  return items;
}

function renderNotify() {
  const items = notifyItems();
  const urgent = items.filter((n) => n.tone === "alert" || n.tone === "warn");
  const updates = items.filter((n) => n.tone === "ok");
  const dotColor = { alert: "var(--rose)", warn: "var(--warn)", ok: "var(--neon)" };
  const renderRow = (n) => `
    <button type="button" class="notif-row" ${n.attrs}>
      <span class="notif-row__dot" style="background:${dotColor[n.tone] || dotColor.ok}" aria-hidden="true"></span>
      <span class="notif-row__body">
        <span class="notif-row__title">${n.t}</span>
        <span class="notif-row__desc">${n.d}</span>
      </span>
      ${chevron("right")}
    </button>`;
  return `
    ${topnav({ back: state.loggedIn ? "home" : "welcome" })}
    <div class="stage stack-lg">
      <h1 class="h1">Notifications</h1>
      ${urgent.length ? `
        <section class="notif-section">
          <p class="notif-section__label">Needs attention</p>
          <div class="card list-card notif-list">
            ${urgent.map(renderRow).join("")}
          </div>
        </section>` : ""}
      ${updates.length ? `
        <section class="notif-section">
          <p class="notif-section__label">Updates</p>
          <div class="card list-card notif-list">
            ${updates.map(renderRow).join("")}
          </div>
        </section>` : ""}
    </div>
    ${state.loggedIn ? bottomNav("home") : ""}`;
}

function sliderRow(label, field, value, min, max, step = 1) {
  return `
    <label class="sheet-slider">
      <span class="sheet-slider__top"><span>${label}</span><em data-live="${field}">${liveFmt(field, value)}</em></span>
      <input type="range" min="${min}" max="${max}" step="${step}" value="${value}" data-ctl="${field}" />
    </label>`;
}

function sheetChips(field, items, current) {
  return `
    <div class="sheet-pills" role="group">
      ${items.map((item) => {
        const value = item.value;
        const on = String(current) === String(value) || (item.match && item.match(current));
        return `<button type="button" class="${on ? "is-on" : ""}" data-act="ctl-num" data-ctl-field="${field}" data-value="${value}">${item.label}</button>`;
      }).join("")}
    </div>`;
}

/* ── Rich per-type controls ─────────────────────────────────── */

function lightVertSlider(d, c) {
  const val = c.on ? (c.intensity ?? 100) : 0;
  const k = c.kelvin ?? 3000;
  const fillColor = k < 3200 ? "#ffb347" : k < 4800 ? "#fff5d6" : "#d0eaff";
  return `
    <div class="light-vslider-wrap">
      <div class="light-vslider" data-device="${d.id}" aria-label="Intensity">
        <div class="light-vslider__track">
          <div class="light-vslider__fill" style="height:${val}%;background:${fillColor}80"></div>
          <div class="light-vslider__knob" style="bottom:calc(${val}% - 14px)"></div>
        </div>
      </div>
      <span class="light-vslider__val" data-live="intensity">${val}%</span>
    </div>
    <div class="sheet-pills" role="group" aria-label="Intensity presets">
      ${[25,50,75,100].map((v) => `
        <button type="button" class="${val === v ? "is-on" : ""}" data-act="ctl-num" data-ctl-field="intensity" data-device="${d.id}" data-value="${v}">${v}%</button>
      `).join("")}
    </div>`;
}

function kelvinSwatches(d, c) {
  const k = c.kelvin ?? 3000;
  const swatches = [
    { label: "Warm",     value: 2700, color: "#ffb347" },
    { label: "Neutral",  value: 4000, color: "#fff5d6" },
    { label: "Daylight", value: 5600, color: "#d8eeff" },
    { label: "Cool",     value: 6500, color: "#b8d8ff" },
  ];
  return `
    <div class="kelvin-swatches" role="group" aria-label="Color temperature">
      ${swatches.map((s) => {
        const on = Math.abs(k - s.value) < 500;
        return `<button type="button" class="kelvin-swatch${on ? " is-on" : ""}" data-act="ctl-num" data-ctl-field="kelvin" data-device="${d.id}" data-value="${s.value}" style="--swatch:${s.color}" aria-pressed="${on}" aria-label="${s.label} ${s.value}K"><span class="kelvin-swatch__dot"></span>${s.label}</button>`;
      }).join("")}
    </div>`;
}

function shadeStepper(d, c) {
  const pos = c.pos ?? 0;
  const presets = [
    { label: "Closed", value: 0 },
    { label: "25%",    value: 25 },
    { label: "50%",    value: 50 },
    { label: "Open",   value: 100 },
  ];
  return `
    <div class="pos-stepper">
      <button class="pos-stepper__btn" data-act="ctl-step" data-ctl-field="pos" data-device="${d.id}" data-step="-10" data-min="0" data-max="100" aria-label="Close more">↓</button>
      <div class="pos-stepper__display">
        <span class="pos-stepper__val" data-live="pos">${pos}</span>
        <span class="pos-stepper__unit">%</span>
        <span class="pos-stepper__label">${pos <= 5 ? "Closed" : pos >= 95 ? "Open" : "Partial"}</span>
      </div>
      <button class="pos-stepper__btn" data-act="ctl-step" data-ctl-field="pos" data-device="${d.id}" data-step="10" data-min="0" data-max="100" aria-label="Open more">↑</button>
    </div>
    <div class="sheet-pills" role="group" aria-label="Shade presets">
      ${presets.map((p) => `
        <button type="button" class="${pos === p.value ? "is-on" : ""}" data-act="ctl-num" data-ctl-field="pos" data-device="${d.id}" data-value="${p.value}">${p.label}</button>
      `).join("")}
    </div>`;
}

function fanStepper(d, c) {
  const SPEEDS = ["off", "low", "med", "high"];
  const idx = c.on ? Math.max(1, SPEEDS.indexOf(c.speed || "low")) : 0;
  const label = SPEEDS[idx];
  return `
    <div class="pos-stepper">
      <button class="pos-stepper__btn" data-act="ctl-fan-step" data-device="${d.id}" data-step="-1" aria-label="Slower">−</button>
      <div class="pos-stepper__display">
        <span class="pos-stepper__val" style="text-transform:capitalize">${label}</span>
        <span class="pos-stepper__label">Speed</span>
      </div>
      <button class="pos-stepper__btn" data-act="ctl-fan-step" data-device="${d.id}" data-step="1" aria-label="Faster">+</button>
    </div>`;
}

function lockControl(d, c) {
  const locked = c.locked !== false;
  const lockedIcon = `<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="8" y="18" width="24" height="18" rx="4" fill="currentColor" opacity=".15"/><rect x="8" y="18" width="24" height="18" rx="4" stroke="currentColor" stroke-width="1.8"/><path d="M14 18v-5a6 6 0 1 1 12 0v5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="20" cy="27" r="2.5" fill="currentColor"/></svg>`;
  const unlockedIcon = `<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="8" y="18" width="24" height="18" rx="4" fill="currentColor" opacity=".1"/><rect x="8" y="18" width="24" height="18" rx="4" stroke="currentColor" stroke-width="1.8"/><path d="M14 18v-5a6 6 0 1 1 12 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".4"/><circle cx="20" cy="27" r="2.5" fill="currentColor" opacity=".4"/></svg>`;
  return `
    <div class="lock-control${locked ? "" : " is-unlocked"}">
      <div class="lock-control__icon">${locked ? lockedIcon : unlockedIcon}</div>
      <div class="lock-control__state">
        <span class="lock-control__label">${locked ? "Locked" : "Unlocked"}</span>
        <span class="lock-control__name">${d.name}</span>
      </div>
      <button class="lock-control__btn${locked ? "" : " is-unlocked"}" data-act="ctl-lock-toggle" data-device="${d.id}" aria-label="${locked ? "Unlock" : "Lock"}">
        ${locked ? "Unlock" : "Lock"}
      </button>
    </div>`;
}

function cameraControl(d, c) {
  return `
    <div class="camera-control${c.on && c.armed ? " is-armed" : ""}">
      <div class="camera-control__ring">
        <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" width="64" height="64">
          <circle cx="32" cy="32" r="28" stroke="${c.on && c.armed ? "#ff3b30" : "rgba(255,255,255,.15)"}" stroke-width="1.5"/>
          <circle cx="32" cy="32" r="10" fill="${c.on && c.armed ? "#ff3b30" : "rgba(255,255,255,.25)"}"/>
        </svg>
      </div>
      <p class="camera-control__status">${c.on && c.armed ? "Armed · Recording locally" : c.on ? "On · Idle" : "Off"}</p>
    </div>`;
}

function sheetNowPlaying(d, c) {
  if (d.kind !== "audio") return "";
  return `
    <div class="sheet-now ${c.on ? "is-live" : ""}">
      <p class="kicker">${c.on ? "Now playing" : "Paused"}</p>
      <strong>${c.on ? (c.source === "Off" ? "Nothing queued" : c.source) : "Off"}</strong>
      <span class="muted">${d.room} · ${c.on ? `${c.volume}%` : "Tap On to resume"}</span>
    </div>`;
}

function sheetPower(c, deviceId) {
  const extra = deviceId ? ` data-device="${deviceId}"` : "";
  return `
    <div class="seg" role="group" aria-label="Power">
      <button type="button" class="${c.on ? "is-on" : ""}" data-act="ctl-power-set" data-on="true"${extra} aria-pressed="${c.on ? "true" : "false"}">On</button>
      <button type="button" class="${!c.on ? "is-on" : ""}" data-act="ctl-power-set" data-on="false"${extra} aria-pressed="${c.on ? "false" : "true"}">Off</button>
    </div>`;
}

function sheetFanSeg(c) {
  return `
    <div class="seg" role="group" aria-label="Speed">
      ${["low", "med", "high"].map((s) => `
        <button type="button" class="${c.speed === s ? "is-on" : ""}" data-act="ctl-speed" data-value="${s}" aria-pressed="${c.speed === s ? "true" : "false"}">${s}</button>
      `).join("")}
    </div>`;
}

function sheetShadeSeg(c) {
  return `
    <div class="seg" role="group" aria-label="Position">
      <button type="button" class="${c.pos <= 10 ? "is-on" : ""}" data-act="ctl-num" data-ctl-field="pos" data-value="0" aria-pressed="${c.pos <= 10 ? "true" : "false"}">Closed</button>
      <button type="button" class="${c.pos > 10 && c.pos < 90 ? "is-on" : ""}" data-act="ctl-num" data-ctl-field="pos" data-value="50" aria-pressed="${c.pos > 10 && c.pos < 90 ? "true" : "false"}">Half</button>
      <button type="button" class="${c.pos >= 90 ? "is-on" : ""}" data-act="ctl-num" data-ctl-field="pos" data-value="100" aria-pressed="${c.pos >= 90 ? "true" : "false"}">Open</button>
    </div>`;
}

function sheetModeSeg(c) {
  return `
    <div class="seg" role="group" aria-label="Mode">
      ${["auto", "heat", "cool", "off"].map((m) => `
        <button type="button" class="${c.mode === m ? "is-on" : ""}" data-act="ctl-mode" data-value="${m}" aria-pressed="${c.mode === m ? "true" : "false"}">${m}</button>
      `).join("")}
    </div>`;
}

function volStepper(d, c) {
  const vol = c.volume ?? 50;
  return `
    <div class="pos-stepper">
      <button class="pos-stepper__btn" data-act="ctl-step" data-ctl-field="volume" data-device="${d.id}" data-step="-5" data-min="0" data-max="100" aria-label="Volume down">−</button>
      <div class="pos-stepper__display">
        <span class="pos-stepper__val" data-live="volume">${vol}</span>
        <span class="pos-stepper__unit">%</span>
        <span class="pos-stepper__label">Volume</span>
      </div>
      <button class="pos-stepper__btn" data-act="ctl-step" data-ctl-field="volume" data-device="${d.id}" data-step="5" data-min="0" data-max="100" aria-label="Volume up">+</button>
    </div>`;
}

function climateDial(d, c) {
  const temp = c.temp ?? 72;
  const setpoint = c.setpoint ?? temp;
  return `
    <div class="climate-stepper">
      <div class="climate-stepper__ring">
        <svg viewBox="0 0 120 120" fill="none" width="120" height="120" aria-hidden="true">
          <circle cx="60" cy="60" r="52" stroke="rgba(255,255,255,.1)" stroke-width="6"/>
          <circle cx="60" cy="60" r="52" stroke="var(--neon)" stroke-width="6"
            stroke-linecap="round"
            stroke-dasharray="${Math.PI * 2 * 52}"
            stroke-dashoffset="${Math.PI * 2 * 52 * (1 - (setpoint - 60) / 26)}"
            transform="rotate(-90 60 60)"/>
        </svg>
        <div class="climate-stepper__inner">
          <span class="climate-stepper__val" data-live="setpoint">${setpoint}°</span>
          <span class="climate-stepper__label">set</span>
        </div>
      </div>
      <div class="climate-stepper__btns">
        <button class="pos-stepper__btn" data-act="ctl-step" data-ctl-field="setpoint" data-device="${d.id}" data-step="-1" data-min="60" data-max="86" aria-label="Cooler">−</button>
        <div class="climate-stepper__actual">
          <span class="muted">${temp}° actual</span>
        </div>
        <button class="pos-stepper__btn" data-act="ctl-step" data-ctl-field="setpoint" data-device="${d.id}" data-step="1" data-min="60" data-max="86" aria-label="Warmer">+</button>
      </div>
    </div>`;
}

function sheetToolbar(d, c) {
  const extra = d.kind === "fan" ? sheetFanSeg(c) : d.kind === "shade" ? sheetShadeSeg(c) : d.kind === "climate" ? sheetModeSeg(c) : "";
  if (!extra) return sheetPower(c);
  return `<div class="sheet-seg-row">${sheetPower(c)}${extra}</div>`;
}

function sheetControls(d, c) {
  if (d.kind === "light") {
    return `
      ${lightVertSlider(d, c)}
      ${kelvinSwatches(d, c)}`;
  }
  if (d.kind === "audio") {
    return `
      ${sheetNowPlaying(d, c)}
      ${volStepper(d, c)}
      <p class="kicker">Source</p>
      <div class="sheet-pills">
        ${["Jazz", "Patio", "Radio", "TV"].map((s) => `
          <button type="button" class="${c.source === s ? "is-on" : ""}" data-act="ctl-source" data-value="${s}">${s}</button>
        `).join("")}
      </div>`;
  }
  if (d.kind === "mic") {
    return `
      ${sliderRow("Listen volume", "volume", c.volume, 0, 100)}
      ${sliderRow("Speaker volume", "intensity", c.intensity ?? 60, 0, 100)}`;
  }
  if (d.kind === "climate") {
    return `
      ${climateDial(d, c)}
      ${sheetModeSeg(c)}`;
  }
  if (d.kind === "shade") {
    return shadeStepper(d, c);
  }
  if (d.kind === "fan") {
    return fanStepper(d, c);
  }
  if (d.kind === "lock") {
    return lockControl(d, c);
  }
  if (d.kind === "camera") {
    return cameraControl(d, c);
  }
  if (d.kind === "arc") {
    return `
      ${sliderRow("Halo brightness", "intensity", c.intensity ?? 60, 0, 100)}
      ${sliderRow("Speaker volume", "volume", c.volume ?? 50, 0, 100)}`;
  }
  return "";
}

function sheetScenes(d) {
  const scenes = scenesForDevice(d);
  if (!scenes.length) {
    return `<p class="muted">No scenes in ${d.room.toLowerCase()} include this device yet.</p>`;
  }
  return `
    <p class="muted">Scenes in ${d.room.toLowerCase()} that include this device. Tap one to run it here.</p>
    <div class="sheet-scene-list">
      ${scenes.map((s) => `
        <button type="button" class="sheet-scene ${s.live ? "is-on" : ""}" data-act="run-device-scene" data-room="${s.roomId}" data-scene="${s.id}">
          <img src="${s.photo}" alt="" style="object-position:${s.pos}" />
          <span class="grow">
            <span class="name">${s.label}${s.live ? " · Live" : ""}</span>
            <span class="meta">Sets this to ${s.detail}</span>
          </span>
        </button>`).join("")}
    </div>`;
}

function accountSheet() {
  if (!state.accountSheet) return "";
  const light = state.theme === "light";
  return `
    <div class="sheet sheet--account" data-act="close-account">
      <aside class="sheet__panel account-sheet" data-stop role="dialog" aria-modal="true" aria-labelledby="account-title">
        <header class="account-sheet__head">
          <img class="account-sheet__ava" src="${accountPhoto()}" alt="" width="48" height="48" />
          <div class="grow">
            <h2 class="h2" id="account-title">${state.name}</h2>
            <p class="muted">${state.email}</p>
          </div>
          <button type="button" class="icon-btn" data-act="close-account" aria-label="Close">${icon("assets/icons/24/close.svg")}</button>
        </header>
        <section class="stack-sm">
          <h2 class="h2">This home</h2>
          ${homeSwitcher()}
        </section>
        <div class="card list-card">
          <button type="button" class="row" data-go="profile" data-person="john">${icon("assets/nav/icon-profiles.svg", "glyph")} <span class="grow">Your profile</span> ${chevron("right")}</button>
          <button type="button" class="row" data-go="notify">${icon("assets/nav/bell.svg", "glyph nav-bell")} <span class="grow">Notifications</span> ${chevron("right")}</button>
          <button type="button" class="row" data-go="settings">${icon("assets/nav/icon-settings.svg", "glyph")} <span class="grow">Settings</span> ${chevron("right")}</button>
          <button type="button" class="row" data-act="help">${icon("assets/nav/help.svg", "glyph")} <span class="grow">Help</span> ${chevron("right")}</button>
        </div>
        <section class="stack-sm">
          <h2 class="h2">Appearance</h2>
          <div class="seg" role="group" aria-label="Color theme">
            <button type="button" class="${light ? "is-on" : ""}" data-act="set-theme" data-theme="light" aria-pressed="${light ? "true" : "false"}">Light</button>
            <button type="button" class="${light ? "" : "is-on"}" data-act="set-theme" data-theme="dark" aria-pressed="${light ? "false" : "true"}">Dark</button>
          </div>
        </section>
        <button type="button" class="btn btn--link" data-act="toggle-preview-menu">Layout test</button>
        <button type="button" class="btn btn--secondary" data-act="logout">Log out</button>
      </aside>
    </div>`;
}

function helpSheet() {
  if (!state.helpSheet) return "";
  const topics = [
    { t: "Pairing an Arc", d: "Keep the Arc plugged in and close. Share this phone’s Wi-Fi." },
    { t: "Rooms and presence", d: "Home follows the room you’re in. Away shows the whole house." },
  ];
  return `
    <div class="sheet sheet--side" data-act="close-help">
      <aside class="sheet__panel help-side" data-stop role="dialog" aria-labelledby="help-title">
        <header class="hero-row">
          <h2 class="h2" id="help-title">${state.helpChat ? "Live chat" : "Help"}</h2>
          <button type="button" class="icon-btn" data-act="close-help" aria-label="Close">${icon("assets/icons/24/close.svg")}</button>
        </header>
        ${state.helpChat ? `
          <p class="muted">You’re chatting with Jemm Support. This stays on-device for the demo.</p>
          <div class="help-chat">
            <p class="help-bubble is-them"><strong>Maya</strong> Hi, this is Maya at Jemm. How can we help?</p>
            <p class="help-bubble is-you">I have a question about my home.</p>
            <p class="help-bubble is-them"><strong>Maya</strong> I can see John Residence. Ask about pairing, rooms, or a device and I’ll stay with you.</p>
          </div>
          <button class="btn btn--secondary" data-act="help-chat-end">End chat</button>
        ` : `
          <p class="muted">Talk to a person. Pick the way that works for you.</p>
          <div class="card list-card">
            <a class="row" href="tel:+18004536601">
              ${icon("assets/nav/help.svg", "glyph")}
              <span class="grow">
                <strong>Customer service</strong>
                <span class="muted" style="display:block;font-size:12px">1 (800) 453-6601</span>
              </span>
            </a>
            <a class="row" href="mailto:support@jemmtec.com">
              ${icon("assets/icons/16/notifications.svg", "glyph")}
              <span class="grow">
                <strong>Email</strong>
                <span class="muted" style="display:block;font-size:12px">support@jemmtec.com</span>
              </span>
            </a>
            <button type="button" class="row" data-act="help-chat">
              ${icon("assets/nav/mic.svg", "glyph")}
              <span class="grow">
                <strong>Live chat</strong>
                <span class="muted" style="display:block;font-size:12px">Usually replies in a few minutes</span>
              </span>
              ${chevron("right")}
            </button>
            <a class="row" href="sms:+18004536601">
              ${icon("assets/nav/icon-home.svg", "glyph")}
              <span class="grow">
                <strong>Text us</strong>
                <span class="muted" style="display:block;font-size:12px">1 (800) 453-6601</span>
              </span>
            </a>
          </div>
          <section class="stack-sm">
            <h2 class="h2">Guides</h2>
            ${topics.map((n) => `
              <article class="card">
                <strong>${n.t}</strong>
                <p class="muted" style="margin-top:8px">${n.d}</p>
              </article>`).join("")}
          </section>
        `}
      </aside>
    </div>`;
}

function devicePanel(d, { page = false } = {}) {
  const c = ctl(d);
  const here = state.presence === d.roomId;
  const tab = state.sheetTab === "scenes" ? "scenes" : "controls";
  const scenes = scenesForDevice(d);
  const mode = normalizeDeviceOpen(state.deviceOpen);
  return `
    ${deviceHero(d, c, { compact: !page })}
    ${sheetToolbar(d, c)}
    <div class="tabs" role="tablist" aria-label="Device">
      <button type="button" class="${tab === "controls" ? "is-on" : ""}" data-act="set-sheet-tab" data-tab="controls" role="tab" aria-selected="${tab === "controls" ? "true" : "false"}">Controls</button>
      <button type="button" class="${tab === "scenes" ? "is-on" : ""}" data-act="set-sheet-tab" data-tab="scenes" role="tab" aria-selected="${tab === "scenes" ? "true" : "false"}">Scenes${scenes.length ? ` · ${scenes.length}` : ""}</button>
    </div>
    <div class="sheet-body">
      ${tab === "scenes" ? sheetScenes(d) : sheetControls(d, c)}
      <p class="muted sheet-hint">${page ? "Back returns to where you were." : mode === "side" ? "Tap the dimmed area to dismiss." : "Pull down to dismiss."}</p>
    </div>`;
}

function renderDevicePage() {
  const d = findDevice(state.viewingDevice);
  if (!d) return renderHomeHere(hereRoom() || rooms()[0]);
  const here = state.presence === d.roomId;
  const back = state.deviceBack && APP_SCREENS.has(state.deviceBack) && state.deviceBack !== "device" ? state.deviceBack : "home";
  return `
    ${topnav({ back })}
    ${jemmStripIf("top")}
    <div class="stage stage--device-page">
      ${devicePanel(d, { page: true })}
    </div>
    ${jemmStripIf("bottom")}
    ${bottomNav(back === "rooms" || back === "room" ? "rooms" : back === "more" || back === "devices" ? "more" : "home")}`;
}

function deviceSheet(keepSheet = false) {
  if (normalizeDeviceOpen(state.deviceOpen) === "page") return "";
  if (!state.sheetDevice) return "";
  const d = findDevice(state.sheetDevice);
  if (!d) return "";
  const here = state.presence === d.roomId;
  const side = normalizeDeviceOpen(state.deviceOpen) === "side";
  return `
    <div class="sheet sheet--device ${side ? "is-side" : "is-full"}" data-act="close-sheet">
      <aside class="sheet__panel${keepSheet ? " is-live" : ""}" data-stop role="dialog" aria-modal="true" aria-labelledby="sheet-name">
        ${side ? "" : `
          <button type="button" class="sheet-grab" data-sheet-grab aria-label="Dismiss sheet">
            <span class="handle"></span>
          </button>`}
        <div class="sheet-back-row">
          <button type="button" class="sheet-back-btn" data-act="close-sheet" aria-label="Back">
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true">
              <path d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>${d.room}</span>
          </button>
          <button type="button" class="icon-btn sheet-back-row__close" data-act="close-sheet" aria-label="Close">${icon("assets/icons/24/close.svg")}</button>
        </div>
        ${devicePanel(d)}
      </aside>
    </div>`;
}

function adminRequestCard() {
  const req = state.adminRequest;
  if (!req || req.status === "cleared") return "";
  if (req.status === "denied") {
    return `
      <article class="card card--warn">
        <p class="kicker">Request held</p>
        <h2 class="h2">Vault request denied</h2>
        <p>I told ${req.name.split(" ")[0]} no. The vault stays locked.</p>
        <button class="btn btn--secondary" data-act="clear-request">Dismiss</button>
      </article>`;
  }
  return `
    <article class="card card--alert">
      <p class="kicker">Needs you</p>
      <h2 class="h2">${req.name} asked Jemm</h2>
      <p>“${req.ask}”</p>
      <p class="muted">Kids and guests can’t unlock the vault. Review, then deny or take action.</p>
      <div class="btn-row">
        <button class="btn btn--secondary" data-go="notify">Review</button>
        <button class="btn btn--secondary" data-act="lock-patio">Lock patio</button>
        <button class="btn btn--primary" data-act="deny-request">Deny</button>
      </div>
    </article>`;
}

function peoplePlan() {
  const home = currentHome();
  const people = visiblePeople();
  const here = people.filter((p) => p.here);
  return `
    <p class="muted">${here.length ? `${here.length} ${here.length === 1 ? "person is" : "people are"} in the house. Tap someone to open their profile.` : "Nobody is marked as home right now."}</p>
    <div class="plan-wrap plan-wrap--people">
      <img src="${home.plan}" alt="Floorplan of ${home.name}" />
      ${here.map((p) => {
        const spot = home.spots[personRoomId(p)];
        if (!spot) return "";
        return `
          <button type="button" class="plan-person" style="top:${spot.t + 8}%;left:${spot.l + 8}%" data-go="profile" data-person="${p.id}" aria-label="${p.name} in ${p.room}">
            <img src="assets/avatars/${p.avatar}.png" alt="" />
            <span>${p.name.split(" ")[0]}</span>
          </button>`;
      }).join("")}
    </div>
    <div class="card-stack">
      ${people.map((p) => `
        <button type="button" class="card-row ${p.here ? "is-on" : ""}" data-go="profile" data-person="${p.id}">
          <img class="card-row__avatar" src="assets/avatars/${p.avatar}.png" alt="" />
          <span class="grow">
            <span class="name">${p.name}</span>
            <span class="meta">${p.role} · ${p.here ? `In the ${p.room.toLowerCase()}` : "Away"}</span>
          </span>
          ${chevron("right")}
        </button>`).join("")}
    </div>`;
}

function statusPeek() {
  const home = currentHome();
  const here = hereRoom();
  const away = state.presence === "away";
  const unlocked = Object.entries(state.doors || {}).filter(([, v]) => v === "unlocked").map(([id]) => id);
  const mics = rooms().filter((r) => r.devices.some((d) => d.kind === "mic"));
  const ok = !away && !unlocked.length && state.adminRequest?.status !== "pending";
  const note = state.adminRequest?.status === "pending"
    ? `${state.adminRequest.name.split(" ")[0]} asked Jemm for something that needs you.`
    : unlocked.length
      ? `${unlocked.map((id) => id[0].toUpperCase() + id.slice(1)).join(" and ")} ${unlocked.length === 1 ? "is" : "are"} unlocked.`
      : away
        ? "You’re away. Jemm is watching the house from here."
        : "Everything looks good. Your home is running locally.";
  return `
    <div class="peek-arc">
      <img src="assets/devices/hero-arc.svg" alt="" width="40" height="78" />
      <div class="grow">
        <p class="kicker">Jemm Arc</p>
        <strong>ID124I50</strong>
        <span class="muted">${away ? "Online · You’re away" : `Online · ${here?.name || "This home"}`}</span>
      </div>
      <span class="peek-pill ${ok ? "is-ok" : "is-warn"}">${ok ? "Healthy" : "Needs a look"}</span>
    </div>
    <p class="muted">${note}</p>
    <div class="card list-card">
      <div class="row"><span class="grow">Connection</span><span class="muted">Local · Strong</span></div>
      <div class="row"><span class="grow">Processing</span><span class="muted">On this home</span></div>
      <div class="row"><span class="grow">Power</span><span class="muted">Balanced</span></div>
      <div class="row" role="button" tabindex="0" data-act="open-wake-word"><span class="grow">Wake word</span><span class="muted">${state.wakeWord || "Hey Jemm"}</span>${chevron("right")}</div>
      <div class="row"><span class="grow">Mics listening</span><span class="muted">${mics.length ? mics.map((r) => r.name).join(", ") : "None"}</span></div>
      <div class="row"><span class="grow">Last check</span><span class="muted">Just now</span></div>
    </div>
    <div class="btn-row">
      <button type="button" class="btn btn--secondary" data-go="jemm">Arc settings</button>
    </div>
    <p class="muted">${home.name} stays private. Status and diagnostics stay on this network.</p>`;
}

function eqBars() {
  return `<span class="peek-eq" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>`;
}

function kelvinToHex(k) {
  if (k <= 2700) return "#fbd26c";
  if (k <= 3500) return "#ffecbc";
  if (k <= 5000) return "#fff5e8";
  return "#e8f4ff";
}

function peekGraphicSlider(d, c) {
  const pct = Math.round(c.intensity ?? 60);
  const fillH = Math.round(pct * 2.32); // 232px total track height
  return `
    <div class="peek-graphic-wrap">
      <div class="peek-graphic-slider" data-device="${d.id}">
        <div class="peek-graphic-slider__track">
          <div class="peek-graphic-slider__fill" style="height:${pct}%"></div>
          <span class="peek-graphic-slider__pct">${pct}%</span>
        </div>
        <input type="range" class="peek-graphic-slider__input" min="0" max="100" value="${pct}"
          data-ctl="intensity" data-device="${d.id}" aria-label="Brightness" />
      </div>
    </div>`;
}

function peekDeviceMood(d, c) {
  if (d.kind !== "light") return "";
  const swatches = [
    { kelvin: 2700, bg: "#fbd26c", label: "Warm" },
    { kelvin: 3500, bg: "#ffecbc", label: "Neutral" },
    { kelvin: 5500, bg: "#e8f4ff", label: "Cool" },
  ];
  return `
    <div class="peek-mood-row">
      <span class="peek-mood-label">Mood</span>
      <div class="peek-mood-swatches">
        ${swatches.map((s) => `
          <button type="button" class="peek-mood-swatch${Math.abs((c.kelvin ?? 2700) - s.kelvin) < 400 ? " is-on" : ""}"
            style="background:${s.bg}" data-act="ctl-kelvin" data-device="${d.id}" data-value="${s.kelvin}"
            aria-label="${s.label} ${s.kelvin}K" title="${s.label}">
          </button>`).join("")}
      </div>
    </div>`;
}

function peekDeviceNameRow(d) {
  const name = (state.deviceNameEdits || {})[d.id] || d.name;
  return `
    <div class="peek-name-row">
      <label class="peek-name-label" for="peek-name-${d.id}">Device name</label>
      <input id="peek-name-${d.id}" class="peek-name-input" type="text" value="${name}"
        data-act="edit-device-name" data-device="${d.id}" aria-label="Rename ${d.name}" />
    </div>`;
}

function peekDeviceDetail(d) {
  const c = ctl(d);
  const graphic = state.deviceDetailStyle === "graphic";
  const room = roomById(d.roomId);
  return `
    <div class="peek-device-panel" role="region" aria-label="${d.name} detail">
      <div class="peek-device-header">
        <button type="button" class="peek-device-back" data-act="peek-device-back" aria-label="Back to list">
          <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true">
            <path d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="peek-device-header__title">
          <span class="peek-device-header__room">${room ? room.name : ""}</span>
          <span class="peek-device-header__name">${d.name}</span>
        </div>
        <button type="button" class="peek-device-header__power${c.on ? " is-on" : ""}"
          data-act="ctl-power-toggle" data-device="${d.id}" aria-label="Toggle ${d.name}" aria-pressed="${c.on}">
          ${powerIcon(18)}
        </button>
      </div>
      <div class="peek-device-body">
        ${graphic && d.kind === "light"
          ? peekGraphicSlider(d, c)
          : `<div class="peek-device-controls">${sheetControls(d, c)}</div>`}
        ${peekDeviceMood(d, c)}
        ${peekDeviceNameRow(d)}
      </div>
    </div>`;
}

function peekMarquee(text) {
  const line = `${text}   ·   `;
  return `<span class="peek-marquee"><span class="peek-marquee__track">${line}${line}</span></span>`;
}

function peekKindInfo(kind) {
  const map = {
    status: { title: "Home status", icon: ICONS.arc },
    people: { title: "People present" },
    lights: { title: "Lights", icon: ICONS.light, deviceKind: "light", all: true },
    playing: { title: "Now playing", icon: ICONS.audio, deviceKind: "audio", all: true },
    security: { title: "Security", icon: "assets/icons/16/home.svg" },
    climate: { title: "Climate", icon: ICONS.climate, deviceKind: "climate" },
    shades: { title: "Shades", icon: ICONS.shade, deviceKind: "shade", all: true },
    fans: { title: "Fans", icon: ICONS.fan, deviceKind: "fan", all: true },
    cameras: { title: "Cameras", icon: ICONS.camera, deviceKind: "camera" },
  };
  return map[kind] || { title: summaryTitle(kind) };
}

function peekAllSeg(kind, list) {
  if (!list.length) return "";
  const info = peekKindInfo(kind);
  const onCount = list.filter((d) => ctl(d).on).length;
  const allOn = onCount === list.length;
  const allOff = onCount === 0;
  return `
    <div class="small-seg" role="group" aria-label="All ${info.title}">
      <button type="button" class="${allOn ? "is-on" : ""}" data-act="kind-all" data-kind="${info.deviceKind}" data-on="true">All On</button>
      <button type="button" class="${allOff ? "is-on" : ""}" data-act="kind-all" data-kind="${info.deviceKind}" data-on="false">All Off</button>
    </div>`;
}

function peekSlider(id, field, value, min, max, step = 1) {
  return `<input type="range" class="peek-slider" min="${min}" max="${max}" step="${step}" value="${value}" data-ctl="${field}" data-device="${id}" aria-label="${field}" />`;
}

function peekControlCard(d) {
  const c = ctl(d);
  const kelvinDot = d.kind === "light" && c.kelvin
    ? `<span class="dev-row__kelvin" style="background:${kelvinToHex(c.kelvin)}" aria-hidden="true"></span>`
    : "";
  return `
    <div class="dev-row ${c.on ? "is-on" : ""}">
      <button type="button" class="dev-row__main" data-act="open-device-sheet" data-device="${d.id}" aria-label="Open ${d.name}">
        <span class="dev-row__ico">${icon(deviceIcon(d.kind))}</span>
        <span class="dev-row__info">
          <span class="dev-row__name">${d.name}${kelvinDot}</span>
        </span>
      </button>
      <label class="toggle-wrap">
        <span class="toggle-wrap__label">${c.on ? "on" : "off"}</span>
        <button type="button" class="toggle ${c.on ? "is-on" : ""}" data-act="ctl-power-toggle" data-device="${d.id}" aria-label="Toggle ${d.name}" aria-pressed="${c.on}"></button>
      </label>
    </div>`;
}

function lightsPeek() {
  return kindControlsPeek("light");
}

function kindControlsPeek(kind) {
  const room = hereRoom();
  const list = devicesOfKind(kind, room);
  if (!list.length) return `<p class="muted">No ${kindLabel(kind).toLowerCase()} in ${room ? "this room" : "this home"}.</p>`;
  return `<div class="peek-list">${list.map(peekControlCard).join("")}</div>`;
}

function playingPeek() {
  const room = hereRoom();
  const list = devicesOfKind("audio", room);
  const live = list.filter((d) => ctl(d).on);
  const primary = live[0] || list[0];
  const c = primary ? ctl(primary) : { on: false, volume: 0, source: "" };
  const song = songBySource(c.source);
  const linked = state.spotifyLinked !== false;
  if (!list.length) return `<p class="muted">No speakers in ${room ? "this room" : "this home"}.</p>`;
  const line = `${linked ? "Spotify" : "Jemm"} · ${song.title} — ${song.artist}`;
  return `
    <div class="peek-now ${c.on ? "is-live" : ""}">
      ${c.on ? eqBars() : ""}
      ${c.on ? peekMarquee(line) : `<span class="peek-now__idle">Nothing queued</span>`}
    </div>
    <div class="peek-list">${list.map(peekControlCard).join("")}</div>
    <div class="peek-songs">
      ${SONGS.map((s) => `
        <button type="button" class="peek-song${song.id === s.id && c.on ? " is-on" : ""}" data-act="play-song" data-song="${s.id}">
          ${eqBars()}
          <span class="peek-song__text">
            <span class="peek-song__title">${s.title}</span>
            <span class="peek-song__meta">${s.artist}${song.id === s.id && c.on ? " · Playing" : ""}</span>
          </span>
        </button>`).join("")}
    </div>`;
}

function securityPlan() {
  const home = currentHome();
  const doors = state.doors || {};
  return `
    ${doors.patio === "unlocked" ? `<p class="live-note">Just now · Patio door unlocked</p>` : ""}
    <div class="plan-wrap plan-wrap--secure">
      <img src="${home.plan}" alt="Floorplan of ${home.name}" />
      ${HOME_DOORS.map((door) => {
        const open = doors[door.id] === "unlocked";
        return `
          <button type="button" class="plan-door ${open ? "is-open" : "is-locked"}" style="top:${door.t}%;left:${door.l}%;width:${door.w}%;height:${door.h}%" data-act="toggle-door" data-door="${door.id}">
            <span>${door.label}</span>
            <em>${open ? "Unlocked" : "Secured"}</em>
          </button>`;
      }).join("")}
    </div>
    <p class="muted">Secured doors are green. An unlocked door shows red. Tap a door to lock or unlock it.</p>`;
}

function kindListPeek(kind) {
  const room = hereRoom();
  const list = devicesOfKind(kind, room);
  if (!list.length) return `<p class="muted">No ${kindLabel(kind).toLowerCase()} in ${room ? "this room" : "this home"}.</p>`;
  if (["light", "audio", "fan", "shade", "climate"].includes(kind)) {
    return `<div class="peek-list">${list.map(peekControlCard).join("")}</div>`;
  }
  return `
    <div class="card-stack">
      ${list.map((d) => {
        const c = ctl(d);
        return `
          <button type="button" class="card-row ${c.on ? "is-on" : ""}" data-device="${d.id}" data-keep-peek="true">
            ${kindWell(kind, "card-icon--row")}
            <span class="grow">
              <span class="name">${d.name}</span>
              <span class="meta">${d.room} · ${deviceDetail(d)}</span>
            </span>
            ${chevron("right")}
          </button>`;
      }).join("")}
    </div>`;
}

function summaryBody(kind) {
  if (kind === "status") return statusPeek();
  if (kind === "people") return peoplePlan();
  if (kind === "lights") return lightsPeek();
  if (kind === "playing") return playingPeek();
  if (kind === "security") return securityPlan();
  if (kind === "climate") return kindListPeek("climate");
  if (kind === "shades") return kindListPeek("shade");
  if (kind === "fans") return kindListPeek("fan");
  if (kind === "cameras") return kindListPeek("camera");
  return "";
}

function summaryTitle(kind) {
  return SUMMARY_TITLES[kind] || "Home";
}

function homePeekOverlay() {
  if (openMode() === "page" || !state.homePeek) return "";
  const kind = state.homePeek;
  const info = peekKindInfo(kind);
  const side = openMode() === "side";
  const room = hereRoom();
  const list = info.deviceKind ? devicesOfKind(info.deviceKind, room) : [];
  const drillDevice = state.peekDeviceId ? findDevice(state.peekDeviceId) : null;
  return `
    <div class="overlay overlay--peek${side ? " is-side" : ""}" data-act="close-peek">
      <aside class="peek-sheet${drillDevice ? " has-drill" : ""}" data-stop role="dialog" aria-modal="true" aria-labelledby="peek-title">
        ${side ? "" : `
          <button type="button" class="sheet-grab" data-act="close-peek" aria-label="Dismiss sheet">
            <span class="handle"></span>
          </button>`}
        <div class="peek-sheet__base">
          <p class="peek-room">${room ? room.name : "Whole home"}</p>
          <header class="peek-head">
            <div class="peek-head__title">
              ${info.icon ? `<span class="peek-head__icon">${icon(info.icon)}</span>` : ""}
              <h2 class="peek-head__name" id="peek-title">${info.title}</h2>
            </div>
            ${info.all ? peekAllSeg(kind, list) : ""}
          </header>
          <div class="peek-body">
            ${summaryBody(kind)}
          </div>
        </div>
        ${drillDevice ? `<div class="peek-sheet__drill">${peekDeviceDetail(drillDevice)}</div>` : ""}
      </aside>
    </div>`;
}

function renderSummary() {
  const kind = state.viewingSummary || "status";
  const info = peekKindInfo(kind);
  const list = info.deviceKind ? devicesOfKind(info.deviceKind, hereRoom()) : [];
  const back = state.summaryBack && APP_SCREENS.has(state.summaryBack) && state.summaryBack !== "summary" ? state.summaryBack : "home";
  return `
    ${topnav({ back })}
    ${jemmStripIf("top")}
    <div class="stage stack-lg">
      <div class="dev-category-head">
        <div class="dev-category-head__left">
          <span class="dev-category-head__icon">${icon(info.src || info.icon || "assets/icons/24/lights.svg")}</span>
          <h1 class="dev-category-head__title">${info.title}</h1>
        </div>
        ${info.all && list.length ? peekAllSeg(kind, list) : ""}
      </div>
      <div class="dev-row-list">
        ${summaryBody(kind)}
      </div>
    </div>
    ${jemmStripIf("bottom")}
    ${bottomNav(back === "rooms" || back === "room" ? "rooms" : back === "more" || back === "devices" ? "more" : "home")}`;
}

function jemmLine() {
  const room = hereRoom();
  if (state.voice) return "Listening… I’m right here.";
  if (state.adminRequest?.status === "pending") return "Mia asked to unlock the vault. I held it for you.";
  if (state.adminRequest?.status === "denied") return "I told Mia no. The vault stays locked.";
  if (state.doors?.patio === "unlocked") return "Patio door is unlocked. I can lock it from here.";
  if (room) return `You’re in the ${room.name.toLowerCase()}. Scenes and devices are for this room.`;
  return "You’re away. Ask about the house, or pick a room.";
}

function jemmPlaceMenu() {
  return `
    <div class="jemm-place" data-stop>
      <button type="button" class="chip" data-act="toggle-jemm-menu">${state.jemmPlace === "top" ? "Top" : "Bottom"} ${chevron(state.jemmMenu ? "up" : "down")}</button>
      ${state.jemmMenu ? `
        <div class="prop-menu">
          <p class="kicker">Jemm appears</p>
          <button type="button" class="${state.jemmPlace === "top" ? "is-on" : ""}" data-act="set-jemm-place" data-place="top">Top</button>
          <button type="button" class="${state.jemmPlace === "bottom" ? "is-on" : ""}" data-act="set-jemm-place" data-place="bottom">Bottom</button>
          <button type="button" data-act="hide-jemm">Hide row</button>
        </div>` : ""}
    </div>`;
}

function jemmStripIf(_place) {
  // Bottom nav carries the Jemm face on all app screens; strip not needed on mobile.
  return "";
}

function voiceOverlay() {
  if (!state.voice) return "";
  const room = hereRoom();
  const expanded = state.jemmExpanded;
  const muted = state.jemmMuted;
  const history = state.voiceHistory || [];

  const suggestions = room
    ? [`Dim the lights`, `Evening scene`, `Play something`, `What's the temperature?`]
    : [`How's the house?`, `Arm cameras`, `Turn off all lights`, `Who's home?`];

  const threadHTML = history.length
    ? history.map((m) => m.role === "user"
        ? `<div class="jemm-msg jemm-msg--user">${m.text}</div>`
        : `<div class="jemm-msg jemm-msg--jemm">
             <span class="jemm-msg__face">${jemmFace()}</span>
             <span class="jemm-msg__text">${m.text}</span>
           </div>`
    ).join("")
    : `<div class="jemm-empty">
         <span class="jemm-empty__face">${jemmFace()}</span>
         <p class="jemm-empty__line">What can I do for you?</p>
       </div>`;

  return `
    <div class="overlay jemm-overlay ${expanded ? "is-expanded" : ""}" data-act="voice-close">
      <div class="jemm-sheet ${expanded ? "is-expanded" : ""}" data-stop>

        <div class="jemm-sheet__handle-area" data-act="voice-expand">
          <span class="jemm-sheet__handle"></span>
        </div>

        <div class="jemm-sheet__header">
          <div class="jemm-sheet__title">
            <span class="jemm-sheet__orb ${muted ? "" : "is-live"}">${jemmFace()}</span>
            <span class="jemm-sheet__name">Jemm</span>
            ${muted ? `<span class="jemm-sheet__muted-badge">muted</span>` : ""}
          </div>
          <div class="jemm-sheet__header-actions">
            <button type="button" class="jemm-sheet__mute-btn ${muted ? "is-on" : ""}" data-act="voice-mute" aria-label="${muted ? "Unmute" : "Mute"} Jemm" aria-pressed="${muted}">
              ${muted
                ? `<svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true"><path d="M3 7h4l5-4v14l-5-4H3V7z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M16 6l-3 3m0-3l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
                : `<svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true"><path d="M3 7h4l5-4v14l-5-4H3V7z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M15 8a3 3 0 0 1 0 4M17 6a6 6 0 0 1 0 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`}
            </button>
            <button type="button" class="icon-btn" data-act="voice-close" aria-label="Close">
              <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true"><path d="M5 15L15 5M5 5l10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
          </div>
        </div>

        <div class="jemm-thread" id="jemm-thread">
          ${threadHTML}
        </div>

        <div class="jemm-suggestions">
          ${suggestions.map((s) => `<button type="button" class="jemm-chip" data-act="voice-hint" data-hint="${s}">${s}</button>`).join("")}
        </div>

        <div class="jemm-input-bar">
          <button type="button" class="jemm-mic-btn ${muted ? "" : "is-live"}" data-act="voice-listen" aria-label="Tap to speak">
            ${jemmGlow()}
            ${jemmFace()}
          </button>
          <input type="text" class="jemm-text-input" placeholder="Type to Jemm\u2026" id="jemm-text" aria-label="Type a message to Jemm" />
          <button type="button" class="jemm-send-btn" data-act="voice-text-submit" aria-label="Send">
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true"><path d="M17 10L3 3l3 7-3 7 14-7z" fill="currentColor"/></svg>
          </button>
        </div>

      </div>
    </div>`;
}


function views() {
  return {
    splash: renderSplash,
    welcome: renderWelcome,
    login: renderLogin,
    pair: renderPair,
    found: renderFound,
    wifi: renderWifi,
    connecting: renderConnecting,
    avatar: renderAvatar,
    account: renderAccount,
    done: renderDone,
    home: renderHome,
    rooms: renderRooms,
    room: renderRoom,
    scene: renderScene,
    history: renderHistory,
    profiles: renderProfiles,
    scenes: renderScenes,
    more: renderMore,
    profile: renderProfile,
    devices: renderDevices,
    insights: renderInsights,
    settings: renderSettings,
    jemm: renderJemm,
    help: renderHelp,
    notify: renderNotify,
    device: renderDevicePage,
    camera: renderCamera,
    summary: renderSummary,
  };
}

function bindHomePager() {
  const el = document.querySelector("[data-home-pager]");
  if (!el) return;
  const page = normalizeHomePage(state.homePage);
  const goTo = () => {
    const width = el.clientWidth;
    if (width) el.scrollLeft = page * width;
  };
  goTo();
  requestAnimationFrame(goTo);
  el.addEventListener("scroll", () => {
    const width = el.clientWidth;
    if (!width) return;
    const next = normalizeHomePage(Math.round(el.scrollLeft / width));
    if (next === state.homePage) return;
    state.homePage = next;
    persist();
    document.querySelectorAll("[data-home-dot]").forEach((dot, i) => {
      const on = i === next;
      dot.classList.toggle("is-on", on);
      dot.setAttribute("aria-current", on ? "true" : "false");
    });
  }, { passive: true });
}

function bindTopnavScroll() {
  const scroller = document.querySelector(".shell.is-app > .stage");
  if (!scroller) return;
  const sync = () => {
    const nav = document.querySelector(".topnav--app");
    if (nav) nav.classList.toggle("is-scrolled", scroller.scrollTop > 8);
  };
  sync();
  if (scroller._topnavSync) scroller.removeEventListener("scroll", scroller._topnavSync);
  scroller._topnavSync = sync;
  scroller.addEventListener("scroll", sync, { passive: true });
}

function bindFrostScroll() {
  const scroller = document.querySelector(".shell.is-app > .stage");
  if (!scroller) return;
  const sync = () => {
    if (normalizeHomeBg(state.homeBg) !== "frost") return;
    const pct = Math.min(scroller.scrollTop / 220, 1);
    document.documentElement.style.setProperty("--frost-opacity", 0.32 + pct * 0.68);
  };
  sync();
  if (scroller._frostSync) scroller.removeEventListener("scroll", scroller._frostSync);
  scroller._frostSync = sync;
  scroller.addEventListener("scroll", sync, { passive: true });
}

function roomWalkPill() {
  if (!state.loggedIn || state.presence === "away") return "";
  const list = rooms();
  if (list.length < 2) return "";
  const room = hereRoom();
  if (!room) return "";
  const idx = list.findIndex((r) => r.id === room.id);
  const prev = list[(idx - 1 + list.length) % list.length];
  const next = list[(idx + 1) % list.length];
  return `
    <div class="room-walk-pill" aria-label="Room simulator" role="group">
      <button type="button" class="room-walk-pill__btn" data-act="walk-prev" aria-label="Previous room: ${prev.name}" title="${prev.name}">
        <svg viewBox="0 0 16 16" fill="none" width="12" height="12" aria-hidden="true">
          <path d="M10 3L6 8l4 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <span class="room-walk-pill__name">${room.name}</span>
      <button type="button" class="room-walk-pill__btn" data-act="walk-next" aria-label="Next room: ${next.name}" title="${next.name}">
        <svg viewBox="0 0 16 16" fill="none" width="12" height="12" aria-hidden="true">
          <path d="M6 3l4 5-4 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>`;
}

function render() {
  applyTheme();
  const fn = views()[state.screen] || renderWelcome;
  const onboard = ONBOARD.has(state.screen);
  const app = document.getElementById("app");
  const keepSheet = Boolean(state.sheetDevice && liveSheetId === state.sheetDevice);
  app.innerHTML = `
    <div class="shell ${onboard ? "is-onboard" : "is-app"} ${state.loggedIn && state.jemmVisible ? "has-strip" : ""} ${state.jemmPlace === "bottom" ? "is-jemm-bottom" : ""} ${state.jemmMood === "amber" || state.jemmMood === "alert" ? `is-mood-${state.jemmMood}` : ""} ${!onboard && (normalizeHomeBg(state.homeBg) === "photo" || normalizeHomeBg(state.homeBg) === "frost") && homePhoto() ? "has-photo" : ""} ${state.previewMenu ? "has-config-panel" : ""}" data-look="${normalizeLook(state.appLook)}" data-device-open="${normalizeDeviceOpen(state.deviceOpen)}" data-bottom-nav="${normalizeBottomNav(state.bottomNav)}" data-home-bg="${normalizeHomeBg(state.homeBg)}"${ !onboard && (normalizeHomeBg(state.homeBg) === "photo" || normalizeHomeBg(state.homeBg) === "frost") && homePhoto() ? ` style="--home-photo:url('${homePhoto()}')"` : "" }>
      <div class="frost-layer" aria-hidden="true"></div>
      ${fn()}
      ${deviceSheet(keepSheet)}
      ${homePeekOverlay()}
      ${sceneBottomSheet()}
      ${sceneSideSheet()}
      ${wakeWordSheet()}
      ${helpSheet()}
      ${accountSheet()}
      ${favPicker()}
      ${previewSheet()}
      ${walkFlash()}
      ${voiceOverlay()}
      ${toastHtml()}
      ${roomWalkPill()}
    </div>`;
  liveSheetId = state.sheetDevice;
  playJemmVideos();
  bindHomePager();
  bindTopnavScroll();
  bindFrostScroll();
  if (state.walkAuto && !walkAutoTimer) startWalkAuto();
  if (jemmCue) startLearnPulse();
}

function finishOnboard() {
  go("home", { loggedIn: true, coach: true, presence: "living", viewingRoom: "living", homeId: "john", home: "John Residence" });
}

document.addEventListener("click", (e) => {
  const stop = e.target.closest("[data-stop]");
  const t = e.target.closest("[data-go],[data-act],[data-presence],[data-avatar],[data-device],[data-scene],[data-peek],[data-room],[data-field-toggle]");
  if (stop && (!t || !stop.contains(t))) return;
  if (!t) {
    if (state.homeMenu || state.jemmMenu || state.previewMenu) patch({ homeMenu: false, jemmMenu: false, previewMenu: false });
    return;
  }
  if (t.dataset.go) {
    const extra = {};
    if (t.dataset.room) extra.viewingRoom = t.dataset.room;
    if (t.dataset.person) extra.viewingPerson = t.dataset.person;
    if (t.dataset.sceneId) extra.viewingScene = t.dataset.sceneId;
    if (t.dataset.roomsView) extra.roomsView = t.dataset.roomsView;
    if (t.dataset.go === "scene") extra.sceneBack = state.screen === "home" ? "home" : "room";
    if (t.dataset.go === "devices") extra.deviceBack = state.screen === "devices" ? (state.deviceBack || "home") : state.screen;
    if (t.dataset.go === "avatar" && state.loggedIn) extra.screen = "avatar";
    go(t.dataset.go, extra);
    return;
  }
  if (t.dataset.presence) {
    setPresence(t.dataset.presence);
    if (state.screen !== "home") go("home");
    return;
  }
  if (t.dataset.avatar) {
    patch({ avatar: t.dataset.avatar });
    return;
  }
  if (t.dataset.device && !t.dataset.act) {
    openDevice(t.dataset.device, { keepPeek: Boolean(t.dataset.keepPeek) });
    return;
  }
  if (t.dataset.scene && !t.dataset.act && !t.dataset.go) {
    patch({
      sheetScene: { roomId: t.dataset.room, id: t.dataset.scene },
      sheetDevice: null,
      homeMenu: false,
      jemmMenu: false,
    });
    return;
  }
  if (t.dataset.peek) {
    patch({ viewingRoom: t.dataset.peek });
    return;
  }
  if (t.dataset.fieldToggle) {
    patch({ [t.dataset.fieldToggle]: !state[t.dataset.fieldToggle] });
    return;
  }
  const act = t.dataset.act;
  if (act === "share-wifi") go("connecting", { connectStep: 0 });
  if (act === "enter") finishOnboard();
  if (act === "voice") patch({ voice: !state.voice, jemmExpanded: false });
  if (act === "voice-close") patch({ voice: false, jemmExpanded: false });
  if (act === "voice-expand") patch({ jemmExpanded: !state.jemmExpanded });
  if (act === "voice-mute") patch({ jemmMuted: !state.jemmMuted });
  if (act === "voice-listen") {
    if (state.jemmMuted) { flash("Jemm is muted. Tap the speaker icon to unmute."); return; }
    // Simulate Jemm listening
    const room = hereRoom();
    const hint = room ? `Listening in ${room.name}…` : "Listening…";
    flash(hint);
  }
  if (act === "voice-hint" || act === "voice-text-submit") {
    let txt = "";
    if (act === "voice-hint") {
      txt = (t.dataset.hint || t.textContent).trim();
    } else {
      const input = document.getElementById("jemm-text");
      txt = input ? input.value.trim() : "";
      if (!txt) return;
    }
    const VREPLY = {
      "Dim the lights": "Sure — dimming to 40%.",
      "Evening scene": "Evening scene is running.",
      "Play something": "Playing in this room now.",
      "Arm cameras": "All cameras armed.",
      "Arm the cameras": "All cameras armed.",
      "Turn off all lights": "Lights off across the house.",
      "How's the house?": "All good. 3 lights on, cameras armed, doors locked.",
      "Who's home?": "Alex and Maya are home.",
      "What's the temperature?": `It's ${hereRoom() ? "72°" : "70°"} in here right now.`,
    };
    const reply = VREPLY[txt] || "On it.";
    const prev = state.voiceHistory || [];
    const next = [...prev, { role: "user", text: txt }, { role: "jemm", text: reply }];
    patch({ voiceHistory: next });
    // Scroll thread to bottom after render
    setTimeout(() => {
      const thread = document.getElementById("jemm-thread");
      if (thread) thread.scrollTop = thread.scrollHeight;
      const input = document.getElementById("jemm-text");
      if (input) input.value = "";
    }, 30);
  }
  if (act === "voice-keyboard") {
    const input = document.getElementById("jemm-text");
    if (input) { input.focus(); }
  }
  if (act === "dismiss-coach") patch({ coach: false });
  if (act === "dismiss-night-card") patch({ nightCardDismissed: true });
  if (act === "clear-peek") patch({ viewingRoom: null });
  if (act === "theme") patch({ theme: state.theme === "light" ? "dark" : "light" });
  if (act === "set-theme") patch({ theme: t.dataset.theme === "light" ? "light" : "dark" });
  if (act === "toggle-account") patch({ accountSheet: !state.accountSheet, helpSheet: false, helpChat: false, previewMenu: false, homeMenu: false, jemmMenu: false });
  if (act === "close-account") patch({ accountSheet: false });
  if (act === "toggle-home-menu") patch({ homeMenu: !state.homeMenu, jemmMenu: false, previewMenu: false });
  if (act === "toggle-preview-menu") patch({ previewMenu: !state.previewMenu, previewDock: "sheet", homeMenu: false, jemmMenu: false, accountSheet: false, helpSheet: false });
  if (act === "close-preview") patch({ previewMenu: false });
  if (act === "set-app-look") patchLive({ appLook: normalizeLook(t.dataset.value) });
  if (act === "set-home-bg") patchLive({ homeBg: normalizeHomeBg(t.dataset.value) });
  if (act === "set-card-tone") patchLive({ cardTone: normalizeCardTone(t.dataset.value) });
  if (act === "set-surface") patchLive({ surfaceStyle: normalizeSurface(t.dataset.value) });
  if (act === "set-device-detail-style") patch({ deviceDetailStyle: t.dataset.value });
  if (act === "set-scene-detail-style") patch({ sceneDetailStyle: t.dataset.value });
  if (act === "peek-device-open") {
    patch({ peekDeviceId: t.dataset.device });
    return;
  }
  if (act === "open-device-sheet") {
    const id = t.dataset.device;
    if (id) openDevice(id);
    return;
  }
  if (act === "peek-device-back") {
    patch({ peekDeviceId: null });
    return;
  }
  if (act === "walk-next") {
    transitionRoom(() => walkNext());
    return;
  }
  if (act === "walk-prev") {
    const ids = rooms().map((r) => r.id);
    const i = Math.max(0, ids.indexOf(state.presence));
    const prevId = ids[(i - 1 + ids.length) % ids.length];
    transitionRoom(() => setPresence(prevId));
    return;
  }
  if (act === "set-spacing") patchLive({ spacing: normalizeSpacing(t.dataset.value) });
  if (act === "set-view-as") patch({ viewAs: t.dataset.value }, "live");
  if (act === "set-preview-dock") patch({ previewDock: normalizePreviewDock(t.dataset.value), previewMenu: true });
  if (act === "set-bottom-nav") patchLive({ bottomNav: normalizeBottomNav(t.dataset.value) });
  if (act === "toggle-walk-auto") {
    const next = !state.walkAuto;
    if (next) { patch({ walkAuto: true, presence: state.presence === "away" ? rooms()[0]?.id || state.presence : state.presence, previewMenu: true }, "live"); startWalkAuto(); }
    else { stopWalkAuto(); patchLive({ walkAuto: false }); }
    return;
  }
  if (act === "toggle-away") {
    if (state.presence !== "away") { stopWalkAuto(); patch({ walkAuto: false, presence: "away", viewingRoom: null, walkTo: null }); }
    else setPresence(rooms()[0]?.id || state.presence);
    return;
  }
  if (act === "set-home-layout") patchLive({ homeLayout: normalizeHomeLayout(t.dataset.value), homePage: 0 });
  if (act === "set-home-tile") patchLive({ homeTile: normalizeHomeTile(t.dataset.value) });
  if (act === "set-home-intro") patchLive({ homeIntro: normalizeHomeIntro(t.dataset.value) });
  if (act === "home-fav-menu" || act === "toggle-fav-edit") patch({ favEdit: !state.favEdit, favAdd: false }, state.screen === "home" ? "live" : true);
  if (act === "open-fav-add") patch({ favAdd: true, favKind: null, previewMenu: false, accountSheet: false });
  if (act === "close-fav-add") patch({ favAdd: false, favKind: null });
  if (act === "set-fav-kind") {
    const value = t.dataset.value || null;
    patch({ favAdd: true, favKind: value && value !== "undefined" ? value : null }, "live");
  }
  if (act === "toggle-fav") {
    const item = { type: t.dataset.favType, id: t.dataset.favId };
    const list = favoriteList();
    const next = isFavorite(item) ? list.filter((f) => favKey(f) !== favKey(item)) : [...list, item];
    patch({ favorites: next, favAdd: state.favAdd, favKind: state.favKind, favEdit: state.favEdit }, state.screen === "home" ? "live" : true);
  }
  if (act === "home-page") patch({ homePage: normalizeHomePage(t.dataset.page) });
  if (act === "set-device-open") {
    const deviceOpen = normalizeDeviceOpen(t.dataset.value);
    const id = state.sheetDevice || (state.screen === "device" ? state.viewingDevice : null);
    const summary = state.homePeek || (state.screen === "summary" ? state.viewingSummary : null);
    if (deviceOpen === "page" && id) {
      const from = state.screen !== "device" ? state.screen : (state.deviceBack || "home");
      go("device", { viewingDevice: id, deviceBack: from, deviceOpen, previewMenu: true, sheetDevice: null });
    } else if (deviceOpen === "page" && summary) {
      const from = state.screen !== "summary" ? state.screen : (state.summaryBack || "home");
      go("summary", { viewingSummary: summary, summaryBack: from, deviceOpen, previewMenu: true, homePeek: null });
    } else if (id) {
      patch({
        deviceOpen,
        previewMenu: true,
        screen: state.screen === "device" ? (state.deviceBack || "home") : state.screen,
        sheetDevice: id,
        viewingDevice: id,
      });
    } else if (summary) {
      patch({
        deviceOpen,
        previewMenu: true,
        screen: state.screen === "summary" ? (state.summaryBack || "home") : state.screen,
        homePeek: summary,
        viewingSummary: summary,
      });
    } else {
      patchLive({ deviceOpen });
    }
  }
  if (act === "set-home") setHome(t.dataset.home);
  if (act === "walk-next") {
    transitionRoom(() => { walkNext(); if (state.screen !== "home") go("home"); });
  }
  if (act === "set-view") patch({ [t.dataset.viewKey]: t.dataset.view });
  if (act === "set-room-tab") patch({ roomTab: t.dataset.tab });
  if (act === "room-photo-sheet") patch({ roomPhotoSheet: t.dataset.room });
  if (act === "close-room-photo") patch({ roomPhotoSheet: null });
  if (act === "open-wake-word") patch({ wakeWordSheet: true });
  if (act === "close-wake-word") patch({ wakeWordSheet: false });
  if (act === "set-wake-word") {
    const id = el.dataset.id;
    if (id === "custom") {
      const custom = prompt("Enter your wake phrase:", state.wakeWord || "Hey Jemm");
      if (custom && custom.trim()) patch({ wakeWord: custom.trim(), wakeWordSheet: false });
    } else {
      patch({ wakeWord: el.dataset.value, wakeWordSheet: false });
    }
    flash(`Wake word set to "${state.wakeWord || el.dataset.value}"`);
    return;
  }
  if (act === "room-photo-upload" || act === "room-photo-ai") {
    flash(act === "room-photo-ai" ? "Generating room photo…" : "Photo picker coming soon");
    patch({ roomPhotoSheet: null });
  }
  if (act === "set-kind") {
    if (state.screen === "home" && t.dataset.kind === "camera") {
      go("devices", { deviceKind: t.dataset.kind, deviceBack: "home" });
      return;
    }
    patch({ deviceKind: t.dataset.kind });
  }
  if (act === "close-sheet") {
    if (state.screen === "device") go(state.deviceBack || "home");
    else patch({ sheetDevice: null, viewingDevice: null, sheetSize: "half", sheetTab: "controls" });
  }
  if (act === "close-scene") patch({ sheetScene: null, sideScene: null });
  if (act === "go-scene" || act === "scene-more") {
    const roomId = t.dataset.room;
    const sceneId = t.dataset.scene;
    if (!roomId || !sceneId) return;
    const style = state.sceneDetailStyle || "sheet";
    if (style === "page") {
      go("scene", { viewingRoom: roomId, viewingScene: sceneId, sceneBack: "scenes" });
    } else if (style === "side") {
      patch({ sideScene: { roomId, id: sceneId }, sheetScene: null });
    } else {
      patch({ sheetScene: { roomId, id: sceneId }, sideScene: null });
    }
  }
  if (act === "run-scene") {
    const roomId = t.dataset.room || state.sheetScene?.roomId || state.sideScene?.roomId || state.viewingRoom;
    const sceneId = t.dataset.scene || state.sheetScene?.id || state.sideScene?.id || state.viewingScene;
    if (roomId && sceneId) runScene(roomId, sceneId);
  }
  if (act === "run-device-scene") runScene(t.dataset.room, t.dataset.scene, { keepSheet: true });
  if (act === "set-sheet-tab") patch({ sheetTab: t.dataset.tab });
  if (act === "add-scene-trigger") {
    const key = t.dataset.key;
    const phrase = prompt("Add trigger phrase (what you say to Jemm):", "");
    if (!phrase?.trim()) return;
    const cur = state.sceneTriggers?.[key] || [];
    patch({ sceneTriggers: { ...state.sceneTriggers, [key]: [...cur, phrase.trim().toLowerCase()] } });
  }
  if (act === "jemm-suggest-triggers") {
    const key = t.dataset.key;
    const suggestions = ["lights low", "set the mood", "quiet mode"];
    const cur = state.sceneTriggers?.[key] || [];
    const next = [...new Set([...cur, ...suggestions])];
    patch({ sceneTriggers: { ...state.sceneTriggers, [key]: next } });
    flash("Jemm added 3 trigger suggestions.");
  }
  if (act === "jemm-suggest-scene") {
    flash("Jemm is thinking about improvements for this scene…");
  }
  if (act === "edit-scene-action") {
    const deviceId = t.dataset.device;
    if (deviceId) patch({ sheetDevice: deviceId, sheetSize: "half", sheetTab: "controls", sheetScene: null, sideScene: null });
  }
  if (act === "edit-scene-name") {
    const key = t.dataset.key;
    const val = t.value?.trim();
    if (key && val) patch({ sceneNames: { ...state.sceneNames, [key]: val } });
  }
  if (act === "home-peek") {
    openSummary(t.dataset.peekKind);
    return;
  }
  if (act === "close-peek") patch({ homePeek: null, peekDeviceId: null, viewingSummary: state.screen === "summary" ? state.viewingSummary : null });
  if (act === "lights-all" || act === "kind-all") {
    const on = t.dataset.on === "true";
    const kind = t.dataset.kind || "light";
    const ids = devicesOfKind(kind, hereRoom()).map((d) => d.id);
    const extra = {};
    if (kind === "audio" && on) extra.source = currentSong().title;
    if (kind === "fan" && on) extra.speed = "low";
    if (kind === "shade") extra.pos = on ? 100 : 0;
    if (ids.length) setCtlMany(ids, { on, ...extra });
  }
  if (act === "ctl-power-toggle") {
    const id = t.dataset.device;
    const d = findDevice(id);
    if (id && d) setCtl(id, d.kind === "camera" ? { on: !ctl(d).on, armed: !ctl(d).on } : { on: !ctl(d).on });
  }
  if (act === "ctl-kelvin") {
    const id = t.dataset.device;
    const val = parseInt(t.dataset.value, 10);
    if (id && val) setCtl(id, { kelvin: val });
  }
  if (act === "edit-device-name") {
    // handled via input event below
  }
  if (act === "ctl-lock-toggle") {
    const id = t.dataset.device;
    const d = findDevice(id);
    if (id && d) setCtl(id, { locked: !ctl(d).locked });
  }
  if (act === "ctl-fan-step") {
    const SPEEDS = ["off", "low", "med", "high"];
    const id = t.dataset.device;
    const d = findDevice(id);
    if (!id || !d) return;
    const c = ctl(d);
    const cur = c.on ? Math.max(1, SPEEDS.indexOf(c.speed || "low")) : 0;
    const next = Math.max(0, Math.min(3, cur + parseInt(t.dataset.step, 10)));
    setCtl(id, next === 0 ? { on: false } : { on: true, speed: SPEEDS[next] });
  }
  if (act === "quick-power-toggle") {
    const id = t.dataset.device;
    const d = findDevice(id);
    if (!id || !d) return;
    const next = !ctl(d).on;
    setCtl(id, d.kind === "camera" ? { on: next, armed: next } : { on: next });
    // Update button state in-place without a full re-render
    t.classList.toggle("is-on", next);
    t.setAttribute("aria-pressed", String(next));
    // Reflect on the parent tile too
    t.closest(".dash-tile")?.classList.toggle("is-on", state.sheetDevice === id || state.viewingDevice === id);
    return;
  }
  if (act === "toggle-spotify") {
    const linked = state.spotifyLinked !== false;
    patch({ spotifyLinked: !linked });
    flash(linked ? "Spotify disconnected." : "Spotify reconnected.");
  }
  if (act === "play-song") {
    const song = SONGS.find((s) => s.id === t.dataset.song) || SONGS[0];
    const speakers = devicesOfKind("audio", hereRoom());
    const target = speakers.find((d) => ctl(d).on) || speakers[0];
    const nextCtl = { ...state.ctl };
    if (target) nextCtl[target.id] = { ...(nextCtl[target.id] || {}), on: true, source: song.title };
    patch({ playingSong: song.id, ctl: nextCtl });
  }
  if (act === "deny-request") {
    const req = state.adminRequest;
    if (req) {
      patch({ adminRequest: { ...req, status: "denied" }, jemmMood: "alert" });
      flash("Request denied.");
      const mia = PEOPLE.find((p) => p.id === "mia");
      if (mia) speakAs({ ...personRecord(mia), tone: "Serious" }, "Sorry Mia. That isn’t allowed. I asked John, and he said no.");
    }
  }
  if (act === "clear-request") patch({ adminRequest: null, jemmMood: state.doors?.patio === "unlocked" ? "amber" : "ok" });
  if (act === "lock-patio") {
    patch({ doors: { ...(state.doors || {}), patio: "locked" } });
    flash("Patio locked.");
  }
  if (act === "toggle-door") {
    const id = t.dataset.door;
    const open = state.doors?.[id] === "unlocked";
    const doors = { ...(state.doors || {}), [id]: open ? "locked" : "unlocked" };
    const unlocked = Object.values(doors).some((v) => v === "unlocked");
    patch({ doors, jemmMood: state.adminRequest?.status === "pending" || state.adminRequest?.status === "denied" ? state.jemmMood : (unlocked ? "amber" : "ok") });
    flash(open ? `${id[0].toUpperCase()}${id.slice(1)} locked.` : `${id[0].toUpperCase()}${id.slice(1)} door just unlocked.`);
  }
  if (act === "toggle-scene-person") {
    const roomId = t.dataset.room || state.viewingRoom;
    const sceneId = t.dataset.scene || state.viewingScene;
    if (!roomId || !sceneId) return;
    const key = sceneKey(roomId, sceneId);
    const cur = state.scenePeople[key] || ["john"];
    const id = t.dataset.person;
    const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
    patch({ scenePeople: { ...state.scenePeople, [key]: next.length ? next : [id] } });
  }
  if (act === "set-accent") patch({ personAccent: { ...state.personAccent, [t.dataset.person]: t.dataset.accent } });
  if (act === "set-personality") patch({ personPersonality: { ...state.personPersonality, [t.dataset.person]: t.dataset.personality } });
  if (act === "toggle-listen") {
    const id = t.dataset.person;
    const cur = state.personListen?.[id] !== false;
    patch({ personListen: { ...state.personListen, [id]: !cur } });
  }
  if (act === "toggle-visible") {
    const id = t.dataset.person;
    const visible = state.personVisible?.[id] !== false;
    patch({ personVisible: { ...state.personVisible, [id]: !visible } });
  }
  if (act === "remove-person") {
    patch({ personGone: { ...state.personGone, [t.dataset.person]: true } });
    go("profiles");
  }
  if (act === "sheet-toggle") {
    if (sheetDragMoved) return;
  }
  if (act === "help") patch({ helpSheet: true, helpChat: false, homeMenu: false, jemmMenu: false, accountSheet: false, sheetScene: null });
  if (act === "close-help") patch({ helpSheet: false, helpChat: false });
  if (act === "help-chat") patch({ helpChat: true });
  if (act === "help-chat-end") patch({ helpChat: false });
  if (act === "ctl-power" && state.sheetDevice) {
    const d = findDevice(state.sheetDevice);
    setCtl(state.sheetDevice, { on: !ctl(d).on });
  }
  if (act === "ctl-power-set") {
    const id = t.dataset.device || state.sheetDevice;
    const d = findDevice(id);
    const on = t.dataset.on === "true";
    if (id) setCtl(id, d && d.kind === "camera" ? { on, armed: on } : { on });
  }
  if (act === "ctl-source") {
    const id = t.dataset.device || state.sheetDevice;
    if (id) setCtl(id, { source: t.dataset.value, on: t.dataset.value !== "Off" });
  }
  if (act === "ctl-mode") {
    const id = t.dataset.device || state.sheetDevice;
    if (id) setCtl(id, { mode: t.dataset.value, on: t.dataset.value !== "off" });
  }
  if (act === "ctl-speed") {
    const id = t.dataset.device || state.sheetDevice;
    if (id) setCtl(id, { speed: t.dataset.value, on: true });
  }
  if (act === "ctl-num") {
    const field = t.dataset.ctlField;
    const value = Number(t.dataset.value);
    const id = t.dataset.device || state.sheetDevice;
    const extra = {};
    if (field === "intensity" || field === "volume" || field === "pos" || field === "temp") extra.on = true;
    if (field === "volume" && value === 0) extra.on = false;
    if (field === "intensity" && value === 0) extra.on = false;
    if (id) setCtl(id, { [field]: value, ...extra });
  }
  if (act === "ctl-step") {
    const field = t.dataset.ctlField;
    const step = parseFloat(t.dataset.step);
    const min = parseFloat(t.dataset.min ?? "0");
    const max = parseFloat(t.dataset.max ?? "100");
    const id = t.dataset.device || state.sheetDevice;
    if (!id) return;
    const d = findDevice(id);
    if (!d) return;
    const current = ctl(d)[field] ?? 0;
    const next = Math.max(min, Math.min(max, current + step));
    const extra = {};
    if (field === "temp") extra.on = true;
    if (field === "setpoint") extra.on = true;
    if (field === "volume") extra.on = next > 0;
    if (field === "intensity") extra.on = next > 0;
    setCtl(id, { [field]: next, ...extra });
  }
  if (act === "toggle-jemm-menu") patch({ jemmMenu: !state.jemmMenu, homeMenu: false });
  if (act === "set-jemm-place") patch({ jemmPlace: t.dataset.place, jemmVisible: true, jemmMenu: false });
  if (act === "hide-jemm") patch({ jemmVisible: false, jemmMenu: false });
  if (act === "set-tone") {
    patch({ personTone: { ...state.personTone, [t.dataset.person]: t.dataset.tone } });
  }
  if (act === "play-voice") {
    const raw = PEOPLE.find((p) => p.id === t.dataset.person);
    if (raw) speakAs(personRecord(raw));
  }
  if (act === "logout") {
    localStorage.removeItem(KEY);
    state = { ...blank(), theme: state.theme };
    persist();
    go("welcome");
  }
});

document.addEventListener("change", (e) => {
  const field = e.target.dataset.field;
  if (field) patch({ [field]: e.target.checked }, false);
});

document.addEventListener("input", (e) => {
  // Device name edit
  if (e.target.dataset.act === "edit-device-name") {
    const id = e.target.dataset.device;
    if (id) {
      state = { ...state, deviceNameEdits: { ...state.deviceNameEdits, [id]: e.target.value } };
      // Update the devices data name as well for display
      const d = findDevice(id);
      if (d) d.name = e.target.value;
    }
    return;
  }
  // Graphic slider live update
  if (e.target.classList.contains("peek-graphic-slider__input")) {
    const id = e.target.dataset.device;
    const val = Number(e.target.value);
    if (id) {
      const fill = e.target.closest(".peek-graphic-slider")?.querySelector(".peek-graphic-slider__fill");
      const pctLabel = e.target.closest(".peek-graphic-slider")?.querySelector(".peek-graphic-slider__pct");
      if (fill) fill.style.height = val + "%";
      if (pctLabel) pctLabel.textContent = val + "%";
      setCtl(id, { intensity: val, on: val > 0 });
    }
    return;
  }
  if (e.target.dataset.search === "devices") {
    const q = e.target.value.trim().toLowerCase();
    document.querySelectorAll(".device-cat").forEach((cat) => {
      let catVisible = false;
      cat.querySelectorAll(".dash-tile").forEach((tile) => {
        const match = !q || (tile.dataset.name || "").includes(q);
        tile.style.display = match ? "" : "none";
        if (match) catVisible = true;
      });
      cat.style.display = catVisible ? "" : "none";
    });
    const sections = document.querySelectorAll(".stage .stack-sm");
    sections.forEach((sec) => {
      if (!sec.querySelector(".device-cats")) return;
      const hasVisible = [...sec.querySelectorAll(".device-cat")].some((c) => c.style.display !== "none");
      sec.style.display = hasVisible ? "" : "none";
    });
    const noResults = document.querySelector(".device-search-empty");
    const anyVisible = [...document.querySelectorAll(".device-cat")].some((c) => c.style.display !== "none");
    if (noResults) noResults.hidden = anyVisible || !q;
    return;
  }
  const field = e.target.dataset.ctl;
  if (!field) return;
  const val = Number(e.target.value);
  const extra = {};
  if (field === "intensity" || field === "volume" || field === "pos" || field === "temp") extra.on = !(field === "volume" && val === 0) && !(field === "intensity" && val === 0);
  const kind = e.target.dataset.ctlKind;
  if (kind) {
    const room = roomById(e.target.dataset.ctlRoom || state.viewingRoom || state.presence);
    const next = { ...state.ctl };
    devicesOfKind(kind, room).forEach((d) => {
      next[d.id] = { ...ctl(d), [field]: val, ...extra };
    });
    state = { ...state, ctl: next };
  } else {
    const id = e.target.dataset.device || state.sheetDevice;
    if (!id) return;
    const d = findDevice(id);
    if (!d) return;
    state = { ...state, ctl: { ...state.ctl, [id]: { ...ctl(d), [field]: val, ...extra } } };
  }
  persist();
  const live = e.target.closest("label")?.querySelector("[data-live]");
  if (live) live.textContent = liveFmt(field, val);
  if (!sliderLearn) {
    sliderLearn = true;
    noticeJemm("Got it — I’ll remember that.");
  }
  clearTimeout(sliderLearnTimer);
  sliderLearnTimer = setTimeout(() => { sliderLearn = false; }, 900);
});

document.addEventListener("submit", (e) => {
  const form = e.target.closest("[data-form]");
  if (!form) return;
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  if (form.dataset.form === "login") {
    go("home", { loggedIn: true, email: data.email || state.email, password: data.password || "", coach: false, presence: "living" });
    return;
  }
  if (form.dataset.form === "account") {
    patch({ email: data.email || state.email, password: data.password || "" }, false);
    go("done");
    return;
  }
  if (form.dataset.form === "profile") {
    patch({ name: data.name || state.name, email: data.email || state.email, password: data.password || state.password });
    flash("Saved.");
    go("more");
  }
  if (form.dataset.form === "scene") {
    const key = sceneKey(state.viewingRoom, state.viewingScene);
    patch({
      sceneNames: { ...state.sceneNames, [key]: data.name || state.sceneNames[key] },
      sceneWakes: { ...state.sceneWakes, [key]: data.wake || state.sceneWakes[key] },
    });
    flash("Scene saved.");
  }
  if (form.dataset.form === "cam-talk") {
    const ask = String(data.ask || "").trim();
    if (!ask) return;
    const d = findDevice(state.viewingDevice);
    const place = d ? `${d.name} in the ${d.room.toLowerCase()}` : "this camera";
    const end = /[.!?…]$/.test(ask) ? "" : ".";
    patch({ camReply: `I’m watching ${place}. I heard “${ask}${end}”` });
    flash("Jemm heard you.");
  }
});

let sheetDrag = null;
let sheetDragMoved = false;

function sheetPanel() {
  return document.querySelector(".sheet--device .sheet__panel");
}

function sheetHeights() {
  const vh = window.innerHeight;
  return {
    half: Math.round(vh * 0.50),
    full: Math.min(Math.round(vh * 0.92), 900),
  };
}

function clearSheetDrag(panel) {
  if (panel) {
    panel.classList.remove("is-dragging");
    panel.style.transform = "";
    panel.style.height = "";
  }
  sheetDrag = null;
  setTimeout(() => { sheetDragMoved = false; }, 80);
}

function snapSheetTo(size) {
  const panel = sheetPanel();
  if (!panel) return;
  const { half, full } = sheetHeights();
  panel.classList.remove("is-dragging");
  panel.style.transform = "";
  panel.style.transition = "height 0.32s cubic-bezier(0.32,0.72,0,1)";
  panel.style.height = (size === "full" ? full : half) + "px";
  setTimeout(() => { if (panel) panel.style.transition = ""; }, 340);
  patch({ sheetSize: size });
}

// ── Light vertical slider interaction ────────────────────────
document.addEventListener("pointerdown", (e) => {
  const slider = e.target.closest(".light-vslider");
  if (!slider) return;
  const id = slider.dataset.device;
  if (!id) return;
  e.stopPropagation();
  slider.setPointerCapture(e.pointerId);
  const update = (ev) => {
    const rect = slider.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, 1 - (ev.clientY - rect.top) / rect.height));
    const val = Math.round(pct * 100);
    const fill = slider.querySelector(".light-vslider__fill");
    const knob = slider.querySelector(".light-vslider__knob");
    const label = document.querySelector(".light-vslider__val[data-live='intensity'], .light-vslider__val");
    if (fill) { fill.style.height = val + "%"; }
    if (knob) { knob.style.bottom = "calc(" + val + "% - 14px)"; }
    if (label) label.textContent = val + "%";
    setCtl(id, { intensity: val, on: val > 0 });
  };
  update(e);
  const move = (ev) => { if (slider.hasPointerCapture(ev.pointerId)) update(ev); };
  const up = () => slider.removeEventListener("pointermove", move);
  slider.addEventListener("pointermove", move);
  slider.addEventListener("pointerup", up, { once: true });
  slider.addEventListener("pointercancel", up, { once: true });
});

document.addEventListener("pointerdown", (e) => {
  const grab = e.target.closest("[data-sheet-grab]");
  if (!grab || !state.sheetDevice) return;
  if (e.target.closest("button[data-act=close-sheet], input, select, textarea")) return;
  const panel = sheetPanel();
  if (!panel) return;
  sheetDragMoved = false;
  const { half, full } = sheetHeights();
  const currentH = panel.getBoundingClientRect().height || (state.sheetSize === "full" ? full : half);
  sheetDrag = {
    y: e.clientY,
    startH: currentH,
    lastY: e.clientY,
    lastT: performance.now(),
    v: 0,
  };
  panel.style.height = currentH + "px";
  panel.classList.add("is-dragging");
  try { grab.setPointerCapture(e.pointerId); } catch {}
});

document.addEventListener("pointermove", (e) => {
  if (!sheetDrag) return;
  const panel = sheetPanel();
  if (!panel) return;
  const now = performance.now();
  const dt = now - sheetDrag.lastT;
  if (dt > 0) sheetDrag.v = (e.clientY - sheetDrag.lastY) / dt;
  sheetDrag.lastY = e.clientY;
  sheetDrag.lastT = now;
  const dy = e.clientY - sheetDrag.y;
  if (Math.abs(dy) > 8) sheetDragMoved = true;
  const { full } = sheetHeights();
  const newH = sheetDrag.startH - dy;
  const cap = newH > full ? full + (newH - full) * 0.12 : Math.max(newH, 40);
  panel.style.height = `${cap}px`;
  panel.style.transform = "";
});

document.addEventListener("pointerup", (e) => {
  if (!sheetDrag) return;
  const dy = e.clientY - sheetDrag.y;
  const flickDown = sheetDrag.v > 0.45;
  const flickUp = sheetDrag.v < -0.45;
  const panel = sheetPanel();
  const { half, full } = sheetHeights();
  const currentSize = state.sheetSize;
  const finalH = panel ? panel.getBoundingClientRect().height : 0;
  sheetDrag = null;
  setTimeout(() => { sheetDragMoved = false; }, 80);

  // Dismiss: flick down hard or dragged down a lot
  if (flickDown || dy > finalH * 0.45 || dy > 120) {
    if (panel) { panel.classList.remove("is-dragging"); panel.style.transform = ""; panel.style.height = ""; }
    patch({ sheetDevice: null, sheetSize: "half", sheetTab: "controls" });
    return;
  }
  // Snap up to full from half
  if (currentSize !== "full" && (flickUp || finalH > (half + full) / 2)) {
    snapSheetTo("full"); return;
  }
  // Snap down from full to half
  if (currentSize === "full" && dy > 55) {
    snapSheetTo("half"); return;
  }
  // Snap back to current
  snapSheetTo(currentSize);
});
document.addEventListener("pointercancel", () => {
  clearSheetDrag(sheetPanel());
});

document.addEventListener("keydown", (e) => {
  // Enter in Jemm text input
  if (e.key === "Enter" && e.target.id === "jemm-text") {
    e.preventDefault();
    const txt = e.target.value.trim();
    if (!txt) return;
    const VREPLY = {
      "Dim the lights": "Sure — dimming to 40%.",
      "Evening scene": "Evening scene is running.",
      "Play something": "Playing in this room now.",
      "Arm cameras": "All cameras armed.",
      "Turn off all lights": "Lights off across the house.",
      "How's the house?": "All good. 3 lights on, cameras armed, doors locked.",
      "Who's home?": "Alex and Maya are home.",
    };
    const reply = VREPLY[txt] || "On it.";
    const prev = state.voiceHistory || [];
    patch({ voiceHistory: [...prev, { role: "user", text: txt }, { role: "jemm", text: reply }] });
    setTimeout(() => {
      const thread = document.getElementById("jemm-thread");
      if (thread) thread.scrollTop = thread.scrollHeight;
      e.target.value = "";
    }, 30);
    return;
  }
  if (e.key !== "Escape") return;
  if (state.previewMenu) {
    patch({ previewMenu: false });
    return;
  }
  if (state.homePeek) {
    patch({ homePeek: null });
    return;
  }
  if (state.sheetScene) {
    patch({ sheetScene: null });
    return;
  }
  if (state.sheetDevice) {
    patch({ sheetDevice: null, viewingDevice: null, sheetSize: "half", sheetTab: "controls" });
    return;
  }
  if (state.screen === "device") {
    go(state.deviceBack || "home");
    return;
  }
  if (state.screen === "summary") {
    go(state.summaryBack || "home");
    return;
  }
  if (state.helpSheet) patch({ helpSheet: false, helpChat: false });
});

// ── Favorites drag-to-reorder ──────────────────────────────────
let _dragSrcIdx = null;

document.addEventListener("dragstart", (e) => {
  const tile = e.target.closest("[data-fav-idx]");
  if (!tile) return;
  _dragSrcIdx = parseInt(tile.dataset.favIdx, 10);
  e.dataTransfer.effectAllowed = "move";
  tile.classList.add("is-dragging");
});

document.addEventListener("dragend", (e) => {
  document.querySelectorAll(".dash-tile--fav.is-dragging, .dash-tile--fav.drag-over")
    .forEach((el) => el.classList.remove("is-dragging", "drag-over"));
});

document.addEventListener("dragover", (e) => {
  const tile = e.target.closest("[data-fav-idx]");
  if (!tile) return;
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  document.querySelectorAll(".dash-tile--fav.drag-over").forEach((el) => el.classList.remove("drag-over"));
  tile.classList.add("drag-over");
});

document.addEventListener("drop", (e) => {
  const tile = e.target.closest("[data-fav-idx]");
  if (!tile || _dragSrcIdx === null) return;
  e.preventDefault();
  const destIdx = parseInt(tile.dataset.favIdx, 10);
  if (destIdx === _dragSrcIdx) return;
  const list = [...favoriteList()];
  const [moved] = list.splice(_dragSrcIdx, 1);
  list.splice(destIdx, 0, moved);
  _dragSrcIdx = null;
  patch({ favorites: list }, "live");
});

applyTheme();
if (state.loggedIn && ONBOARD.has(state.screen)) state.screen = "home";
render();