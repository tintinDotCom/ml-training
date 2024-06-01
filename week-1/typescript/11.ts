/**
 * Write a function that converts HTML entities to their corresponding characters.
 * @param {string} str The string to convert.
 * @return {string} The string with HTML entities converted to their corresponding characters.
 */


function Entity(str : string): string{
  return str.replace(/&lt;/g, `<`)
            .replace(/&amp;/g, `&`)
            .replace(/&gt;/g, `>`)
            .replace(/&quot;/g, `"`)
            .replace(/&apos;/g, `'`);
}

console.log('====================================');
console.log(Entity('&lt; &amp; &gt; &quot; &apos;'));
console.log('====================================');