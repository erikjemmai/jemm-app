const KEY = "jemm-companion";
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
    photo: "assets/rooms/cutaway-guest.png",
    weather: "84° · Sunny",
    climate: "72°",
    summary: [
      { k: "Climate", v: "72°" },
      { k: "Lights on", v: "4" },
      { k: "Playing", v: "Jazz" },
      { k: "Shades", v: "Open" },
    ],
    devices: [
      { id: "lr-light", name: "Lights", kind: "light", detail: "Warm · 60%" },
      { id: "lr-climate", name: "Climate", kind: "climate", detail: "72° · Auto" },
      { id: "lr-audio", name: "Audio", kind: "audio", detail: "Jazz · 18%" },
      { id: "lr-shade", name: "Shades", kind: "shade", detail: "Open" },
      { id: "lr-mic", name: "Jemm Mic", kind: "mic", detail: "Listening" },
    ],
    quick: [
      { id: "evening", label: "Evening" },
      { id: "lights-off", label: "Lights off" },
      { id: "play", label: "Play" },
      { id: "climate", label: "Climate" },
    ],
  },
  {
    id: "kitchen",
    name: "Kitchen",
    photo: "assets/rooms/cutaway-workspace.png",
    weather: "84° · Sunny",
    climate: "70°",
    summary: [
      { k: "Climate", v: "70°" },
      { k: "Lights on", v: "3" },
      { k: "Playing", v: "Off" },
      { k: "Fan", v: "Low" },
    ],
    devices: [
      { id: "k-light", name: "Lights", kind: "light", detail: "Task · 80%" },
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
    photo: "assets/rooms/cutaway-outdoor.png",
    weather: "84° · Sunny",
    climate: "84°",
    summary: [
      { k: "Outside", v: "84°" },
      { k: "Lights on", v: "2" },
      { k: "Playing", v: "Patio" },
      { k: "Camera", v: "On" },
    ],
    devices: [
      { id: "yd-light", name: "Path lights", kind: "light", detail: "Dusk · On" },
      { id: "yd-audio", name: "Audio", kind: "audio", detail: "Patio mix" },
      { id: "yd-cam", name: "Camera", kind: "camera", detail: "Armed" },
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
    photo: "assets/rooms/cutaway-lobby.png",
    weather: "84° · Sunny",
    climate: "68°",
    summary: [
      { k: "Climate", v: "68°" },
      { k: "Lights on", v: "1" },
      { k: "Playing", v: "Off" },
      { k: "Shades", v: "Half" },
    ],
    devices: [
      { id: "br-light", name: "Lights", kind: "light", detail: "Low" },
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
    photo: "assets/rooms/cutaway-guest.png",
    weather: "72° · Clear",
    climate: "70°",
    summary: [
      { k: "Climate", v: "70°" },
      { k: "Lights on", v: "2" },
      { k: "Playing", v: "Off" },
      { k: "Shades", v: "Open" },
    ],
    devices: [
      { id: "gr-light", name: "Lights", kind: "light", detail: "Warm · 50%" },
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
    photo: "assets/rooms/cutaway-outdoor.png",
    weather: "72° · Clear",
    climate: "72°",
    summary: [
      { k: "Outside", v: "72°" },
      { k: "Lights on", v: "1" },
      { k: "Playing", v: "Off" },
      { k: "Camera", v: "On" },
    ],
    devices: [
      { id: "dk-light", name: "String lights", kind: "light", detail: "Dusk · 40%" },
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
    photo: "assets/rooms/cutaway-outdoor.png",
    pos: "center 28%",
  },
  "lights-off": {
    blurb: "Turns the lights in this room off. Climate, audio, and the rest of the house stay as they are.",
    photo: "assets/rooms/cutaway-lobby.png",
    pos: "center 70%",
  },
  play: {
    blurb: "Starts audio in this room at a comfortable volume without changing lights or climate.",
    photo: "assets/rooms/cutaway-guest.png",
    pos: "18% 42%",
  },
  climate: {
    blurb: "Holds a comfortable climate in this room. Lights and audio are left alone.",
    photo: "assets/rooms/cutaway-workspace.png",
    pos: "center 55%",
  },
  cook: {
    blurb: "Bright task lighting and a low fan so the kitchen is ready to cook without heating the whole house.",
    photo: "assets/rooms/cutaway-workspace.png",
    pos: "70% 40%",
  },
  fan: {
    blurb: "Runs the fan on low for air movement. Lights stay as you left them.",
    photo: "assets/rooms/cutaway-workspace.png",
    pos: "center 20%",
  },
  quiet: {
    blurb: "Stops audio and drops the lights so this room can stay in the background.",
    photo: "assets/rooms/cutaway-lobby.png",
    pos: "80% 40%",
  },
  away: {
    blurb: "Locks the outdoor area down: path lights off, camera armed, audio stopped.",
    photo: "assets/rooms/cutaway-outdoor.png",
    pos: "center 60%",
  },
  lock: {
    blurb: "Turns the deck down for the night and arms the camera so you can leave it.",
    photo: "assets/rooms/cutaway-outdoor.png",
    pos: "70% 50%",
  },
  sleep: {
    blurb: "Low warm light, cooler climate, and shades down so the bedroom is ready for sleep.",
    photo: "assets/rooms/cutaway-lobby.png",
    pos: "center 30%",
  },
  shades: {
    blurb: "Sets the shades to a restful half-down position. Lights and climate stay put.",
    photo: "assets/rooms/cutaway-guest.png",
    pos: "center 80%",
  },
  arrive: {
    blurb: "Warms the great room as you walk in: lights on, climate auto, audio ready if you want it.",
    photo: "assets/rooms/cutaway-guest.png",
    pos: "40% 30%",
  },
  movie: {
    blurb: "Dims the lights, drops the shades, and routes audio for watching in this room.",
    photo: "assets/rooms/cutaway-guest.png",
    pos: "center 50%",
  },
};

const HOMES = [
  {
    id: "john",
    name: "John Residence",
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
  audio: "Audio",
  shade: "Shades",
  fan: "Fans",
  camera: "Cameras",
  mic: "Jemm mics",
};
const KIND_ORDER = ["light", "climate", "audio", "shade", "fan", "camera", "mic"];

const APP_SCREENS = new Set(["home", "rooms", "profiles", "more", "devices", "insights", "settings", "jemm", "help", "notify", "profile", "room", "scene", "history"]);
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
    doors: { front: "locked", patio: "locked", garage: "locked" },
    adminRequest: null,
    jemmMood: "ok",
    homePeek: null,
    deviceView: "grid",
    deviceKind: "all",
    roomsView: "grid",
    peopleView: "list",
    followMe: true,
    coach: false,
    voice: false,
    sheetDevice: null,
    sheetSize: "full",
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
    sheetScene: null,
  };
}

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "null");
    if (!saved) return blank();
    const next = { ...blank(), ...saved, sheet: null, sheetDevice: null, sheetSize: "full", sheetTab: "controls", sheetScene: null, homePeek: null, voice: false, toast: "", walkTo: null, jemmMenu: false, homeMenu: false, helpSheet: false, helpChat: false };
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

const LEARN_KEYS = new Set([
  "ctl", "scene", "presence", "personTone", "personAccent", "personPersonality",
  "personVisible", "personGone", "sceneNames", "sceneWakes", "scenePeople",
  "doors", "adminRequest", "theme", "followMe", "faceId", "homeId", "name",
  "email", "avatar", "password",
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
  const { sheet, sheetDevice, sheetSize, sheetTab, sheetScene, homePeek, deviceKind, voice, toast, walkTo, jemmMenu, homeMenu, helpSheet, helpChat, ...rest } = state;
  localStorage.setItem(KEY, JSON.stringify(rest));
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme === "light" ? "light" : "dark";
}

function patch(next, redraw = true) {
  const learn = shouldLearn(next);
  state = { ...state, ...next };
  persist();
  applyTheme();
  if (redraw) render();
  if (learn) noticeJemm();
}

function go(screen, extra = {}) {
  patch({ screen, sheet: null, sheetDevice: null, sheetSize: "full", sheetTab: "controls", sheetScene: null, homePeek: null, voice: false, jemmMenu: false, homeMenu: false, helpSheet: false, helpChat: false, ...extra });
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
  if (d.kind === "light") return { on: true, intensity: 60, kelvin: 2700 };
  if (d.kind === "audio") return { on: true, volume: 18, source: "Jazz" };
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

function sceneSets(room, sceneId) {
  return room.devices
    .map((d) => {
      const p = scenePatchFor(sceneId, d);
      return p ? { name: d.name, detail: p.detail } : null;
    })
    .filter(Boolean);
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
  if (d.kind === "light") return `${c.intensity}% · ${c.kelvin}K`;
  if (d.kind === "audio") return `${c.source} · ${c.volume}%`;
  if (d.kind === "climate") return `${c.temp}° · ${c.mode}`;
  if (d.kind === "shade") return c.pos >= 90 ? "Open" : c.pos <= 10 ? "Closed" : `${c.pos}%`;
  if (d.kind === "fan") return c.speed;
  if (d.kind === "camera") return c.armed ? "Armed" : "Idle";
  if (d.kind === "mic") return `Vol ${c.volume}%`;
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

function topnav({ back, mark = true } = {}) {
  return `
    <header class="topnav">
      <div class="topnav__side">
        ${back ? `<button class="icon-btn" data-go="${back}" aria-label="Back">${chevron("left")}</button>` : ""}
      </div>
      ${mark ? `<img class="topnav__mark" src="assets/jemm-mark.svg" alt="Jemm" />` : `<span></span>`}
      <div class="topnav__side topnav__side--end">
        <button class="icon-btn" data-go="notify" aria-label="Notifications">${icon("assets/nav/bell.svg")}</button>
        <button class="icon-btn" data-act="help" aria-label="Help">${icon("assets/nav/help.svg")}</button>
      </div>
    </header>`;
}

function homeSwitcher() {
  const home = currentHome();
  return `
    <div class="prop-switch" data-stop>
      <button type="button" class="chip" data-act="toggle-home-menu" aria-expanded="${state.homeMenu ? "true" : "false"}">
        ${icon("assets/icons/icon-home.svg")} ${home.name}
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

function bottomNav(active) {
  const mood = state.jemmMood === "alert" ? "alert" : state.jemmMood === "amber" ? "amber" : "ok";
  const item = (id, src, onSrc, label) => `
    <button class="nav-item ${active === id ? "is-on" : ""}" data-go="${id}">
      ${icon(active === id && onSrc ? onSrc : src)}
      <span>${label}</span>
    </button>`;
  return `
    <nav class="bottom-nav" aria-label="App">
      ${item("home", "assets/nav/icon-home.svg", "assets/nav/icon-home-on.svg", "Home")}
      ${item("rooms", "assets/nav/icon-rooms.svg", null, "Rooms")}
      <button class="nav-jemm ${state.voice ? "is-live" : ""} is-${mood}" data-act="voice" aria-label="Talk to Jemm">
        ${jemmGlow()}
        ${jemmFace()}
      </button>
      ${item("profiles", "assets/nav/icon-profiles.svg", "assets/icons/icon-fingerprint.svg", "Profiles")}
      ${item("more", "assets/nav/icon-settings.svg", null, "More")}
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
      flash(`Jemm noticed you walked to the ${roomById(id).name.toLowerCase()}.`);
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

function deviceCard(d, list) {
  const c = ctl(d);
  if (list) {
    return `
      <button type="button" class="card-row ${c.on ? "is-on" : ""}" data-device="${d.id}">
        ${kindWell(d.kind, "card-icon--row")}
        <span class="grow">
          <span class="name">${d.name}</span>
          <span class="meta">${deviceDetail(d)}</span>
        </span>
        ${chevron("right")}
      </button>`;
  }
  return `
    <button type="button" class="card-tile ${c.on ? "is-on" : ""}" data-device="${d.id}">
      <span class="name">${d.name}</span>
      ${kindWell(d.kind, "card-icon--tile")}
      <span class="meta">${deviceDetail(d)}</span>
    </button>`;
}

function kindFilters(kinds) {
  if (!kinds.length) return "";
  const cur = activeKind(kinds);
  return `
    <div class="kind-filters" role="tablist" aria-label="Device category">
      <button type="button" class="${cur === "all" ? "is-on" : ""}" data-act="set-kind" data-kind="all" aria-selected="${cur === "all"}">All</button>
      ${kinds.map((k) => `
        <button type="button" class="${cur === k ? "is-on" : ""}" data-act="set-kind" data-kind="${k}" aria-selected="${cur === k}">
          ${icon(deviceIcon(k))} ${kindLabel(k)}
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
          <h3 class="device-cat__title">${icon(deviceIcon(g.kind))} ${kindLabel(g.kind)}</h3>
          <div class="${list ? "card-stack" : "card-rail"}">
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
  return sections || `<p class="muted">No devices in this category.</p>`;
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
      ${stepper(3)}
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
      ${stepper(1)}
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
      ${stepper(1)}
      <h1 class="eyebrow">Pair your device</h1>
      <div class="hero-row">
        <h2 class="h2">Devices found (1)</h2>
        <button class="icon-btn" data-go="pair" aria-label="Search again">${icon("assets/icons/icon-search.svg")}</button>
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
      ${stepper(1)}
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
      ${stepper(1)}
      <h1 class="eyebrow">Connect to network</h1>
      <div class="card card--hero">
        <div class="connect-visual">
          <img src="assets/devices/hero-arc.svg" alt="" width="32" height="62" />
          <div class="dots" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
          ${icon("assets/icons/icon-home.svg")}
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
      ${state.loggedIn ? "" : stepper(2)}
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
      ${stepper(3)}
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
      ${stepper(3)}
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
    { k: "People home", v: String(people.length), peek: "people" },
    { k: "Lights on", v: String(lights.length), peek: "lights" },
    { k: "Rooms playing", v: String(new Set(playing.map((d) => d.roomId)).size), peek: "playing" },
    { k: "Security", v: unlocked ? `${unlocked} open` : "Secure", peek: "security", alert: unlocked > 0 },
  ];
}

function statsFor(room) {
  const items = room ? room.summary.map((s) => ({ ...s, peek: null })) : homeStats();
  return `
    <div class="stat-grid">
      ${items.map((s) => `
        <button class="stat ${s.alert ? "is-alert" : ""}" ${s.peek ? `data-act="home-peek" data-peek-kind="${s.peek}"` : `data-go="${room ? "room" : "rooms"}" data-room="${room ? room.id : ""}"`}>
          <span>${s.k}</span>
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

function renderHomeHere(room) {
  return `
    <div class="stack-lg">
      <div class="home-head">
        <div class="hero-row">
          ${homeSwitcher()}
          <span class="weather">${room.weather}</span>
        </div>
        <p class="here-flag">Jemm knows you’re here</p>
        <p class="kicker">This room</p>
        <h1 class="h1">${room.name}</h1>
        <p class="muted">Scenes, then devices for this room only — not the rest of the house.</p>
      </div>
      ${presenceBar()}
      <section class="stack-sm">
        <div class="hero-row">
          <h2 class="h2">Scenes in ${room.name.toLowerCase()}</h2>
        </div>
        ${quickStrip(room)}
      </section>
      <section class="stack-sm">
        <div class="hero-row">
          <h2 class="h2">In this room</h2>
          <button class="btn btn--ghost" style="width:auto;min-height:32px;padding:0" data-go="room" data-room="${room.id}">View room</button>
        </div>
        ${statsFor(room)}
      </section>
      <section class="stack-sm">
        <div class="hero-row">
          <h2 class="h2">Devices here</h2>
          ${viewToggle("deviceView", state.deviceView)}
        </div>
        ${deviceStrip(room)}
      </section>
    </div>`;
}

function renderHomeAway() {
  const peek = state.viewingRoom ? roomById(state.viewingRoom) : null;
  return `
    <div class="stack-lg">
      <div class="home-head">
        <div class="hero-row">
          ${homeSwitcher()}
          <span class="weather">84° · Sunny</span>
        </div>
        <span class="away-banner">You’re away</span>
        <h1 class="h1">Whole home</h1>
        <p class="muted">Jemm is running the house. Pick a room to look in remotely — that is not “here.”</p>
      </div>
      ${presenceBar()}
      <section class="stack-sm">
        <div class="hero-row">
          <h2 class="h2">Home status</h2>
          <button class="btn btn--ghost" style="width:auto;min-height:32px;padding:0" data-go="rooms">Rooms</button>
        </div>
        ${statsFor(null)}
        ${adminRequestCard()}
      </section>
      <section class="stack-sm">
        <div class="hero-row">
          <h2 class="h2">Choose a room to view</h2>
          ${viewToggle("roomsView", roomsAreList() ? "list" : "grid")}
        </div>
        <p class="muted">Tap a room for a remote look, or open the floorplan.</p>
        ${roomStrip({ peekId: peek && peek.id, peek: true })}
        <button class="btn btn--secondary" data-go="rooms" data-rooms-view="plan">View floorplan</button>
      </section>
      ${peek ? `
        <section class="stack-sm">
          <div class="hero-row">
            <h2 class="h2">Remote · ${peek.name}</h2>
            <button class="btn btn--ghost" style="width:auto;min-height:32px;padding:0" data-act="clear-peek">Close</button>
          </div>
          <p class="muted">You’re still away. Scenes and devices below run in ${peek.name.toLowerCase()}.</p>
          <h2 class="h2">Scenes</h2>
          ${quickStrip(peek)}
          <div class="hero-row">
            <h2 class="h2">Devices</h2>
            ${viewToggle("deviceView", state.deviceView)}
          </div>
          ${deviceStrip(peek)}
        </section>` : ""}
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
        <p class="here-flag">Jemm noticed</p>
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
    ${jemmStripIf("top")}
    <div class="stage">${room ? renderHomeHere(room) : renderHomeAway()}</div>
    ${jemmStripIf("bottom")}
    ${bottomNav("home")}`;
}

function renderRoom() {
  const room = roomById(state.viewingRoom || state.presence);
  const inHere = state.presence === room.id;
  const away = state.presence === "away";
  const here = hereRoom();
  return `
    ${topnav({ back: "rooms" })}
    ${jemmStripIf("top")}
    <div class="stage stack-lg">
      <div class="home-head">
        ${inHere ? `<p class="here-flag">Jemm has you here</p>` : away ? `<span class="away-banner">Remote view</span>` : `<p class="kicker">You’re in ${here.name}</p>`}
        <h1 class="h1">${room.name}</h1>
        <p class="muted">${inHere
          ? "Scenes and devices below are only for this room."
          : away
            ? "You’re away. Running a scene still happens in this room."
            : `Looking at ${room.name.toLowerCase()} from ${here.name.toLowerCase()}. This does not move you.`}</p>
      </div>
      ${presenceBar()}
      <section class="stack-sm">
        <h2 class="h2">Scenes</h2>
        ${quickStrip(room)}
      </section>
      ${statsFor(room)}
      <section class="stack-sm">
        <div class="hero-row">
          <h2 class="h2">${inHere ? "Devices here" : "Devices"}</h2>
          ${viewToggle("deviceView", state.deviceView)}
        </div>
        ${deviceStrip(room)}
      </section>
    </div>
    ${jemmStripIf("bottom")}
    ${bottomNav("rooms")}`;
}

function renderScene() {
  const s = findScene(state.viewingRoom, state.viewingScene);
  if (!s) return renderRoom();
  const key = sceneKey(s.room.id, s.id);
  const name = state.sceneNames[key] || s.label;
  const wake = state.sceneWakes[key] || `Hey Jemm, ${String(s.label).toLowerCase()}`;
  const involved = state.scenePeople[key] || ["john"];
  const live = state.scene[s.room.id] === s.id;
  const people = visiblePeople();
  return `
    ${topnav({ back: "room" })}
    ${jemmStripIf("top")}
    <div class="stage stack-lg">
      <div class="home-head">
        <p class="kicker">${live ? "Running now" : "Scene"} · ${s.room.name}</p>
        <h1 class="h1">${name}</h1>
        <p class="muted">${s.blurb}</p>
      </div>
      <div class="scene-hero">
        <img src="${s.photo}" alt="" style="object-position:${s.pos}" />
      </div>
      <section class="stack-sm">
        <h2 class="h2">What this scene sets</h2>
        ${s.sets.length ? `
          <ul class="scene-sets">
            ${s.sets.map((row) => `<li><span>${row.name}</span><em>${row.detail}</em></li>`).join("")}
          </ul>` : `<p class="muted">This scene doesn’t change devices in ${s.room.name.toLowerCase()} yet.</p>`}
        <p class="muted">Only this room. The rest of the house stays as it is.</p>
      </section>
      <form class="stack-sm" data-form="scene">
        <div class="field">
          <label for="scene-name">Name</label>
          <input id="scene-name" name="name" value="${name}" />
        </div>
        <div class="field">
          <label for="scene-wake">Wake phrase</label>
          <input id="scene-wake" name="wake" value="${wake}" />
        </div>
        <button class="btn btn--secondary" type="submit">Save scene</button>
      </form>
      <section class="stack-sm">
        <h2 class="h2">Who this involves</h2>
        <div class="quick">
          ${people.map((p) => `
            <button type="button" class="${involved.includes(p.id) ? "is-on" : ""}" data-act="toggle-scene-person" data-person="${p.id}">${p.name.split(" ")[0]}</button>
          `).join("")}
        </div>
      </section>
      <button type="button" class="btn ${live ? "btn--secondary" : "btn--primary"}" data-act="run-scene">${live ? "Run again" : "Run scene"}</button>
    </div>
    ${jemmStripIf("bottom")}
    ${bottomNav("rooms")}`;
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
          ${here ? `<p class="here-flag">Jemm has you in ${here.name}</p>` : `<span class="away-banner">You’re away</span>`}
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
      ${presenceBar()}
      ${plan ? floorplanView() : roomStrip()}
    </div>
    ${jemmStripIf("bottom")}
    ${bottomNav("rooms")}`;
}

function personRecord(p) {
  const tones = state.personTone || {};
  const accents = state.personAccent || {};
  const personalities = state.personPersonality || {};
  return {
    ...p,
    name: p.nameKey ? state.name : p.name,
    email: p.emailKey ? state.email : p.email,
    avatar: p.avatarKey ? state.avatar : p.avatar,
    tone: tones[p.id] || p.tone,
    accent: accents[p.id] || "American",
    personality: personalities[p.id] || p.personality,
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
        ${here ? `<p class="here-flag">Jemm has you in ${here.name}</p>` : `<span class="away-banner">You’re away</span>`}
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
        <button class="row" data-go="devices">${icon("assets/devices/icon-light.svg", "glyph")} <span class="grow">Devices</span> <span class="muted">${rooms().reduce((n, r) => n + r.devices.length, 0)}</span> ${chevron("right")}</button>
        <button class="row" data-go="insights">${icon("assets/nav/icon-insights.svg", "glyph")} <span class="grow">Insights</span> ${chevron("right")}</button>
        <button class="row" data-go="settings">${icon("assets/nav/icon-settings.svg", "glyph")} <span class="grow">Settings</span> ${chevron("right")}</button>
        <button class="row" data-act="help">${icon("assets/nav/help.svg", "glyph")} <span class="grow">Help</span> ${chevron("right")}</button>
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
        <div class="quick">
          ${ACCENTS.map((a) => `
            <button type="button" class="${p.accent === a ? "is-on" : ""}" data-act="set-accent" data-person="${p.id}" data-accent="${a}">${a}</button>
          `).join("")}
        </div>
        <p class="kicker">Personality</p>
        <div class="quick">
          ${PERSONALITIES.map((n) => `
            <button type="button" class="${p.personality === n ? "is-on" : ""}" data-act="set-personality" data-person="${p.id}" data-personality="${n}">${n}</button>
          `).join("")}
        </div>
      </section>
      <section class="stack-sm">
        <h2 class="h2">Tone of voice</h2>
        <div class="quick">
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
          <div class="row"><span class="grow">Voice</span><span class="muted">${p.listen ? "Listens" : "Silent"}</span></div>
          <div class="row"><span class="grow">Wake word</span><span class="muted">${p.wake}</span></div>
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
          <button class="btn btn--secondary" data-act="toggle-visible" data-person="${p.id}">${p.visible ? "Hide from household" : "Show in household"}</button>
          <button class="btn btn--ghost" data-act="remove-person" data-person="${p.id}">Remove profile</button>
        </section>`}
    </div>
    ${jemmStripIf("bottom")}
    ${bottomNav("profiles")}`;
}

function renderDevices() {
  const here = hereRoom();
  return `
    ${topnav({ back: "more" })}
    ${jemmStripIf("top")}
    <div class="stage stack-lg">
      <div class="hero-row">
        <h1 class="h1">Devices</h1>
        ${viewToggle("deviceView", state.deviceView)}
      </div>
      <p class="muted">${here
        ? `You’re in the ${here.name.toLowerCase()}. Tap a device for volume, intensity, and more.`
        : "You’re away. Tap a device to control it remotely."}</p>
      ${kindFilters(kindsInHome())}
      ${devicesByRoomHtml()}
    </div>
    ${jemmStripIf("bottom")}
    ${bottomNav("more")}`;
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
        <button class="row" data-field-toggle="faceId">
          <span class="grow">Face ID</span>
          <span class="muted">${state.faceId ? "On" : "Off"}</span>
        </button>
        <button class="row" data-field-toggle="followMe">
          <span class="grow">Home follows me</span>
          <span class="muted">${state.followMe ? "On" : "Off"}</span>
        </button>
        <button class="row" data-go="notify">
          <span class="grow">Notifications</span>
          ${chevron("right")}
        </button>
      </div>
      <section class="stack-sm">
        <h2 class="h2">Jemm appears</h2>
        <div class="quick">
          <button type="button" class="${state.jemmPlace === "top" ? "is-on" : ""}" data-act="set-jemm-place" data-place="top">Top</button>
          <button type="button" class="${state.jemmPlace === "bottom" ? "is-on" : ""}" data-act="set-jemm-place" data-place="bottom">Bottom</button>
        </div>
        <p class="muted">Same as the integrator portal: a slim Jemm row stays on screen, or hide it and use the logo in the nav.</p>
      </section>
      <p class="muted">${state.followMe
        ? "When you walk into a room, Home shows that room’s summary, devices, and quick options."
        : "Home will stay on whole-house status until you pick a room."}</p>
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
        <div class="row"><span class="grow">Wake word</span><span class="muted">Hey Jemm</span></div>
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

function renderNotify() {
  const here = hereRoom();
  const req = state.adminRequest;
  const notes = [
    req?.status === "pending" ? { t: `${req.name} asked Jemm`, d: `“${req.ask}” · Waiting for you to review.`, act: true } : null,
    req?.status === "denied" ? { t: "Vault request denied", d: "Jemm told Mia no. The vault stays locked." } : null,
    state.doors?.patio === "unlocked" ? { t: "Patio door just unlocked", d: "Live demo. The patio shows red on the security plan.", peek: "security" } : null,
    here
      ? { t: `You’re in the ${here.name.toLowerCase()}`, d: "Jemm switched Home to this room’s devices and quick options." }
      : { t: "You’re away", d: "Home is showing whole-house status. Pick a room to look in." },
    { t: "Alex is in the kitchen", d: "Household profile is home." },
    { t: "Mia is in the bedroom", d: "Child profile is home." },
    { t: "Arc is online", d: "All local. No cloud hop." },
  ].filter(Boolean);
  return `
    ${topnav({ back: state.loggedIn ? "home" : "welcome" })}
    <div class="stage stack-lg">
      <h1 class="h1">Notifications</h1>
      ${req?.status === "pending" ? adminRequestCard() : ""}
      <div class="stack-sm">
        ${notes.map((n) => `
          <article class="card ${n.act || n.peek ? "card--alert" : ""}" ${n.peek ? `data-act="home-peek" data-peek-kind="${n.peek}"` : ""}>
            <strong>${n.t}</strong>
            <p class="muted">${n.d}</p>
          </article>`).join("")}
      </div>
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

function sheetToolbar(d, c) {
  const extra = d.kind === "fan" ? sheetFanSeg(c) : d.kind === "shade" ? sheetShadeSeg(c) : d.kind === "climate" ? sheetModeSeg(c) : "";
  if (!extra) return sheetPower(c);
  return `<div class="sheet-seg-row">${sheetPower(c)}${extra}</div>`;
}

function sheetControls(d, c) {
  if (d.kind === "light") {
    return `
      ${sliderRow("Intensity", "intensity", c.intensity, 0, 100)}
      ${sheetChips("intensity", [
        { label: "25%", value: 25 },
        { label: "50%", value: 50 },
        { label: "75%", value: 75 },
        { label: "100%", value: 100 },
      ], c.intensity)}
      ${sliderRow("Color temperature", "kelvin", c.kelvin, 2200, 6500, 50)}
      ${sheetChips("kelvin", [
        { label: "Warm", value: 2700 },
        { label: "Neutral", value: 4000 },
        { label: "Cool", value: 5600 },
      ], c.kelvin)}`;
  }
  if (d.kind === "audio") {
    return `
      ${sheetNowPlaying(d, c)}
      ${sliderRow("Volume", "volume", c.volume, 0, 100)}
      ${sheetChips("volume", [
        { label: "15%", value: 15 },
        { label: "30%", value: 30 },
        { label: "50%", value: 50 },
        { label: "Mute", value: 0 },
      ], c.volume)}
      <p class="kicker">Source</p>
      <div class="sheet-pills">
        ${["Jazz", "Patio", "Radio", "TV"].map((s) => `
          <button type="button" class="${c.source === s ? "is-on" : ""}" data-act="ctl-source" data-value="${s}">${s}</button>
        `).join("")}
      </div>`;
  }
  if (d.kind === "climate") {
    return `
      ${sliderRow("Target", "temp", c.temp, 60, 80)}
      ${sheetChips("temp", [
        { label: "66°", value: 66 },
        { label: "70°", value: 70 },
        { label: "72°", value: 72 },
        { label: "76°", value: 76 },
      ], c.temp)}`;
  }
  if (d.kind === "shade") {
    return `${sliderRow("Position", "pos", c.pos, 0, 100)}`;
  }
  if (d.kind === "fan") {
    return `<p class="muted">Speed is up top, next to On and Off.</p>`;
  }
  if (d.kind === "camera") {
    return `<p class="muted">${c.armed && c.on ? "Armed and recording locally." : "Idle. Turn on to arm this camera."}</p>`;
  }
  if (d.kind === "mic") {
    return `${sliderRow("Listen volume", "volume", c.volume, 0, 100)}`;
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
          <button type="button" class="icon-btn" data-act="close-help" aria-label="Close">${icon("assets/nav/close.svg")}</button>
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
              ${icon("assets/nav/bell.svg", "glyph")}
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

function deviceSheet(keepSheet = false) {
  if (!state.sheetDevice) return "";
  const d = findDevice(state.sheetDevice);
  if (!d) return "";
  const c = ctl(d);
  const here = state.presence === d.roomId;
  const tab = state.sheetTab === "scenes" ? "scenes" : "controls";
  const scenes = scenesForDevice(d);
  return `
    <div class="sheet sheet--device is-full" data-act="close-sheet">
      <aside class="sheet__panel${keepSheet ? " is-live" : ""}" data-stop role="dialog" aria-modal="true" aria-labelledby="sheet-name">
        <button type="button" class="sheet-grab" data-sheet-grab aria-label="Dismiss sheet">
          <span class="handle"></span>
        </button>
        <header class="sheet-head" data-sheet-grab>
          <div class="sheet-head__id">
            <span class="card-icon card-icon--row">${icon(deviceIcon(d.kind))}</span>
            <div class="grow">
              <h2 class="h2" id="sheet-name">${d.name}</h2>
              <p class="muted">${d.room}${here ? " · You’re here" : ""}</p>
            </div>
          </div>
          <button type="button" class="icon-btn" data-act="close-sheet" aria-label="Close">${icon("assets/nav/close.svg")}</button>
        </header>
        ${sheetToolbar(d, c)}
        <div class="tabs" role="tablist" aria-label="Device">
          <button type="button" class="${tab === "controls" ? "is-on" : ""}" data-act="set-sheet-tab" data-tab="controls" role="tab" aria-selected="${tab === "controls" ? "true" : "false"}">Controls</button>
          <button type="button" class="${tab === "scenes" ? "is-on" : ""}" data-act="set-sheet-tab" data-tab="scenes" role="tab" aria-selected="${tab === "scenes" ? "true" : "false"}">Scenes${scenes.length ? ` · ${scenes.length}` : ""}</button>
        </div>
        <div class="sheet-body">
          ${tab === "scenes" ? sheetScenes(d) : `
            <p class="sheet-status">${c.on ? deviceDetail(d) : "Off"}</p>
            ${sheetControls(d, c)}
          `}
          <p class="muted sheet-hint">Pull down to dismiss.</p>
        </div>
      </aside>
    </div>`;
}

function adminRequestCard() {
  const req = state.adminRequest;
  if (!req || req.status === "cleared") return "";
  if (req.status === "denied") {
    return `
      <article class="card card--alert">
        <p class="kicker">Jemm held the line</p>
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
    <p class="muted">Tap someone to open their profile. Guests open a limited guest view.</p>
    <div class="card-stack">
      ${people.map((p) => `
        <button type="button" class="card-row ${p.here ? "is-on" : ""}" data-go="profile" data-person="${p.id}">
          <img class="card-row__avatar" src="assets/avatars/${p.avatar}.png" alt="" />
          <span class="grow">
            <span class="name">${p.name}</span>
            <span class="meta">${p.role} · ${p.here ? p.room : "Away"}</span>
          </span>
          ${chevron("right")}
        </button>`).join("")}
    </div>`;
}

function lightsPeek() {
  const lights = rooms().flatMap((r) => r.devices.filter((d) => d.kind === "light").map((d) => ({ ...d, room: r.name, roomId: r.id })));
  if (!lights.length) return `<p class="muted">No lights in this home.</p>`;
  return `
    <p class="muted">Tap On or Off. Changes apply in that room right away.</p>
    <div class="card-stack">
      ${lights.map((d) => {
        const c = ctl(d);
        return `
          <div class="card-row">
            ${kindWell("light", "card-icon--row")}
            <span class="grow">
              <span class="name">${d.name}</span>
              <span class="meta">${d.room} · ${deviceDetail(d)}</span>
            </span>
            ${sheetPower(c, d.id)}
          </div>`;
      }).join("")}
    </div>`;
}

function playingPeek() {
  const list = playingNow();
  if (!list.length) return `<p class="muted">Nothing is playing right now.</p>`;
  return `
    <div class="card-stack">
      ${list.map((d) => {
        const c = ctl(d);
        return `
          <button type="button" class="card-row is-on" data-device="${d.id}">
            ${kindWell(d.kind, "card-icon--row")}
            <span class="grow">
              <span class="name">${c.source || d.name}</span>
              <span class="meta">${d.room} · ${c.volume}%</span>
            </span>
            ${chevron("right")}
          </button>`;
      }).join("")}
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

function homePeekOverlay() {
  if (!state.homePeek) return "";
  const kind = state.homePeek;
  const titles = { people: "People home", lights: "Lights on", playing: "Now playing", security: "Security" };
  const body = kind === "people" ? peoplePlan() : kind === "lights" ? lightsPeek() : kind === "playing" ? playingPeek() : kind === "security" ? securityPlan() : "";
  return `
    <div class="overlay overlay--peek" data-act="close-peek">
      <aside class="peek-sheet" data-stop role="dialog" aria-modal="true" aria-labelledby="peek-title">
        <header class="hero-row">
          <h2 class="h2" id="peek-title">${titles[kind] || "Home"}</h2>
          <button type="button" class="icon-btn" data-act="close-peek" aria-label="Close">${icon("assets/nav/close.svg")}</button>
        </header>
        ${body}
      </aside>
    </div>`;
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

function jemmStripIf(place) {
  if (!state.loggedIn || !state.jemmVisible || state.jemmPlace !== place) return "";
  return `
    <div class="jemm-strip ${state.voice ? "is-listening" : ""} is-${state.jemmPlace} ${state.jemmMood === "amber" || state.jemmMood === "alert" ? "is-amber" : ""}">
      <button type="button" class="jemm-orb ${state.voice ? "is-live" : ""}" data-act="voice" aria-label="Talk to Jemm">
        ${jemmGlow()}
        ${jemmFace()}
      </button>
      <p class="jemm-strip__line">${jemmLine()}</p>
      ${jemmPlaceMenu()}
    </div>`;
}

function voiceOverlay() {
  if (!state.voice) return "";
  const room = hereRoom();
  const hints = room
    ? [`Dim the lights`, `Evening scene`, `Play something`]
    : [`How’s the house?`, `Arm the cameras`, `Turn off all lights`];
  return `
    <div class="overlay voice-takeover">
      <div class="voice" data-stop>
        <button type="button" class="jemm-orb is-live jemm-orb--hero" data-act="voice-close" aria-label="Stop listening">
          ${jemmGlow()}
          ${jemmFace()}
        </button>
        <h2 class="h1">Listening</h2>
        <p class="muted">${room
          ? `You’re in the ${room.name.toLowerCase()}. You don’t need to name the room.`
          : "You’re away. Ask about the whole house, or name a room."}</p>
        <div class="voice-hints">
          ${hints.map((h) => `<button type="button" class="chip" data-act="voice-hint">${h}</button>`).join("")}
        </div>
        <div class="stack-sm" style="width:min(320px,100%)">
          <p class="kicker">Jemm appears</p>
          <div class="quick">
            <button type="button" class="${state.jemmPlace === "top" ? "is-on" : ""}" data-act="set-jemm-place" data-place="top">Top</button>
            <button type="button" class="${state.jemmPlace === "bottom" ? "is-on" : ""}" data-act="set-jemm-place" data-place="bottom">Bottom</button>
          </div>
        </div>
        <button class="btn btn--secondary" data-act="voice-close">Done</button>
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
    more: renderMore,
    profile: renderProfile,
    devices: renderDevices,
    insights: renderInsights,
    settings: renderSettings,
    jemm: renderJemm,
    help: renderHelp,
    notify: renderNotify,
  };
}

function render() {
  applyTheme();
  const fn = views()[state.screen] || renderWelcome;
  const onboard = ONBOARD.has(state.screen);
  const app = document.getElementById("app");
  const keepSheet = Boolean(state.sheetDevice && liveSheetId === state.sheetDevice);
  app.innerHTML = `
    <div class="shell ${onboard ? "is-onboard" : "is-app"} ${state.loggedIn && state.jemmVisible ? "has-strip" : ""} ${state.jemmPlace === "bottom" ? "is-jemm-bottom" : ""} ${state.jemmMood === "amber" || state.jemmMood === "alert" ? `is-mood-${state.jemmMood}` : ""}">
      ${fn()}
      ${deviceSheet(keepSheet)}
      ${homePeekOverlay()}
      ${helpSheet()}
      ${walkFlash()}
      ${voiceOverlay()}
      ${toastHtml()}
    </div>`;
  liveSheetId = state.sheetDevice;
  playJemmVideos();
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
    if (state.homeMenu || state.jemmMenu) patch({ homeMenu: false, jemmMenu: false });
    return;
  }
  if (t.dataset.go) {
    const extra = {};
    if (t.dataset.room) extra.viewingRoom = t.dataset.room;
    if (t.dataset.person) extra.viewingPerson = t.dataset.person;
    if (t.dataset.sceneId) extra.viewingScene = t.dataset.sceneId;
    if (t.dataset.roomsView) extra.roomsView = t.dataset.roomsView;
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
    patch({ sheetDevice: t.dataset.device, sheetSize: "full", sheetTab: "controls", sheetScene: null, homeMenu: false, jemmMenu: false, homePeek: t.dataset.keepPeek ? state.homePeek : null });
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
  if (act === "voice") patch({ voice: !state.voice });
  if (act === "voice-close") patch({ voice: false });
  if (act === "voice-hint") {
    flash(`“${t.textContent.trim()}”`);
    patch({ voice: false });
  }
  if (act === "dismiss-coach") patch({ coach: false });
  if (act === "clear-peek") patch({ viewingRoom: null });
  if (act === "theme") patch({ theme: state.theme === "light" ? "dark" : "light" });
  if (act === "toggle-home-menu") patch({ homeMenu: !state.homeMenu, jemmMenu: false });
  if (act === "set-home") setHome(t.dataset.home);
  if (act === "walk-next") {
    walkNext();
    if (state.screen !== "home") go("home");
  }
  if (act === "set-view") patch({ [t.dataset.viewKey]: t.dataset.view });
  if (act === "set-kind") patch({ deviceKind: t.dataset.kind });
  if (act === "close-sheet") patch({ sheetDevice: null, sheetSize: "full", sheetTab: "controls" });
  if (act === "close-scene") patch({ sheetScene: null });
  if (act === "run-scene") {
    const roomId = state.sheetScene?.roomId || state.viewingRoom;
    const sceneId = state.sheetScene?.id || state.viewingScene;
    if (roomId && sceneId) runScene(roomId, sceneId);
  }
  if (act === "run-device-scene") runScene(t.dataset.room, t.dataset.scene, { keepSheet: true });
  if (act === "set-sheet-tab") patch({ sheetTab: t.dataset.tab });
  if (act === "home-peek") patch({ homePeek: t.dataset.peekKind, sheetDevice: null });
  if (act === "close-peek") patch({ homePeek: null });
  if (act === "deny-request") {
    const req = state.adminRequest;
    if (req) {
      patch({ adminRequest: { ...req, status: "denied" }, jemmMood: "alert" });
      flash("Denied. Jemm told Mia no.");
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
  if (act === "toggle-scene-person" && state.viewingRoom && state.viewingScene) {
    const key = sceneKey(state.viewingRoom, state.viewingScene);
    const cur = state.scenePeople[key] || ["john"];
    const id = t.dataset.person;
    const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
    patch({ scenePeople: { ...state.scenePeople, [key]: next.length ? next : [id] } });
  }
  if (act === "set-accent") patch({ personAccent: { ...state.personAccent, [t.dataset.person]: t.dataset.accent } });
  if (act === "set-personality") patch({ personPersonality: { ...state.personPersonality, [t.dataset.person]: t.dataset.personality } });
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
  if (act === "help") patch({ helpSheet: true, helpChat: false, homeMenu: false, jemmMenu: false, sheetScene: null });
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
  if (act === "ctl-source") setCtl(state.sheetDevice, { source: t.dataset.value, on: t.dataset.value !== "Off" });
  if (act === "ctl-mode") setCtl(state.sheetDevice, { mode: t.dataset.value, on: t.dataset.value !== "off" });
  if (act === "ctl-speed") setCtl(state.sheetDevice, { speed: t.dataset.value, on: true });
  if (act === "ctl-num") {
    const field = t.dataset.ctlField;
    const value = Number(t.dataset.value);
    const extra = {};
    if (field === "intensity" || field === "volume" || field === "pos" || field === "temp") extra.on = true;
    if (field === "volume" && value === 0) extra.on = false;
    if (field === "intensity" && value === 0) extra.on = false;
    setCtl(state.sheetDevice, { [field]: value, ...extra });
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
  const field = e.target.dataset.ctl;
  if (!field || !state.sheetDevice) return;
  const val = Number(e.target.value);
  const id = state.sheetDevice;
  const d = findDevice(id);
  if (!d) return;
  const extra = {};
  if (field === "intensity" || field === "volume" || field === "pos" || field === "temp") extra.on = !(field === "volume" && val === 0) && !(field === "intensity" && val === 0);
  state = { ...state, ctl: { ...state.ctl, [id]: { ...ctl(d), [field]: val, ...extra } } };
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
});

let sheetDrag = null;
let sheetDragMoved = false;

function sheetPanel() {
  return document.querySelector(".sheet--device .sheet__panel");
}

function sheetHeights() {
  return { full: Math.min(window.innerHeight * 0.92, 900) };
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

document.addEventListener("pointerdown", (e) => {
  const grab = e.target.closest("[data-sheet-grab]");
  if (!grab || !state.sheetDevice) return;
  if (e.target.closest("button[data-act=close-sheet], input, select, textarea")) return;
  const panel = sheetPanel();
  if (!panel) return;
  sheetDragMoved = false;
  sheetDrag = {
    y: e.clientY,
    startH: panel.getBoundingClientRect().height,
    full: state.sheetSize === "full",
    lastY: e.clientY,
    lastT: performance.now(),
    v: 0,
  };
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
  if (dy < 0) {
    panel.style.transform = "";
    panel.style.height = `${full + Math.min(-dy, 24) * 0.12}px`;
  } else {
    panel.style.height = `${full}px`;
    panel.style.transform = `translateY(${dy}px)`;
  }
});

document.addEventListener("pointerup", (e) => {
  if (!sheetDrag) return;
  const dy = e.clientY - sheetDrag.y;
  const flickDown = sheetDrag.v > 0.55;
  const panel = sheetPanel();
  clearSheetDrag(panel);
  if (dy > 80 || (dy > 28 && flickDown)) {
    patch({ sheetDevice: null, sheetSize: "full", sheetTab: "controls" });
  }
});
document.addEventListener("pointercancel", () => {
  clearSheetDrag(sheetPanel());
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (state.homePeek) {
    patch({ homePeek: null });
    return;
  }
  if (state.sheetScene) {
    patch({ sheetScene: null });
    return;
  }
  if (state.sheetDevice) {
    patch({ sheetDevice: null, sheetSize: "full", sheetTab: "controls" });
    return;
  }
  if (state.helpSheet) patch({ helpSheet: false, helpChat: false });
});

applyTheme();
if (state.loggedIn && ONBOARD.has(state.screen)) state.screen = "home";
render();
