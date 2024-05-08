import i from "path";
import { fileURLToPath as l } from "url";
import { app as o, BrowserWindow as s, session as a } from "electron";
let c = l(import.meta.url), m = i.dirname(c);
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";
process.platform === "win32" && o.setAppUserModelId(o.getName());
o.requestSingleInstanceLock() || (o.quit(), process.exit(0));
let e = null;
async function r() {
  e = new s({
    webPreferences: {
      // Warning: Enabling nodeIntegration and disabling contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      nodeIntegration: !0,
      contextIsolation: !0
    }
  });
  try {
    process.env.VITE_DEV_SERVER_URL ? (e.loadURL(process.env.VITE_DEV_SERVER_URL), e.webContents.openDevTools()) : e.loadFile(i.join(m, "../.output", "public", "index.html"));
  } catch {
  }
  const n = { url: "file://", name: "dummy_name", value: "dummy" };
  a.defaultSession.cookies.set(n).then(() => {
    console.log(n);
  }, (t) => {
    console.error(t);
  });
}
o.on("window-all-closed", () => {
  e = null, process.platform !== "darwin" && o.quit();
});
o.on("second-instance", () => {
  e && (e.isMinimized() && e.restore(), e.focus());
});
o.on("activate", () => {
  const n = s.getAllWindows();
  n.length ? n[0].focus() : r();
});
o.whenReady().then(() => {
  r();
});
