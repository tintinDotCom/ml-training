/**
 * Write a function that converts HTML entities to their corresponding characters.
 * @param {string} str The string to convert.
 * @return {string} The string with HTML entities converted to their corresponding characters.
 */

// ENTITY OBJECT
const entities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function convertEntity(str){
  return str.replace(/&lt;/g, `<`)
            .replace(/&amp;/g, `&`)
            .replace(/&gt;/g, `>`)
            .replace(/&quot;/g, `"`)
            .replace(/&apos;/g, `'`);
}

console.log(convertEntity("&lt; &amp; &gt; &quot; &apos;"));