const selectors = {
    getBlocks: (state) => state.blocks.current,
    canUndo: (state) => state.blocks.past.length > 0,
    canRedo: (state) => state.blocks.future.length > 0
};
export default selectors;
//# sourceMappingURL=selectors.js.map