import CMDialog from "../components/CMDialog/CMDialog";
import CMDialogDisclosure from "../components/CMDialogDisclosure/CMDialogDisclosure";
import { useDialogState } from "reakit/Dialog";

export default {
  title: "CMDialog",
  component: CMDialog,
  argTypes: { handleClick: { action: "handleClick" } },
  parameters: {
    docs: {
      description: {
        component: 'Dialog with opening modal',
      },
    },
  },
};

const Template = (args) => {
  const dialog = useDialogState();

  return (
    <>
      <CMDialogDisclosure {...args} {...dialog}></CMDialogDisclosure>
      <CMDialog {...dialog} aria-label="Welcome">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </CMDialog>
    </>
  )
}


export const Dialog = Template.bind({});
Dialog.args = {
  label:"Open dialog",
  backgroundColor: "blue",
};