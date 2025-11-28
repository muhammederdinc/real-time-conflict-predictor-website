const translations = {
  en: {
    "nav.features": "Features",
    "nav.usage": "Usage",
    "hero.badge": "Now in Beta",
    "hero.titleStart": "Predict Conflicts",
    "hero.titleEnd": "Before They Happen",
    "hero.subtitle":
      "A proactive VS Code extension that detects potential merge conflicts in real-time while you code. Save time and avoid merge hell.",
    "hero.cta": "Install Extension",
    "features.title": "Why Use Conflict Predictor?",
    "features.subtitle":
      "Stop wasting time resolving complex merge conflicts. Catch them early.",
    "features.realtime.title": "Real-Time Detection",
    "features.realtime.desc":
      "Analyzes your code as you type and checks against the master branch to warn you of potential conflicts instantly.",
    "features.github.title": "GitHub Integration",
    "features.github.desc":
      "Connects with GitHub API to scan open Pull Requests and detect conflicts with other team members' work.",
    "features.visual.title": "Visual Alerts",
    "features.visual.desc":
      "Get clear visual indicators in the status bar, tree view, and editor gutter. Red for high risk, green for safe.",
    "how.title": "Seamless Integration",
    "how.step1.title": "Install & Connect",
    "how.step1.desc":
      "Install from Marketplace and add your GitHub Personal Access Token.",
    "how.step2.title": "Code as Usual",
    "how.step2.desc":
      "Work on your files. The extension runs in the background checking for conflicts.",
    "how.step3.title": "Resolve Early",
    "how.step3.desc":
      "See alerts in the status bar and side panel. Fix issues before merging.",
    "config.title": "Simple Configuration",
    "config.subtitle":
      "Get up and running in seconds. The extension guides you through the setup process.",
    "config.step1.title": "1. Generate Token",
    "config.step1.desc":
      'Go to <a href="https://github.com/settings/tokens/new?scopes=repo,read:user" target="_blank" class="text-primary hover:underline">GitHub Developer Settings</a> and generate a new "Classic" token.',
    "config.step2.title": "2. Select Scopes",
    "config.step2.desc":
      "Make sure to select the repo and read:user scopes to allow the extension to read PRs.",
    "config.step3.title": "3. Paste in VS Code",
    "config.step3.desc":
      'Click the "Connect GitHub" warning in the status bar and paste your token.',
  },
  tr: {
    "nav.features": "Özellikler",
    "nav.usage": "Kullanım",
    "hero.badge": "Beta Sürümünde",
    "hero.titleStart": "Çakışmaları",
    "hero.titleEnd": "Oluşmadan Önleyin",
    "hero.subtitle":
      "Kod yazarken olası merge çakışmalarını gerçek zamanlı tespit eden proaktif VS Code eklentisi. Zaman kazanın, merge karmaşasından kurtulun.",
    "hero.cta": "Eklentiyi Yükle",
    "features.title": "Neden Conflict Predictor?",
    "features.subtitle":
      "Karmaşık merge çakışmalarını çözmekle vakit kaybetmeyin. Onları erkenden yakalayın.",
    "features.realtime.title": "Gerçek Zamanlı Tespit",
    "features.realtime.desc":
      "Siz kod yazarken arka planda çalışır ve master branch ile karşılaştırma yaparak olası çakışmaları anında bildirir.",
    "features.github.title": "GitHub Entegrasyonu",
    "features.github.desc":
      "GitHub API ile bağlanarak açık Pull Request'leri tarar ve takım arkadaşlarınızın çalışmalarıyla olan çakışmaları bulur.",
    "features.visual.title": "Görsel Uyarılar",
    "features.visual.desc":
      "Durum çubuğu, ağaç görünümü ve editör içinde net görsel uyarılar alın. Yüksek risk için kırmızı, güvenli için yeşil.",
    "how.title": "Kolay Entegrasyon",
    "how.step1.title": "Yükle ve Bağla",
    "how.step1.desc":
      "Marketplace'den yükleyin ve GitHub Kişisel Erişim Token'ınızı ekleyin.",
    "how.step2.title": "Kodlamaya Devam Et",
    "how.step2.desc":
      "Dosyalarınız üzerinde çalışın. Eklenti arka planda çakışmaları kontrol eder.",
    "how.step3.title": "Erkenden Çöz",
    "how.step3.desc":
      "Durum çubuğu ve yan paneldeki uyarıları görün. Sorunları birleştirmeden önce çözün.",
    "config.title": "Kolay Kurulum",
    "config.subtitle":
      "Saniyeler içinde kullanmaya başlayın. Eklenti kurulum sürecinde size rehberlik eder.",
    "config.step1.title": "1. Token Oluşturun",
    "config.step1.desc":
      '<a href="https://github.com/settings/tokens/new?scopes=repo,read:user" target="_blank" class="text-primary hover:underline">GitHub Developer Settings</a> sayfasına gidin ve yeni bir "Classic" token oluşturun.',
    "config.step2.title": "2. İzinleri Seçin",
    "config.step2.desc":
      "Eklentinin PR'ları okuyabilmesi için repo ve read:user izinlerini seçtiğinizden emin olun.",
    "config.step3.title": "3. VS Code'a Yapıştırın",
    "config.step3.desc":
      'Durum çubuğundaki "Connect GitHub" uyarısına tıklayın ve token\'ınızı yapıştırın.',
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("lang-toggle");
  const currentLangSpan = document.getElementById("current-lang");
  const themeToggle = document.getElementById("theme-toggle");
  let currentLang = "en";

  // Check browser language or saved preference
  const savedLang = localStorage.getItem("preferred-lang");
  if (savedLang) {
    currentLang = savedLang;
  } else {
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === "tr") {
      currentLang = "tr";
    }
  }

  // Check theme preference
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  updateLanguage(currentLang);

  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "tr" : "en";
    updateLanguage(currentLang);
    localStorage.setItem("preferred-lang", currentLang);
  });

  themeToggle.addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  });

  function updateLanguage(lang) {
    // ...existing code...
    currentLangSpan.textContent = lang.toUpperCase();

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
  }

  // Animation Logic
  const typingArea = document.getElementById("typing-area");
  const popup = document.getElementById("conflict-popup");
  const statusBar = document.getElementById("status-bar");
  const conflictStatus = document.getElementById("conflict-status");
  const conflictGutter = document.getElementById("conflict-gutter");

  const textToType = "userRole: 'admin',";
  let charIndex = 0;
  let isDeleting = false;
  let isWaiting = false;

  function type() {
    if (isWaiting) return;

    const currentText = textToType.substring(0, charIndex);
    typingArea.innerHTML = `<span class="text-[#9cdcfe]">${
      currentText.split(":")[0]
    }</span>${
      currentText.includes(":") ? ": " : ""
    }<span class="text-[#ce9178]">${currentText.split(":")[1] || ""}</span>`;

    if (!isDeleting && charIndex < textToType.length) {
      charIndex++;
      setTimeout(type, 100 + Math.random() * 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      // Finished typing or deleting
      if (!isDeleting) {
        // Typed full text, wait then show conflict
        isWaiting = true;
        setTimeout(showConflict, 500);
      } else {
        // Deleted full text, restart
        isDeleting = false;
        setTimeout(type, 500);
      }
    }
  }

  function showConflict() {
    // Show popup
    popup.classList.remove("translate-x-[120%]");
    popup.classList.add("translate-x-0");

    // Update status bar
    statusBar.classList.remove("bg-[#007acc]");
    statusBar.classList.add("bg-[#c72e0f]"); // VS Code error red

    // Update status text
    conflictStatus.innerHTML =
      '<i class="fas fa-exclamation-triangle"></i><span>1 Conflict Detected</span>';
    conflictStatus.classList.add("bg-red-700");

    // Show gutter
    conflictGutter.classList.remove("bg-red-500/0");
    conflictGutter.classList.add("bg-red-500");

    // Wait then reset
    setTimeout(resetAnimation, 4000);
  }

  function resetAnimation() {
    // Hide popup
    popup.classList.remove("translate-x-0");
    popup.classList.add("translate-x-[120%]");

    // Reset status bar
    statusBar.classList.remove("bg-[#c72e0f]");
    statusBar.classList.add("bg-[#007acc]");

    // Reset status text
    conflictStatus.innerHTML =
      '<i class="fas fa-check"></i><span>No Conflicts</span>';
    conflictStatus.classList.remove("bg-red-700");

    // Hide gutter
    conflictGutter.classList.remove("bg-red-500");
    conflictGutter.classList.add("bg-red-500/0");

    // Start deleting
    isWaiting = false;
    isDeleting = true;
    setTimeout(type, 500);
  }

  // Start animation
  setTimeout(type, 1000);

  // Token Configuration Animation
  const cursor = document.getElementById("cursor");
  const viewEditor = document.getElementById("view-editor");
  const viewSettings = document.getElementById("view-settings");
  const tokenInput = document.getElementById("token-input");
  const tokenSuccess = document.getElementById("token-success");
  const connectBtn = document.getElementById("connect-btn");

  function runTokenAnimation() {
    // Reset state
    viewEditor.style.opacity = "1";
    viewSettings.style.opacity = "0";
    tokenInput.textContent = "";
    tokenSuccess.classList.add("hidden");
    tokenSuccess.classList.remove("flex");
    cursor.style.top = "50%";
    cursor.style.left = "50%";
    cursor.style.transform = "scale(1)";

    // 1. Move cursor to Connect button
    setTimeout(() => {
      const btnRect = connectBtn.getBoundingClientRect();
      // We need relative coordinates within the container
      // Since the container is relative, we can approximate or calculate
      // For simplicity in this demo, we'll use percentage approximations based on the design
      cursor.style.top = "92%"; // Status bar height
      cursor.style.left = "25%"; // Button position
    }, 1000);

    // 2. Click
    setTimeout(() => {
      cursor.style.transform = "scale(0.8)";
    }, 2000);
    setTimeout(() => {
      cursor.style.transform = "scale(1)";
    }, 2200);

    // 3. Switch View
    setTimeout(() => {
      viewEditor.style.opacity = "0";
      viewSettings.style.opacity = "1";
    }, 2500);

    // 4. Move cursor to input
    setTimeout(() => {
      cursor.style.top = "45%";
      cursor.style.left = "20%";
    }, 3000);

    // 5. Type Token
    setTimeout(() => {
      const token = "ghp_7zK9...1234";
      let i = 0;
      const typeToken = setInterval(() => {
        tokenInput.textContent += token[i];
        i++;
        if (i >= token.length) {
          clearInterval(typeToken);
          // Show success
          setTimeout(() => {
            tokenSuccess.classList.remove("hidden");
            tokenSuccess.classList.add("flex");
          }, 500);
        }
      }, 100);
    }, 4000);

    // Loop
    setTimeout(runTokenAnimation, 8000);
  }

  // Start token animation
  setTimeout(runTokenAnimation, 2000);
});
