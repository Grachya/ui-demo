import CMButton from "../components/CMButton/CMButton";

export default {
  title: "Button",
  component: CMButton,
  argTypes: { handleClick: { action: "handleClick" } },
  parameters: {
    docs: {
      description: {
        component: 'Main primary _button_ used in our project',
      },
    },
  },
};

const Template = (args) => <CMButton {...args} ></CMButton>;

export const Primary = Template.bind({});
Primary.args = {
  kind: "primary",
  label:"Press me",
  size: "md",
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: "secondary",
  label:"Press me",
  size: "md",
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  isIcon: true,
  kind: "primary",
  label:"Press me",
  size: "md",
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  isIcon: true,
  kind: "primary",
  size: "md",
};
