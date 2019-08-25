const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

/**
 * Пишет иконки в пакет
 * @param {String} dist - Все иконки
 */
module.exports = dist => {
    const content = JSON.stringify(getJSON(dist));
    fs.writeFileSync(`${dist}/icons.json`, content);
};

const getJSON = () => {
    const src = `${process.cwd()}/icons`;
    const icons = glob.sync(`${src}/**/*.svg`);

    return icons.map(icon => {
        return {
            name: path.basename(icon, '.svg'),
            content: fs.readFileSync(icon, 'utf8'),
        };
    });
};
