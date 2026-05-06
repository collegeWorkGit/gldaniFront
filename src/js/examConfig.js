// exams config

// Module exam configurations
const moduleConfigs = {
  markup: {
    name: "Markup",
    exams: [
      {
        time: new Date(2025, 10, 24).getTime(),
        text: "ს.შ 1,2,3 (HTML & CSS)",
        date: "24.11.2025",
        duration: "3 სთ",
      },
      {
        time: new Date(2025, 10, 26).getTime(),
        text: "ს.შ 4 ვებგვერდის ელემენტების გაფორმება სტილების საშუალებით",
        date: "26.11.2025",
        duration: "3 სთ",
      },
      {
        time: new Date(2025, 10, 27).getTime(),
        text: "ს.შ 5,6 ვებგვერდის ინტერფეისის მორგება სხვადასხვა მოწყობილობებზე",
        date: "27.11.2025",
        duration: "3 სთ",
      },
    ],
  },
  tailwindCss: {
    name: "TailwindCss",
    exams: [
      {
        time: new Date(2026, 0, 4).getTime(),
        text: "ს.შ 1  ვებგვერდის კომპონენტების გაფორმება Sass/scss პრე პრიცესორის შესაძლებლობებით",
        date: "04.01.2026",
        duration: "3 სთ",
      },
      {
        time: new Date(2026, 0, 5).getTime(),
        text: "ს.შ 2 ვებგვერდის მაკეტის აგება Tailwind-ის  საშუალებით",
        date: "05.01.2026",
        duration: "2 სთ",
      },
      {
        time: new Date(2026, 0, 9).getTime(),
        text: "ს.შ 3 ვებგვერდის ობიექტების გაფორმება",
        date: "09.01.2026",
        duration: "3 სთ",
      },
    ],
  },
  javascript: {
    name: "JavaScript",
    exams: [
      {
        time: new Date(2026, 3, 15).getTime(),
        text: "ს.შ 1,3 ცვლადები, მასივები და ობიექტები",
        date: "15.04.2026",
        duration: "4 სთ",
      },
      {
        time: new Date(2026, 3, 16).getTime(),
        text: "ს.შ 2,4 ფორმები, თარიღები და ტაიმერები",
        date: "16.04.2026",
        duration: "4 სთ",
      },
      {
        time: new Date(2026, 3, 18).getTime(),
        text: "ს.შ 5 (Shopping List - DOM მანიპულაცია)",
        date: "18.04.2026",
        duration: "3 სთ",
      },
      {
        time: new Date(2026, 3, 17).getTime(),
        text: "ს.შ 6 API Fetch და CRUD (Delete)",
        date: "17.04.2026",
        duration: "2 სთ",
      },
    ],
  },
};

function initializeExamConfig(moduleName, containerSelector) {
  const config = moduleConfigs[moduleName];
  if (!config) {
    console.error(`Module config not found: ${moduleName}`);
    return;
  }

  const accordions = document.querySelectorAll(containerSelector);

  accordions.forEach((details, index) => {
    const summary = details.querySelector("summary");
    const targetConfig = config.exams[index];

    if (!targetConfig) return;

    summary.innerHTML = "";

    const badge = document.createElement("span");
    badge.classList.add("badge", "badge-colored");
    badge.textContent = `გამოცდა ${index + 1}`;

    if (targetConfig.time === null) {
      badge.classList.add("soon");
    }

    let timeBadge = "";
    if (targetConfig.duration) {
      timeBadge = `<span class="badge badge-time">${targetConfig.duration}</span>`;
    }

    summary.innerHTML = `
    ${badge.outerHTML}
    ${targetConfig.text}
    ${timeBadge}
    ${targetConfig.date ? `- ${targetConfig.date}` : ""}
  `.trim();

    summary.addEventListener("click", (e) => {
      const now = Date.now();

      if (targetConfig.time === null) {
        e.preventDefault();
        alert("გამოცდის თარიღი მალე დაემატება");
      } else if (!details.open && now < targetConfig.time) {
        e.preventDefault();
        alert(`გამოცდა გაიხსნება ${targetConfig.date} რიცხვში`);
      } else {
        if (details.open) {
          details.classList.remove("opening");
          details.classList.add("closing");
        } else {
          details.classList.remove("closing");
          details.classList.add("opening");
        }
      }
    });

    details.addEventListener("toggle", () => {
      if (details.open) {
        details.classList.add("open");
        details.classList.remove("closed", "closing");

        setTimeout(() => {
          details.classList.remove("opening");
        }, 300);
      } else {
        details.classList.add("closed");
        details.classList.remove("open", "opening");

        setTimeout(() => {
          details.classList.remove("closing");
        }, 300);
      }
    });

    details.classList.add("closed");
  });
}

export { initializeExamConfig, moduleConfigs };
