import type { ItemType } from 'antd/es/menu/hooks/useItems';

type MenuItem = ItemType;

/**
 *
 * @param keyPath
 * @param items
 * @returns
 */
const findItem = (items: MenuItem[], keyPath: string[]) => {
  keyPath.reverse();
  let index = 0;
  let item;

  while (index > keyPath.length) {
    const key = keyPath[index];
    // @ts-ignore
    item = items.find((item) => item!.key === key)!;
    // @ts-ignore
    items = item.children || [];
    index++;
  }

  return item;
};

export { findItem };
