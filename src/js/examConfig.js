// exams config

// Module exam configurations
const moduleConfigs = {
  markup: {
    name: "ვებგვერდის მარკირება და სტილებით გაფორმება (html/css)",
    exams: [
      {
        time: new Date(2025, 10, 24).getTime(),
        text: "ს.შ 1,2,3 (HTML & CSS)",
        date: "24.11.2025",
        duration: "3 სთ",
        content: `
          <h3>📝 დავალების არსი (ეტაპი 1 - მარკაპი):</h3>
          <ol>
            <li>ბიბ-ების საქაղდეში გაადგილდით <code>exams/markup/part1/</code> ფოლდერში.</li>
            <li>შექმენით სემანტიკური HTML სტრუქტურა <code>index.html</code> ფაილში (<code>header</code>, <code>nav</code>, <code>main</code>, <code>section</code>, <code>footer</code>).</li>
            <li>დაამატეთ მინიმუმ 3 განსხვავებული HTML კომპონენტი (კარტები, ღილაკები, ფორმა).</li>
            <li>დაკავშირეთ <code>assets/css/</code> დირექტორიაში განთავსებული CSS ფაილები.</li>
            <li>დაეთმეთ მხოლოდ ძირითადი სტილები, რესპონსივობა და ანიმაციები არის შემდეგი ეტაპები.</li>
          </ol>
          <h3>📁 ჩასაბარებელი:</h3>
          <p>დაშლილი HTML ფაილი <code>exams/markup/part1/index.html</code> და დაკავშირებული CSS ფაილები.</p>
          <p>
            <a href="https://drive.google.com/drive/folders/gldaniFront-markup-submissions" target="_blank">🔗 ჩასაბარებელი ლინკი (Google Drive)</a>
          </p>
        `,
      },
      {
        time: new Date(2025, 10, 26).getTime(),
        text: "ს.შ 4 ვებგვერდის ელემენტების გაფორმება სტილების საშუალებით",
        date: "26.11.2025",
        duration: "3 სთ",
        content: `
          <h3>📝 დავალების არსი (ეტაპი 2 - დიზაინი):</h3>
          <ol>
            <li>გაადგილდით <code>exams/markup/part2/</code> ფოლდერში.</li>
            <li>ახალი ან განახლებული HTML სტრუქტურის ბაზაზე შექმენით თეკლი დიზაინი <code>assets/css/style.css</code>-ში.</li>
            <li>იმპლემენტირეთ:<ul>
              <li>ფერთა სქემა (მინიმუმ 3 ძირითადი ფერი)</li>
              <li>ტიპოგრაფია (საიტის მთელი სიგრძის ერთიანი ფონტის საოჯახო)</li>
              <li>სპেისინგი და ლეიაუტი (Flexbox ან Grid)</li>
              <li>ელემენტების ინტერაქტიულობა (hover, focus ეფექტები)</li>
            </ul></li>
            <li>განთავსეთ ყველა აუცილებელი CSS ფაილი <code>assets/css/</code> დირექტორიაში.</li>
          </ol>
          <h3>📁 ჩასაბარებელი:</h3>
          <p>დაშლილი HTML და CSS ფაილები <code>exams/markup/part2/</code> დირექტორიაში.</p>
          <p>
            <a href="https://drive.google.com/drive/folders/gldaniFront-markup-submissions" target="_blank">🔗 ჩასაბარებელი ლინკი (Google Drive)</a>
          </p>
        `,
      },
      {
        time: new Date(2025, 10, 27).getTime(),
        text: "ს.შ 5,6 ვებგვერდის ინტერფეისის მორგება სხვადასხვა მოწყობილობებზე",
        date: "27.11.2025",
        duration: "3 სთ",
        content: `
          <h3>📝 დავალების არსი (ეტაპი 3 - რესპონსივობა):</h3>
          <ol>
            <li>გაადგილდით <code>exams/markup/part3/</code> ფოლდერში.</li>
            <li>განუვითარეთ რესპონსივი დიზაინი CSS Media Queries გამოყენებით:</li>
            <li>დააბრუნებელი breakpoint-ები:<ul>
              <li><code>Mobile:</code> 320px - 480px</li>
              <li><code>Tablet:</code> 480px - 768px</li>
              <li><code>Desktop:</code> 768px+</li>
            </ul></li>
            <li>აღმოფხვრეთ ყველა overflow პრობლემა მცირე დისპლეიებზე.</li>
            <li>შექმენით მობილური-მეგობრული ნავიგაცია (hamburger მენიუ CSS-ის ან მცირე JS გამოყენებით).</li>
            <li>დაემატოს ლეიაუტის ანიმაციური გადასვლა (<code>animations.css</code>) ხელმისაწვდომი ყველა ებზე.</li>
          </ol>
          <h3>📁 ჩასაბარებელი:</h3>
          <p>დაშლილი HTML, CSS და ანიმაციული ფაილები <code>exams/markup/part3/</code> დირექტორიაში.</p>
          <p>
            <a href="https://drive.google.com/drive/folders/gldaniFront-markup-submissions" target="_blank">🔗 ჩასაბარებელი ლინკი (Google Drive)</a>
          </p>
        `,
      },
    ],
  },
  tailwindCss: {
    name: "TailwindCss/Sass",
    exams: [
      {
        time: new Date(2026, 0, 4).getTime(),
        text: "ს.შ 1  ვებგვერდის კომპონენტების გაფორმება Sass/scss პრე პრიცესორის შესაძლებლობებით",
        date: "04.01.2026",
        duration: "3 სთ",
        content: `
          <h3>📝 დავალების არსი (Sass/SCSS ეტაპი):</h3>
          <ol>
            <li>გაადგილდით <code>exams/tailwind/Sass/</code> ფოლდერში.</li>
            <li>შექმენით ან გააქტიურეთ Bootstrap CSS Framework ბაზაზე:</li>
            <li>ჩაკერძოთ Bootstrap ფაილები <code>assets/bootstrap/css/</code> და <code>assets/bootstrap/js/</code> დირექტორიებში.</li>
            <li>აწერეთ SCSS/Sass ცვლადები ფერებისთვის, ზომებისთვის და დაშორებებისთვის <code>assets/css/</code> დირექტორიაში.</li>
            <li>შექმენით მინიმუმ 3 რე-იმპლემენტაციო SCSS mixin-ი ღიაკების, ბარათებისა და ნავიგაციოსთვის.</li>
            <li>compile-უთ SCSS CSS-ში და დააკავშირეთ HTML-ში.</li>
            <li>დაემატოს Bootstrap კომპონენტები (cards, buttons, navbar, forms).</li>
          </ol>
          <h3>📁 ჩასაბარებელი:</h3>
          <p>Sass/SCSS ფაილები და compiled CSS ფაილები <code>exams/tailwind/Sass/assets/</code> დირექტორიაში.</p>
          <p>
            <a href="https://drive.google.com/drive/folders/gldaniFront-tailwind-submissions" target="_blank">🔗 ჩასაბარებელი ლინკი (Google Drive)</a>
          </p>
        `,
      },
      {
        time: new Date(2026, 0, 5).getTime(),
        text: "ს.შ 2 ვებგვერდის მაკეტის აგება Tailwind-ის  საშუალებით",
        date: "05.01.2026",
        duration: "2 სთ",
        content: `
          <h3>📝 დავალების არსი (Tailwind CSS ეტაპი 1):</h3>
          <ol>
            <li>გაადგილდით <code>exams/tailwind/tailwindPart1/</code> ფოლდერში.</li>
            <li>დაყენება Tailwind CSS (CDN ან npm ვერსია, როგორც გამოგებთ).</li>
            <li>შექმენით HTML სტრუქტურა Bootstrap კომპონენტებიდან ან ლოკალური კომპონენტებიდან:</li>
            <li>შემდეგი ელემენტები უნდა იყოს:<ul>
              <li>Header nav ბარი (responsive)</li>
              <li>Hero სექცია (უარი თქმის ტექსტი)</li>
              <li>პროდუქტების grid გამოყენებით <code>grid-cols-1 md:grid-cols-2 lg:grid-cols-3</code></li>
              <li>Footer</li>
            </ul></li>
            <li>დაემატოს Tailwind Utility Classes წერტილოვანი დიზაინისთვის.</li>
          </ol>
          <h3>📁 ჩასაბარებელი:</h3>
          <p>HTML ფაილი Tailwind საიტით <code>exams/tailwind/tailwindPart1/index.html</code>.</p>
          <p>
            <a href="https://drive.google.com/drive/folders/gldaniFront-tailwind-submissions" target="_blank">🔗 ჩასაბარებელი ლინკი (Google Drive)</a>
          </p>
        `,
      },
      {
        time: new Date(2026, 0, 9).getTime(),
        text: "ს.შ 3 ვებგვერდის ობიექტების გაფორმება",
        date: "09.01.2026",
        duration: "3 სთ",
        content: `
          <h3>📝 დავალების არსი (Tailwind CSS ეტაპი 2 - აპარატობა):</h3>
          <ol>
            <li>გაადგილდით <code>exams/tailwind/tailwindPart2/</code> ფოლდერში.</li>
            <li>მიიღოთ tailwindPart1 ფოლდერიდან HTML-ი და გამდიდროთ ის:</li>
            <li>დამატებული ფუნქციები:<ul>
              <li>Tailwind ანიმაციური კლასები (hover, focus, transition effects)</li>
              <li>რესპონსივი დიზაინი ყველა breakpoint-ისთვის</li>
              <li>მუქი რეჟიმი (dark mode) მხარდამჭერი Tailwind config</li>
              <li>ფორმა validation თეხელი Bootstrap ან Tailwind კლასებით</li>
            </ul></li>
            <li>დაემატოს მხოლოდ CSS ცვლილება (ლეიაუტი უცვლელი რჩება).</li>
          </ol>
          <h3>📁 ჩასაბარებელი:</h3>
          <p>გამდიდრებული HTML ფაილი <code>exams/tailwind/tailwindPart2/index.html</code> Tailwind უფრო დახვეწილი სტილებით.</p>
          <p>
            <a href="https://drive.google.com/drive/folders/gldaniFront-tailwind-submissions" target="_blank">🔗 ჩასაბარებელი ლინკი (Google Drive)</a>
          </p>
        `,
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
        content: `
          <h3>📝 დავალების არსი (JavaScript საფუძვლები):</h3>
          <ol>
            <li>შექმენით HTML ფაილი ენერგეტიკული ნაწილისთვის (form ელემენტებით).</li>
            <li>დეკლარირეთ ცვლადები <code>let</code> და <code>const</code> გამოყენებით.</li>
            <li>შექმენით მასივი მინიმუმ 5 პროდუქტის ობიექტით (name, price, quantity).</li>
            <li>შექმენით ფუნქციები:<ul>
              <li>Iterate მასივზე და მიიღოთ სულ ფასი</li>
              <li>გაფილტრეთ მასივი კოკრეტული ფასის დიაპაზონით</li>
              <li>დახარისხეთ მასივი ფასის მიხედვით (ascending/descending)</li>
            </ul></li>
            <li>გამოსახეთ შედეგები HTML-ში (table ან cards ფორმატში).</li>
            <li>გამოიტანეთ ღირებული ინფორმაცია <code>console.log()</code>-ის მეშვეობით დებაგინგის მიზნით.</li>
          </ol>
          <h3>📁 ჩასაბარებელი:</h3>
          <p>HTML და JavaScript ფაილი ფუნქციონირებული დავალებით.</p>
          <p>
            <a href="https://drive.google.com/drive/folders/gldaniFront-javascript-submissions" target="_blank">🔗 ჩასაბარებელი ლინკი (Google Drive)</a>
          </p>
        `,
      },
      {
        time: new Date(2026, 3, 16).getTime(),
        text: "ს.შ 2,4 ფორმები, თარიღები და ტაიმერები",
        date: "16.04.2026",
        duration: "4 სთ",
        content: `
          <h3>📝 დავალების არსი (ფორმები და დინამიკა):</h3>
          <ol>
            <li>შექმენით HTML ფორმა შემდეგი ელემენტებით:<ul>
              <li>სახელი (text input)</li>
              <li>ელ.ფოსტა (email input)</li>
              <li>დაბადების თარიღი (date input)</li>
              <li>ფასი (number input)</li>
            </ul></li>
            <li>დაემატოს Form validation JavaScript-ის საშუალებით (required, email format, date range).</li>
            <li>გამოიყენეთ <code>Date</code> ობიექტი გამოამოსახოთ:<ul>
              <li>დღევანდელი თარიღი და დრო</li>
              <li>ყოველ 1 წამში გააახლეთ დროის ჩვენება</li>
              <li>გამოთვალეთ პირის ასაკი დაბადების თარიღის მიხედვით</li>
            </ul></li>
            <li>შექმენით countdown ტაიმერი (მაგ: 5 წამი აღდგენამდე).</li>
            <li>რეალიზაციის შემდეგ ფორმის შედეგები ჩაწერეთ localStorage-ში.</li>
          </ol>
          <h3>📁 ჩასაბარებელი:</h3>
          <p>HTML ფორმა და JavaScript validation/timer logic-ით.</p>
          <p>
            <a href="https://drive.google.com/drive/folders/gldaniFront-javascript-submissions" target="_blank">🔗 ჩასაბარებელი ლინკი (Google Drive)</a>
          </p>
        `,
      },
      {
        time: new Date(2026, 3, 18).getTime(),
        text: "ს.შ 5 (Shopping List - DOM მანიპულაცია)",
        date: "18.04.2026",
        duration: "3 სთ",
        content: `
          <h3>📝 დავალების არსი (DOM მანიპულაცია):</h3>
          <ol>
            <li>შექმენით Shopping List აპლიკაცია, რომელიც:<ul>
              <li>მომხმარებელმა შეძლოს ნივხი დამატება input ის მეშვეობით</li>
              <li>თითოეულ ნივხის მთავარ ელემენტებს აკავშიროთ Delete და Edit ღილაკი</li>
              <li>ნივხი გამოიტანება საიდენტიფიკაციო list-ში</li>
            </ul></li>
            <li>Ფუნქციები:<ul>
              <li>დამატება: <code>appendChild()</code> ან <code>insertAdjacentHTML()</code></li>
              <li>წაშლა: <code>removeChild()</code> ან <code>remove()</code></li>
              <li>რედაქტირება: არსებული ელემენტის <code>innerHTML</code> ცვლილება</li>
              <li>სტატუსი: ნივხის სახელით მერკირება (completed) CSS class-ი</li>
            </ul></li>
            <li>ეს ყველაფერი უნდა ემთავსებოდეს localStorage-ში საიდაც გადმოიტვირთება გვერდის თავიდან ჩატვირთვისას.</li>
          </ol>
          <h3>📁 ჩასაბარებელი:</h3>
          <p>Shopping List აპლიკაცია HTML, CSS და JavaScript-ით.</p>
          <p>
            <a href="https://drive.google.com/drive/folders/gldaniFront-javascript-submissions" target="_blank">🔗 ჩასაბარებელი ლინკი (Google Drive)</a>
          </p>
        `,
      },
      {
        time: new Date(2026, 3, 17).getTime(),
        text: "ს.შ 6 API Fetch და CRUD (Delete)",
        date: "17.04.2026",
        duration: "2 სთ",
        content: `
          <h3>📝 დავალების არსი (Fetch API):</h3>
          <ol>
            <li>გამოიყენეთ <code>fetch()</code> API პუბლიკური JSON API-დან (მაგ: JSONPlaceholder) მონაცემების მისაღებად.</li>
            <li>ინტეგრირეთ CRUD ოპერაციები:<ul>
              <li><code>GET</code> - მონაცემების მიღება</li>
              <li><code>POST</code> - ახალი რეკორდის დამატება</li>
              <li><code>PUT</code> - არსებული რეკორდის რედაქტირება</li>
              <li><code>DELETE</code> - რეკორდის წაშლა</li>
            </ul></li>
            <li>დაემატოს error handling (<code>try/catch</code> ან <code>.catch()</code>).</li>
            <li>loading state დახმარებით (<code>spinner</code> ან <code>loading text</code>).</li>
            <li>აყვავებული ინტერფეისი ბარის/ბოთლის დაყენებით ან მსგავსი აკტიური კლემენტებით.</li>
          </ol>
          <h3>📁 ჩასაბარებელი:</h3>
          <p>JavaScript აპლიკაცია Fetch API logic-ით და CRUD ოპერაციებით.</p>
          <p>
            <a href="https://drive.google.com/drive/folders/gldaniFront-javascript-submissions" target="_blank">🔗 ჩასაბარებელი ლინკი (Google Drive)</a>
          </p>
        `,
      },
    ],
  },
};

