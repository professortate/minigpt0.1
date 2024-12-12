import { basicInfo } from './categories/basic-info.js';
import { geography } from './categories/geography.js';
import { culture } from './categories/culture.js';
import { tourism } from './categories/tourism.js';
import { society } from './categories/society.js';
import { infrastructure } from './categories/infrastructure.js';
import { environment } from './categories/environment.js';
import { economy } from './categories/economy.js';
import { education } from './categories/education.js';
import { healthcare } from './categories/healthcare.js';
import { food } from './categories/food.js';
import { technology } from './categories/technology.js';

export const nepalKnowledge = {
  ...basicInfo,
  ...geography,
  ...culture,
  ...tourism,
  ...society,
  ...infrastructure,
  ...environment,
  ...economy,
  ...education,
  ...healthcare,
  ...food,
  ...technology
};