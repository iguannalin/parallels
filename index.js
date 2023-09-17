window.addEventListener("load", () => {
  const w = window.innerWidth - 100;
  const h = window.innerHeight - 200;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function createTable(first) {
    if (!first) return;
    const table = document.getElementById("grid");
    for (let _ = 0; _ < Math.floor(w/80); _++) {
      const tr = document.createElement("tr");
      for (let __ = 0; __ < Math.round(h/80); __++) {
        const td = first.cloneNode(true);
        if (_ == 0 && __ == 0) td.addEventListener("click", () => window.location.reload());
        td.addEventListener("click", (e) => e.target.style.color="black");
        td.classList = "gray";
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
  }

  function generateFirst(radicals, alphabet) {
    const initial = document.createElement("td");
    for (let i = 0; i < 6; i++) {
      let ch;
      if (Math.random() > 0.5) ch = radicals[getRandomInt(0, radicals.length)];
      else ch = alphabet[getRandomInt(0,alphabet.length)];
      const span = document.createElement("span");
      span.innerText = ch;
      initial.appendChild(span);
    }
    return initial;
  }

  fetch("https://annaylin.com/100-days/sunmoonsky/radicals.json").then((r) => r.json()).then((d) => {
    const initial = generateFirst(
      Array.from(d), 
      ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    );
    createTable(initial);
  });
});