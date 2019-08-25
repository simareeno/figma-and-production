import data from '@example/tokens/colors.json';
import hexRgb from 'hex-rgb';

const artboardName: string = 'Colors';
const padding: number = 40;
const colorSize: number = 48;
const colorRowHeight: number = 80;
const names: string[] = Object.keys(data);

export default async () => {
    await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });

    // Delete an old frame
    const currentFrame: SceneNode | null = figma.currentPage.findOne(n => {
        return n.name === artboardName;
    });
    currentFrame && !currentFrame.removed && currentFrame.remove();

    // Delete old styles
    deletePaintStyles();

    // Create a new frame
    const frame: FrameNode = figma.createFrame();
    frame.name = artboardName;
    const width: number = 350 + padding * 2;
    const height: number = names.length * colorRowHeight + padding * 2;
    frame.x = 1200;
    frame.resize(width, height);

    // Add colors
    names.forEach((name: string, i) => {
        // Create a row
        const row: FrameNode = figma.createFrame();
        row.resize(width - padding * 2, colorRowHeight);
        row.x = padding;
        row.y = i * colorRowHeight + padding;

        // Create a style
        const hexColor = data[name];
        const color = hexRgb(hexColor);
        const style: PaintStyle = figma.createPaintStyle();
        style.name = name;
        style.paints = [
            {
                type: 'SOLID',
                color: {
                    r: color.red / 255,
                    g: color.green / 255,
                    b: color.blue / 255,
                },
            },
        ];
        const styleId = style.id;

        // Draw a circle with that color
        const circle: EllipseNode = figma.createEllipse();
        circle.resize(colorSize, colorSize);
        circle.y = (colorRowHeight - colorSize) / 2;
        circle.fillStyleId = styleId;

        // Add a text
        const nameText: TextNode = figma.createText();
        nameText.characters = name;
        nameText.x = colorSize + 24;
        nameText.y = 28;
        nameText.fontSize = 18;

        const colorText: TextNode = figma.createText();
        colorText.characters = hexColor;
        colorText.x = colorSize + 24 + 150;
        colorText.y = 28;
        colorText.fontSize = 18;
        colorText.opacity = 0.5;

        row.appendChild(colorText);
        row.appendChild(nameText);
        row.appendChild(circle);
        frame.appendChild(row);
    });
};

const deletePaintStyles = () => {
    const styles: PaintStyle[] = figma.getLocalPaintStyles();
    styles.filter(item => item.type === 'PAINT').forEach(item => item.remove());
};
