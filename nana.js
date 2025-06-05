const allowedRootDomain = "igo-bokep.beauty";
const currentHost = window.location.host;

if (!currentHost.endsWith(allowedRootDomain)) {
  window.location.href = "https://igo-bokep.beauty/?utm_source=google_organic";
}
