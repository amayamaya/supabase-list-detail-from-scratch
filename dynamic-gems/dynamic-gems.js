import { gems } from '../data.js';
import { findById } from '../utils.js';

const nameEl = document.getElementById('name');
const imageEl = document.getElementById('image');
const representsEl = document.getElementById('represents');
const gemMonthEl = document.getElementById('gemMonth');
const hardnessEl = document.getElementById('hardness');
const metPropsEl = document.getElementById('meta');

const params = new URLSearchParams(window.location.search);
// console.log(params.get('id'), gems);

const gemParam = findById(params.get('id'), gems);
// console.log(gemParam);

nameEl.textContent = gemParam.name;
imageEl.src = `../assets/${gemParam.type}.jpg`;
representsEl.textContent = gemParam.represents;
gemMonthEl.textContent = gemParam.gemMonth;
hardnessEl.textContent = gemParam.hardness;
metPropsEl.textContent = gemParam.metaphysicalProperties;

