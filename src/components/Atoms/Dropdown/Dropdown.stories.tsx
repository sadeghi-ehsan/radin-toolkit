// Divider.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dropdown, IDropdownMenuProps } from ".";
import { Button } from "../Button";
import { IDropdownProps } from "./types";

export default {
  title: "components/Atoms/Dropdown",
  component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => {
  return (
    <Dropdown
      {...args}
      overlay={
        <Dropdown.Menu align="left">
          <Dropdown.MenuItem onClick={() => alert("Menu Item")}>Menu Item</Dropdown.MenuItem>
          <Dropdown.MenuItem>Menu Item 2</Dropdown.MenuItem>
          <Dropdown.MenuItem>Menu Item 3</Dropdown.MenuItem>
          <Dropdown.MenuItem>Menu Item 4 with long title</Dropdown.MenuItem>
        </Dropdown.Menu>
      }
    >
      <Button>Open</Button>
    </Dropdown>
  );
};

const MenuTemplate: ComponentStory<typeof Dropdown.Menu> = args => {
  return (
    <Dropdown.Menu align="left">
      <Dropdown.MenuItem>Normal</Dropdown.MenuItem>
      <Dropdown.MenuItem active>Pre Active</Dropdown.MenuItem>
      <Dropdown.MenuItem onClick={() => alert("Clicked on Menu Item")}>Onclick</Dropdown.MenuItem>
      <Dropdown.MenuItem>
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
          Anchor Link
        </a>
        <Dropdown.MenuItem disabled onClick={() => alert("should not fire!")}>
          Disabled
        </Dropdown.MenuItem>
        <Dropdown.MenuItem>Normal</Dropdown.MenuItem>

        <Dropdown.Spacer />

        <Dropdown.MenuItem>Normal</Dropdown.MenuItem>

        <Dropdown.MenuItem disabled active onClick={() => alert("should not fire!")}>
          Disabled And Active
        </Dropdown.MenuItem>
      </Dropdown.MenuItem>
    </Dropdown.Menu>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Dropdown.defaultProps,
  trigger: ["click"],
  placement: "bottomLeft"
} as IDropdownProps;

export const DropdownMenu = MenuTemplate.bind({});
DropdownMenu.args = {
  ...Dropdown.Menu.defaultProps
} as IDropdownMenuProps;
