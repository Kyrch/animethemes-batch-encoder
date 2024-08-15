#!/usr/bin/env node

import { Command } from 'commander';

import init from 'utils/translation';

init();

let program = new Command();

program
    .name('AnimeThemes Batch Encoder')
    .version('1.0.0')
    .description('Generate/Execute FFmpeg commands for files in acting directory')
    .option('-g, --generate', 'Generate commands and write to file')
    .option('-e, --execute', 'Execute commands from file')
    .option('-c, --custom', 'Customize some options for each seek')
    .option(
        '--file <file>',
        '1: Name of file commands are written to (default: commands.txt)\n2: Name of file commands are executed from (default: commands.txt)\n3: Name of file commands are written to (default: commands.txt)',
        'commands.txt'
    )
    .option(
        '--configfile <file>',
        'Name of config file (default: batch_encoder.ini)\nIf the file does not exist, default configuration will be written\nThe file is expected to exist in the same directory as this script',
        'batch_encoder.ini'
    )
    .option('--inputfile <file>', 'Set the input files separated by two commas')
    .option('--loglevel [debug, info, error]', 'Set logging level')
    .parse(process.argv);

const options = program.opts();

console.log(options);