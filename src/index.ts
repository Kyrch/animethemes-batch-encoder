#!/usr/bin/env node

import { Command } from 'commander';

let program = new Command();

program
    .name('AnimeThemes Batch Encoder')
    .version('1.0.0')
    .description('Generate/Execute FFmpeg commands for files in acting directory')
    .option('-g, --generate', 'Generate commands and write to file')
    .option('-e, --execute', 'Execute commands from file')
    .option('-c, --custom', 'Enable custom options')
    .parse(process.argv);