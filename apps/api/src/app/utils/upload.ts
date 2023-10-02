import {PathLike} from "node:fs";
import {mkdir, stat} from "node:fs/promises";
import path from "node:path";

const AVATAR_PATH = './apps/api/src/assets/avatars';

const currentPath = () => {
  const currentPath = path.join(__dirname);
  console.log("\x1B[31m__currentPath", currentPath);

  return currentPath;
}

// @TODO: implement separate folder for uploading files/avatars/other images
async function fileExists(filePath: PathLike) {
  try {
    await stat(filePath);
    return true;
  } catch (parentDirError) {
    return false;
  }
}

async function createUploadDirectory() {
  if (!(await fileExists(AVATAR_PATH))) {
    await mkdir(AVATAR_PATH, {recursive: true});
  }
}

export const uploadFiles = {
  createUploadDirectory,
  AVATAR_PATH,
  currentPath,
}
