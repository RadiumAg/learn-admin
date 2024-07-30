import type { ItemType, MenuItemGroupType } from 'antd/es/menu/interface';

/**
 *
 * @param keyPath
 * @param items
 * @returns
 */
const findItem = (items: ItemType[], keyPath: string[]) => {
  let index = 0;
  let item;
  keyPath = keyPath.toReversed();

  while (index < keyPath.length) {
    const key = keyPath[index];
    item = items.find((item) => item!.key === key) as MenuItemGroupType;
    items = item.children!;
    index++;
  }

  return item;
};

export { findItem };
