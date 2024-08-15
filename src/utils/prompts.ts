import { prompt } from 'prompts';

import BitrateMode from 'Enums/BitrateMode';

// Time Duration Specification: https://ffmpeg.org/ffmpeg-utils.html#time-duration-syntax
const timePattern = /^([0-5]?\d:){1,2}[0-5]?\d(?=\.\d+$|$)|\d+(?=\.\d+$|$)/;

const validateTime = (input: string): boolean => {
    return input.split(',')
        .every(item => timePattern.test(item.trim()));
};

const validateEncodingModes = (input: string): boolean => {
    return input.split(',')
        .map(y => y.trim().toUpperCase())
        .every(y => [BitrateMode.VBR.name, BitrateMode.CBR.name, BitrateMode.CQ.name].includes(y));
};

const validateDigits = (input: string): boolean => {
    return input.trim()
        .split(',')
        .every(item => item.trim().length === 0 || /^\d+$/.test(item.trim()));
};

// Prompt the user for text questions
export const promptText = async (message: string, validate = (x: string): boolean => true): Promise<string> => {
    const answer = await prompt({
        type: 'text',
        name: 'name',
        message: message,
        validate: validate,
    });

    return answer.name;
};

// Prompt the user for time questions
export const promptTime = async (message: string, validate = validateTime): Promise<string> => {
    const answer = await prompt({
        type: 'text',
        name: 'time',
        message: message,
        validate: validate,
    });

    return answer.time;
};

// Prompt the user for our mode options to run to the user
export const promptMode = async (): Promise<number> => {
    const answer = await prompt({
        type: 'select',
        name: 'mode',
        message: __('choose_mode'),
        choices: [
            { title: __('modes.1'), value: 1 },
            { title: __('modes.2'), value: 2 },
            { title: __('modes.3'), value: 3 }
        ]
    });

    return answer.mode;
};

// Prompt the user for source files to choose
export const promptSourceFiles = async (sourceFiles: string[]): Promise<string[]> => {
    const answer = await prompt({
        type: 'multiselect',
        name: 'files',
        message: __('source_files'),
        choices: sourceFiles.map((file: string) => ({ title: file, value: file })),
        min: 1
    });

    console.log(answer.files);

    return answer.files;
};

// TODO
export const promptAudioFilters = async () => {};

// TODO
export const promptVideoFilters = async () => {};

// TODO
export const promptCustomOptions = async () => {};