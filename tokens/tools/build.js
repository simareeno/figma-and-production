const del = require('del');
const fs = require('fs-extra');
const buildColors = require('./build-colors');
const buildIcons = require('./build-icons');

const DIST = `${process.cwd()}/dist`;

const build = () => {
    del.sync(DIST);
    fs.mkdirpSync(DIST);
    buildColors(DIST);
    buildIcons(DIST);
};

build();
