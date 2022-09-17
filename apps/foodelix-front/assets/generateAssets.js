/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const {
  lstatSync,
  readdirSync,
  unlinkSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  renameSync,
} = require('fs');
const { join } = require('path');

const baseDir = join(__dirname, './images');
const iconsFilePath = join(__dirname, 'index.ts');

/**
 * First get all files that are not inside a folder and put them inside a folder
 */
const getFiles = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => !dirent.isDirectory())
    .map((dirent) => dirent.name);

const files = getFiles(baseDir);

files.forEach((file) => {
  const parts = file.split('.');

  if (
    ['png', 'jpg', 'jpeg', 'svg', 'webp'].indexOf(parts[parts.length - 1]) >= 0
  ) {
    const realFileName = parts[0].replace('@2x', '').replace('@3x', '');
    if (!existsSync(join(baseDir, realFileName))) {
      mkdirSync(join(baseDir, realFileName));
    }
    const oldPath = join(baseDir, file);
    const newPath = join(
      baseDir,
      realFileName,
      file
    );

    renameSync(oldPath, newPath);
  }
});
console.log(files);

// get all directories
const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent);
const dirs = getDirectories(baseDir);

try {
  unlinkSync(iconsFilePath);
} catch (err) {
  console.log('Icons.tsx does not exist');
}

// const result = readdirSync(join(__dirname, "../../../../assets/images")).map(name => join(source, name)).filter(isDirectory)
let imports = '';
let constDeclaration = 'export const assets = { ';
let typeDeclaration = 'export type AssetName = ';

// imports dynamic generation
dirs.forEach((dir, index) => {
  /**
   * 1- Get the files inside the dir
   * 2- Create a list of unique file names, taking into consideration @2x and @3x syntax
   */
  const files = readdirSync(join(baseDir, dir.name), { withFileTypes: true });

  const fileNames = files
    .map((file) => file.name.replace('@2x', '').replace('@3x', ''))
    .filter((fileName) => {
      const parts = fileName.split('.');
      return (
        ['png', 'jpg', 'jpeg', 'svg', 'webp'].indexOf(
          parts[parts.length - 1]
        ) >= 0
      );
    });
  const uniqueFileNames = new Set([...fileNames]);

  uniqueFileNames.forEach((fileName) => {
    const imageFileName = fileName.replace(/\.[^/.]+$/, '');

    imports += `import ${imageFileName.replace(/-/g, '_')} from "./images/${
      dir.name
    }/${fileName}";\n`;
    constDeclaration += `${'\n'}${imageFileName.replace(/-/g, '_')}, `;
    typeDeclaration += `${'\n'}"${imageFileName.replace(/-/g, '_')}"`;

    if (index + 1 < dirs.length) {
      typeDeclaration += '|';
    } else {
      typeDeclaration += ';';
    }
  });
});
constDeclaration += '}\n\n';
typeDeclaration += '\n\n';

writeFileSync(iconsFilePath, imports + constDeclaration + typeDeclaration);

// console.log('folders are', dirs);
