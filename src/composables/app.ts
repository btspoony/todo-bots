export const useMenus = () =>
  useState("menus", () =>
    ref([
      {
        group: "quests",
        name: "addsub",
        label: "加减法测试题",
        icon: "el-icon-s-finance",
      },
    ])
  );

export const useMenuOpened = () => useState("sideMenuOpened", () => ref(false));
