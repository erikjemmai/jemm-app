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

const HOME_STATS = [
  { k: "Status", v: "Active" },
  { k: "People home", v: "3" },
  { k: "Lights on", v: "8" },
  { k: "Rooms playing", v: "2" },
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

const APP_SCREENS = new Set(["home", "rooms", "profiles", "more", "devices", "insights", "settings", "jemm", "help", "notify", "profile", "room"]);
const ONBOARD = new Set(["splash", "welcome", "login", "pair", "found", "wifi", "connecting", "avatar", "account", "done"]);

function blank() {
  return {
    screen: "splash",
    theme: "dark",
    loggedIn: false,
    presence: "living",
    viewingRoom: null,
    avatar: "3",
    email: "user@email.com",
    name: "John Doe",
    home: "John Residence",
    keepIn: true,
    faceId: true,
    showPass: false,
    password: "",
    scene: {},
    devicesOn: {},
    coach: false,
    voice: false,
    sheet: null,
    toast: "",
    connectStep: 0,
  };
}

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "null");
    return saved ? { ...blank(), ...saved, sheet: null, voice: false, toast: "" } : blank();
  } catch {
    return blank();
  }
}

let state = load();
let toastTimer;
let connectTimer;

function persist() {
  const { sheet, voice, toast, ...rest } = state;
  localStorage.setItem(KEY, JSON.stringify(rest));
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme === "light" ? "light" : "dark";
}

function patch(next, redraw = true) {
  state = { ...state, ...next };
  persist();
  applyTheme();
  if (redraw) render();
}

function go(screen, extra = {}) {
  patch({ screen, sheet: null, voice: false, ...extra });
}

function roomById(id) {
  return ROOMS.find((r) => r.id === id) || ROOMS[0];
}

function hereRoom() {
  return state.presence === "away" ? null : roomById(state.presence);
}

function icon(src, extra = "") {
  return `<img src="${src}" alt="" class="${extra}" width="24" height="24" />`;
}

function topnav({ back, mark = true } = {}) {
  return `
    <header class="topnav">
      <div class="topnav__side">
        ${back ? `<button class="icon-btn" data-go="${back}" aria-label="Back">${icon("assets/nav/chevron.svg")}</button>` : ""}
      </div>
      ${mark ? `<img class="topnav__mark" src="assets/jemm-mark.svg" alt="Jemm" />` : `<span></span>`}
      <div class="topnav__side topnav__side--end">
        <button class="icon-btn" data-go="notify" aria-label="Notifications">${icon("assets/nav/bell.svg")}</button>
        <button class="icon-btn" data-go="help" aria-label="Help">${icon("assets/nav/help.svg")}</button>
      </div>
    </header>`;
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
  const item = (id, src, label) => `
    <button class="nav-item ${active === id ? "is-on" : ""}" data-go="${id}">
      ${icon(src)}
      <span>${label}</span>
    </button>`;
  return `
    <nav class="bottom-nav" aria-label="App">
      ${item("home", "assets/nav/icon-home.svg", "Home")}
      ${item("rooms", "assets/nav/icon-rooms.svg", "Rooms")}
      <button class="nav-mic ${state.voice ? "is-on" : ""}" data-act="voice" aria-label="Talk to Jemm">
        ${icon("assets/nav/mic.svg")}
      </button>
      ${item("profiles", "assets/nav/icon-clients.svg", "Profiles")}
      ${item("more", "assets/nav/icon-settings.svg", "More")}
    </nav>`;
}

function toastHtml() {
  return state.toast ? `<div class="toast" role="status">${state.toast}</div>` : "";
}

function flash(text) {
  clearTimeout(toastTimer);
  patch({ toast: text });
  toastTimer = setTimeout(() => patch({ toast: "" }), 2200);
}

function setPresence(id) {
  const prev = state.presence;
  const next = { presence: id, viewingRoom: id === "away" ? null : id };
  if (id === "away") {
    patch(next);
    flash("You’re away. Jemm is watching the whole home.");
    return;
  }
  const room = roomById(id);
  patch(next);
  if (prev === "away") flash(`Jemm knows you’re home — ${room.name}.`);
  else if (prev !== id) flash(`Jemm noticed you walked to the ${room.name.toLowerCase()}.`);
}

