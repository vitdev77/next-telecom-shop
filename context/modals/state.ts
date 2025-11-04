'use client'

import {
  modals,
  openMenu,
  closeMenu,
  openCatalogMenu,
  closeCatalogMenu,
} from '.'

export const $menuIsOpen = modals
  .createStore(false)
  .on(openMenu, () => true)
  .on(closeMenu, () => false)

export const $catalogMenuIsOpen = modals
  .createStore(false)
  .on(openCatalogMenu, () => true)
  .on(closeCatalogMenu, () => false)
