import { Stack } from "tamagui";
function MyCard({ children, ...props }) {
  return <Stack br="$4" {...props} bc="$myColor" minHeight={10}>{children}</Stack>;
}
export {
  MyCard
};
//# sourceMappingURL=MyCard.js.map
