import data from '@example/tokens/dist/icons.json';

const artboardName: string = 'Icons';
const cols: number = 12;
const padding: number = 40;
const iconSize: number = 48;
const iconPlaceholder: number = 80;

interface Icon {
    name: string;
    content: string;
}

/**
 * Syncs icons on the page
 */
export default (): void => {
    // Delete an old frame
    const curIconsFrame: SceneNode | null = figma.currentPage.findOne(
        n => n.name === artboardName
    );
    curIconsFrame && !curIconsFrame.removed && curIconsFrame.remove();

    // Create a new frame
    const frame: FrameNode = figma.createFrame();
    frame.name = artboardName;
    const rows: number = Math.ceil(data.length / cols);
    const width: number = padding * 2 + cols * iconPlaceholder;
    const height: number = padding * 2 + rows * iconPlaceholder;
    frame.resize(width, height);

    // Add icons
    data.forEach((item: Icon, i: number) => {
        const icon: ComponentNode = figma.createComponent();
        icon.name = item.name;
        icon.resize(iconSize, iconSize);

        // Paste an icon in appropriate place in the grid
        // So we have to calculate margins to borders of the frame,
        // column, row and margin inside the placeholder

        // Column
        const offsetX: number = (i % cols) * iconPlaceholder;

        // Row
        const offsetY: number = Math.floor(i / cols) * iconPlaceholder;

        // Margin inside the placeholder
        const innerPadding: number = (iconPlaceholder - iconSize) / 2;

        icon.x = padding + offsetX + innerPadding;
        icon.y = padding + offsetY + innerPadding;

        // Paste svg
        const svg: FrameNode = figma.createNodeFromSvg(item.content);
        for (const child of svg.children) {
            icon.appendChild(child);
        }
        svg.remove();

        // Add an icon to the frame
        frame.appendChild(icon);
    });
};
