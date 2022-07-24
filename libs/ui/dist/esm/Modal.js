import { ChevronDown } from "@tamagui/feather-icons";
import { Sheet } from "@tamagui/sheet";
import React, { useState } from "react";
import { Button, XStack, isWeb } from "tamagui";
const SheetDemo = () => {
  const [position, setPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(isWeb ? false : true);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(XStack, {
    space: true
  }, /* @__PURE__ */ React.createElement(Button, {
    onPress: () => setOpen(true)
  }, "Open"), isWeb && /* @__PURE__ */ React.createElement(Button, {
    onPress: () => setModal((x) => !x)
  }, modal ? "Modal" : "Inline")), /* @__PURE__ */ React.createElement(Sheet, {
    modal,
    open,
    onChangeOpen: setOpen,
    snapPoints: [80, 10],
    position,
    onChangePosition: setPosition
  }, /* @__PURE__ */ React.createElement(Sheet.Overlay, null), /* @__PURE__ */ React.createElement(Sheet.Frame, {
    ai: "center",
    jc: "center"
  }, /* @__PURE__ */ React.createElement(Sheet.Handle, null), /* @__PURE__ */ React.createElement(Button, {
    size: "$6",
    circular: true,
    icon: ChevronDown,
    onPress: () => {
      setOpen(false);
    }
  }))));
};
export {
  SheetDemo
};
//# sourceMappingURL=Modal.js.map
