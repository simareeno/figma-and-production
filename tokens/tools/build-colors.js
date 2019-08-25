const fs = require('fs-extra');
const COLORS = require('../colors.json');

module.exports = dist => {
    let result = ':root {';

    for (const key in COLORS) {
        const value = COLORS[key];
        result += addRule(`color-${key}`, value);
    }

    result += '\n}\n';
    fs.writeFileSync(`${dist}/styles.css`, result);
};

/**
 * Генерирует правило для css
 * @param {String} name - Название правила
 * @param {String} value - Значение правила
 * @returns {String} - Правило
 */
const addRule = (name, value) => {
    return `\n    --${name}: ${value};`;
};