function presenceBar() {
  const chips = [
    ...ROOMS.map((r) => ({ id: r.id, label: r.name })),
    { id: "away", label: "Away" },
  ];
  return `
    <div class="presence-bar" aria-label="Demo presence">
      ${chips.map((c) => `
        <button type="button" class="${state.presence === c.id ? "is-on" : ""}" data-presence="${c.id}">${c.label}</button>
      `).join("")}
    </div>`;
}

function deviceIcon(kind) {
  return ICONS[kind] || ICONS.light;
}

function renderSplash() {
  setTimeout(() => {
    if (state.screen === "splash") go(state.loggedIn ? "home" : "welcome");
  }, 1200);
  return `
    ${topnav({ mark: true })}
    <div class="stage">
      <div class="splash"><img src="assets/jemm-mark.svg" alt="Jemm" /></div>
    </div>`;
}

function renderWelcome() {
  return `
    ${topnav()}
    <div class="stage stack-lg">
      <div class="choice-row stack-lg">
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
        <div class="done-mark"><img src="assets/jemm-mark.svg" alt="" width="66" height="54" /></div>
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

function statsFor(room) {
  const items = room ? room.summary : HOME_STATS.map((s) => ({ k: s.k, v: s.v }));
  const photo = room ? room.photo : ROOMS[0].photo;
  return `
    <div class="stat-grid">
      ${items.map((s) => `
        <button class="stat" style="--photo:url('${photo}')" data-go="${room ? "room" : "rooms"}" data-room="${room ? room.id : ""}">
          <span>${s.k}</span>
          <strong>${s.v}</strong>
        </button>`).join("")}
    </div>`;
}

function deviceStrip(room) {
  return `
    <div class="device-row">
      ${room.devices.map((d) => `
        <button class="device ${state.devicesOn[d.id] ? "is-on" : ""}" data-device="${d.id}">
          ${icon(deviceIcon(d.kind))}
          <span class="name">${d.name}</span>
          <span class="meta">${d.detail}</span>
        </button>`).join("")}
    </div>`;
}

function quickStrip(room) {
  return `
    <div class="quick">
      ${room.quick.map((q) => `
        <button type="button" class="${state.scene[room.id] === q.id ? "is-on" : ""}" data-scene="${q.id}" data-room="${room.id}">${q.label}</button>
      `).join("")}
    </div>`;
}

function renderHomeHere(room) {
  return `
    <div class="stack-lg">
      ${presenceBar()}
      <div class="hero-room">
        <div class="hero-row">
          <button class="chip" data-go="rooms">${icon("assets/icons/icon-home.svg")} ${state.home}</button>
          <span class="weather">${room.weather}</span>
        </div>
        <p class="here-flag">You’re here</p>
        <div class="hero-row">
          <div>
            <p class="kicker">Current room</p>
            <h1 class="h1">${room.name}</h1>
          </div>
          <button class="icon-btn" data-go="room" data-room="${room.id}" aria-label="Edit room">${icon("assets/icons/icon-pencil.svg")}</button>
        </div>
        <p class="muted">Jemm can tell you’re in this room — summary, devices, and quick options are for right here.</p>
      </div>
      <section class="stack-sm">
        <div class="hero-row">
          <h2 class="h2">In this room</h2>
          <button class="btn btn--ghost" style="width:auto;min-height:32px;padding:0" data-go="room" data-room="${room.id}">View all</button>
        </div>
        ${statsFor(room)}
      </section>
      <section class="stack-sm">
        <h2 class="h2">Devices</h2>
        ${deviceStrip(room)}
      </section>
      <section class="stack-sm">
        <h2 class="h2">Quick</h2>
        ${quickStrip(room)}
      </section>
    </div>`;
}

function renderHomeAway() {
  const peek = state.viewingRoom ? roomById(state.viewingRoom) : null;
  return `
    <div class="stack-lg">
      ${presenceBar()}
      <div class="hero-room">
        <div class="hero-row">
          <button class="chip" data-go="rooms">${icon("assets/icons/icon-home.svg")} ${state.home}</button>
          <span class="weather">84° · Sunny</span>
        </div>
        <p class="kicker">You’re away</p>
        <h1 class="h1">Whole home</h1>
        <p class="muted">Jemm is running the house. Pick a room to look in — you’re not there, so nothing is assumed.</p>
      </div>
      <section class="stack-sm">
        <div class="hero-row">
          <h2 class="h2">Home status</h2>
          <button class="btn btn--ghost" style="width:auto;min-height:32px;padding:0" data-go="rooms">View all</button>
        </div>
        ${statsFor(null)}
      </section>
      <section class="stack-sm">
        <h2 class="h2">Choose a room</h2>
        <div class="room-row">
          ${ROOMS.map((r) => `
            <button class="room-card" data-peek="${r.id}">
              <img src="${r.photo}" alt="" />
              <div class="pad">
                <strong>${r.name}</strong>
                <span class="muted">${r.climate} · ${r.devices.length} devices</span>
              </div>
            </button>`).join("")}
        </div>
      </section>
      ${peek ? `
        <section class="stack-sm">
          <div class="hero-row">
            <h2 class="h2">Looking at ${peek.name}</h2>
            <button class="btn btn--ghost" style="width:auto;min-height:32px;padding:0" data-act="clear-peek">Close</button>
          </div>
          <p class="muted">You’re still away. This is a remote view — tap a device to adjust it from here.</p>
          ${deviceStrip(peek)}
          ${quickStrip(peek)}
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

function renderHome() {
  const room = hereRoom();
  return `
    ${topnav()}
    ${coachHtml()}
    <div class="stage">${room ? renderHomeHere(room) : renderHomeAway()}</div>
    ${bottomNav("home")}`;
}

function renderRooms() {
  const here = hereRoom();
  return `
    ${topnav()}
    <div class="stage stack-lg">
      ${presenceBar()}
      <h1 class="h1">Rooms</h1>
      <p class="muted">${here ? `Jemm has you in ${here.name}. Other rooms are a tap away.` : "You’re away. Open a room to check on it."}</p>
      <div class="room-list">
        ${ROOMS.map((r) => `
          <button class="room-card" data-go="room" data-room="${r.id}" style="min-width:0">
            <img src="${r.photo}" alt="" />
            <div class="pad">
              <div class="hero-row">
                <strong>${r.name}</strong>
                ${state.presence === r.id ? `<span class="here-flag">Here</span>` : ""}
              </div>
              <span class="muted">${r.climate} · ${r.devices.length} devices</span>
            </div>
          </button>`).join("")}
      </div>
    </div>
    ${bottomNav("rooms")}`;
}

function renderRoom() {
  const room = roomById(state.viewingRoom || state.presence);
  const inHere = state.presence === room.id;
  return `
    ${topnav({ back: "rooms" })}
    <div class="stage stack-lg">
      <div class="hero-room" style="min-height:220px;background:linear-gradient(180deg,transparent,var(--ink)),url('${room.photo}') center/cover;border-radius:16px;padding:16px">
        ${inHere ? `<p class="here-flag">You’re here</p>` : `<p class="kicker">${state.presence === "away" ? "Remote view" : "Not this room"}</p>`}
        <h1 class="h1">${room.name}</h1>
        <p class="muted">${inHere ? "This is the room Jemm has you in." : "Choose devices or a scene. Jemm will run it here even if you’re elsewhere."}</p>
      </div>
      ${statsFor(room)}
      <section class="stack-sm">
        <h2 class="h2">Devices</h2>
        ${deviceStrip(room)}
      </section>
      <section class="stack-sm">
        <h2 class="h2">Quick</h2>
        ${quickStrip(room)}
      </section>
    </div>
    ${bottomNav("rooms")}`;
}

function renderProfiles() {
  const people = [
    { name: state.name, role: "Admin", email: state.email },
    { name: "Alex Rivera", role: "Household", email: "alex@home" },
    { name: "Sam Chen", role: "Guest", email: "sam@home" },
  ];
  return `
    ${topnav()}
    <div class="stage stack-lg">
      <h1 class="h1">Profiles</h1>
      <p class="muted">Who’s in this home — and who Jemm should listen to.</p>
      <div class="profile-grid">
        ${people.map((p, i) => `
          <button class="person" data-go="profile">
            <img class="avatar-sm" src="assets/avatars/${state.avatar}.png" alt="" />
            <span class="grow">
              <strong>${p.name}</strong>
              <span class="muted" style="display:block;font-size:12px">${p.role} · ${p.email}</span>
            </span>
            ${icon("assets/nav/chevron.svg", "chev")}
          </button>`).join("")}
      </div>
    </div>
    ${bottomNav("profiles")}`;
}

function renderMore() {
  return `
    ${topnav()}
    <div class="stage stack-lg">
      <h1 class="h1">More options</h1>
      <button class="card row" data-go="profile" style="padding:16px">
        <img class="avatar-sm" src="assets/avatars/${state.avatar}.png" alt="" />
        <span class="grow">
          <strong>${state.name}</strong>
          <span class="muted" style="display:block;font-size:12px">${state.email}</span>
        </span>
        ${icon("assets/nav/chevron.svg", "chev")}
      </button>
      <button class="card row" data-go="jemm" style="padding:16px">
        <span class="arc-well">${icon("assets/devices/icon-arc.svg")}</span>
        <span class="grow"><strong>Jemm Settings</strong></span>
        ${icon("assets/nav/chevron.svg", "chev")}
      </button>
      <div class="card list-card">
        <button class="row" data-go="devices">${icon("assets/devices/icon-light.svg", "glyph")} <span class="grow">Devices</span> ${icon("assets/nav/chevron.svg", "chev")}</button>
        <button class="row" data-go="insights">${icon("assets/nav/icon-rooms.svg", "glyph")} <span class="grow">Insights</span> ${icon("assets/nav/chevron.svg", "chev")}</button>
        <button class="row" data-go="settings">${icon("assets/nav/icon-settings.svg", "glyph")} <span class="grow">Settings</span> ${icon("assets/nav/chevron.svg", "chev")}</button>
      </div>
      <button class="btn btn--secondary" data-act="logout">Log out</button>
    </div>
    ${bottomNav("more")}`;
}

function renderProfile() {
  return `
    ${topnav({ back: "more" })}
    <div class="stage stack-lg">
      <h1 class="h1">Edit profile</h1>
      <div class="center stack-sm">
        <img src="assets/avatars/${state.avatar}.png" alt="" width="120" height="120" style="margin:0 auto;border-radius:24px;background:#0b0b0b" />
        <button class="btn btn--ghost" data-go="avatar">Change avatar</button>
      </div>
      <form class="stack" data-form="profile">
        <div class="field">
          <label for="name">Name</label>
          <input id="name" name="name" value="${state.name}" />
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" value="${state.email}" />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input id="password" name="password" type="password" placeholder="••••••••••••" />
        </div>
        <button class="btn btn--primary" type="submit">Save</button>
      </form>
    </div>
    ${bottomNav("profiles")}`;
}

function renderDevices() {
  const all = ROOMS.flatMap((r) => r.devices.map((d) => ({ ...d, room: r.name, roomId: r.id })));
  return `
    ${topnav({ back: "more" })}
    <div class="stage stack-lg">
      <h1 class="h1">Devices</h1>
      <p class="muted">Everything Jemm can see in this home.</p>
      <div class="stack-sm">
        ${all.map((d) => `
          <button class="card row" data-device="${d.id}" style="padding:16px">
            ${icon(deviceIcon(d.kind), "glyph")}
            <span class="grow">
              <strong>${d.name}</strong>
              <span class="muted" style="display:block;font-size:12px">${d.room} · ${d.detail}</span>
            </span>
          </button>`).join("")}
      </div>
    </div>
    ${bottomNav("more")}`;
}

function renderInsights() {
  return `
    ${topnav({ back: "more" })}
    <div class="stage stack-lg">
      <h1 class="h1">Insights</h1>
      <p class="muted">Local-only snapshots. Nothing leaves the house.</p>
      <div class="stat-grid">
        <div class="stat" style="--photo:url('assets/rooms/cutaway-guest.png')"><span>Energy today</span><strong>12.4 kWh</strong></div>
        <div class="stat" style="--photo:url('assets/rooms/cutaway-guest.png')"><span>Voice asks</span><strong>18</strong></div>
        <div class="stat" style="--photo:url('assets/rooms/cutaway-guest.png')"><span>Scenes run</span><strong>6</strong></div>
        <div class="stat" style="--photo:url('assets/rooms/cutaway-guest.png')"><span>Away hours</span><strong>4.2</strong></div>
      </div>
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
        <button class="row" data-go="notify">
          <span class="grow">Notifications</span>
          ${icon("assets/nav/chevron.svg", "chev")}
        </button>
      </div>
    </div>
    ${bottomNav("more")}`;
}

function renderJemm() {
  return `
    ${topnav({ back: "more" })}
    <div class="stage stack-lg">
      <h1 class="h1">Jemm Settings</h1>
      <div class="card card--hero">
        <img src="assets/devices/hero-arc.svg" alt="" width="48" height="94" />
        <h2 class="h2">Jemm Arc</h2>
        <p class="muted">Online · ID124I50 · Living room</p>
      </div>
      <div class="card list-card">
        <div class="row"><span class="grow">Halo brightness</span><span class="muted">60%</span></div>
        <div class="row"><span class="grow">Power mode</span><span class="muted">Balanced</span></div>
        <div class="row"><span class="grow">Wake word</span><span class="muted">Hey Jemm</span></div>
        <div class="row"><span class="grow">Processing</span><span class="muted">On device</span></div>
      </div>
    </div>
    ${bottomNav("more")}`;
}

function renderHelp() {
  return `
    ${topnav({ back: state.loggedIn ? "home" : "welcome" })}
    <div class="stage stack-lg">
      <h1 class="h1">Help</h1>
      <p class="muted">Support from inside the app. Keep it short.</p>
      <div class="card list-card">
        <button class="row"><span class="grow">Pairing an Arc</span>${icon("assets/nav/chevron.svg", "chev")}</button>
        <button class="row"><span class="grow">Rooms and presence</span>${icon("assets/nav/chevron.svg", "chev")}</button>
        <button class="row"><span class="grow">Talk to a person</span>${icon("assets/nav/chevron.svg", "chev")}</button>
      </div>
    </div>
    ${state.loggedIn ? bottomNav("more") : ""}`;
}

function renderNotify() {
  const notes = [
    { t: "You’re in the living room", d: "Jemm switched Home to this room." },
    { t: "Backyard lights on", d: "Dusk scene started at 7:42." },
    { t: "Arc is online", d: "All local. No cloud hop." },
  ];
  return `
    ${topnav({ back: state.loggedIn ? "home" : "welcome" })}
    <div class="stage stack-lg">
      <h1 class="h1">Notifications</h1>
      <div class="stack-sm">
        ${notes.map((n) => `
          <article class="card">
            <strong>${n.t}</strong>
            <p class="muted">${n.d}</p>
          </article>`).join("")}
      </div>
    </div>
    ${state.loggedIn ? bottomNav("home") : ""}`;
}

function voiceOverlay() {
  if (!state.voice) return "";
  return `
    <div class="overlay" data-act="voice-close">
      <div class="voice" data-stop>
        <div class="orb"><img src="assets/jemm-mark.svg" alt="" width="48" height="40" /></div>
        <h2 class="h2">Listening</h2>
        <p class="muted">Try “dim the living room” or “I’m heading out.”</p>
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
  app.innerHTML = `
    <div class="shell ${onboard ? "is-onboard" : "is-app"}">
      ${fn()}
      ${voiceOverlay()}
      ${toastHtml()}
    </div>`;
}

function finishOnboard() {
  go("home", { loggedIn: true, coach: true, presence: "living", viewingRoom: "living" });
}

document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-go],[data-act],[data-presence],[data-avatar],[data-device],[data-scene],[data-peek],[data-room],[data-field-toggle]");
  if (!t) {
    if (e.target.closest("[data-act=voice-close]")) patch({ voice: false });
    return;
  }
  if (t.dataset.go) {
    const extra = {};
    if (t.dataset.room) extra.viewingRoom = t.dataset.room;
    if (t.dataset.go === "avatar" && state.loggedIn) extra.screen = "avatar";
    go(t.dataset.go, extra);
    return;
  }
  if (t.dataset.presence) {
    setPresence(t.dataset.presence);
    if (state.screen !== "home" && state.screen !== "rooms") go("home");
    return;
  }
  if (t.dataset.avatar) {
    patch({ avatar: t.dataset.avatar });
    return;
  }
  if (t.dataset.device) {
    const id = t.dataset.device;
    patch({ devicesOn: { ...state.devicesOn, [id]: !state.devicesOn[id] } });
    return;
  }
  if (t.dataset.scene) {
    const roomId = t.dataset.room;
    patch({ scene: { ...state.scene, [roomId]: t.dataset.scene } });
    flash(`${roomById(roomId).name}: ${t.textContent}`);
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
  if (act === "dismiss-coach") patch({ coach: false });
  if (act === "clear-peek") patch({ viewingRoom: null });
  if (act === "theme") patch({ theme: state.theme === "light" ? "dark" : "light" });
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
});

applyTheme();
if (state.loggedIn && ONBOARD.has(state.screen)) state.screen = "home";
render();
