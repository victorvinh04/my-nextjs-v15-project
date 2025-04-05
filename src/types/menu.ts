export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
export type MenuProps = {
  menu: Menu[];
  className?: string;
  isMobile?: boolean;
};