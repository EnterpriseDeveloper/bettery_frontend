(window as any).global = window;
global.Buffer = global.Buffer || require("buffer").Buffer;

import * as process from "process";
window["process"] = process;

(window as any)["__importDefault"] =
  (this && (this as any).__importDefault) ||
  // tslint:disable-next-line:only-arrow-functions
  function (mod: any): any {
    return mod && mod.__esModule ? mod : { default: mod };
  };
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
import { Buffer } from "buffer";
(window as any).Buffer = Buffer;
