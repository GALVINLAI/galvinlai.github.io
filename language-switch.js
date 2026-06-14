(function () {
  const pageMap = {
    "/": "index.html",
    "/index.html": "index.html",
    "/publications.html": "publications.html",
    "/softwares.html": "softwares.html",
    "/talks.html": "talks.html",
    "/teaching.html": "teaching.html",
    "/cv.html": "cv.html",
    "/404.html": "404.html",
  };

  const zhNav = [
    ["首页", "/zh/"],
    ["论文", "/zh/publications.html"],
    ["软件", "/zh/softwares.html"],
    ["报告", "/zh/talks.html"],
    ["教学", "/zh/teaching.html"],
    ["简历", "/zh/cv.html"],
  ];

  const enNav = [
    ["Home", "/"],
    ["Publications", "/publications.html"],
    ["Software", "/softwares.html"],
    ["Talks", "/talks.html"],
    ["Teaching", "/teaching.html"],
    ["CV", "/cv.html"],
  ];

  function normalizedPath() {
    let path = window.location.pathname;
    if (path.endsWith("/")) {
      path += "index.html";
    }
    return path;
  }

  function counterpartPath() {
    const path = normalizedPath();
    const isChinese = path.startsWith("/zh/");
    if (isChinese) {
      const file = path.replace(/^\/zh\//, "") || "index.html";
      return file === "index.html" ? "/" : `/${file}`;
    }
    const file = pageMap[path] || path.replace(/^\//, "") || "index.html";
    return file === "index.html" ? "/zh/" : `/zh/${file}`;
  }

  function updateNavbar(isChinese) {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const nav = isChinese ? zhNav : enNav;
    navLinks.forEach((link, index) => {
      if (!nav[index]) return;
      link.textContent = nav[index][0];
      link.setAttribute("href", nav[index][1]);
    });
  }

  function addSwitcher(isChinese) {
    const link = document.createElement("a");
    link.className = "language-switch";
    link.href = counterpartPath();
    link.textContent = isChinese ? "English" : "中文";
    link.setAttribute("aria-label", isChinese ? "Switch to English" : "切换到中文版");
    document.body.appendChild(link);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const isChinese = normalizedPath().startsWith("/zh/");
    document.documentElement.lang = isChinese ? "zh-CN" : "en";
    updateNavbar(isChinese);
    addSwitcher(isChinese);
  });
})();
