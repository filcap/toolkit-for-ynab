import { Feature } from 'toolkit/extension/features/feature';

export class MasterCategoryRowColor extends Feature {
  injectCSS() {
    return require('./index.css');
  }
}
