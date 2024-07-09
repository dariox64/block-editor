import { createElement } from '@wordpress/element';
import { createSlotFill, Panel } from '@wordpress/components';
const { Slot, Fill } = createSlotFill('StandAloneBlockEditorSidebarInspector');
const Sidebar = () => {
    return (createElement("div", { className: "block-editor__sidebar", role: "region" },
        createElement(Panel, { header: 'Inspector' },
            createElement(Slot, { bubblesVirtually: true }))));
};
Sidebar.Fill = Fill;
export default Sidebar;
//# sourceMappingURL=Sidebar.js.map