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
    for (let i = 0; i < getRandomInt(5,7); i++) {
      let ch;
      if (i==0 || Math.random() > 0.4) ch = radicals[getRandomInt(0, radicals.length)];
      else ch = alphabet[getRandomInt(0,alphabet.length)];
      const span = document.createElement("span");
      span.style.transform = `scale(${getRandomInt(5,15)/10},${getRandomInt(10,13)/10})`;
      span.style.fontSize = `${getRandomInt(34,36)}px`;
      span.innerText = ch;
      initial.appendChild(span);
    }
    return initial;
  }

  const radicals = ["一","丨","丶","丿","乀","乁","乙","乚","亅","二","亠","人","亻","儿","入","八","丷","冂","冖","冫","几","凵","刂","刁","刀","力","勹","匕","匚","匸","十","卜","卩","厂","厶","又","口","囗","土","士","夂","夊","夕","大","女","子","宀","寸","小","⺌","⺍","尢","尸","屮","山","川","巛","工","己","巾","干","幺","广","廴","廾","弋","弓","彐","彑","彡","彳","心","忄","戈","戶","户","扌","支","攴","攵","文","斗","斤","方","无","旡","日","曰","月","木","朩","欠","止","歹","殳","母","比","毛","氏","气","水","氵","氺","火","灬","爪","爫","父","爻","爿","片","牙","牛","牜","⺧","犬","犭","玄","王","玉","瓜","瓦","甘","生","用","田","疋","𤴔","疒","癶","白","皮","皿","目","矛","矢","石","示","礻","禸","禾","穴","立","竹","⺮","ケ","米","糸","纟","缶","网","罒","罓","羊","⺶","⺷","羽","老","耂","而","耒","耳","聿","肉","月","臣","自","至","臼","舌","舛","舟","艮","色","艹","虍","虫","血","行","衣","衤","覀","见","角","讠","谷","豆","豕","豸","贝","赤","走","足","身","车","辛","辰","辶","邑","阝","酉","釆","里","金","钅","长","门","阜","⻏","隶","隹","雨","青","非","面","革","韦","韭","音","页","风","飞","食","饣","首","香","马","骨","高","髟","门","鬥","鬯","鬲","鬼","鱼","鸟","卤","鹿","麦","麻","黄","黍","黑","黹","黾","鼎","鼓","鼠","鼻","齐","齿","龙","龟","龠"];
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  createTable(generateFirst(radicals, alphabet));
});