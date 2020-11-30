"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * clone from https://github.com/matchai/waka-box
 */
function generateBarChart(percent, size) {
    const syms = '░▏▎▍▌▋▊▉█';
    const frac = Math.floor((size * 8 * percent) / 100);
    const barsFull = Math.floor(frac / 8);
    if (barsFull >= size) {
        return syms.substring(8, 9).repeat(size);
    }
    const semi = frac % 8;
    return [syms.substring(8, 9).repeat(barsFull), syms.substring(semi, semi + 1)]
        .join('')
        .padEnd(size, syms.substring(0, 1));
}
exports.default = generateBarChart;