function initializeExams(containerSelector) {
  console.log(
    "initializeExams: starting execution for selector:",
    containerSelector,
  );
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error(
      "initializeExams: target container not found for selector:",
      containerSelector,
    );
    return;
  }

  container.innerHTML = "";
  console.log("initializeExams: clearing container and generating modules...");

  Object.entries(moduleConfigs).forEach(([moduleId, config]) => {
    const moduleSection = document.createElement("section");
    moduleSection.classList.add("module-section");
    moduleSection.innerHTML = `<h2 class="sub-title">${config.name}</h2>`;

    config.exams.forEach((exam, index) => {
      const details = document.createElement("details");
      details.classList.add("closed");

      const summary = document.createElement("summary");

      const badge = document.createElement("span");
      badge.classList.add("badge", "badge-colored");
      badge.textContent = `გამოცდა ${index + 1}`;

      if (exam.time === null) {
        badge.classList.add("soon");
      }

      let timeBadge = "";
      if (exam.duration) {
        timeBadge = `<span class="badge badge-time">${exam.duration}</span>`;
      }

      summary.innerHTML = `
        ${badge.outerHTML}
        ${exam.text}
        ${timeBadge}
        ${exam.date ? `- ${exam.date}` : ""}
      `.trim();

      const content = document.createElement("div");
      content.classList.add("content");
      content.innerHTML =
        exam.content ||
        "<p>გამოცდის დავალება და დეტალები ჯერ არ არის ხელმისაწვდომი.</p>";

      details.appendChild(summary);
      details.appendChild(content);

      // Event listeners
      summary.addEventListener("click", (e) => {
        const now = Date.now();

        if (exam.time === null) {
          e.preventDefault();
          alert("გამოცდის თარიღი მალე დაემატება");
        } else if (!details.open && now < exam.time) {
          e.preventDefault();
          alert(`გამოცდა გაიხსნება ${exam.date} რიცხვში`);
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
          setTimeout(() => details.classList.remove("opening"), 300);
        } else {
          details.classList.add("closed");
          details.classList.remove("open", "opening");
          setTimeout(() => details.classList.remove("closing"), 300);
        }
      });

      moduleSection.appendChild(details);
    });

    container.appendChild(moduleSection);
  });
}

export { initializeExams, moduleConfigs };
