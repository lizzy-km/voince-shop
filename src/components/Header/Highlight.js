export const Highlight =(text, searchTerm)=> {

  const highlightedText = text
    ?.toLowerCase()
    .replace(
      new RegExp(searchTerm, "g"),
      `<span id='mth'  style="color: #bf3428; font-size:12px; font-weight:600">$&</span>`
    );

  const formattedStr = highlightedText.replace(/(^\w|\s\w)/g, function (match) {
    return match.toUpperCase();
  });

  return {formattedStr};
}
