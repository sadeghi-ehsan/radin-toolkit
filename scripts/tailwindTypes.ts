import { ucFirst, empty, isObject, isArray } from "../src";

const fs = require("fs");

const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("../tailwind.config.js");

const { theme } = resolveConfig(tailwindConfig);

const themeSectionsToParse = ["colors", "fontSize", "rotate", "animation", "width", "height"];
const customThemeSectionsToParse = ["textColors", "bgColors", "rotateClasses", "fontSizeName"];
const filename = "tailwind";
const fileExtension = ".ts";
const variablesFilePath = "src/constants/";
const typesFilePath = "src/types/";
const topFileComment = `
/* -------------------------------------------------------------------------- */
/*                    !! THIS IS AN AUTO GENERATED FILE !!                    */
/*                   DO NOT MODIFY THE CONTENT OF THIS FILE!                  */
/*                  INSTEAD RUN COMMAND 'yarn tailwind-build'                 */
/* -------------------------------------------------------------------------- */
`;

const builder = {
  variablesContent: [],
  typesContent: [
    `import {${themeSectionsToParse.join(", ")}, ${customThemeSectionsToParse.join(
      ", "
    )}} from "../constants/${filename}";`
  ],
  indent: "  ",
  newLine: "\n",

  parseSection(sectionName) {
    // Flatten all values
    const extractedValues = {};
    Object.entries(theme[sectionName]).forEach(([pcName, pValue]) => {
      if (!empty(pValue)) {
        const dupValue = pValue;

        if (isObject(dupValue)) {
          // @ts-ignore
          if (!empty(dupValue.DEFAULT)) {
            // @ts-ignore
            extractedValues[pcName] = dupValue.DEFAULT;
            // @ts-ignore
            delete dupValue.DEFAULT;
          }

          Object.entries(dupValue).forEach(([ccName, cValue]) => {
            if (!empty(cValue)) {
              extractedValues[`${pcName}-${ccName}`] = cValue;
            }
          });
        } else if (isArray(dupValue)) {
          // eslint-disable-next-line prefer-destructuring
          extractedValues[pcName] = dupValue[0];
        } else {
          extractedValues[pcName] = dupValue;
        }
      }
    });

    if (sectionName === "colors") {
      const variants = {
        colors: (colorName, colorValue) => `"${colorName}": "${colorValue}"`,
        textColors: colorName => `"${colorName}": "text-${colorName}"`,
        bgColors: colorName => `"${colorName}": "bg-${colorName}"`
      };

      Object.entries(variants).forEach(([vName, vCallback]) => {
        this.concat(vName, extractedValues, vCallback);
      });
    } else if (sectionName === "rotate") {
      this.concat(sectionName, extractedValues);
      this.concat(
        `${sectionName}Classes`,
        extractedValues,
        colorName => `"${colorName}": "${sectionName}-${colorName}"`
      );
    } else if (sectionName === "animation") {
      this.concat(sectionName, extractedValues, colorName => `"${colorName}": "animate-${colorName}"`);
    } else if (sectionName === "fontSize") {
      const variants = {
        fontSize: (fontName, fontValue) => `"${fontName}": "${fontValue}"`,
        fontSizeName: fontName => `"${fontName}": "text-${fontName}"`
      };

      Object.entries(variants).forEach(([vName, vCallback]) => {
        this.concat(vName, extractedValues, vCallback);
      });
    } else if (sectionName === "width") {
      this.concat(sectionName, extractedValues, colorName => `"${colorName}": "w-${colorName}"`);
    } else if (sectionName === "height") {
      this.concat(sectionName, extractedValues, colorName => `"${colorName}": "h-${colorName}"`);
    } else {
      this.concat(sectionName, extractedValues);
    }
  },

  concat(sectionName, extractedValues, callback = (n, v) => `"${n}": "${v}"`) {
    let variableContent = `export const ${sectionName} = {`;
    variableContent += this.newLine;
    const totalCount = Object.keys(extractedValues).length;
    let counter = 1;
    Object.entries(extractedValues).forEach(([k, v]) => {
      variableContent += this.indent;
      variableContent += callback(k, v);

      if (counter < totalCount) {
        variableContent += ",";
      }
      variableContent += this.newLine;

      counter++;
    });
    variableContent += "};";

    this.variablesContent.push(variableContent);

    // export type TailwindColors = keyof typeof colors;
    this.typesContent.push(`export type Tailwind${ucFirst(sectionName)} = keyof typeof ${sectionName};`);
  },

  mkdir(dir) {
    if (!fs.existsSync(`./${dir}`)) {
      fs.mkdirSync(`./${dir}`, { recursive: true });
    }
  },

  saveVariablesFile() {
    this.mkdir(variablesFilePath);
    fs.writeFileSync(
      variablesFilePath + filename + fileExtension,
      topFileComment + this.newLine + this.variablesContent.join(this.newLine + this.newLine)
    );
  },

  saveTypesFile() {
    this.mkdir(typesFilePath);
    fs.writeFileSync(
      typesFilePath + filename + fileExtension,
      topFileComment + this.newLine + this.typesContent.join(this.newLine + this.newLine)
    );
  },

  build() {
    themeSectionsToParse.forEach(s => this.parseSection(s));

    this.saveVariablesFile();
    this.saveTypesFile();
  }
};

builder.build();
