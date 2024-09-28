import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const headerMeta = getMetadata('header');
  const headerPath = headerMeta ? new URL(headerMeta, window.location).pathname : '/header';
  const fragment = await loadFragment(headerPath);

  // decorate header DOM
  block.textContent = '';
  const header = document.createElement('div');
  while (fragment.firstElementChild) header.append(fragment.firstElementChild);

  const button = header.querySelector('p:first-of-type a');
  button.classList.remove('button');

  block.append(header);
}
