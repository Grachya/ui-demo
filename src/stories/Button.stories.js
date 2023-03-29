import CMButton from "../components/CMButton/CMButton";

export default {
  title: "CMButton",
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

export const Md = Template.bind({});
Md.args = {
  label:"Press me",
  size: "md",
};

export const Lg = Template.bind({});
Lg.args = {
  label:"Press me",
  size: "lg",
};

export const Sm = Template.bind({});
Sm.args = {
  label:"Press me",
  size: "sm",
};  

export const LongLabel = Template.bind({});
LongLabel.args = {
  label:"Long looong very long label",
  size: "md",
  backgroundColor: 'red',
};