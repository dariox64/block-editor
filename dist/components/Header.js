import { ToolbarButton, createSlotFill } from '@wordpress/components';
import { createElement } from '@wordpress/element';
import { cog as cogIcon } from '@wordpress/icons';
const { Slot, Fill } = createSlotFill('HeaderToolbar');
const Header = ({ toggleSidebar, sidebarOpen }) => {
    return (createElement("div", { className: "block-editor__header", role: "region" },
        createElement(Slot, { className: "block-editor__header-toolbar", bubblesVirtually: true }),
        createElement(ToolbarButton, { onClick: toggleSidebar, isPressed: sidebarOpen, icon: cogIcon, label: 'Settings' })));
};
Header.Fill = Fill;
export default Header;
//# sourceMappingURL=Header.js.map