export const isHome = (screenName: string) => {
  if (
    [
      "GroupHome",
      "ProfileHome",
      "PlanHome",
      "RunHome",
      "ActivityHome",
    ].includes(screenName)
  )
    return true;
  return false;
};
