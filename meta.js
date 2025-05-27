if (window.top !== window.self) {
  const allowedHosts = [
    "tv1.igo-bokep.icu",
    "www.igo-bokep.icu"
  ];

  let referrerHost = "";
  try {
    referrerHost = new URL(document.referrer).host;
  } catch (e) {
    referrerHost = ""; // Jika referrer invalid atau kosong
  }

  if (!allowedHosts.includes(referrerHost)) {
    window.top.location.href = "https://tv1.igo-bokep.icu/?utm_medium=blocked&utm_source=antiembed";
  }
}
