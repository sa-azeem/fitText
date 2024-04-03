const fitText=(s, x, y, wi, he)=>{
  original_rectMode=this._renderer._rectMode
  textAlign(CENTER,CENTER)
  const [fontSize, lines] = getFont(wi, he, s)
  push()
  textSize(fontSize);
  if(original_rectMode==='corner')translate(x+wi/2, y+he/2);
  else translate(x, y);
  text(lines.join("\n"), 0, 0);
  pop()
}
const getFont = (wi, he, s) => {
  const getMaxFontSize = (he) => {
    let fz = 1;
    let tH;
    do {
      textSize(fz);
      tH = textAscent() + textDescent();
      fz++;
    } while (tH < he);
    return fz;
  };
  const getLongestLine = (l) => {
    let lin = l[0];
    for (let i = 1; i < l.length; i++) {
      if (l[i].length <= lin.length) continue;
      lin = l[i];
    }
    return lin;
  };
  let maxFontSize = getMaxFontSize(he);
  let fz = maxFontSize;
  let lines = [s];
  let words = s.split(" ");
  let n = 1;
  let flag = true;
  while (flag) {
    textSize(fz);
    let maxLineLength = getLongestLine(lines);
    let tw = textWidth(maxLineLength);
    if (tw < wi) break;
    n++;
    lines = [];
    for (let j = 0; j < n; j++) {
      let m = words.length;
      lines[j] = words
        .slice(((m * j) / n) | 0, ((m * (j + 1)) / n) | 0)
        .join(" ");
    }
    fz = fz*.5;
    if (fz <= 1) flag = false;
  }
  return [fz, lines];
};
