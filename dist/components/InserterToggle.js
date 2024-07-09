import { createElement } from '@wordpress/element';
import { ToolbarButton } from '@wordpress/components';
import { plus as plusIcon } from '@wordpress/icons';
const InserterToggle = ({ onToggle, isOpen, toggleProps }) => {
    return (createElement(ToolbarButton, Object.assign({ isPrimary: true, isPressed: isOpen, icon: plusIcon, onClick: onToggle, label: 'Add block' }, toggleProps)));
};
export default InserterToggle;
//# sourceMappingURL=InserterToggle.js.map