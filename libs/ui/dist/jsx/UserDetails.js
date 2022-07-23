import { Button, Paragraph, YStack } from "@nx-tamagui-example/ui";
import { createParam } from "solito";
import { useLink } from "solito/link";
const { useParam } = createParam();
function UserDetails() {
  const [id] = useParam("id");
  const linkProps = useLink({ href: "/" });
  return <YStack f={1} jc="center" ai="center" space>
    <Paragraph ta="center" fow="800">{`User ID: ${id}`}</Paragraph>
    <Button {...linkProps}>Go Home</Button>
  </YStack>;
}
var UserDetails_default = UserDetails;
export {
  UserDetails,
  UserDetails_default as default
};
//# sourceMappingURL=UserDetails.js.map
