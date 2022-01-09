import './variables.scss';
import './style.scss';

import { createApp } from 'https://unpkg.com/petite-vue?module';

createApp({
  // exposed to all expressions
  isDesktop: true,
  navDrawerOpen: false,
  categoryBarOpen: false,
  categoryDropdownOpen: false,
  offsetLeft: 0,
  navDrawerItems: [
    {
      label: 'Ponuda',
      href: 'ponuda.html',
      icon: null,
    },
    {
      label: 'O nama',
      href: 'o-nama.html',
      icon: null,
    },
    {
      label: 'Blog',
      href: 'blog.html',
      icon: null,
    },
    {
      label: 'Kontakt',
      href: 'kontakt.html',
      icon: null,
    },
  ],
  categoriesSweet: [
    {
      label: 'Kolači',
      id: 'kolaci',
    },
    {
      label: 'Torte',
      id: 'torte',
    },
    {
      label: 'Kroasani',
      id: 'kroasani',
    },
  ],
  categoriesRest: [
    {
      label: 'Sendviči',
      id: 'sendvici',
    },
    {
      label: 'Napitci',
      id: 'napitci',
    },
    {
      label: 'Cijeja ponuda',
      id: 'sve',
    },
  ],
  // getters
  get plusOne() {
    return this.count + 1;
  },
  // methods
  increment() {
    this.count++;
  },
  openNavDrawer() {
    this.navDrawerOpen = true;
    this.categoryDropdownOpen = false;
  },
  closeNavDrawer() {
    this.navDrawerOpen = false;
    this.categoryDropdownOpen = false;
  },
  toggleCategoryBar() {
    this.categoryBarOpen = !this.categoryBarOpen;
  },
  toggleCategoryDropdown() {
    this.categoryDropdownOpen = !this.categoryDropdownOpen;
  },
  calculateRowOffset() {
    const [row] = [...document.querySelectorAll('.row')];
    this.offsetLeft = `${row.getBoundingClientRect().left || 0}`;

    const grids = document.querySelectorAll('.product-grid');
    grids.forEach((grid) => {
      grid.style.paddingLeft = `calc(${this.offsetLeft}px)`;
      grid.style.paddingRight = `calc(${this.offsetLeft}px)`;
    });
  },
  runOnMount() {
    // TODO - doesnt work on first render
    window.addEventListener('load', (event) => {
      this.calculateRowOffset();
    });

    window.addEventListener('resize', this.calculateRowOffset);
  },
}).mount();
