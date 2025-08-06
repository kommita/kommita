export interface FileManager {
  writeFile: (path: string, data: string) => void;
  readFile: (path: string) => string;
  exists: (path: string) => boolean;
}
