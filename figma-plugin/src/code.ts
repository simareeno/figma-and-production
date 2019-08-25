import syncIcons from './sync-icons';
import syncColors from './sync-colors';

const run = async (): Promise<void> => {
    syncIcons();
    await syncColors();
    figma.closePlugin('Synced!');
};

run();
