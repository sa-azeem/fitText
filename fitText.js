const fitText = (s, x, y, wi, he) => {
  const getFont = (wi, he, s) => {
    const getMaxFontSize = (he) => {
      let fontSize = 1;
      let textHeight;
      do {
        textSize(fontSize);
        textHeight = textAscent() + textDescent();
        fontSize++;
      } while (textHeight < he);
      return fontSize;
    };
    const getLongestLine = (l) => {
      let longestLine = l[0];
      for (let i = 1; i < l.length; i++) {
        if (l[i].length <= longestLine.length) continue;
        longestLine = l[i];
      }
      return longestLine;
    };
    let maxFontSize = getMaxFontSize(he);
    let fontSize = maxFontSize;
    let lines = [s];
    let words = s.split(" ");
    let count = 1;
    let flag = true;
    while (flag) {
      textSize(fontSize);
      let maxLineLength = getLongestLine(lines);
      let maxLineWidth = textWidth(maxLineLength);
      if (maxLineWidth < wi) break;
      count++;
      lines = [];
      let wordsCount = words.length;
      let noOfLines = count;
      if (count > wordsCount) noOfLines = wordsCount;
      for (let j = 0; j < noOfLines; j++) {
        lines[j] = words
          .slice(
            ((wordsCount * j) / noOfLines) | 0,
            ((wordsCount * (j + 1)) / noOfLines) | 0
          )
          .join(" ");
      }
      fontSize = fontSize * 0.5;
      if (fontSize <= 1) flag = false;
    }
    return [fontSize, lines];
  };
  current_rectMode = this._renderer._rectMode;
  textAlign(CENTER, CENTER);
  const [fontSize, lines] = getFont(wi, he, s);
  push();
  textSize(fontSize);
  if (current_rectMode === "corner") translate(x + wi / 2, y + he / 2);
  else translate(x, y);
  text(lines.join("\n"), 0, 0);
  pop();
  return [fontSize,lines]
};
