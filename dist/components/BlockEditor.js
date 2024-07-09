import { createElement, useRef } from '@wordpress/element';
import { BlockEditorProvider, BlockInspector, BlockList, BlockTools, Inserter, ObserveTyping, WritingFlow, BlockEditorKeyboardShortcuts, } from '@wordpress/block-editor';
import { ToolbarButton, Popover } from '@wordpress/components';
import { undo as undoIcon, redo as redoIcon } from '@wordpress/icons';
import Header from './Header';
import Sidebar from './Sidebar';
import InserterToggle from './InserterToggle';
import Notices from "./Notices";
import '@wordpress/format-library';
const BlockEditor = ({ settings, onChange, blocks, undo, redo, canUndo, canRedo }) => {
    const inputTimeout = useRef(null);
    const handleInput = (blocks) => {
        if (inputTimeout.current) {
            clearTimeout(inputTimeout.current);
        }
        inputTimeout.current = setTimeout(() => {
            onChange(blocks);
        }, 500);
    };
    const handleChange = (blocks) => {
        if (inputTimeout.current) {
            clearTimeout(inputTimeout.current);
        }
        onChange(blocks);
    };
    return (createElement("div", { className: "block-editor__editor wp-embed-responsive" },
        createElement(BlockEditorProvider, { value: blocks, onInput: handleInput, onChange: handleChange, settings: settings },
            createElement(Notices, null),
            createElement(Header.Fill, null,
                createElement(Inserter, { renderToggle: InserterToggle }),
                createElement(ToolbarButton, { icon: undoIcon, onClick: undo, disabled: !canUndo, className: 'history-button' }),
                createElement(ToolbarButton, { icon: redoIcon, onClick: redo, disabled: !canRedo, className: 'history-button' })),
            createElement(Sidebar.Fill, null,
                createElement(BlockInspector, null)),
            createElement(BlockTools, null,
                createElement(BlockEditorKeyboardShortcuts.Register, null),
                createElement("div", { className: "editor-styles-wrapper" },
                    createElement(WritingFlow, null,
                        createElement(ObserveTyping, null,
                            createElement(BlockList, null))))),
            createElement(Popover.Slot, null))));
};
export default BlockEditor;
//# sourceMappingURL=BlockEditor.js.map