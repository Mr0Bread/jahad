#!/usr/bin/env node
import logger from "src/logger.js";
import runCli from "src/cli.js";
import createProject from "src/project.js";
import getUserPackageManager from "src/get-user-package-manager.js";

const main = async () => {
  logger.info("Creating Project Jahad application");

  const { appDir } = await runCli();
  logger.info(`Creating project in dir ${appDir}`);

  const packageManager = getUserPackageManager();

  await createProject({
    projectName: appDir,
    packageManager
  });

  logger.success(`Project ${appDir} is successfully created`);

  logger.info(
    `
        To spin un Jahad:
        cd ${appDir}
        ${packageManager} dev
        `
  );
};

main().catch((e) => {
  logger.error("Error", e);
});
