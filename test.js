function toCamelCase(str) {
    const cleanedStr = str.replace(/[_-]/g, '');
    const words = cleanedStr.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return words.join("");
}