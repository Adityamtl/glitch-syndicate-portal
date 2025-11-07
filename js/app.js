// The Glitch Syndicate - Main Application JavaScript

document.addEventListener("DOMContentLoaded", () => {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const loader = $("#loader");
  const loaderContent = $("#loader-content");
  const appContainer = $("#app-container");
  const mainSections = $$("main > section");
  const quizForm = $("#quiz-form");
  const resultRole = $("#result-role");
  const resultDescription = $("#result-description");

  const roleDescriptions = {
    "DATA RUNNER":
      "You live for the chase. Speed, reflexes, and a neural-linked rig are your tools. You move through data-streams and city streets like a phantom. Your job: get the package, no matter what.",
    "NEURAL HACKER":
      "You are a digital god. The network is your weapon and your playground. Firewalls are puzzles, and corporations are your prey. You fight with code, logic, and pure intellect.",
    "STREET ENFORCER":
      "You are the line between the code and the concrete. Heavily chromed and ready for a fight, you are the muscle. When a data-steal goes wrong, you are the one who gets the team out alive.",
    "ECHO GHOST":
      "You were never here. You specialize in stealth, infiltration, and misdirection. You move unseen, unheard, and leave nothing but whispers and corrupted log files. You are the ultimate spy.",
  };

  // --- Navigation Logic ---
  function showSection(sectionId) {
    mainSections.forEach((section) => {
      section.classList.remove("active");
    });
    const activeSection = $(`#${sectionId}`);
    if (activeSection) {
      activeSection.classList.add("active");
      // Special case for result/join to use flex
      if (sectionId === "result" || sectionId === "join") {
        activeSection.style.display = "flex";
      }
    } else {
      $("#home").classList.add("active"); // Fallback to home
    }
    window.scrollTo(0, 0); // Scroll to top on section change
  }

  // Use event delegation on document to handle all navigation buttons
  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("btn-glitch") &&
      e.target.hasAttribute("data-target")
    ) {
      const targetId = e.target.getAttribute("data-target");
      showSection(targetId);
    }
  });

  // --- Loader/Boot-up Logic ---
  function typeLine(element, text, delay = 100) {
    return new Promise((resolve) => {
      let i = 0;
      const cursor = element.querySelector(".cursor");
      if (cursor) cursor.remove();

      let interval = setInterval(() => {
        if (i < text.length) {
          element.innerHTML =
            text.substring(0, i + 1) + '<span class="cursor"></span>';
          i++;
        } else {
          clearInterval(interval);
          // Remove final cursor for this line
          const finalCursor = element.querySelector(".cursor");
          if (finalCursor) finalCursor.remove();
          resolve();
        }
      }, delay);
    });
  }

  async function startLoader() {
    const lines = loaderContent.querySelectorAll("p");
    await typeLine(lines[0], "> Connecting to the Dark Grid...", 50);
    await new Promise((r) => setTimeout(r, 500));
    await typeLine(lines[1], "> Bypassing NeoCity firewalls... (3/5)...", 50);
    await new Promise((r) => setTimeout(r, 700));
    await typeLine(
      lines[2],
      "> Accessing The Glitch Syndicate mainframe...",
      50
    );
    await new Promise((r) => setTimeout(r, 800));

    lines[3].style.display = "block"; // Show ACCESS GRANTED

    await new Promise((r) => setTimeout(r, 1500));

    // Fade out loader
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    // Fade in app
    appContainer.style.display = "block";
    setTimeout(() => {
      appContainer.style.opacity = "1";
      showSection("home"); // Show home section
    }, 500); // Wait for loader to fade
  }

  // --- Quiz Logic ---
  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(quizForm);
    const answers = {
      q1: formData.get("q1"),
      q2: formData.get("q2"),
      q3: formData.get("q3"),
      q4: formData.get("q4"),
    };

    let scores = {
      runner: 0,
      hacker: 0,
      enforcer: 0,
      ghost: 0,
    };

    // Q1
    if (answers.q1 === "hacker") scores.hacker++;
    if (answers.q1 === "runner") scores.runner++;
    if (answers.q1 === "enforcer") scores.enforcer++;

    // Q2
    if (answers.q2 === "runner") scores.runner++;
    if (answers.q2 === "ghost") scores.ghost++;
    if (answers.q2 === "enforcer") scores.enforcer++;

    // Q3
    if (answers.q3 === "hacker") scores.hacker++;
    if (answers.q3 === "enforcer") scores.enforcer++;
    if (answers.q3 === "ghost") scores.ghost++;

    // Q4
    if (answers.q4 === "enforcer") scores.enforcer++;
    if (answers.q4 === "hacker") scores.hacker++;
    if (answers.q4 === "runner") scores.runner++;

    // Determine result
    let maxScore = 0;
    let result = "DATA RUNNER"; // Default

    for (const role in scores) {
      if (scores[role] > maxScore) {
        maxScore = scores[role];
        if (role === "runner") result = "DATA RUNNER";
        if (role === "hacker") result = "NEURAL HACKER";
        if (role === "enforcer") result = "STREET ENFORCER";
        if (role === "ghost") result = "ECHO GHOST";
      }
    }

    // Handle ties (defaulting to a role)
    if (maxScore === 0) {
      result = "DATA RUNNER";
    }

    // Display result
    resultRole.textContent = result;
    resultDescription.textContent = roleDescriptions[result];
    showSection("result");
  });

  // --- Fake Upload Button ---
  const fakeUploadBtn = $("#fake-upload");
  if (fakeUploadBtn) {
    fakeUploadBtn.addEventListener("click", (e) => {
      e.target.textContent = "TRANSMITTING...";
      e.target.disabled = true;
      setTimeout(() => {
        e.target.textContent = "...DNA SAMPLE VERIFIED.";
        e.target.style.background = "var(--neon-magenta)";
        e.target.style.color = "var(--dark-bg)";
      }, 2000);
    });
  }

  // --- Easter Egg ---
  let keySequence = "";
  document.addEventListener("keydown", (e) => {
    keySequence += e.key;
    if (keySequence.includes("/access")) {
      keySequence = ""; // Reset
      const footer = $("#footer-text");
      if (footer) {
        footer.textContent =
          "HIDDEN PROTOCOL ACTIVATED: //Welcome, true_believer.exe//";
        footer.style.color = "var(--neon-cyan)";
        footer.style.textShadow = "var(--glow-cyan)";
      }
    }
    // Limit sequence length
    if (keySequence.length > 20) {
      keySequence = keySequence.slice(-10);
    }
  });

  // --- Init ---
  if (loader) {
    // Check if user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem("glitchSyndicateLoaderSeen");

    if (hasSeenLoader) {
      // Skip loader, show app immediately
      loader.style.display = "none";
      appContainer.style.display = "block";
      appContainer.style.opacity = "1";
      showSection("home");
    } else {
      // Show loader for first time
      window.onload = () => {
        startLoader();
        sessionStorage.setItem("glitchSyndicateLoaderSeen", "true");
      };
    }
  }
});
