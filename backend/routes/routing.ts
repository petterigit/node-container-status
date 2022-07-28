import { Routes } from "../types/enums";
import path from "path";
import { Response } from "express";

import { ROUTEFILENAMES as fileNames } from "./routeConstants";

export const sendHTML = (route: Routes, res: Response): void => {
  const cwd = process.cwd();
  const options = {
    root: path.join(cwd, "public"),
  };

  switch (route) {
    case Routes.Index:
      res.sendFile(fileNames.html.index, options);
      break;
    default:
      res.sendFile(fileNames.html.notFound, options);
      break;
  }
};
