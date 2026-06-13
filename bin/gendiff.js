#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../src/index.js';
import fs from 'fs';
import path from 'path';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const makeAbsolutePath = (filepath) =>
      path.resolve(process.cwd(), filepath);

    const absoluteFilePath1 = makeAbsolutePath(filepath1);
    const absoluteFilePath2 = makeAbsolutePath(filepath2);
    console.log(gendiff(absoluteFilePath1, absoluteFilePath2));
  });

program.parse();

// TODO ДЛЯ АВТОКОМПЛИТА ДОБАВИТЬ В ОПИСАНИЕ
// echo "complete -A file gendiff" >> ~/.bashrc
// source ~/.bashrc
